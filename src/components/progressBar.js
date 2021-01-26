import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './progressBar.scss';

const ProgressBar = props => {
  const [offSet, setoffSet] = useState(0);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  let { size, progress, strokeWidth, circleOneStroke, circleTwoStroke, fontSize, fontColor, fontFamily, transitionTime } = props;
  size = size >= 100 ? size : 100;
  const center = size / 2;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffSet = ((100 - progress) / 100) * circumference;
    setoffSet(progressOffSet);
    circleRef.current.style = `transition: stroke-dashoffset ${transitionTime}s ease-in-out`;
  }, [setoffSet, progress, circumference, offSet, transitionTime]);
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
        <text
          x={`${center}`}
          y={`${center}`}
          fill={fontColor}
          fontSize={fontSize}
          ref={textRef}
          fontFamily={fontFamily}
          className="circle-text">
          {progress}%
                </text>
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  circleOneStroke: PropTypes.string,
  circleTwoStroke: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  transitionTime: PropTypes.number
}

ProgressBar.defaultProps = {
  progress: 20,
  size: 200,
  strokeWidth: 15,
  circleOneStroke: '#d9edfe',
  circleTwoStroke: '#7ea9e1',
  fontSize: '1em',
  fontColor: '#000',
  fontFamily:"Arial, sans-serif",
  transitionTime: 0.8
}

export default ProgressBar;
