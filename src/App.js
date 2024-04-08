import './App.css';
import Companies from './Components/Companies/Companies';
import NavBar from './Components/NavBar/NavBar';
import TeamProgress from './Components/TeamProgress/TeamProgress';
import Text from './Components/Text/Text';

function App() {
  return (
    <div className="App">
      <div className='Content' >
      <NavBar />
      <TeamProgress />
      <Companies />
      <Text />
      </div>
    </div>
  );
}

export default App;
