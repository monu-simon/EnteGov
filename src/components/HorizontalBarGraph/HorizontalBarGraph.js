import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const HorizontalBarGraph = ({ data }) => {

    const mem = data[0];
    console.log(mem)

  useEffect(() => {
    const ctx = document.getElementById('horizontal-bar-graph');
    let chart = null;

    if (ctx) {
        // Destroy any existing chart
        if (Chart.instances[0]) {
          Chart.instances[0].destroy();
        }

    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Actual Expenditure Incurred', 'Unspent Amount'],
        datasets: [{
          label: 'Amount',
          data: [mem.ActualExpenditureIncurred, mem.UnspentAmount],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Red color for Actual Expenditure Incurred
            'rgba(54, 162, 235, 0.5)',  // Blue color for Unspent Amount
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}
    return () => {
        // Cleanup function to destroy the chart when the component unmounts
        if (chart) {
          chart.destroy();
        }
      };
  }, [data]);

  return (
    <div className='py-4'>
        <h3>Total G.O.I MP Fund Released (in Cr):  ₹ {mem.TotalGOIRelease}</h3>
      <canvas id="horizontal-bar-graph"></canvas>
    </div>
  );
};

export default HorizontalBarGraph;
