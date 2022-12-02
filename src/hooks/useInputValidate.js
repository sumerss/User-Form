import { useState } from "react";

const useInputValidate = (validation) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [valueTouched, setValueTouched] = useState(false)

    const valueIsValid = validation(enteredValue);
    const hasError = valueTouched && !valueIsValid;

    const handleValueInput = (event) => {
        setEnteredValue(event.target.value)
    };
    const handleValueBlurr = () => {
        setValueTouched(true);
    };
    const reset = () => {
        setEnteredValue('');
        setValueTouched(false);
    }
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        handleValueInput,
        handleValueBlurr,
        reset,
    }
}
export default useInputValidate;