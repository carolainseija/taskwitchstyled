import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidate, setIsValidate] = useState(true)
  

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValidate(true)
    }
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
      <div className={`${styles['form-control']} ${!isValidate && styles.invalid}`}>
        <label>Curso metas</label>
        <input className={`${styles['form-control']} ${isValidate}`} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Añadir Nuevas Tareas</Button>
    </form>
  );
};

export default CourseInput;
