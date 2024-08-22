import React from 'react';
import styled, {css} from "styled-components";

type PropsTableCounter = {
    counter: number;
}

const TableCounter = ({counter}: PropsTableCounter) => {
    return (
        <StyledHeader counter={counter}>{counter}</StyledHeader>
    );
};

export default TableCounter;

const StyledHeader = styled.h1<PropsTableCounter>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #43d4e8;
    width: 350px;
    height: 150px;
    margin: 0;
    border: 2px solid #43d4e8;
    border-radius: 10px;

    ${(props) => props.counter === 5 && css`
        font-size: 60px;
        color: #4AAB4FC9;
    `
    };
`

// refactor code without styled components
//
// const TableCounter = ({counter}: PropsCounter) => {
//     return (
//         <h1 className={counter >= 5 ? s.equalFive :s.styledTable}>{counter}</h1>
//     );
// };