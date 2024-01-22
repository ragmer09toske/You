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

  // This function generates the repeated text for each milestone.
  const renderMilestoneText = (cx, cy, milestoneNumber) => (
    <>
      {/* Milestone number */}
      <text x={cx} y={cy} fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">{milestoneNumber}</text>

      {/* Detail text */}
      <text x={cx + 20} y={cy + circleRadius + 20} fontSize="15" fill="#87209e" textAnchor="start">Graduated from university</text>
      <text x={cx + 20} y={cy + circleRadius + 35} fontSize="15" fill="#87209e" textAnchor="start">2023 October 06</text>
      <text x={cx + 20} y={cy + circleRadius + 55} fontSize="15" fill="#87209e" textAnchor="start">Started job at Holborton</text>
      <text x={cx + 20} y={cy + circleRadius + 70} fontSize="15" fill="#87209e" textAnchor="start">as Software Engineer</text>
      <text x={cx + 20} y={cy + circleRadius + 85} fontSize="15" fill="#87209e" textAnchor="start">October 10, 2023</text>
    </>
  );

  return (
    <Box>
      <svg ref={ref} width="100%" height="2000" xmlns="http://www.w3.org/2000/svg">
        {/* Consistently generate milestone circles and text */}
        {[50, 250, 450, 650, 850].map((cy, index) => (
          <React.Fragment key={`milestone-${index}`}>
            <circle cx="50" cy={cy} r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
            {renderMilestoneText(50, cy, index + 1)}
            {/* Connect to next milestone if not the last one */}
            {index < 4 && (
              <line className={lineClassName} x1="50" y1={cy + circleRadius + gap} x2="50" y2={cy + 200 - circleRadius - gap} stroke="#87209e" strokeWidth="2" />
            )}
          </React.Fragment>
        ))}
      </svg>
    </Box>
  );
};
