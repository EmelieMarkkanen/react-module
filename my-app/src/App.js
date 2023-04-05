import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting= "nice to meet you!" name="Michael" age="33" /> */}
      <StatefulGreeting greeting= "I'm a stateful class component!" name ="Theo" />
    </div>
  );
}

export default App;
