//dataChart.js
import React from 'react';
import HorizontalBarChart from '../dashboard/horizontalBarChart';

const DataChart = ({ datapointA, datapointB, datapointC }) => {
  return (
    <>


    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Chart Data {datapointA}</h5>
         <HorizontalBarChart />
        <p className="card-text">{datapointB}</p>
        <p className="card-text">{datapointC}</p>
      </div>
    </div>

    </>
  );
};

export default DataChart;