import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Aboutus />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default App;
