import React, { useState, useRef, useEffect } from 'react';

interface Props {
    lesson?: string;
}

// 初期化処理
const initialState: number = 0;

export const UseStateRef: React.FC<Props> = ({ lesson }) => {
    console.log('this page is  UseStateRef.tsx');

    // useState useRef宣言
    const [buttonCount, setButtonCount] = useState<number>(initialState);
    const prevButtonCount = useRef<number>(initialState);

    const increment = (): void => {
        setButtonCount(prevButtonCount.current + 1);
        // setButtonCount(buttonCount + 1);
    };
    const decrement = (): void => {
        setButtonCount(prevButtonCount.current - 1);
    };
    const reset = (): void => {
        setButtonCount(initialState);
    };

    // useEffectはレンダリング完了後に実行される
    // ここではbuttonCountが更新される前の値をuseRefで表示している
    useEffect((): void => {
        prevButtonCount.current = buttonCount;
    });

    return (
        <>
            <hr />
            <div>
                <h1>{lesson}</h1>
                <h1>Now Count: {buttonCount}</h1>
                <h1>(Before): {prevButtonCount.current}</h1>
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

UseStateRef.defaultProps = {
    lesson: 'default',
};
