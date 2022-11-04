import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes  } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from "./components/Container";
import Login from "./components/Login";
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Container />} />
              <Route path="login" element={<Login />} />

          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//
// import React, { Component } from 'react';
// import { Routes ,Route, BrowserRouter } from 'react-router-dom';


// import Container from "./components/Container";
// import Login from "./components/Login";
//
// class App extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <div>
//                     <Routes >
//                         <Route path="/" element={<Container />} exact/>
//                         <Route path="/login" element={<Login />}/>
//                         {/*<Route path="/contact" component={Contact}/>*/}
//                         {/*<Route component={Error}/>*/}
//                     </Routes>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }
//
// export default App;

