import Header from "./component/header";
import Content from "./component/content";
import Footer from "./component/footer";
import data from "./data.js";
import './App.css';
import "./component/adaptiv.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content data={data} />
      <Footer />
    </div>
  );
}

export default App;
