import React, { useState, useRef, useEffect } from 'react';
import { Slider, Typography, Paper, IconButton, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MeHolbertonVideo from '../../Assets/me_holberton.mp4';
import SeparateAudioFile from '../../Assets/audio.mp4';
import pre from "../../Assets/pre.svg"
const VideoPlayer = ({isPlaying,setPlaying}) => {
  const [volume, setVolume] = useState(0.8);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    const handlePlay = () => {
      video.play();
      audio.play();
    };

    const handlePause = () => {
      video.pause();
      audio.pause();
    };

    const handleLoadedMetadata = () => {
      // Media is loaded, you can now play it
      if (isPlaying) {
        handlePlay();
      }
    };

    if (video && audio) {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      if (isPlaying) {
        handlePlay();
      } else {
        handlePause();
      }
    }

    // Cleanup
    return () => {
      if (video && audio) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    const newVolume = newValue / 100;
    setVolume(newVolume);
  
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  

  return (
    <Paper elevation={3} style={{ maxWidth: 600, margin: 'auto' }} sx={{ borderRadius: 3, position: "relative" }}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        src={MeHolbertonVideo}
        type="video/mp4"
        autoPlay={isPlaying}
        volume={volume}
      />

      <audio ref={audioRef} src={SeparateAudioFile} type="audio/mp3" />

      <div style={{ marginTop: 20, padding: 20, display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePlayPause}>
          {isPlaying ? <PauseIcon sx={{color: "lightblue"}}/> : <PlayArrowIcon sx={{color: "lightblue"}}/>}
        </IconButton>

        <Slider
          value={volume * 100}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
          style={{ flex: 1, marginLeft: 10 }}
        />
        <Typography variant="caption">
          <img src={pre} alt='raymond sound loader' width={20}/>
        </Typography>
      </div>
    </Paper>
  );
};

export default VideoPlayer;
