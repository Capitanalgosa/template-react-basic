import './App.css';
import {Helmet} from "react-helmet";
import Body from "./components/Content";
import Navigation from "./components/Navigation"
import config from "./config";
function App() {
  return (
    <div >
      <Helmet> 
        <title>{config.titleSite}</title>
      </Helmet>
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
