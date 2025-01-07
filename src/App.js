import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import Filter from './Filter';

const App = () => {
  const [filters, setFilters] = useState({
    dateRange: { start: '', end: '' },
    revenueRange: { min: '', max: '' },
    netIncomeRange: { min: '', max: '' },
  });
  const [sorting, setSorting] = useState({ sortField: '', sortOrder: 'asc' });

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Apple Financial Data Filtering</h1>
        
        {/* Filters Section */}
        <div className="mb-8">
          <Filter setFilters={setFilters} setSorting={setSorting} />
        </div>
        
        {/* Data Fetcher Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <DataFetcher filters={filters} sorting={sorting} />
        </div>
      </div>
    </div>
  );
};

export default App;
