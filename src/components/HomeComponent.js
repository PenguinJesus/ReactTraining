import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}){
    if (isLoading) {
        return(
            <Loading />
        );
    } else if (errMess){
        return (
        <h4>{errMess}</h4>
        );
    }
    console.log('item: ', item)
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>
                    {item.name}
                </CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>  : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home (props){
    console.log('props: ', props.dish)
    return(
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading}
                    errMess={props.dishesErrMess}
                    />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotions} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leaders} />
                </div>
            </div>
        </div>
    );
}

export default Home;