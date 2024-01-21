import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";
import { Box } from "@mui/material";
import Wave from "../../Assets/pre.svg"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Home2({isPlaying,setPlaying}) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Box
        sx={{
          position: "fixed",
          zIndex: 9999,
          bottom: 20,
        }}
      >
        {isPlaying ?
        (<img onClick={() => { setPlaying(!isPlaying) }} src={Wave} width={50} alt="Wave" />)
        :
        (<PlayArrowIcon sx={{color: "#8a49a8", fontSize: 60}} onClick={() => { setPlaying(!isPlaying) }}/>)
        }
      </Box>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
            
          <Col md={4} className="myAvtar">
            <Tilt>
              <VideoPlayer isPlaying={isPlaying} setPlaying={setPlaying} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ragmer09toske"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/NucleusDevs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/retsepile-shao-2b7876284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ray.mond.09?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
