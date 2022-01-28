import React, { useReducer } from 'react';

interface Props {
    lesson?: string;
}

interface StateType {
    count: number;
}

type ActionType = {
    type: 'increment' | 'decrement' | 'reset';
};

const initialState: StateType = { count: 0 };

const reducer = (state: StateType, action: ActionType): StateType | never => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
};

export const UseReducer: React.FC<Props> = ({ lesson }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <hr />
            <h1>{lesson}</h1>
            <h1>Count: {state.count}</h1>
            <button
                type="button"
                onClick={() => dispatch({ type: 'increment' })}
            >
                +1
            </button>
            <button
                type="button"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                -1
            </button>
            <button type="button" onClick={() => dispatch({ type: 'reset' })}>
                reset
            </button>
        </>
    );
};

UseReducer.defaultProps = {
    lesson: 'default',
};
