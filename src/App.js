import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Topbar from './TopBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Homepage'
import Contacts from './ContactPage'
import Info from './AboutPage'
import VideoDetail from './DetailPage'




class App extends React.Component {
  

  render(){
    
    return(
      <BrowserRouter>
        <div>
          <Topbar />
          <Switch>
            <Route path='/contact' component={Contacts} />
            <Route path='/about' component={Info} />
            <Route path='/details/:videoId' component={VideoDetail} />
            <Route path='/' component={HomePage} />
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
                                                                                             