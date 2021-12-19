import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import './sass/main.scss';

function App() {
  return (
    <div className="top-container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
