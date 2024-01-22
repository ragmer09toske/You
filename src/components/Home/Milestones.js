import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

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
    {
      date: "2013 October 06",
      textLines: [
        "Secured First Place in a National Science Fair",
        "Category: Technology",
        "Developed an innovative smart home utilizing",
        "Internet of Things (IoT) technology for",
        "seamless connectivity",
        " ",
        "I was a student at:",
        "New Millinium"
      ]
    },
    {
      date: "2018 November 12",
      textLines: [
        "Won First Place with My Partner",
        "Khotso Mphasi,",
        "at the Inaugural Future Engineers",
        "Competition at University of",
        "Lerotholi Polytechnic"
      ]
    },
    {
      date: "2023 July 08",
      textLines: [
        "Featured by UNDP to sit among the greatest",
        "leaders in my country as one of the panel",
        "members and as the Innovator of my creative",
        "nation.",
        "You can watch the video on this link:",
        "https://youtu.be/qo_wjWTjFHE?si=n8Gg_gjFSED3gvqE"
      ]
    },
    {
      date: "2026 May 16",
      textLines: [
        "Received ‘Young Innovator’ award",
        "for contributions to open-source"
      ]
    },
    {
      date: "2027 August 23",
      textLines: [
        "Co-founded NeuraNet Inc.",
        "advancing neural network research"
      ]
    }
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
            </React.Fragment>
          );
        })}
      </svg>
    </Box>
  );
};
