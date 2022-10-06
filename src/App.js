import Calculator from './components/Calculator';

function App() {
  document.title = 'Simple Calculator';
  return (
    <div className='container-fluid bg-dark vh-100 w-100 overflow-hidden flex-column d-flex justify-content-center align-items-center p-0 m-0'>
      <h1 className='text-light fw-bold text-uppercase mb-5'>
        Simple Calculator
      </h1>
      <Calculator />
    </div>
  );
}

export default App;
