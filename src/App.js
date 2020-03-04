import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Topbar from './TopBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Homepage'
import Contacts from './ContactPage'
import Info from './AboutPage'




class App extends React.Component {
  

  render(){
    
    return(
      <BrowserRouter>
        <div>
          <Topbar />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/contact' component={Contacts} />
            <Route path='/about' component={Info} />
          </Switch>
          
          {/* <HomePage />
          <Contacts />
          <Info /> */}
        </div>
      </BrowserRouter>

    )
  }


}

export default App;
                                                                                             