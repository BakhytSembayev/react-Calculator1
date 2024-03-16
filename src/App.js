import React, { useState } from 'react';
import styles from './App.module.scss';

const App = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [isResultShown, setIsResultShown] = useState(false); 

  const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const handleNumberClick = (num) => {
    if (!operator) {
      setOperand1(operand1 + num);
    } else {
      setOperand2(operand2 + num);
    }
    setIsResultShown(false); 
    console.log('reset color');
  };

  const handleOperationClick = (op) => {
    if (op === 'C') {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setResult('');
      setIsResultShown(false); 
    } else if (op === '+' || op === '-') {
      setOperator(op);
      setIsResultShown(false); 
    } else if (op === '=') {
      let resultValue;
      if (operand1 && operand2 && operator) {
        switch (operator) {
          case '+':
            resultValue = parseInt(operand1) + parseInt(operand2);
            break;
          case '-':
            resultValue = parseInt(operand1) - parseInt(operand2);
            break;
          default:
            break;
        }
        setResult(resultValue);
        setIsResultShown(true); 
        console.log('color green');
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={`${styles.display} ${isResultShown ? styles.result : ''}`}>
        {result ? result : `${operand1} ${operator} ${operand2}`}
        
      </div>      
      <div className={styles.buttons}>
        {NUMS.map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleOperationClick('=')}>=</button>
        <button onClick={() => handleOperationClick('C')}>C</button>
      </div>
    </div>
  );
};

export default App;


