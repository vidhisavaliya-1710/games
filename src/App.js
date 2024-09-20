
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Age from './Componets/Age';
import Cal from './Componets/Cal';
import Calculator from './Componets/Calculator';
import Concept from './Componets/Concept';
import Emi from './Componets/Emi';
import Inc from './Componets/Inc';
import Puzzel from './Componets/Puzzel';
import Result from './Componets/Result';
import Tictoc from './Componets/Tictoc';
import Todo from './Componets/Todo';
import Home from './Componets/Home';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/puzzel' element={<Puzzel/>}/>
        <Route path='/tictoc' element={<Tictoc/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/emi' element={<Emi/>}/>
        <Route path='/age' element={<Age/>} />
      </Routes>
      {/* <Concept/> */}
     
      {/* <Inc/> */}
      {/* <Cal/> */}
      {/* <Calculator/> */}
      {/* <Tictoc/> */}
      {/* <Puzzel/> */}
      {/* <Todo/> */}
      {/* <Result/> */}
      {/* <Emi/> */}
      {/* <Age/> */}
    </>
  );
}

export default App;
