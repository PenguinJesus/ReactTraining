import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



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



    function RenderComments({comments}){
        console.log('comments: ', comments)
        if(comments != null){
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
                                        -- {comments.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'numeric'}).format(new Date(Date.parse(comments['date'])))}
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