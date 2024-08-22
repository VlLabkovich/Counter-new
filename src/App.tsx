import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import styled from "styled-components";


function App() {
  return (
    <div className="App">
        <CounterContainer>
            <Counter/>
            {/*<Counter/>*/}
        </CounterContainer>

    </div>
  );
}

export default App;

const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2d2a2a;
    gap: 50px;
`