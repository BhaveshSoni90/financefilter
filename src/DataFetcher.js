import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = ({ filters, sorting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { dateRange, revenueRange, netIncomeRange } = filters;
    const { sortField, sortOrder } = sorting;

    const url = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=q7qcHxLCq6bcJfnvGsKqqPoQJp4R0E2O`;

    try {
      const response = await axios.get(url);
      let filteredData = response.data;

      // Apply Date Range Filter
      if (dateRange.start && dateRange.end) {
        filteredData = filteredData.filter((item) => {
          const year = new Date(item.date).getFullYear();
          return year >= dateRange.start && year <= dateRange.end;
        });
      }

      // Apply Revenue Range Filter
      if (revenueRange.min !== undefined && revenueRange.max !== undefined) {
        filteredData = filteredData.filter((item) => {
          return item.revenue >= revenueRange.min && item.revenue <= revenueRange.max;
        });
      }

      // Apply Net Income Range Filter
      if (netIncomeRange.min !== undefined && netIncomeRange.max !== undefined) {
        filteredData = filteredData.filter((item) => {
          return item.netIncome >= netIncomeRange.min && item.netIncome <= netIncomeRange.max;
        });
      }

      // Apply Sorting
      if (sortField && sortOrder) {
        filteredData = filteredData.sort((a, b) => {
          if (sortField === 'date') {
            return sortOrder === 'asc'
              ? new Date(a.date) - new Date(b.date)
              : new Date(b.date) - new Date(a.date);
          } else if (sortField === 'revenue') {
            return sortOrder === 'asc' ? a.revenue - b.revenue : b.revenue - a.revenue;
          } else if (sortField === 'netIncome') {
            return sortOrder === 'asc' ? a.netIncome - b.netIncome : b.netIncome - a.netIncome;
          }
          return 0;
        });
      }

      setData(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters, sorting]);

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Revenue</th>
            <th className="border border-gray-300 p-2">Net Income</th>
            <th className="border border-gray-300 p-2">Gross Profit</th>
            <th className="border border-gray-300 p-2">EPS</th>
            <th className="border border-gray-300 p-2">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.date}>
              <td className="border border-gray-300 p-2">{item.date}</td>
              <td className="border border-gray-300 p-2">${item.revenue.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">${item.netIncome.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">${item.grossProfit.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{item.eps}</td>
              <td className="border border-gray-300 p-2">${item.operatingIncome.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetcher;
