import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Particles from 'react-tsparticles';

function App() {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 1000,
          particles: {
            color: {
              value: "#1A2238",
            },
            links: {
              color: "#FFA41B",
              distance: 100,
              enable: true,
              opacity: 0.8,
              width: 3,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.7,
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      />
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
