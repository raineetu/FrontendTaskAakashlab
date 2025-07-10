import Aboutus from "./components/Aboutus";
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
    </div>
  );
};

export default App;
