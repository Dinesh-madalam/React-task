import logo from './logo.svg';
import './App.css';


import  CustomButton from"./components/button/button"
import MainHeading1 ,{ Heading2 as SecondaryHeading ,Heading3 }  from "./components/headings/headings"
import Orderlist from './components/lists/orderlist';
import Unorderlist from './components/lists/unorder';
import Profile from './components/profile/profile';
import Listfruits from './components/lists/fruits';

function App() {
  return (
    <div className="">
      <CustomButton/>
      <h3>Hello !</h3>
      <MainHeading1/>
      <SecondaryHeading/>
      <Heading3/>
      <Orderlist/>
      <Unorderlist/>
      <Profile/>
      <Listfruits/>
     
    
    </div>
  )
}
export default App
