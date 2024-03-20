import logo from './logo.svg';
import './App.css';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function resumeDownload() {
  console.log("Resume Button Pressed",window.innerWidth)
}
var icon = <MdOutlineMenuOpen />
var menuOpened = false
function myFunction() {
  var x = document.getElementById("HeaderOptions");
  
  if (x.className === "App-header-options") {
    x.className += " responsive";
  } else {
    x.className = "App-header-options";
  }

  var x = document.getElementById("NameTitle");
  if (x.className === "App-header-name") {
    x.className += " responsive";
  } else {
    x.className = "App-header-name";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-name" id="NameTitle">
          <p style={{marginTop: 50,marginLeft:80}}>Jayan Vinod</p>
        </div>
        <div style={{paddingRight:80}} className="App-header-options" id="HeaderOptions">
          <p style={{marginTop: 50,marginLeft:40}}>About Me</p>
          <p style={{marginTop: 50,marginLeft:40}}>Services</p>
          <p style={{marginTop: 50,marginLeft:40}}>Projects</p>
          <p style={{marginTop: 50,marginLeft:40}}>References</p>
          <div style={{marginTop: 40,marginLeft:40}} className='resume-button' onClick={resumeDownload} >Resume</div>
          <div style={{marginTop: 40,marginLeft:40}} className='menu-button icon' onClick={myFunction} ><MdOutlineMenuOpen /></div>
        </div>
      </header>
      <div>
      <p style={{marginTop: 50,fontSize:50,color:'#ffffff',fontFamily:'Montserrat'}}>Jayan Vinod</p>
      </div>
    </div>
  );
}

export default App;
