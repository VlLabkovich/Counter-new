import React, {useEffect, useState} from "react";
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

    const isInvalidTableCounter =
        ((onChangeMaxState < 0) || (onChangeStartState < 0))
        || onChangeStartState > onChangeMaxState
        || onChangeStartState === onChangeMaxState

    const isInvalidCounter = (onChangeStartState || onChangeMaxState) <= 0

    return (

        <div className={s.counterStyled}>

            <>
                {/*<TableCounter*/}
                {/*    counter={counter}*/}
                {/*    maxState={maxState}*/}
                {/*    onChangeStartState={onChangeStartState}*/}
                {/*    onChangeMaxState={onChangeMaxState}*/}

                {/*/>*/}
            </>

            <>
                {
                    (onChangeStartState !== startState)
                    || (onChangeMaxState !== maxState) ?
                        <p className={s.insertValue}>insert value and press 'set'</p>
                        :
                        isInvalidTableCounter ?
                            <p className={s.errorValue}>Incorrect value!</p> :
                            <p className={counter && counter === maxState ? s.maxValue : s.styledTable}>{counter}</p>
                }
            </>

            <div className={btn.styledBtn}>
                <Button
                    name="INC"
                    classname={(counter === maxState)
                    || isInvalidCounter  ? btn.btnDisabled : btn.incBtn}

                    onClick={() => setCounter(state => state + 1)}

                    disabled={(counter >= maxState)
                        || isInvalidCounter || (startState >= maxState) }
                />

                <Button
                    name="RESET"
                    classname={counter === 0 || counter === startState
                    || isInvalidCounter ? btn.btnDisabled : btn.resBtn}

                    disabled={counter === 0
                        || counter === startState
                        || isInvalidCounter }
                    onClick={() => setCounter(startState ? startState : 0)}
                />
            </div>

        </div>
    )
}

// Old code counter
//
// import React, {useEffect, useState} from "react";
// import Button from "../Button";
// import s from "../../styles/Counter.module.css"
// import btn from "../../styles/Button.module.css"
//
// type CounterProps = {
//     startState: number,
//     maxState: number,
//     onChangeStartState: number,
//     onChangeMaxState: number
// }
//
// export const Counter = (
//     {
//         startState,
//         maxState,
//         onChangeStartState,
//         onChangeMaxState
//     }: CounterProps) => {
//
//     let [counter, setCounter] = useState<number>(0);
//
//     useEffect(() => {
//         setCounter(startState);
//     }, [startState]);
//
//     const isInvalidTableCounter =
//         ((onChangeMaxState < 0) || (onChangeStartState < 0))
//         || onChangeStartState > onChangeMaxState
//         || onChangeStartState === onChangeMaxState
//
//     const isInvalidCounter = (onChangeStartState || onChangeMaxState) <= 0
//
//     return (
//
//         <div className={s.counterStyled}>
//
//             <>
//                 {/*<TableCounter*/}
//                 {/*    counter={counter}*/}
//                 {/*    maxState={maxState}*/}
//                 {/*    onChangeStartState={onChangeStartState}*/}
//                 {/*    onChangeMaxState={onChangeMaxState}*/}
//
//                 {/*/>*/}
//             </>
//
//             <>
//                 {
//                     ((onChangeMaxState === 0) && (onChangeStartState === 0)) ?
//                         <p className={s.insertValue}>insert value and press 'SET'</p>
//                         :
//                         isInvalidTableCounter ?
//                             <p className={s.errorValue}>Incorrect value!</p> :
//                             <p className={counter && counter === maxState ? s.maxValue : s.styledTable}>{counter}</p>
//                 }
//             </>
//
//
//             <div className={btn.styledBtn}>
//                 <Button
//                     name="INC"
//                     classname={(counter >= maxState)
//                     || isInvalidCounter  ? btn.btnDisabled : btn.incBtn}
//
//                     onClick={() => setCounter(state => state + 1)}
//
//                     disabled={(counter >= maxState)
//                         || isInvalidCounter || (startState >= maxState) }
//                 />
//
//                 <Button
//                     name="RESET"
//                     classname={counter === 0 || counter === startState
//                     || isInvalidCounter ? btn.btnDisabled : btn.resBtn}
//
//                     disabled={counter === 0
//                         || counter === startState
//                         || isInvalidCounter }
//                     onClick={() => setCounter(startState ? startState : 0)}
//                 />
//             </div>
//
//         </div>
//     )
// }