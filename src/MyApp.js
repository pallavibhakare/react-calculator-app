import './App.css';
import { 
  useState,
  useRef
} from "react";

function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e){
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function resetInput(e){
    e.preventDefault(); //Prevent default from submission
    inputRef.current.value = ' '; //Reset the value of the Input field
  };
 function resetResult(e){
    if(resultRef.current.value !== '0'){
    resultRef.current.value = null;
    }
    /*
    e.preventDefault();
        setResult((result) => result * 0);
        inputRef.current.value = 0;
    */
  };
  function minus(e){
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e){
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  function divide(e){
    e.preventDefault();
    setResult((result)=> result / Number(inputRef.current.value));
  };

  return (
    <div className="App">
      <h1>Simple Working Calculator</h1>
      <form>
        <p ref={ resultRef }>{ result }</p>
        <input pattern="[0-9]" 
        ref={inputRef}
        type='number' 
        placeholder='Type a number'
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
