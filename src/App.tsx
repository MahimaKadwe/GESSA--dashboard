// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import React, { useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
// import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
    } else {
      setMode('dark');
      document.body.style.background = '#0d213f';
    }
  };

  return (
    <>
     <Navbar title={''} mode={''} plain={''} togglemode={function (): void {
        throw new Error('Function not implemented.');
      } } swithcd={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="container">
        <nav className="comp">
          <div className="container-fluid ">
            <span className="navbar-brand" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
              {/* Lets Analyze Together ! */}
            </span>
          </div>
        </nav>
        <Cards />
        <Table>
          <Search />
        </Table>
      </div>
      {/* <p plain="kadwe" /> */}
    </>
  );
}

export default App;
