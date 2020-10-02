import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


    function RenderDish({dish}){
        return (
            <div className='col-12 col-md-5 m-1'>
                <FadeTransform in transformProps={{exitTransform: ' scale(0.5) translateY(-50%)'}}>
                    <Card>
                        <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    }



    function RenderComments({comments, postComment, dishId}){
        console.log('comments: ', comments)
        if(comments != null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-group list-unstyled mb-3'>
                        <Stagger in >
                            {comments.map((comments) =>{
                                return(
                                    <Fade in>
                                    <div>
                                        <li>
                                            {comments.comment}
                                        </li>
                                        <li>
                                            -- {comments.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'numeric'}).format(new Date(Date.parse(comments['date'])))}
                                        </li>
                                    </div>
                                    </Fade>
                                )
                            })}
                        </Stagger>
                    </ul>
                    <CommentForm postComment={postComment} dishId={dishId}/>
                </div>
            );
        } else{
            return(
                <div>

                </div>
            );
        }
        
    }





const commentMinLength = (len) => (values) => (values) && (values.length >= len);
const commentMaxLength = (len) => (val) => !(val) || (val.length <= len);


class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            commentModalToggle: false
        }
        this.commentModal = this.commentModal.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
        
    }


    commentModal(commentModalToggle) {
        this.setState({
            commentModalToggle: !commentModalToggle
        })
    }

    commentSubmit(values){
        this.commentModal(this.state.commentModalToggle);
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
    }


    render(){
        return(
            <div>
                <Button outline color='secondary' onClick={()=>this.commentModal(this.state.commentModalToggle)} ><span className='fa fa-pencil'></span> Submit comment</Button>

                <Modal isOpen={this.state.commentModalToggle} toggle={this.commentModal}>
                    <ModalHeader  toggle={this.commentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className='container'>
                            <LocalForm onSubmit={(values)=>this.commentSubmit(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor='rating'>Rating</Label>
                                    <Control.select model='.rating' className='form-control' id='rating' name='rating'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='author'>Your Name</Label>
                                    <Control.text model='.author' className='form-control' id='author' name='author' validators={{commentMinLength:commentMinLength(3), commentMaxLength: commentMaxLength(15)}}/>
                                    <Errors className='text-danger' model='.author' show='touched' messages={{commentMinLength:'Must be greater than 3 characters.', commentMaxLength:'Must be less than or equal to 15 characters'}} />
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='comment'>Comment</Label>
                                    <Control.textarea model='.comment' id='comment' name='comment' rows='12' className='form-control'/>
                                </Row>
                                <Row>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
            );
    }

}







const DishDetail=(props)=> {
    const dish = props.dish;
    console.log('component render did invoked')
    if (props.isLoading){
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    if(dish != null){
        return(
            <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='row'>
                    {console.log('dish: ',dish)}
                    <RenderDish dish={dish} />
                    <RenderComments comments={props.comments} postComment = {props.postComment} dishId={props.dish.id}/>
                </div>
            </div>
        );
    } else {
        return(
            <div>

            </div>
        );
    }
    
}



export default DishDetail;