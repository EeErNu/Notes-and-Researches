<h1>How to work with Redux:</h1>

1. Create a store: **a**.reducer **b**.state

2. Reducer: **a**.state **b**.action
    
3. Subscribe

4. Dispatch

<h2>Basic example in *react* component:</h2>

```react
import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render() {

        //Step 2 : Reducer: state and action
        const reducer = (state, action) => {
            if(action.type === 'ATTACK') {
                return action.payload
            }
            if(action.type === 'GREENATTACK') {
                return action.payload
            }
            return state;
        }

        //Step 1 : Store: reducer and state
        const store = createStore(reducer, "Peace");

        //Step 3 : Subscribe
        store.subscribe(() => {
            console.log('Store is now', store.getState());
        })

        //Step 4 : Dispatch action
        store.dispatch({type: 'ATTACK', payload:'Iron Man'})
        store.dispatch({type: 'GREENATTACK', payload:'Hulk'})

        return (
            <div>test</div>
        );
    }
}

export default ReduxDemo;
```



