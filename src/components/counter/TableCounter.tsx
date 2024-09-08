import React from 'react';
import s from "../../styles/Counter.module.css"

type PropsTableCounter = {
    counter: number,
    maxState: number,
    onChangeStartState: number,
    onChangeMaxState: number
}

export const TableCounter = React.memo((
    {
        counter,
        maxState,
        onChangeStartState,
        onChangeMaxState
    }: PropsTableCounter) => {

    const isInvalidTableCounter =
        ((onChangeMaxState < 0) || (onChangeStartState < 0))
        || onChangeStartState > onChangeMaxState
        || onChangeStartState === onChangeMaxState

    return (
        <>
            {
                ((onChangeMaxState === 0) && (onChangeStartState === 0)) ?
                    <p className={s.insertValue}>insert value and press 'SET'</p>
                    :
                    isInvalidTableCounter ?
                        <p className={s.errorValue}>Incorrect value!</p> :
                        <p className={counter && counter === maxState ? s.maxValue : s.styledTable}>{counter}</p>
            }
        </>


    )
}
)

// TableCounter_Backup
//
// import React from 'react';
// import s from "../../styles/Counter.module.css"
//
// type PropsTableCounter = {
//     counter: number,
//     maxState: number,
//     onChangeStartState: number,
//     onChangeMaxState: number
// }
//
// const TableCounter = React.memo((
//         {
//             counter,
//             maxState,
//             onChangeStartState,
//             onChangeMaxState
//         }: PropsTableCounter) => {
//
//         const isInvalidTableCounter =
//             ((onChangeMaxState < 0) || (onChangeStartState < 0))
//             || onChangeStartState > onChangeMaxState
//             || onChangeStartState === onChangeMaxState
//
//         return (
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
//         )
//     }
// )
//
// export default TableCounter;