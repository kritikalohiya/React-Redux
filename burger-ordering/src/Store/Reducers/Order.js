import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../../Stored/Utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

//ADVANCED WAY
const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);
        default:
            return state;
    }
};

//EASY WAY
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.PURCHASE_INIT:
//             return{
//                 ...state,
//                 purchased: false
//             };
//         case actionTypes.PURCHASE_BURGER_START:
//             return{
//                 ...state,
//                 loading: true
//             };
//         case actionTypes.PURCHASE_BURGER_SUCCESS:
//             const newOrder = {
//                 ...action.orderData,
//                 id: action.orderId
//             }
//             return{
//                 ...state,
//                 orders: state.orders.concat(newOrder),
//                 loading: false,
//                 purchased: true
//             };
//         case actionTypes.PURCHASE_BURGER_FAIL:
//             return{
//                 ...state,
//                 loading: false 
//                 //set to F cz we olredy handled the errors usin withErrorHandler in ContactData.js
//             };

//         case actionTypes.FETCH_ORDERS_START:
//             return{
//                 ...state,
//                 loading: true
//             };
//         case actionTypes.FETCH_ORDERS_SUCCESS:
//             return{
//                 ...state,
//                 orders: action.orders,
//                 loading: false
//             };
//         case actionTypes.FETCH_ORDERS_FAIL:
//             return{
//                 ...state,
//                 loading: false
//             };
//         default:
//             return state;
//     }
// };

export default reducer;