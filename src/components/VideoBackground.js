import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  pointer-events: none;
  
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

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented - will play on user interaction
        const handleInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', handleInteraction);
        };
        document.addEventListener('click', handleInteraction, { once: true });
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

