import React from 'react';

type TypeButtonProps = {
    name: string
    classname?: string
    onClick: () => void
    disabled: boolean
}


const Button = (
    {
        name,
        classname,
        onClick,
        disabled
    }: TypeButtonProps) => {


    return (
        <>
            <button className={classname} onClick={onClick} disabled={disabled}>{name}</button>
        </>

    );
};

export default Button;