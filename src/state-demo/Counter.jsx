import { useState } from 'react';

export function Counter() {

    // const arr = useState();
    // const counter = arr[0];
    // const setCouter = arr[1];
    const intialState = {
        counter: 0,
        text: undefined
    }

    const [state, setState] = useState(intialState);

    // const [couter, setCounter] = useState(0);
    // const [text, setText] = useState();

    const handleClick = () => {

        // const newState = {state};
        // newState.counter = state.counter + 1
        setState({...state, counter: state.counter + 1});
    }

    return (
        <div>
            <button onClick={() => handleClick()} >Click Me!</button>
            <p>You clicked me {state.counter} times</p>
            <input type='text' value={state.text}
                onChange={({
                    target: {
                        value
                    } = {}
                }) => setState({...state, text: value})} />
            <p>You typed {state.text}</p>
        </div>
    )
}






