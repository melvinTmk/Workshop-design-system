import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import ResetPassword from './Components/resetPassword';
//import Nav from './Components/nav/nav';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      <ResetPassword/>
      <section></section>

    </div>
  );
}

export default App;
