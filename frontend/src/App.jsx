import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <Policy />
      <Footer />
    </>
  );
}

export default App;
