
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Resturant from "./Resturant";
const App =() => {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Resturant/>} />
        {/* <Route exact path="" element={<div>new page</div>} /> */}

      </Routes>
    </Router>
    // <h1>
    //   Hello world!
    // </h1>
  );
}

export default App;
