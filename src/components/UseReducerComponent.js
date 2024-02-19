import React, { useReducer } from 'react';

//reducer로 동작할 메소드
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { value1: state.value1 + 1, value2: state.value2 + 2 };
        case 'decrement':
            return { value1: state.value1 - 1, value2: state.value2 - 2 };
        default:
            return state;
    }
}

const UseReducerComponent = () => {
    // useReducer로 상태 변수를 만들어 주는데 reducer 함수를 지정해서
    // 상황에 따라 상태변수의 값을 변경할 수 있다.
    const [state, dispatch] = useReducer(reducer, { value1: 0, value2: 0 });

    return (
        <div>
            <p>{state.value1}</p>
            <p>{state.value2}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
};

export default UseReducerComponent;
