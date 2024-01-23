import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import ThreeScene from '../Three/Threescene';

export const Milestones = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const lineClassName = animate ? 'drawLineAnimation' : '';

  const circleRadius = 20;
  const circleStrokeWidth = 3;
  const gap = circleStrokeWidth / 2;

  // Unique details for each milestone
  const milestonesDetails = [
    // Other milestones...
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    {
      date: "2024 January 23", // Update the date
      textLines: [
        "Integrated ThreeScene Component", // Update the text lines
        "Added a 3D scene using Three.js",
        "to visualize milestones in a creative way",
      ]
    },
    // Other milestones...
  ];

  return (
    <Box>
      <svg ref={ref} width="100%" height="1000" xmlns="http://www.w3.org/2000/svg">
        {milestonesDetails.map((milestone, index) => {
          const cy = 50 + index * 200; // Calculate the Y position for each milestone
          return (
            <React.Fragment key={`milestone-${index}`}>
              {/* Milestone Circle */}
              <circle cx="50" cy={cy} r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />

              {/* Milestone Number */}
              <text x="50" y={cy} fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">{index + 1}</text>

              {/* Milestone Text Details */}
              {milestone.textLines.map((line, lineIndex) => (
                <text
                  key={`detail-${index}-${lineIndex}`}
                  x={70}
                  y={cy + circleRadius + lineIndex * 15 + 20}
                  fontSize="15"
                  fill="#87209e"
                  textAnchor="start"
                >
                  {line}
                </text>
              ))}

              {/* Clickable Link */}
              {milestone.link && (
                <a href={milestone.link} target="_blank" style={{ textDecoration: 'none' }}>
                  <text
                    x={70}
                    y={(cy + circleRadius + milestone.textLines.length * 15 + 20) + (milestone.textLines.length * 15)}
                    fontSize="15"
                    fill="#87209e"
                    textAnchor="start"
                  >
                    {milestone.link}
                  </text>
                </a>
              )}

              {/* Date Text Detail */}
              <text
                x={70}
                y={cy + circleRadius + milestone.textLines.length * 15 + 35}
                fontSize="15"
                fill="#87209e"
                textAnchor="start"
              >
                {milestone.date}
              </text>

              {/* Connect to Next Milestone if Not the Last One */}
              {(index < milestonesDetails.length - 1) && (
                <line className={lineClassName} x1="50" y1={cy + circleRadius + gap} x2="50" y2={cy + 200 - circleRadius - gap} stroke="#87209e" strokeWidth="2" />
              )}

              {/* Render ThreeScene as a milestone */}
              {(index === 2) && (
                <foreignObject x={0} y={cy - 75} width="100%" height="150">
                  <ThreeScene />
                </foreignObject>
              )}
            </React.Fragment>
          );
        })}
      </svg>
    </Box>
  );
};
