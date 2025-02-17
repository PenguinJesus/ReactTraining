import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment =(comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});



export const postComment =(dishId, rating, author, comment) => (dispatch) => {
    const newComment ={
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials:'same-origin'
    })
    .then(response => {
        if(response.ok){
            console.log('fetchDishes: ok');
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    //if you don't hear anything from the server
    error => {
        var error = new Error(error.message);
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('Posts comments ', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    })
}


//thunk returns function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            console.log('fetchDishes: ok');
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    //if you don't hear anything from the server
    error => {
        var error = new Error(error.message);
        throw error;
    } )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok){
                console.log('fetchComments: ok');
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        //if you don't hear anything from the server
        error => {
            var error = new Error(error.message);
            throw error;
        } )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});




export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok){
                console.log('fetchPromos: ok');
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        //if you don't hear anything from the server
        error => {
            var error = new Error(error.message);
            throw error;
        } )
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});


export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if(response.ok){
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        //if you don't hear anything from the server
        error => {
            var error = new Error(error.message);
            throw error;
        } )
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () =>({
    type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});


export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});





export const postFeedback =(values) => (dispatch) => {
    console.log('values: ', values)
    const newFeedback ={
        firstname: values.firstname,
        lastname: values.lastname,
        telnum: values.telnum,
        email: values.email,
        agree: values.agree,
        contactType:values.contactType,
        message: values.message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials:'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    //if you don't hear anything from the server
    error => {
        var error = new Error(error.message);
        throw error;
    })
    .then(response => response.json() )
    .then(data => alert('Thank you for your feedback: ' + JSON.stringify(data)))
    .catch(error => {
        console.log('Posts comments ', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    })
}
