const Display = ({ prevCalc, result }) => {
  return (
    <div
      className='container-fluid mb-2 bg-secondary d-flex flex-column px-3 text-black'
      style={{ height: '20%' }}
    >
      <p
        className='d-flex justify-content-end align-items-center m-0 fs-6'
        style={{ height: '40%' }}
      >
        {prevCalc}
      </p>
      <p
        className='d-flex justify-content-end align-items-center m-0 fw-bold fs-2'
        style={{ height: '60%' }}
      >
        {result}
      </p>
    </div>
  );
};

export default Display;
