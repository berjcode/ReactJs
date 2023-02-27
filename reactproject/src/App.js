
import './App.css';

function App() {
  const Name = "Abdullah";
  const Surname ="Balıkçı";
  const student =2222;
  const Live = true;
  return (
      <div>
    <h1>Yazılım Sever</h1>
    <p>
      {Name}, {Surname}
    </p>
    <p>{student}</p>
    <p> {Live} </p>

    {Live ? <p style={{backgroundColor:"yellow"}}>Geçti</p> : <p>kaldı</p>}
     


    <div className='box'></div>
    </div>
  );
}

export default App;
