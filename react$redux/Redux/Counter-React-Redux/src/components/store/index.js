import {createStore} from 'redux'
const INTIAL_VAL={
    counter:0
}
const reducer=(store=INTIAL_VAL,action)=>{
    let newStore=store
    if(action.type=="INCREMENT"){
        newStore={counter:store.counter+1}
    }else if(action.type=="DECREMENT"){
     newStore={counter:store.counter-1}
    }

return newStore

}
const CounterStore=createStore(reducer)
export default CounterStore;