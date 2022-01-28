import React, { useState } from 'react';

interface Props {
    lesson?: string;
}

// 初期化処理
const initialState: number = 0;

export const UseStatePrevState: React.FC<Props> = ({ lesson }) => {
    console.log('this page is  UseStatePrevState.tsx');

    // useState宣言
    const [buttonCount, setButtonCount] = useState<number>(initialState);
    // const [buttonCount, setButtonCount] = useState(0);   // これでもOK！

    const increment = (): void => {
        setButtonCount((prevState) => prevState + 1);
    };
    const decrement = (): void => {
        setButtonCount((prevState) => prevState + 1);
    };
    const reset = (): void => {
        setButtonCount(initialState);
    };

    return (
        <>
            <hr />
            <div>
                <h1>{lesson}</h1>
                <h1>Count: {buttonCount}</h1>
                <button type="button" onClick={increment}>
                    +1
                </button>
                <button type="button" onClick={decrement}>
                    -1
                </button>
                <button type="button" onClick={reset}>
                    reset
                </button>
            </div>
        </>
    );
};

UseStatePrevState.defaultProps = {
    lesson: 'default',
};
