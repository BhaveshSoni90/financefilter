import React, { useState } from 'react';

const Filter = ({ setFilters, setSorting }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [revenueRange, setRevenueRange] = useState({ min: '', max: '' });
  const [netIncomeRange, setNetIncomeRange] = useState({ min: '', max: '' });

  const handleFilterChange = () => {
    setFilters({ dateRange, revenueRange, netIncomeRange });
  };

  const handleSortChange = (field) => {
    setSorting((prevState) => ({
      sortField: field,
      sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        <label className="text-gray-700 font-semibold">Date Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Start Year"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="number"
            placeholder="End Year"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/3">
        <label className="text-gray-700 font-semibold">Revenue Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min Revenue"
            value={revenueRange.min}
            onChange={(e) => setRevenueRange({ ...revenueRange, min: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="number"
            placeholder="Max Revenue"
            value={revenueRange.max}
            onChange={(e) => setRevenueRange({ ...revenueRange, max: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/3">
        <label className="text-gray-700 font-semibold">Net Income Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min Net Income"
            value={netIncomeRange.min}
            onChange={(e) => setNetIncomeRange({ ...netIncomeRange, min: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="number"
            placeholder="Max Net Income"
            value={netIncomeRange.max}
            onChange={(e) => setNetIncomeRange({ ...netIncomeRange, max: e.target.value })}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-full mt-4 md:mt-0">
        <button
          onClick={handleFilterChange}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply Filters
        </button>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleSortChange('date')}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sort by Date
          </button>
          <button
            onClick={() => handleSortChange('revenue')}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sort by Revenue
          </button>
          <button
            onClick={() => handleSortChange('netIncome')}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sort by Net Income
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
