import React, { useEffect, useState, useRef } from 'react';
import './progressBar.scss'; 

const ProgressBar = props => {
  const [ offSet, setoffSet ] = useState(0);
  const circleRef = useRef(null);
  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffSet = ((100 - progress) / 100) * circumference;
    setoffSet(progressOffSet);
    circleRef.current.style='transition: all 2s ease-in-out';
  }, [setoffSet, progress, circumference, offSet]);
  return (
    <div>
      <svg className='circular-chart' width={size} height={size}>
        <circle
          className='circular-bg'
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className='circle'
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offSet}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
