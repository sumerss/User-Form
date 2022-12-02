import { useState } from "react";
import useInputValidate from "../hooks/useInputValidate";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    handleValueInput: handleNameInput,
    handleValueBlurr: handleNameBlurr,
    reset: resetNameInput
  } = useInputValidate(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    handleValueInput: handleEmailInput,
    handleValueBlurr: handleEmailBlurr,
    reset: resetEmailInput
  } = useInputValidate(value => value.includes('@'))

  let isFormValid = false;

  if (nameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!nameIsValid || !emailIsValid) {
    //   return;
    // }
    resetNameInput()
    resetEmailInput()
  };

  const nameClass = nameHasError ? 'form-control invalid' : 'form-control';

  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={handleNameInput}
          onBlur={handleNameBlurr} />
        {nameHasError && <p className="error-text">Please enter a name</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={handleEmailInput}
          onBlur={handleEmailBlurr} />
        {emailHasError && <p className="error-text">Please enter an email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
