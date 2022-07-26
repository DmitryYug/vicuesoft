import React, {useEffect, useState} from "react";
import {MyInput} from "./search-textfield/Textfield";
import style from './SearchForm.module.css'

type MyAddItemFieldPropsType = {
    value: string
    labelText?: string,
    errorLabelText?: string,
    onChangeCallback: (currentValue: string) => void
}

export const SearchForm: React.FC<MyAddItemFieldPropsType> = (
    {
        value,
        labelText,
        errorLabelText,
        onChangeCallback,
    }
) => {

    let [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (value) {
            setError(false)
        }
    }, [value])


    return (
        <div className={style.inputContainerStyle}>
            <MyInput
                value={value}
                error={error}
                labelText={error ? errorLabelText : labelText}
                onChangeCallback={onChangeCallback}
            />
        </div>
    )
}