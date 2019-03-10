//Dependencies
import React from 'react';
//Styles
import "./scss/app.scss";
//Components
import AppHeader from "./components/main/app_header";
import Landing from './components/main/landing';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Landing />
      </div>
    );
  }
}

export default App;
