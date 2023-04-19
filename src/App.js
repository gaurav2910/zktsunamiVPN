import "./App.css";
import Card from "./component/card";
import Extension from "./component/Extension";
import Footer from "./component/footer";
import Header from "./component/header";
import TopNotch from "./component/topNotch";

function App() {

  return (
    <div className="App">     
        <Header />
        <Extension />
        <Card />
        <TopNotch />
        <Footer />
    </div>
  );
}

export default App;
