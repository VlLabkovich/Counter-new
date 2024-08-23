import React, {useState} from "react";
import TableCounter from "./TableCounter";
import Button from "./Button";
import s from "../styles/Counter.module.css"

export const Counter = () => {

    let [counter, setCounter] = useState(0)

    return (

        <div className={s.contentStyled}>
            <div className={s.counterStyled}>
                <TableCounter counter={counter}/>
                <div className={s.styledBtn}>
                    <Button
                        name="INC"
                        classname={ counter >= 5 ? s.btnDisabled : s.incBtn}
                        onClick={() => setCounter(state => state + 1)}
                        disabled={counter >= 5}
                    />

                    <Button
                        name="RESET"
                        classname={ counter === 0 ? s.btnDisabled : s.resBtn}
                        disabled={counter === 0}
                        onClick={() => setCounter(0)}
                    />
                </div>

            </div>
        </div>
    )
}