import Navbar from "./pages/Navbar";
import Slider from "./pages/Slider";
import Aboutus from "./pages/Aboutus";
import OurTeam from "./pages/OurTeam";
import Footer from "./pages/Footer";
import Contactform from "./pages/Contactform";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <News />
      <Aboutus />
      <OurTeam />
      <Contactform />
      <Footer />
    </div>
  );
};

export default App;
