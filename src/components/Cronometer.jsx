import { useRef, useState } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";

export const Cronometer = (props) => {
  const [tiempo, setTiempo] = useState(0);
  const [error, setError] = useState('');
  // 1er Render inteval.current -> undefined 
  const interval = useRef();
  const isAdmin = useIsAdmin();

  const iniciarInterval = () => {
    // cuando precionamos el boton
    // interval1 ests corriendo
    // interval2 esta corriendo
    // interval3 esta corriendo
    // interval.current -> interval3
    reiniciar();
    // if (!interval.current) {
      interval.current = setInterval(() => {
        // Siempre que su nuevo estado depende del estado actual(anterior) es preferible
        // utilizar un callback en el dispatcher
        // try {
        //   console.log(tiempo);
        //   throw new Error('!!!Error simulado en la applicacion!!!!');
        // } catch(err) {
        //   setError(err.message);
        // }
  
        setTiempo((currentTiempo) => { 
          return currentTiempo + 1
        });
        //setTiempo(tiempo + 1);
      }, 1000);
    // }
  }
  
  const iniciar = () => {
    iniciarInterval();
  }

  const pausar = () => {
    clearInterval(interval.current);
  }

  const reanudar = () => {
    iniciarInterval();
  }

  const reiniciar = () => {
    clearInterval(interval.current);
    interval.current = null;
    setTiempo(0);
  }
  
  const renderTitle = () => {
    if (props.title) {
      return <p>Cronometro: {props.title}</p>;
    }
    return <p>Cronometro</p>;
  }

  console.log('Rendering component');
  return (
    <>
      {isAdmin && <h1>Hello Admin</h1>}
      {error && <p>{error}</p>}
      {/* { props.title && <p>Cronometro: {props.title}</p>}
      { props.title === undefined && <p>Cronometro</p>}
       */}
      {renderTitle()}
      <p>Time: {tiempo}</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reanudar}>Reanudar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  );
}