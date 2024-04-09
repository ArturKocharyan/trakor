import './App.css';
import Companies from './Components/Companies/Companies';
import Graphic from './Components/Graphic/Graphic';
import Management from './Components/Menagement/Management';
import NavBar from './Components/NavBar/NavBar';
import BigBanner from './Components/PigBanner/BigBanner';
import TeamBanner from './Components/TeamBanner/TeamBanner';
import TeamProgress from './Components/TeamProgress/TeamProgress';
import Text from './Components/Text/Text';
import Tools from './Components/Tools/Tools';
import WorkFaster from './Components/WorkFaster/WorkFaster';
import SliderCompanies from './SliderCompanies/SliderCompanies';

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
        <Graphic />
        <WorkFaster />
        <SliderCompanies />
      </div>
    </div>
  );
}

export default App;
