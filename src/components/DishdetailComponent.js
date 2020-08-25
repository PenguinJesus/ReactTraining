import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props);
    }



    renderComments(dish){
        if(dish['comments'] != null){
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className='list-group list-unstyled'>
                        {dish['comments'].map((comments) =>{
                            return(
                                <div>
                                    <li>
                                        {comments['comment']}
                                    </li>
                                    <li>
                                        -- {comments['author']}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', date:'2-digit'}.format(new Date(Date.parse(comments['date']))))}
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




    render(){
        const dish = this.props.dish;
        return(
            <div className='row'>
                {console.log(dish)}
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(dish)}
                </div>
            </div>
        );
    }
};


export default DishDetail;