import './App.css';
import LoginPage from './Page/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Page/HomePage/HomePage';
import Layout from './HOC/Layout';
import DetailPage from './Page/DetailPage/DetailPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';

function App() {
  return (
    <div >
      <SpinnerComponent/>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Layout Component={HomePage}/>} />
          <Route path='/detail/:id' element={<Layout Component={DetailPage}/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
         </Routes>
      </BrowserRouter>

</div>
    );
}

export default App;
