//Dependencies
import React from 'react';
//Styles
import "./scss/app.scss";
//Components
/* import AppHeader from "./components/main/app_header";
import Landing from './components/main/landing'; */
import AdminDashboard from './components/admin_dashboard/admin_dashboard';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <AdminDashboard />
        {/* <AppHeader />
        <Landing /> */}
      </div>
    );
  }
}

export default App;
