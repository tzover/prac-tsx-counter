import * as React from 'react';
import { UseState } from './components/templates/UseState';
import { UseStatePrevState } from './components/templates/UseStatePrevState';
import { UseStateRef } from './components/templates/UseStateRef';
import { UseRef } from './components/templates/UseRef';
import './styles/App.css';
import { UseReducer } from './components/templates/UseReducer';

const App: React.FC = () => {
    const lesson: string = 'This practice is useState of ReactHooks';

    return (
        <div className="App">
            <h1>Start tsx Project !!!</h1>
            <UseState lesson={lesson} />
            <UseStatePrevState lesson={`${lesson} with prevState`} />
            <UseStateRef lesson={`${lesson} and useEffect, useRef`} />
            <UseRef lesson="this practice is useRef" />
            <UseReducer lesson="this practice is useReducer" />
        </div>
    );
};

export default App;
