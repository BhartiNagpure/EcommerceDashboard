import React, { useState } from 'react';
import Pagination from './Pagination'; // Adjust the path as needed

const YourComponent = () => {
  const itemsPerPage = 3; // Number of items per page
  const totalItems = 9; // Total number of items in your list
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch or update data based on the selected page
  };

  const renderItems = () => {
    // Your existing item rendering logic here

    // For demonstration, let's assume you have an array of items
    const items = [
      // ... your items
    ];

    // Calculate the start and end index based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Display items for the current page
    return items.slice(startIndex, endIndex).map((item, index) => (
      <div key={index} className="sellingDiv">
        {/* Your item content */}
        {/* ... */}
        <hr></hr>
      </div>
    ));
  };

  return (
    <div>
      {renderItems()}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default YourComponent;
