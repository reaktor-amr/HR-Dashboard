import React, { useState, useEffect } from "react";

function PostApiFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const API_URL = "https://api-staging.wellx.ai/api/v1/otp/send-otp";
  const API_URL = "https://api-staging.wellx.ai/api/v1/get_otp"; 
  // const API_KEY = "your_api_key"; 

  const postData = async (newData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST", // Changed to POST method
        headers: {
          "Content-Type": "application/json", // Content-Type header
          //   Authorization: `Bearer ${API_KEY}`, // Authorization header
        },
        body: JSON.stringify(newData), // Added request body with data
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      console.log("Api Successful Run!");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <button>OTP Sending</button>
      ) : (
        <button
          onClick={() =>
            postData({
              user: {
                phone: "+971523033075",
              },
            })
          }
        >
          Send OTP
        </button>
      )}
    </div>
  );
}

export default PostApiFetch;
