import { useEffect, useState } from "react";
import Message from "./Message";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {

  const [advice, setAdvice] = useState("click to get random advice")
  const [numberOfAdvice, setNumberOfAdvice] = useState(0);


  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setNumberOfAdvice(numberOfAdvice + 1)
    // console.log(data.slip.advice);
  };

  useEffect(function () {
    getAdvice();
  }, [])

  return (
    <>

      <div className="container h-100 bg-info">
        <div className=" bg-light container-fluid border border-2 border-dark">
          <h1>Get Random Advice App</h1>
        </div>

        <h1 className="mb-3 mt-3">{advice}</h1>
        <div className="col-sm-6 mb-3">
          <Button className="col-sm-6 bg-warning" onClick={getAdvice}>Get Random  Advice</Button>
        </div>
        <Message count={numberOfAdvice} ></Message>
      </div>
    </>

  )
}

export default App;
