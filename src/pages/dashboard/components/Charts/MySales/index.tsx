'use client';
import { useTheme } from 'styled-components';
import { StyledMySalesChart } from './style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const MySalesChart = () => {
  const theme = useTheme();

  return (
    <StyledMySalesChart>
      <h3>Sales</h3>
      <div className="chart">
        <CircularProgressbar
          value={77}
          text={`${77}%`}
          styles={buildStyles({
            rotation: 0.3,
            pathColor: theme.colors.secondary,
            textColor: theme.colors.secondary,
            trailColor: theme.colors.border,
            backgroundColor: '#41FFC6',
          })}
          strokeWidth={15}
        />
        <span>More than last week</span>
      </div>
    </StyledMySalesChart>
  );
};

export default MySalesChart;
