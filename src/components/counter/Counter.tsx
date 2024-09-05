import React, {useEffect, useState} from "react";
import TableCounter from "./TableCounter";
import Button from "../Button";
import s from "../../styles/Counter.module.css"
import btn from "../../styles/Button.module.css"

type CounterProps = {
    startState: number,
    maxState: number,
    onChangeStartState: number,
    onChangeMaxState: number
}

export const Counter = (
    {
        startState,
        maxState,
        onChangeStartState,
        onChangeMaxState
    }: CounterProps) => {

    let [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        setCounter(startState);
    }, [startState]);

    return (

        <div className={s.counterStyled}>

            <TableCounter
                counter={counter}
                maxState={maxState}
                onChangeStartState={onChangeStartState}
                onChangeMaxState={onChangeMaxState}

            />

            <div className={btn.styledBtn}>
                <Button
                    name="INC"
                    classname={counter >= maxState ? btn.btnDisabled : btn.incBtn}
                    onClick={() => setCounter(state => state + 1)}
                    disabled={counter >= maxState}
                />

                <Button
                    name="RESET"
                    classname={counter === 0 ? btn.btnDisabled : btn.resBtn}
                    disabled={(counter === 0) || (counter === startState)}
                    onClick={() => setCounter(startState ? startState : 0)}
                />
            </div>

        </div>
    )
}