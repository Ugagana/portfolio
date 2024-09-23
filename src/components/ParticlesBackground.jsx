import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // Correct loader

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: '#000' },  // Keep the dark background to blend with the page
        },
        particles: {
          number: {
            value: 60,  // Less particles for a cleaner look
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ['#ffffff', '#00aaff', '#8899ff'],  // Use complementary colors
          },
          shape: {
            type: ['circle', 'triangle'],  // Mixed shapes for added variety
          },
          opacity: {
            value: 0.7,  // Semi-transparent particles for elegance
            random: true,
          },
          size: {
            value: { min: 1, max: 8 },  // Vary the size for more interest
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,  // Slightly faster movement for a more dynamic effect
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
          links: {
            enable: true,  // Connect particles with lines
            distance: 150,
            color: '#00aaff',  // Line color matches the theme
            opacity: 0.4,
            width: 1,
          },
          shadow: {
            enable: true,  // Enable glow effect
            blur: 10,  // Glow radius
            color: '#00aaff',  // Glow color matching your theme
          },
          // Add interactivity for mouse movement
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'attract',  // Particles will attract to the cursor
              },
              onClick: {
                enable: true,
                mode: 'push',  // Clicking will push new particles into the system
              },
            },
            modes: {
              attract: {
                distance: 200,  // Attraction distance for the particles
                duration: 0.3,  // Duration of the attraction effect
                speed: 2,  // Speed at which particles move towards the cursor
              },
              push: {
                quantity: 4,  // Number of particles added on click
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
