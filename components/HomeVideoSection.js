'use client';

import { useRef, useState } from 'react';

export default function HomeVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterImage, setPosterImage] = useState('');

  const capturePoster = () => {
    const video = videoRef.current;

    if (!video || !video.videoWidth || !video.videoHeight) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (!context) return;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPosterImage(canvas.toDataURL('image/jpeg', 0.85));
  };

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Video playback failed:', error);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="video-band hairline-top">
      <div className="container">
        <span className="eyebrow">Empowering humanity through ethical AI</span>
        <h2 className="video-band__title">Innovation, where intelligence meets integrity</h2>
        <p className="video-band__copy">
          Simplify, build, thrive: easy-to-use AI tools and development kits for every enthusiast.
          Elevate your projects with seamless integration and unleash the power of artificial
          intelligence. Driven by data, powered by AI.
        </p>
        <div
          className={`video-band__frame video-band__frame--playable ${posterImage ? 'has-poster' : ''}`}
          style={
            posterImage
              ? {
                  backgroundImage: `url("${posterImage}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }
              : undefined
          }
        >
          <button
            type="button"
            className={`video-band__play ${isPlaying ? 'is-playing' : ''}`}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            onClick={toggleVideo}
          />
          <video
            ref={videoRef}
            controls
            preload="auto"
            playsInline
            onLoadedData={capturePoster}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ opacity: isPlaying ? 1 : 0, transition: 'opacity 180ms ease' }}
          >
            <source src="/videos/homepage-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
