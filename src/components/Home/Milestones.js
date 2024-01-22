import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

export const Milestones = () => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null); // Create a ref for the SVG container
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimate(true); // Trigger the animation when in view
            observer.disconnect(); // Optionally disconnect after animating
          }
        },
        {
          threshold: 0.1, // Trigger when at least 10% of the target is visible
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current); // Observe the SVG container
      }
  
      return () => {
        observer.disconnect(); // Clean up the observer on component unmount
      };
    }, []);

  const lineClassName = animate ? 'drawLineAnimation' : '';

  const circleRadius = 20;
  const circleStrokeWidth = 3;
  const gap = circleStrokeWidth / 2; // Half of the stroke width.

  return (
    <Box>
      <svg ref={ref} width="100%" height="1000" xmlns="http://www.w3.org/2000/svg">
        {/* Milestone 1 */}
        <circle cx="50" cy="50" r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
        <text x="50" y="50" fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">1</text>

        {/* Graduation detail moved to the right */}
        <text x="70" y={50 + circleRadius + 20} fontSize="15" fill="#87209e" textAnchor="start">Graduated from university</text>
        <text x="70" y={50 + circleRadius + 35} fontSize="15" fill="#87209e" textAnchor="start">2023 October 06</text>

        {/* Job detail moved to the right */}
        <text x="70" y={50 + circleRadius + 55} fontSize="15" fill="#87209e" textAnchor="start">Started job at Holborton</text>
        <text x="70" y={50 + circleRadius + 70} fontSize="15" fill="#87209e" textAnchor="start">as Software Engineer</text>
        <text x="70" y={50 + circleRadius + 85} fontSize="15" fill="#87209e" textAnchor="start">October 10, 2023</text>

        {/* Connect to next milestone */}
        <line className={lineClassName} x1="50" y1={50 + circleRadius + gap} x2="50" y2={250 - circleRadius - gap} stroke="#87209e" strokeWidth="2"/>

        {/* Milestone 2 */}
        <circle cx="50" cy="250" r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
        <text x="50" y="250" fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">2</text>

        {/* Graduation detail for Milestone 2 moved to the right */}
        <text x="70" y={250 + circleRadius + 20} fontSize="10" fill="#87209e" textAnchor="start">Graduated from university</text>
        <text x="70" y={250 + circleRadius + 35} fontSize="10" fill="#87209e" textAnchor="start">2023 October 06</text>

        {/* Job detail for Milestone 2 moved to the right */}
        <text x="70" y={250 + circleRadius + 55} fontSize="10" fill="#87209e" textAnchor="start">Started job at Holborton</text>
        <text x="70" y={250 + circleRadius + 70} fontSize="10" fill="#87209e" textAnchor="start">as Software Engineer</text>
        <text x="70" y={250 + circleRadius + 85} fontSize="10" fill="#87209e" textAnchor="start">October 10, 2023</text>

        {/* Milestone 3 */}
        <circle cx="50" cy="450" r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
        <text x="50" y="450" fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">3</text>
        <line className={lineClassName} x1="50" y1={450 + circleRadius + gap} x2="50" y2={650 - circleRadius - gap} stroke="#87209e" strokeWidth="2"/>

        {/* Milestone 4 */}
        <circle cx="50" cy="650" r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
        <text x="50" y="650" fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">4</text>
        <line className={lineClassName} x1="50" y1={650 + circleRadius + gap} x2="50" y2={850 - circleRadius - gap} stroke="#87209e" strokeWidth="2"/>

        {/* Milestone 5 */}
        <circle cx="50" cy="850" r={circleRadius} stroke="#87209e" strokeWidth={circleStrokeWidth} fill="#87209e28" />
        <text x="50" y="850" fontSize="12" textAnchor="middle" fill="#87209e" dominantBaseline="middle">5</text>
      </svg>
    </Box>
  );
}