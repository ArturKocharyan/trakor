import './App.css';
import Companies from './Components/Companies/Companies';
import Management from './Components/Menagement/Management';
import NavBar from './Components/NavBar/NavBar';
import BigBanner from './Components/PigBanner/BigBanner';
import TeamBanner from './Components/TeamBanner/TeamBanner';
import TeamProgress from './Components/TeamProgress/TeamProgress';
import Text from './Components/Text/Text';
import Tools from './Components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <div className='Content' >
      <NavBar />
      <TeamProgress />
      <Companies />
      <Text />
      <TeamBanner />
      <BigBanner />
      <Tools />
      <Management />
      </div>
    </div>
  );
}

export default App;
