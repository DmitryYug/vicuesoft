import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@mui/material";
import style from "../SearchForm.module.css";

export type MyInputPropsType = {
    value: string,
    labelText?: string,
    error?: boolean,
    onChangeCallback: (currentValue: string) => void
    onKeyPressCallback?: () => void
}

export const MyInput: React.FC<MyInputPropsType> = (
    {
        value,
        labelText,
        error,
        onChangeCallback,
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeCallback(e.currentTarget.value)
    }

    return (
        <TextField
            className={style.inputStyle}
            value={value}
            label={labelText}
            error={error}
            onChange={onChangeHandler}
            id="outlined-basic"
            variant="outlined"/>
    )
}