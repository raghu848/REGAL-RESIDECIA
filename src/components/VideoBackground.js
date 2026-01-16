import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  
  @media (max-width: 767px) {
    height: 100%;
    width: 100vw;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  min-height: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: fill;
  opacity: 1;
  pointer-events: none;
  
  /* Mobile-specific adjustments */
  @media (max-width: 767px) {
    width: 100vw;
    min-height: 100vh;
    height: auto;
  }
  
  /* Hide all native video controls */
  &::-webkit-media-controls {
    display: none !important;
  }
  
  &::-webkit-media-controls-enclosure {
    display: none !important;
  }
  
  &::-webkit-media-controls-panel {
    display: none !important;
  }
  
  &::-webkit-media-controls-play-button {
    display: none !important;
  }
  
  &::-webkit-media-controls-start-playback-button {
    display: none !important;
  }
  
  &::-webkit-media-controls-current-time-display {
    display: none !important;
  }
  
  &::-webkit-media-controls-time-remaining-display {
    display: none !important;
  }
  
  &::-webkit-media-controls-timeline {
    display: none !important;
  }
  
  &::-webkit-media-controls-volume-slider {
    display: none !important;
  }
  
  &::-webkit-media-controls-mute-button {
    display: none !important;
  }
  
  &::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }
  
  &::-webkit-media-controls-overlay-play-button {
    display: none !important;
  }
`;

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video attributes for better autoplay support
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Autoplay prevented - will play on user interaction
        console.log('Video autoplay prevented, waiting for user interaction:', error);
        const handleInteraction = () => {
          video.play().catch((err) => {
            console.error('Failed to play video after interaction:', err);
          });
        };
        // Listen for any user interaction
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('keydown', handleInteraction, { once: true });
      });
    }
  }, []);

  return (
    <VideoContainer>
      <BackgroundVideo
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
    </VideoContainer>
  );
};

export default VideoBackground;

