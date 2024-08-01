import logo from './logo.svg';
import './App.css';
import CustomButton from './components/button/button';
import Card from './components/card/card';
import CustomImage from './components/image/image';
import ListParent from './components/lists/listParent';
import CustomTable from './components/table/table';
import Unorderlist from './components/lists/unorder';
import Orderlist from './components/lists/orderlist';



function App(){
  return(
    <div>
      <CustomButton/>
      <Card/>
      <CustomImage/>
      <ListParent/>
      <CustomTable/>
      <Unorderlist/>
      <Orderlist/>
    </div>
  )
}

export default App;
