import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from "./containers/HomeContainer";



function App() {

  //========== main retunr  function ===========//
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
