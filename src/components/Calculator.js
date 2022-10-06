import { useEffect, useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  let [prevCalc, setPrevCalc] = useState('');
  let [operator, setOperator] = useState();
  let [result, setResult] = useState('0');
  let [temp, setTemp] = useState();
  let [negative, setNegative] = useState(false);
  let [decimal, setDecimal] = useState(false);

  useEffect(() => {
    if (temp !== undefined)
      setPrevCalc(`${temp} ${operator && operator !== '=' ? operator : ''}`);
  }, [temp, operator]);

  const handleClick = e => {
    setResult(prev =>
      prev === '0'
        ? (result = e.target.value)
        : (result = prev + e.target.value)
    );
  };

  const handleReset = () => {
    setPrevCalc('');
    setResult('0');
    setTemp();
    setOperator();
    setNegative(false);
    setDecimal(false);
  };

  const handleOperatorClick = oper => {
    if (temp === undefined) {
      console.log('Dont have temp');
      setTemp(parseFloat(result));
      setPrevCalc(`${result} ${oper}`);
      setOperator(oper);
      setResult('0');
    } else {
      if (operator === undefined) {
        console.log('Have temp dont have operator');
        setOperator(oper);
      } else {
        console.log('Have temp, have operator');
        setTemp(prev => calculate(prev, result, operator));
        setResult('0');
        if (oper !== '=') {
          console.log('Operator other than equal');
          setOperator(oper);
        } else {
          setOperator();
        }
      }
    }
    setDecimal(false);
  };

  const handleNegative = () => {
    if (!negative) {
      if (result !== '0') {
        setResult(`-${result}`);
      }
    } else {
      if ([...result][0] === '-') {
        setResult(prev => (result = [...prev].filter((c, id) => id !== 0)));
      }
    }
    setNegative(!negative);
  };

  const calculate = (firstNum, secondNum, oper) => {
    switch (oper) {
      case '+':
        return +firstNum + +secondNum;
      case '-':
        return firstNum - secondNum;
      case 'x':
        return firstNum * secondNum;
      case '÷':
        return firstNum / secondNum;
      default:
    }
  };

  const handleDot = () => {
    if (!decimal) {
      setResult(prev => (result = `${prev}.`));
      setDecimal(!decimal);
    }
  };

  return (
    <div
      className='container bg-black text-light p-3 m-0 flex-column'
      style={{ width: '30rem', height: '35rem' }}
    >
      <Display
        prevCalc={prevCalc}
        result={result}
      />
      <div
        className='row row-cols-4 g-1'
        style={{ height: '80%' }}
      >
        <Button
          onClick={handleReset}
          text='C'
          divClassName='col-9'
          btnClassName='btn btn-outline-danger w-100 h-100'
        />
        <Button
          onClick={() => {
            handleOperatorClick('÷');
          }}
          text='÷'
          divClassName='col-3'
          btnClassName='btn btn-outline-info w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='7'
          value='7'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='8'
          value='8'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='9'
          value='9'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={() => {
            handleOperatorClick('x');
          }}
          text='x'
          divClassName='col-3'
          btnClassName='btn btn-outline-info w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='4'
          value='4'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='5'
          value='5'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='6'
          value='6'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={() => {
            handleOperatorClick('-');
          }}
          text='-'
          divClassName='col-3'
          btnClassName='btn btn-outline-info w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='1'
          value='1'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='2'
          value='2'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='3'
          value='3'
          divClassName='col-3 pe-1'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={() => {
            handleOperatorClick('+');
          }}
          text='+'
          divClassName='col-3'
          btnClassName='btn btn-outline-info w-100 h-100'
        />
        <Button
          onClick={handleNegative}
          text='-/+'
          divClassName='col-3'
          btnClassName='btn btn-outline-warning w-100 h-100'
        />
        <Button
          onClick={handleClick}
          text='0'
          value='0'
          divClassName='col-3'
          btnClassName='btn btn-outline-light w-100 h-100'
        />
        <Button
          onClick={handleDot}
          text='.'
          value='.'
          divClassName='col-3'
          btnClassName='btn btn-outline-warning w-100 h-100'
        />
        <Button
          onClick={() => {
            handleOperatorClick('=');
          }}
          text='='
          value='='
          divClassName='col-3'
          btnClassName='btn btn-outline-primary w-100 h-100'
        />
      </div>
    </div>
  );
};

export default Calculator;
