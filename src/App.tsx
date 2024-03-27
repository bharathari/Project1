import './App.css';
import ResponsiveAppBar from './components/Navbar';
import AccordionExpandDefault from './components/accordon';
import TemporaryDrawer from './components/collaps-sidebar';
import LabTabs from './components/tabs';
function App() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
    <header style={{position:'sticky'}}>
    <ResponsiveAppBar/>
    </header>
    <div>{/*body*/}
    <TemporaryDrawer/>
      <div style={{marginTop:'2em',marginLeft:'20em',width:'55em'}}>
      <h1 style={{color:'#2e7d32'}}>Organization</h1>
      <br/>
    <LabTabs/>
    </div>
    </div>

    </div>    

  );
}

export default App;
