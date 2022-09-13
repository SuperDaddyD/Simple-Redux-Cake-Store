const redux = require('redux');


const createStore = redux.legacy_createStore;




const CAKE_ORDERED = "CAKES_ORDERED";
const CAKE_RETURNED = "CAKES_RETURNED";


const orderCake = ()=>{
    return {type:CAKE_ORDERED}
}
const returnCake = ()=>{
    return {type:CAKE_RETURNED}
}

const INITITAL_STATE ={
    numOfCakes:10
}

const cakeReducer = (state=INITITAL_STATE,action)=>{
   switch(action.type){
    case CAKE_ORDERED:
        return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
    case CAKE_RETURNED:
        return{
        ...state,
        numOfCakes: state.numOfCakes + 1
        }  

        default:
            return state;
   }
}

const store = createStore(cakeReducer);

console.log('Initial State',store.getState())

const unsubScribe = store.subscribe(()=> console.log('Update state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(returnCake())
store.dispatch(returnCake())
store.dispatch(returnCake())
store.dispatch(orderCake())

