import React from "react";

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
const Card = ({ industry, companies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-80 py-6">
      <div className="px-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold mb-4">
            {capitalizeWords(industry)}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{companies.length}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2">Name</p>
          <p className="text-sm text-gray-600 mb-2">Total jobs available</p>
        </div>
        <hr className="mb-3" />
      </div>
      <div className="h-80 overflow-x-auto px-6">
        {companies.map((company) => (
          <div key={`${industry} ${company.name}`} className="py-2 flex items-center">
            <div className="flex justify-between w-full">
              <span>{company.name}</span>
              <span className="text-gray-800 font-medium">
                {company.total_jobs_available}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
