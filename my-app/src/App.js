import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className="App">
      <ControlledForm />
      {/*<LifeCyclesCWU />
      <LifeCyclesCDU />
      <LifeCyclesCDM />
      <RenderingLists />
      <MethodsAsPropsParent />
      <NestingComponents />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
      <EventBinding />
      <EventsClass />
      <EventsFunctional />
      <FunctionalGreeting /> 
      {<FunctionalGreetingWithProps greeting= "nice to meet you!" name="Michael" age="33" /> 
      <StatefulGreeting greeting= "I'm a stateful class component!" name ="Theo" /> 
      { <StatefulGreetingWithCallback greeting= "I'm a stateful class component!" name ="Theo" /> 
      <StatefulGreetingWithPrevState greeting= "I'm a stateful class component with an interactive button and greeting" name="Sam"/>*/}
    </div>
  );
}

export default App;
