import React, {useEffect, useState} from "react";
import { MyButton } from "./search-button/button";
import {MyInput} from "./search-textfield/textfield";

type MyAddItemFieldPropsType = {
    value: string
    labelText?: string,
    errorLabelText?: string,
    /**
     * Callback sets current input value
     * @param currentValue current input value
     */
    onClickCallback: (value: string) => void
    onChangeCallback: (currentValue: string) => void
    /**
     * Callback sets current input value when enter is pressed
     * @param value current input value
     */
    onKeyPressCallback?: (value: string) => void
}

export const MyAddItemField: React.FC<MyAddItemFieldPropsType> = (
    {
        value,
        labelText,
        errorLabelText,
        onChangeCallback,
        onClickCallback,
        onKeyPressCallback
    }
) => {

    const MyInputContainer = React.memo(MyInput)
    const MyButtontContainer = React.memo(MyButton)

    let [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (value) {
            setError(false)
        }
    }, [value])


    const onClickHandler = () => {
        if (value && onClickCallback) {
            onClickCallback(value)
        } else {
            setError(true)
        }
    }

    const onKeyPressHandler = () => {
        if (value && onKeyPressCallback) {
            onKeyPressCallback(value)
        } else {
            setError(true)
        }
    }

    return (
        <div style={{
            display: 'flex',
        }}>
            <div>
                <MyInputContainer
                    value={value}
                    error={error}
                    labelText={error ? errorLabelText : labelText}
                    onChangeCallback={onChangeCallback}
                    onKeyPressCallback={onKeyPressHandler}
                />
            </div>
            <div>
                <MyButtontContainer
                    name={'Search'}
                    onClickCallback={onClickHandler}
                />
            </div>
        </div>
    )
}