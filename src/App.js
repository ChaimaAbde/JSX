
import './App.css';
import Address from './Component/Profile/Address';

import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';




function App() {
  return (
    <div className='box'>
      <div className='box2'>
    <ProfilePhoto/></div>
    <div className='box1'>
    <FullName/>
    <Address/>
   
   </div>
  
   
    
 </div>
    

  )
}

export default App;
