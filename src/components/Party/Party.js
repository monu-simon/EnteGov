import axios from 'axios';
import { Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { useLoading } from '../Context/LoadingContext';

const Party = () => {
    const [parties, setParties] = useState([]);
    const [total, setTotal] = useState(0);
    const {toggleLoading} = useLoading();

    useEffect(() => {
        toggleLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/party');
                const sortedParties = response.data.sort((a, b) => b.count - a.count);
                setParties(sortedParties);
                toggleLoading(false);
            } catch (error) {
                console.error('Error fetching party data:', error);
                toggleLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let chartInstance = null;
        if (parties.length > 0) {
            const partyNames = parties.map(party => party.partyFname);
            const partyCounts = parties.map(party => party.count);
            setTotal(partyCounts.reduce((acc, curr) => acc + curr, 0));

            const ctx = document.getElementById('party-chart');
            if (chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: partyNames,
                    datasets: [{
                        label: 'Party Count',
                        data: partyCounts,
                        backgroundColor: [
                            'rgba(255, 153, 51, 1)',
                            'rgba(0, 112, 187, 1)',
                            'rgba(227, 28, 37, 1)',
                            'rgba(9, 111, 80, 1)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const partyName = context.label || '';
                                    const count = context.raw || 0;
                                    const percentage = ((count / total) * 100).toFixed(2);
                                    return `${partyName}: ${count} (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
        }
        return () => {
            // Clean up: destroy chart instance
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [parties, total]);

    return (
        <div className="container mt-5">
            <div className="party-list">
                <div className="col-md-6">
                    <div className="chart-container">
                        <h2 className="mb-4">Top 10 Parties Chart</h2>
                        <canvas id="party-chart"></canvas>
                    </div>
                </div>
                <h2 className="mb-4">Statistical  Information</h2>
                <div className="table-responsive" style={{height: '500px'}}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Party Full Name</th>
                                <th scope="col">Short Name</th>
                                <th scope="col">No of Members</th>
                                <th scope="col">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parties.map((party, index) => (
                                <tr key={index}>
                                    <td>{party.partyFname}</td>
                                    <td>{party.partySname}</td>
                                    <td>{party.count}</td>
                                    <td>{((party.count / total) * 100).toFixed(2)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Party;
