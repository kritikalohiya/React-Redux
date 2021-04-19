import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../../Stored/Utility';
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true  //It set to F when we 1st build the burger den SIGN UP/IN so after tht we route to /chechout page , nt on / page. 
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true      
    }
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false   //Here it set to F cz if we r setting ingredients tht mns we didnt set it till now ,so from /auth page we route to / page.
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
};

//EASY WAY
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.ADD_INGREDIENT:
//             return {
//                 ...state,
//                 //'...state' is not enough cz it doesn't go into objs. & create new objs. fr these two below. It simply jst copies the surrounding obj. bt ingredients w/c also an obj. on its own would still pt. to tht old obj..
//                 ingredients: {
//                     ...state.ingredients,
//                     [action.ingredientName]: state.ingredients[action.ingredientName] + 1
//                 },
//                 totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
//             };
//         case actionTypes.REMOVE_INGREDIENT:
//             return {
//                 ...state,
//                 ingredients: {
//                     ...state.ingredients,
//                     [action.ingredientName]: state.ingredients[action.ingredientName] - 1
//                 },
//                 totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
//             };
//         case actionTypes.SET_INGREDIENTS:
//             return {
//                 ...state,
//                 // ingredients: action.ingredients,
//                 //OR   Below will set it accordingly in series.
//                 ingredients: {
//                     salad: action.ingredients.salad,
//                     bacon: action.ingredients.bacon,
//                     cheese: action.ingredients.cheese,
//                     meat: action.ingredients.meat
//                 },
//                 totalPrice: 4, //when order is placed den after redirect to "/" page ,the price will set to 4.

//                 //we set error :F cz if koi phle error aayi hogi to ye error ko dubara F krdega.
//                 error: false
//             };
//         case actionTypes.FETCH_INGREDIENTS_FAILED:
//             return {
//                 ...state,
//                 error: true
//             };
//         default:
//             return state;
//     }
// };

export default reducer;