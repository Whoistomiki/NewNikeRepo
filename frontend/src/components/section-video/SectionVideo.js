import React from 'react';
import './SectionVideo.css';

const SectionVideo = () => {
  return (
    <section className="section-video">
      <div className="video-container">
        <iframe
          className="video-background"
          src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&loop=1&mute=1&playlist=QdBZY2fkU-0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
      <div className="content">
        {/* Contenu supplémentaire */}
      </div>
    </section>
  );
};

export default SectionVideo;
