import react, { useReducer } from "react";

export default function Example2() {
    
    const initialState = { name: 'Jett', age: 19 };

    function reducer(state, action) {
        switch (action.type) {
            case 'incremented_age': {
                return {
                    name: state.name,
                    age: state.age + 1
                };
            }
            case 'changed_name': {
                return {
                    name: action.nextName,
                    age: state.age
                };
            }
            case 'reset': {
                return {
                    name: initialState.name,
                    age: initialState.age
                };
            }
        }
        throw Error('Unknown action: ' + action.type);
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleIncButtonClick() {
        dispatch({ type: 'incremented_age' });
    }

    function handleResetButtonClick(){
        dispatch({ type: 'reset'})
    }

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        }); 
    }

    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <button onClick={handleIncButtonClick}>
                Increment age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
            <button onClick={handleResetButtonClick}>
                Reset
            </button>
        </>
    )
    }