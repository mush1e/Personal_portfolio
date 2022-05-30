import '../styles/homepage.css'
import Particles from "react-tsparticles";
import Config from "../config/particleConfig"

const FgText = () =>
          <div>
            <div className="main--fg-text-div">
                <p>Hi there, my name is</p>
                <h1>Mustafa Siddiqui.</h1>
                <h1 className="main--fg-text-subtext">I build (mostly break) stuff!</h1>
            </div>
            <div className="footer--fg-text-div">
              <button><strong>Scroll For More</strong></button>
            </div>
          </div>


const BgParticles = () => {
  const particlesInit = (main) => {
    console.log(main);
  }
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return(
    <Particles init={particlesInit} loaded={particlesLoaded} options={Config}></Particles>
  )
}

export default function HomePage() {
    return(
      <div>
        <BgParticles/>
        <FgText/>
      </div>
    )
}