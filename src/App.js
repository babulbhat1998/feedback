import './App.css';
import FeedBack from './FeedBack';
import Bg from "./image/bg.png";

function App() {
  return (
    <div className="App h-full" style={{backgroundImage: `url(${Bg})`}}>
      <FeedBack />
    </div>
  );
}

export default App;
