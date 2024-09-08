import React, {ChangeEvent} from 'react';

type TypeInputProps = {
    type: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    className?: string
}

export const Input = (
    {
        type,
        onChange,
        value,
        className
    }: TypeInputProps) => {
    return (
        <>
            <input type={type} onChange={onChange} value={value} className={className}/>
        </>
    );
};