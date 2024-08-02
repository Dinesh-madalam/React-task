import logo from './logo.svg';
import './App.css';
import IplData from './ipl_List/ipldata';
import IplHeading from './ipl_List/iplheading';
import IplImage from './ipl_List/iplimages';
import IplCups from './ipl_List/iplcups';
import Iplplayers from './ipl_List/iplplayers';




const App =()=>(
  <div>
    {IplData.map((eachipl)  => (
      <div key={eachipl.team} style={{height:"400px", width:"300px", border:"2px solid black",margin:10}} >
        <IplHeading team={eachipl.team}/>
        <IplImage
        source={eachipl.jerseyimg}
        alternate="ipl image"
        width={200}
        height={200}/>
        <IplCups cups={eachipl.cups}/>
        <Iplplayers players={eachipl.players}/>
      </div>
    ))
    }
  </div>
)

export default App;
