'use client';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { StyledMyBalanceChart } from './style';
import { useTheme } from 'styled-components';
import { dataMyBlance } from '../../../../../mock/dashboard';

const MyBalanceChart = () => {

  const theme = useTheme()

  return (
    <StyledMyBalanceChart>
      <div className="header">
        <h3>My Balance</h3>
        <div className="situation">
          <span className="income">
            <span></span>
            Income
          </span>
          <span className="spend">
            <span></span>
            Spend
          </span>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={dataMyBlance}
            margin={{
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#54E0A5" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#13231C" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5D2AC9" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#1C0A24" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              padding={{ left: 24 }}
            />
            <YAxis tickLine={false} axisLine={false} />
            <CartesianGrid
              stroke={theme.colors.border}
              horizontal={true}
            />{' '}
            <Tooltip
              contentStyle={{
                
                backgroundColor: theme.colors.toolTipBackground,
                borderRadius: '8px',
                border: `1px solid theme.colors.toolTipBorder}`,
                backdropFilter: 'blur(3px)',
                textTransform: 'capitalize',
              }}
            />
            AreatoolTipBackground
            <Area
              type="monotone"
              dataKey="income"
              stroke={theme.colors.secondary}
              fillOpacity={1}
              strokeWidth={2}
              fill="url(#colorIncome)"
            />
            <Area
              type="monotone"
              dataKey="spend"
              stroke={theme.colors.primary}
              strokeWidth={2}
              fill="url(#colorSpend)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StyledMyBalanceChart>
  );
};

export default MyBalanceChart;
