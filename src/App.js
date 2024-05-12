import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          This Website is build for implement a RAS ( React Artificial Shield ).<br/>Please visit to Form Section to Fill Details.<br/>To know More about Us Feel Free to contact on Below Details<br/> We are Happy and Open to any Feedback
        </p>
        {/*<p><br/><br/><br/>Average Human daily Oxygen Req is about 550 liter and at cost of 320 INR per liter => 2 lakh INR per day</p>
        */}<a
          className="App-link"
          href="https://www.earthreminder.com/how-to-keep-our-environment-clean/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Let's Keep our Environment Clean & Green
        </a>
      </header>
    </div>
  );
}

export default App;
