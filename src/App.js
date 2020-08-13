import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router, Switch, Route, Link, Redirect, useHistory, withRouter} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

function App(props) {

  const  wrapper = React.createRef();
  const [width, height] = useWindowSize()
 
  const history = useHistory();
  const [redi, setredi] = useState(false)
  const [redi2, setredi2] = useState(false)
  
  const [data, setdata] = useState('anas')
  const rote=()=>{
    history.push('/')
    
  }
 const wi=()=>{
  if(width>750){
    return <h1> big then 750</h1>
  }else{return <h1> small  then 750</h1>}
 }
      return (
        <div  >

 
<Router>


<div className='bsig ' style={{  position:'absolute', width:'100%' , backgroundColor:'#343a40'}} >
<Navbar   collapseOnSelect expand='sm' bg="dark" variant="dark">

  <Navbar.Brand  href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  style={{direction:'rtl'}}  className="ml-auto" >
    {/* style={{direction:'rtl'}} */}
      <Nav.Link style={{textAlign:'right'}} as={Link} to='/'  >עמוד הביית</Nav.Link> 
      <Nav.Link style={{textAlign:'right'}}  as={Link} to='/about'>מי אנחהו</Nav.Link>
      <Nav.Link style={{textAlign:'right'}}  href='https://anas3506606.wixsite.com/calculatecutting'>חישוב ארכים "WIX & JS"</Nav.Link>
      <NavDropdown style={{textAlign:'right'}} title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
    
       
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>










<br/> <br/><br/>

  <div className='container' style={{}}>
      <div style={{minWidth:'200px',maxWidth:'800px',margin:'auto' ,textAlign:'right' }}>
   
      

<Card style={{direction:'rtl',position:'static' ,borderRadius:'10px' }}>
  <Card.Body style={{}}>
    <Card.Title>מסגריית אניס :</Card.Title>
  
    <Card.Text style={{}}>
     {`
       ניסיון רב שנים בכל עבודות המסגרות, שערים ודלתות, מעקות, מבנים מברזל,
       בנוסף ליצור ותיקון מכונות ,
       במסגריית אניס תוכלו לראות את העבודה שאתם מתכננים לבצע, כבר לפני תחילת העבודה,
       וזה באמצעות טכניקת העיצוב ב תלת ממד 3D
       כך שתבחרו את מה ש חיפשתם בדיוק. ראו תמונות `}
    </Card.Text>

  </Card.Body>
</Card>
    </div>
</div>

  {/* <div className='test' style={{}}>


<h1>small</h1>
{wi()}
</div> */}
  
<Switch>
<Route exact path='/' component={()=>{return <Home/>}}/>
<Route exact path='/about' component={()=>{return <About setdata={setdata}  />}}/>
</Switch>

</Router>
<div style={{ height:'200px',backgroundColor:'gray'}}></div>
    </div>
  );
}

export default (App) ;

