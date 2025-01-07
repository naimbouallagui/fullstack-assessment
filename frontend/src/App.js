import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [industries, setIndustries] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      axios.get("/api/companies").then((response) => {
        const grouped = response.data.reduce((acc, company) => {
          company.industries.forEach((industry) => {
            if (!acc[industry.name]) acc[industry.name] = [];
            if (!acc[industry.name].find((c) => c.name === company.name))
              acc[industry.name].push(company);
          });
          return acc;
        }, {});
        setIndustries(grouped);
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-8">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-wrap justify-center gap-4">
      {Object.keys(industries || {}).map((key) => {
        return (
          <Card
            key={key}
            industry={key}
            companies={industries[key]}
          />
        );
      })}
    </div>
  );
};

export default App;
