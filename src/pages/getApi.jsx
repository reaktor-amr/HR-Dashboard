import React, { useState, useEffect } from "react";

function GetApiFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "api_url"; 
  const API_KEY = "api_key"; 

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "GET", // Can be Change method to 'POST', 'PUT', or 'DELETE' if needed
        headers: {
          Authorization: `Bearer ${API_KEY}`, 
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)} {/* Pretty print the data */}
        </pre>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default GetApiFetch;
