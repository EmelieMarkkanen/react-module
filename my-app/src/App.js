import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting= "nice to meet you!" name="Michael" age="33" /> */}
      { /*<StatefulGreeting greeting= "I'm a stateful class component!" name ="Theo" /> */}
      <StatefulGreetingWithCallback greeting= "I'm a stateful class component!" name ="Theo" />
    </div>
  );
}

export default App;