//Reducer function is a pure function that takes in the previous state and an action and returns the next state
//They specify how the app's state changes in response to actions sent to the store
//Actions ---- only describe what happened, but don't describe how the application's state changes


import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';


export const initialState ={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer =(state = initialState, action)=> {
    return state;
};