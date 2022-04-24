import './App.css';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <div className='bg-dark' style={{
      minWidth: "100vw",
      minHeight: "100vh"
    }}>
      
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <h1 className='text-white '>Crud productos</h1>
          </div>
        </div>  
      </div> 

      <CrudApp/>
      
    </div>
  );
}

export default App;
