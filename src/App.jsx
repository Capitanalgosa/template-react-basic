import './App.css';
import {Helmet} from "react-helmet";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import config from "./config";

/* import BtIcons from './partials/BootstrapIcons'; */

function App() {
  return (
    <div >
      <Helmet> 
        <title>{config.titleSite}</title>
      </Helmet>
      <Navigation />
      <Footer />
    </div>
  );
}
export default App;
