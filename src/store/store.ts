export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: any };
    private state: { [key: string]: any }

    constructor(reducers: {}, initialState: {}) {
        this.reducers = reducers;
        this.state = initialState;
    }

    get value() {
        return this.state;
    }

    dispatch(action) { 
        console.log("************** Action Dispatched *************** : state(currentState) : ",this.state)
        this.state = this.reduce(this.state, action);
   
        /* this.state = {
               ...this.state,
               todos: [...this.state.todos, action.payload]
           }
           console.log(this.state) */
    }

    private reduce(state, action) {
        const newState = {};

        for(const prop in this.reducers){
        console.log("prop(key of reducer) : ", prop)
        newState[prop] = this.reducers[prop](state[prop], action)
        }

        return newState;
    }

}
