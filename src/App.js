import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-name montserrat">
          <p style={{marginTop: 50,marginLeft:80}}>Jayan Vinod</p>
        </div>
        <div style={{paddingRight:80}} className="App-header-options">
          <p style={{marginTop: 50,marginLeft:40}}>About Me</p>
          <p style={{marginTop: 50,marginLeft:40}}>Services</p>
          <p style={{marginTop: 50,marginLeft:40}}>Projects</p>
          <p style={{marginTop: 50,marginLeft:40}}>References</p>
          <div style={{marginTop: 40,marginLeft:40}} className='resume-button'>Resume</div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
