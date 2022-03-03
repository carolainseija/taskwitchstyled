import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidate, setIsValidate] = useState(true)
  

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      isValidate(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValidate ? 'validate' : ''}`}>
        <label>Curso metas</label>
        <input className={`form-control ${isValidate}`} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Añadir Nuevas Tareas</Button>
    </form>
  );
};

export default CourseInput;
