import React from 'react';
<<<<<<< HEAD
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




=======
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc
    function RenderDish({dish}){
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }



<<<<<<< HEAD
    function RenderComments({dish}){
        if(dish['comments'] != null){
=======
    function RenderComments({comments}){
        console.log('comments: ', comments)
        if(comments != null){
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-group list-unstyled'>
                        {comments.map((comments) =>{
                            return(
                                <div>
                                    <li>
                                        {comments.comment}
                                    </li>
                                    <li>
<<<<<<< HEAD
                                        -- {comments['author']}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'numeric'}).format(new Date(Date.parse(comments['date'])))}
=======
                                        -- {comments.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'numeric'}).format(new Date(Date.parse(comments['date'])))}
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            );
        } else{
            return(
                <div>

                </div>
            );
        }
        
    }




const DishDetail=(props)=> {
    const dish = props.dish;
    console.log('component render did invoked')
    if(dish != null){
        return(
            <div className='container'>
<<<<<<< HEAD
                <div className='row'>
                    {console.log(dish)}
                    <RenderDish dish={dish} />
                    <RenderComments dish={dish} />
=======
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='row'>
                    {console.log('dish: ',dish)}
                    <RenderDish dish={dish} />
                    <RenderComments comments={props.comments} />
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc
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