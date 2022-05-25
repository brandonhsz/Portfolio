import Header from "../src/components/header/header";
import Home from "../src/components/home/home";
import About from "../src/components/about/about";
import Contact from "../src/components/contact/contact";
import Navbar from "../src/components/nav/NavList";
import Projects from '../src/components/projects/Projects';
import Footer from "../src/components/footer/footer";


import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConfig } from "../src/particles/particles.config";

import { ProviderApi } from "../src/context/api.context";

const App = ({ qualifications, projects }) => {

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

      <ProviderApi
        value={{
          qualifications,
          projects
        }}
      >
        <About />
        <Projects />

      </ProviderApi>



      <Contact />
      <Footer />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const qualificationsRes = await fetch(`https://brandonhsz.xyz/api/qualifications`);
  const qualifications = await qualificationsRes.json();

  const projectsRes = await fetch(`https://brandonhsz.xyz/api/projects`);
  const projects = await projectsRes.json();

  return {
    props: {
      qualifications: qualifications,
      projects: projects
    },
    revalidate: 43200
  }
}


export default App
