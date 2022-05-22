import Header from "../src/components/header/header";
import Home from "../src/components/home/home";
import About from "../src/components/about/about";
import Contact from "../src/components/contact/contact";
import Navbar from "../src/components/nav/nav";
import Projects from "../src/components/projects/Projects";
import Footer from "../src/components/footer/footer";


import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConfig } from "../particles/particles.config";

const App = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />

      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default App
