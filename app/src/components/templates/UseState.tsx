import React, { useState } from 'react';

interface Props {
    lesson?: string;
}

// 初期化処理
const initialState: number = 0;

export const UseState: React.FC<Props> = ({ lesson }) => {
    console.log('this page is  UseState.tsx');

    // useState宣言
    const [buttonCount, setButtonCount] = useState<number>(initialState);
    // const [buttonCount, setButtonCount] = useState(0);   // これでもOK！

    return (
        <>
            <hr />
            <div>
                <h1>{lesson}</h1>
                <h1>Count: {buttonCount}</h1>
                <button
                    type="button"
                    onClick={() => {
                        setButtonCount(buttonCount + 1);
                    }}
                >
                    +1
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setButtonCount(buttonCount - 1);
                    }}
                >
                    -1
                </button>
                <button
                    type="button"
                    onClick={() => setButtonCount(initialState)}
                >
                    reset
                </button>
            </div>
        </>
    );
};

UseState.defaultProps = {
    lesson: 'default',
};
