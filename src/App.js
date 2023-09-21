import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <div class="card" id="card">
        <h1>Hello World!</h1>
        <h1> Drew Allar</h1>

        <div class="dup-btn">
        <button id="dup">Duplicate</button>
        </div>

        <div class="btn-image">
        <img src= "https://th.bing.com/th/id/OIP.yghP1TEXURUPo9L6TeInkAHaD4?w=331&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7" alt = "Beaver Stadium"></img>
        <p> Drew Allar</p> 
        </div>

        <div class="btn-wrapper">
        <button id="stat">Stats</button>
        <a href="https://gopsusports.com/sports/football/roster/drew-allar/13992"></a>
        </div>
        
        <div class="details-button">
        <button id="det">Details</button>
        <a href="https://hax.psu.edu/"></a>
        </div>

        </div>
    );
  }

export default App;
