import './App.css';
import Feed from './feed/Feed';
import Header from './header/Header';
import SideBar from './sidebar/Sidebar';
import Widgets from './widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
