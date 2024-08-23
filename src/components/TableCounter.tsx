import React from 'react';
import s from "../styles/Counter.module.css"

type PropsTableCounter = {
    counter: number;
}

const TableCounter = ({counter}: PropsTableCounter) => {
    return (
        <h1 className={ counter >= 5 ? s.equalFive : s.styledTable}>{counter}</h1>
    );
};

export default TableCounter;