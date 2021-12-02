import { useState } from "react";

const useInput = (validateInput) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(value);
  const inputFieldInValid = isTouched && !valueIsValid;

  const resetField = () => {
    setValue("");
    setIsTouched(false);
  };

  const inputBlur = () => {
    setIsTouched(true);
  };

  const getInputHandler = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    valueIsValid,
    inputFieldInValid,
    resetField,
    inputBlur,
    getInputHandler,
  };
};

export default useInput;
