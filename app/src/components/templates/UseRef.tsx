import React, { useRef, useState } from 'react';

interface Props {
    lesson?: string;
}

// 初期化処理
const initialState: number = 0;

export const UseRef: React.FC<Props> = ({ lesson }) => {
    console.log('this page is  UseState.tsx');

    // useRef宣言
    const buttonCount = useRef<number>(initialState);
    const [state, setState] = useState(true);

    const increment = (): void => {
        buttonCount.current += 1;
    };
    const decrement = (): void => {
        buttonCount.current -= 1;
    };
    const reset = (): void => {
        buttonCount.current = initialState;
    };

    // 強制レンダリング
    const changeState = (): void => {
        setState(!state);
    };

    return (
        <>
            <hr />
            <div>
                <h1>{lesson}</h1>
                <h1>Count: {buttonCount.current}</h1>
                <button type="button" onClick={increment}>
                    +1
                </button>
                <button type="button" onClick={decrement}>
                    -1
                </button>
                <button type="button" onClick={reset}>
                    reset
                </button>
                <h1>useRef だけではレンダリングされないと値が更新されない。</h1>
                <h3>
                    確認用（強制レンダリング）→
                    <button type="button" onClick={changeState}>
                        Rendering
                    </button>
                </h3>
            </div>
        </>
    );
};

UseRef.defaultProps = {
    lesson: 'default',
};
