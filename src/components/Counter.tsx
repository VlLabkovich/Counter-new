import React, {useState} from "react";
import TableCounter from "./TableCounter";
import Button from "./Button";
import styled from "styled-components";

export const Counter = () => {

    let [counter, setCounter] = useState(0)

    return (

        <StyledContent>
            <StyledCounter>
                <TableCounter counter={counter}/>
                <StyledBtnFlex>
                    <Button
                        counter={counter}
                        name="INC"
                        btnType={"primary"}
                        onClick={() => setCounter(state => state + 1)}
                        disabled={counter >= 5}
                    />

                    <Button
                        counter={counter}
                        name="RESET"
                        btnType={"secondary"}
                        disabled={counter === 0}
                        onClick={() => setCounter(0)}
                    />
                </StyledBtnFlex>

            </StyledCounter>
        </StyledContent>
    )
}


const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyledCounter = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    padding: 10px;
    row-gap: 10px;
    border-radius: 10px;
    border: 2px solid #43d4e8;
`

const StyledBtnFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dotted #43d4e8;
    border-radius: 10px;
    gap: 40px;
    padding: 10px 0;
`

    // refactor code without styled components
    //
    // <div className={s.contentStyled}>
    //     <div className={s.counterStyled}>
    //         {/*<h1 className={s.styledTable}>{counter}</h1>*/}
    //         <TableCounter counter={counter}/>
    //
    //         <div className={s.styledBtn}>
    //             <Button
    //                 name="INC"
    //                 className={counter >= 5? s.btnDisabled : s.incBtn}
    //                 onClick={()=> setCounter(state => state + 1)}
    //                 disabled={counter >=5}
    //             />
    //
    //             <Button
    //                 name="RESET"
    //                 className={s.resBtn}
    //                 disabled={counter === 0}
    //                 onClick={() => setCounter(0)}
    //             />
    //         </div>
    //
    //     </div>
    // </div>