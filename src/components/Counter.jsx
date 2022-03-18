import {useState} from "react";
import logo from '../logo.svg';

const name = "Juan"
export const test = () => {
  return true;
}


export const Counter = (props) => {
  // [valor, despachador] 
  const [counter, setCounter] = useState(0);
  const sum = (a, b) => {
    return a + b;
  }

  const sumAsync = (a, b) => {
    return new Promise((resolve, reject) => {
      resolve(a + b);
    });
  };

  const sumAsync2 = async (a, b) => {
    return a + b;
  }

  const add = async () => {
    // counter = counter + 1; ICORRECTO USAR DISPATCHER

    // Add corre en subproceso main
    setCounter(counter + 1);
    const result = sum(4, 5);
    const resultAsync = sumAsync(4, 5);

    // ((4 + 5) + 25) + 32

    resultAsync.then((resultAsync) => {
      sumAsync(resultAsync + 25).then((resultAsync2) => {
        
      });
    });

    let resultA = await sumAsync(4, 5);
    resultA = await sumAsync(resultA, 25);
    resultA = await sumAsync(resultA, 32);

    console.log(result);
  }

  /**
   * Ejecuta 1000 veces setCounter
   */
  const add1000Times = () => {
    for(let i=0; i < 1000; i++) {
      console.log('Using dispatcher TIMEEEEsssssE');
      // setCounter(counter + 1); // NO FUNCIONA porque setCounter ejecuta procesos asincronos
      setCounter((currentCounter) => {
        return currentCounter + 1;
      });
    }
  }

  return (
    <div className="App" onClick={() => {}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Student: {props.name}
          <br />
          counter: {counter}
          <br />
          <button onClick={add}>Add</button>
          <button onClick={add1000Times}>Add 1000 Times</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}