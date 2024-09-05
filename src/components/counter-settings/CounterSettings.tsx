import React, {ChangeEvent, useState} from 'react';
import s from "../../styles/Counter.module.css";
import btn from "../../styles/Button.module.css";
import Button from "../Button";
import {Counter} from "../counter/Counter";
import {Input} from "../Input";

export const CounterSettings = () => {
    // const [startState, setStartState] = useState<number>(0);
    // const [maxState, setMaxState] = useState<number>(0);
    // Состояние для передачи настроек в Counter
    // const [appliedStartState, setAppliedStartState] = useState<number>(0);
    // const [appliedMaxState, setAppliedMaxState] = useState<number>(0);

    const [onChangeState, setOnChangeState] = useState({
        startState: 0,
        maxState: 0,
    });

    // console.log(onChangeState.startState)

    const [onClickState, setOnClickState] = useState({
        appliedStartState: 0,
        appliedMaxState: 0,
    });

    // console.log(onClickState.appliedMaxState)
    let onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {

        const value = Number(event.currentTarget.value);
        setOnChangeState((prevState) => ({
            ...prevState,
            startState: value,
        }));
    }

    let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        setOnChangeState((prevState) => ({
            ...prevState,
            maxState: value,
        }));
    };

    let onClickValueState = () => {

        const valueStartState = onChangeState.startState;
        const valueMaxState = onChangeState.maxState;

        setOnClickState((prevState) => ({...prevState, appliedStartState: valueStartState}));
        setOnClickState((prevState) => ({...prevState, appliedMaxState: valueMaxState}))
    };

    const isInvalidCounterSettings = ((onChangeState.startState < 0) || (onChangeState.maxState < 0))
        || onChangeState.startState > onChangeState.maxState
        || onChangeState.startState === onChangeState.maxState

    return (
        <>
            <div className={s.counterStyled}>
                <div className={s.styledTableValue}>
                    <div className={s.styledValue}>
                        <label>max value:</label>
                        <Input
                            type="number"
                            onChange={onChangeMaxValue}
                            value={onChangeState.maxState}
                            className={isInvalidCounterSettings ? s.invalidValue : ''}
                        />
                    </div>

                    <div className={s.styledValue}>
                        <label>start value:</label>
                        <Input
                            type="number"
                            onChange={onChangeStartValue}
                            value={onChangeState.startState}
                            className={isInvalidCounterSettings ? s.invalidValue : ''}
                        />
                    </div>
                </div>

                <div className={btn.styledBtn}>
                    <Button
                        name="SET"
                        classname={ isInvalidCounterSettings ? btn.btnDisabled : btn.incBtn }
                        onClick={onClickValueState}
                        disabled={ isInvalidCounterSettings }
                    />
                </div>
            </div>
            <Counter startState={onClickState.appliedStartState}
                     maxState={onClickState.appliedMaxState}
                     onChangeStartState={onChangeState.startState}
                     onChangeMaxState={onChangeState.maxState}
            />
        </>
    );
};

export default CounterSettings;

// CounterSettings_Backup
//
// import React, {ChangeEvent, useState} from 'react';
// import s from "../../styles/Counter.module.css";
// import btn from "../../styles/Button.module.css";
// import Button from "../Button";
// import {Counter} from "../counter/Counter";
// import {Input} from "../Input";
//
// export const CounterSettings = () => {
//     // const [startState, setStartState] = useState<number>(0);
//     // const [maxState, setMaxState] = useState<number>(0);
//     // Состояние для передачи настроек в Counter
//     // const [appliedStartState, setAppliedStartState] = useState<number>(0);
//     // const [appliedMaxState, setAppliedMaxState] = useState<number>(0);
//
//     const [onChangeState, setOnChangeState] = useState({
//         startState: 0,
//         maxState: 0,
//     });
//
//     // console.log(onChangeState.startState)
//
//     const [onClickState, setOnClickState] = useState({
//         appliedStartState: 0,
//         appliedMaxState: 0,
//     });
//
//     // console.log(onClickState.appliedMaxState)
//     let onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
//
//         const value = Number(event.currentTarget.value);
//         setOnChangeState((prevState) => ({
//             ...prevState,
//             startState: value,
//         }));
//     }
//
//     let onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
//         const value = Number(event.currentTarget.value);
//         setOnChangeState((prevState) => ({
//             ...prevState,
//             maxState: value,
//         }));
//     };
//
//     let onClickValueState = () => {
//
//         const valueStartState = onChangeState.startState;
//         const valueMaxState = onChangeState.maxState;
//
//         setOnClickState((prevState) => ({...prevState, appliedStartState: valueStartState}));
//         setOnClickState((prevState) => ({...prevState, appliedMaxState: valueMaxState}))
//     };
//
//     const isInvalidCounterSettings = ((onChangeState.startState < 0) || (onChangeState.maxState < 0))
//         || onChangeState.startState > onChangeState.maxState
//         || onChangeState.startState === onChangeState.maxState
//
//     return (
//         <>
//             <div className={s.counterStyled}>
//                 <div className={s.styledTableValue}>
//                     <div className={s.styledValue}>
//                         <label>max value:</label>
//                         <Input
//                             type="number"
//                             onChange={onChangeMaxValue}
//                             value={onChangeState.maxState}
//                             className={isInvalidCounterSettings ? s.invalidValue : ''}
//                         />
//                     </div>
//
//                     <div className={s.styledValue}>
//                         <label>start value:</label>
//                         <Input
//                             type="number"
//                             onChange={onChangeStartValue}
//                             value={onChangeState.startState}
//                             className={isInvalidCounterSettings ? s.invalidValue : ''}
//                         />
//                     </div>
//                 </div>
//
//                 <div className={btn.styledBtn}>
//                     <Button
//                         name="SET"
//                         classname={ isInvalidCounterSettings ? btn.btnDisabled : btn.incBtn }
//                         onClick={onClickValueState}
//                         disabled={ isInvalidCounterSettings }
//                     />
//                 </div>
//             </div>
//             <Counter startState={onClickState.appliedStartState}
//                      maxState={onClickState.appliedMaxState}
//                      onChangeStartState={onChangeState.startState}
//                      onChangeMaxState={onChangeState.maxState}
//             />
//         </>
//     );
// };
//
// export default CounterSettings;

//Table CounterSettings
//
//import React, {ChangeEvent, useState} from 'react';
// import s from "../../styles/Counter.module.css";
//
// export const TableCounterSettings = () => {
//
//     let [startState, setStartState] = useState('0')
//
//     let [maxState, setMaxState] = useState('0')
//
//     const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
//         setStartState(event.currentTarget.value)
//     }
//
//     const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
//         setMaxState(event.currentTarget.value)
//     }
//
//     return (
//         <>
//             <div className={s.styledTableValue}>
//                 <div className={s.styledValue}>
//                     <label>max value:</label>
//                     <input
//                         type="number"
//                         onChange={onChangeMaxValue}
//                         value={maxState}
//                     />
//                 </div>
//                 <div className={s.styledValue}>
//                     <label>start value:</label>
//                     <input
//                         type="number"
//                         onChange={onChangeStartValue}
//                         value={startState}/>
//                 </div>
//             </div>
//         </>
//     );
// };