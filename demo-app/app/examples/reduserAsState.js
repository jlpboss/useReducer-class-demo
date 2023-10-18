import react, { useReducer } from "react";

export default function Example1() {
    
    // in example 1 i use the useReduser to mimic useState
    // this is to explain that it works alot like useState however you can wright your own functions 

    function reducerState(state, action) {
        switch (action.type) {
            case 'Update_State': {
                return {state: action.newState};
            }
        }
        throw Error('Unknown action: ' + action.type);
    }
    
    function handleInputChange(e) {
        dispatch({
            type: 'Update_State',
            newState: e.target.value
        }); 
    }

    const [state, dispatch] = useReducer(reducerState, {state: "test"});
    
    return (
        <>
        <input
            value={state.state}
            onChange={handleInputChange}
        />
        <p>State is {state.state}.</p>
    </>
    )
    }