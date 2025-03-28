import React, { useEffect, useState } from 'react';
import '../styles/Hero.css'; // Create this CSS file

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <div className="text-content">
          <h1 className={`title ${loaded ? 'slide-in' : ''}`}>Explore Nature's Wonders</h1>
          <p className={`description ${loaded ? 'slide-in' : ''}`}>
            Discover amazing stories about ancient forests, wildlife ecosystems, 
            and sustainable living through our curated blog posts.
          </p>
          <button className={`cta-button ${loaded ? 'fade-in' : ''}`}>
            Start Reading
          </button>
        </div>
        <div className={`image-container ${loaded ? 'glide-in' : ''}`}>
          <img 
            src="/tree-illustration.png" // Replace with your image path
            alt="Majestic Tree" 
            className="tree-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;