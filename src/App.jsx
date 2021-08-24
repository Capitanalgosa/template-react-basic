import './App.css';
import {Helmet} from "react-helmet";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import config from "./config";
import Content from "./components/Content";

/* import BtIcons from './partials/BootstrapIcons'; */

function App() {
  return (
    <div >
      <Helmet> 
        <title>{config.titleSite}</title>
      </Helmet>
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
