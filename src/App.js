import logo from './logo.svg';
import './App.css';
import IplData from './ipl_List/ipldata';
import IplHeading from './ipl_List/iplheading';
import IplImage from './ipl_List/iplimages';
import IplCups from './ipl_List/iplcups';
import Iplplayers from './ipl_List/iplplayers';
import "./ipl.css"
import CustomProgressBar from './components/bootstrap/progress-bar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Customcard from './components/card/card';



const App =()=>(
  <>  
  <div>
    <div className="nav">
      <a>Home</a>
      <a>Team Name</a>
      <a>Team Logo</a>
      <a>Cups Won</a>
      <a>Team players</a>
     
    </div>
    <div>
    <Customcard/>
    </div>
  </div>
    
    </>
   


    );

export default App;
