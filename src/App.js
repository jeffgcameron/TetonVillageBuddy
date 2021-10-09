import SearchAppBar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bathroom from "./pages/Bathrooms";
import Home from "./pages/Home";
import Hotel from "./pages/Hotels";
import Restaurant from "./pages/Restaurants";
import Shop from "./pages/Shops";
import Weather from "./pages/Weather";
import "./App.css";

function App() {
  return (
    <Router>
    <div>
      <SearchAppBar />
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/bathrooms" component={Bathroom} />
          <Route exact path="/shops" component={Shop} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/restaurants" component={Restaurant} />
          <Route exact path="/hotels" component={Hotel} />
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
