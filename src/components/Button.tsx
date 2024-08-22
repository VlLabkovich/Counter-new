import React from 'react';
import styled, {css} from "styled-components";

type TypeButtonProps = {
    counter?: number
    name?: string
    onClick: () => void
    disabled: boolean
    btnType: "primary" | "secondary"
}


const Button = (
    {
        counter,
        name,
        onClick,
        disabled,
        btnType
    }: TypeButtonProps) => {

    const dynamicBtnType = counter && counter > 5 ? "primary" : btnType;
    return (
        <>
            <StyledBtn btnType={dynamicBtnType} onClick={onClick} disabled={disabled}>{name}</StyledBtn>
        </>

    );
};

export default Button;

const StyledBtn = styled.button<TypeButtonProps>`
    width: 100px;
    height: 40px;
    color: #2d2a2a;
    font-size: 24px;
    border-radius: 10px;

    &:hover {
        background-color: #2d2a2a;
    }

    ${(props) => props.btnType === "primary" && css`
        background-color: #43d4e8;
        border-color: #43d4e8;

        &:hover {
            background-color: #36afc7;
            border-color: #36afc7;
        }
    `
    };

    ${(props) => props.btnType === "secondary" && css`
        background-color: #a12020;
        border-color: #a12020;

        &:hover {
            background-color: #ce5151;
            border-color: #a12020;
        }
    `
    };

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
    }
`;