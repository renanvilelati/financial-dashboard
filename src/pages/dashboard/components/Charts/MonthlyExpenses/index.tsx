import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { StyledMonthlyExpensesChart } from './style';
import { dataMonthlyExpenses } from '../../../../../mock/dashboard';

const MonthlyExpensesChart = () => {

  const renderLegend = () => {
    return (
      <ul>
        {dataMonthlyExpenses.map((entry, index) => (
          <li key={`item-${index}`} >
            <div>
              <span
                className="legend-icon"
                style={{ backgroundColor: entry.stroke }}
              />
              {` ${entry.value}`}
            </div>
            <span className="expense-name">{`${entry.name}`}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <StyledMonthlyExpensesChart>
      <h3>Monthly Expenses</h3>

      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: 'transparent',
                borderRadius: '8px',
                border: 0,
                backdropFilter: 'blur(3px)',
                textTransform: 'capitalize'
              }}
              itemStyle={{
                color: '#FFF',
                backgroundColor: '#25253490',
                border: '1px solid #373755',
                borderRadius: '8px',
                padding: '0.5rem 0',
                textAlign: 'center'
              }}
            />
            <Legend
              layout="radial"
              height={140}
              content={renderLegend}
            />
            <Pie
              data={dataMonthlyExpenses}
              dataKey="value"
              cx="50%"
              cy="50%"
              nameKey="name"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </StyledMonthlyExpensesChart>
  );
};

export default MonthlyExpensesChart;
