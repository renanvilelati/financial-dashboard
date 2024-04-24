'use client';
import Navigation from './components/Navigation/Navigation';
import { StyledDashboard } from './style';
import 'react-circular-progressbar/dist/styles.css';
import MyBalanceChart from './components/Charts/MyBalance';
import MySalesChart from './components/Charts/MySales';
import MonthlyExpensesChart from './components/Charts/MonthlyExpenses';
import MyCards from '../../components/MyCards';

const Dashboard = () => {
  return (
    <>
      <StyledDashboard>
        <h2>Overview</h2>

        <MyCards />
        <MyBalanceChart />

        <div className="footer-charts">
          <MonthlyExpensesChart />
          <MySalesChart />
        </div>
      </StyledDashboard>

      <Navigation />
    </>
  );
};

export default Dashboard;
