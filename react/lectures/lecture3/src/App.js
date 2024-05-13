import logo from './logo.svg';
import ParentCounter from './components/parent';
import InputForm from './components/form';
import Nav from './components/menu';
import HoverRating from './components/rating';
import NestedList from './components/list';
import Student from './components/propType';
import './App.css';

function App() {
  return (
    <div>
      <HoverRating/>
      <Nav/>
      <ParentCounter/>
      <InputForm />
      <NestedList/>
      <Student name="Дима" age={30} isStudent={true}/>
    </div>
  );
}

export default App;