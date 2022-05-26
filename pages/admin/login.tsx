import React from 'react'
import Login from '../../src/components/admin/login/Login'

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConfig } from "../../src/particles/particles.config";


const login = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <Login />
    </div>

  )
}

export default login