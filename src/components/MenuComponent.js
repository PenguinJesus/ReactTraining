import React from 'react';
<<<<<<< HEAD
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent.js';
=======
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc



function RenderMenuItem({dish, onClick}){
    return(
<<<<<<< HEAD
            <Card onClick={()=>onClick(dish.id)}>
=======
            <Card >
                <Link to={`/menu/${dish.id}`}>
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc
                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
<<<<<<< HEAD
            </Card>
    );
}


const Menu =(props)=>{
    console.log('Menu is rendered')
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish = {dish} onClick={props.onClick}/>
            </div>
        )
    });


    return(
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
};
=======
                </Link>
            </Card>
    );
}
>>>>>>> aabce6485f0e39f14c1eef2f2782664d47b1d7cc


const Menu =(props)=>{
    console.log('Menu is rendered')
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish = {dish}/>
            </div>
        )
    });


    return(
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'></Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='col-12'>
                <h3>Menu</h3>
                <hr />
            </div>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
};


export default Menu;