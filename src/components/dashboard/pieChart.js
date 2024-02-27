//dataChart.js
import React from 'react';
import PieChartComponent from '../dashboard/pieChartComponent';

const PieChart = ({ datapointA }) => {
  return (
    <>


    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Chart Data</h5>
         <PieChartComponent />
      </div>
    </div>

    </>
  );
};

export default PieChart;