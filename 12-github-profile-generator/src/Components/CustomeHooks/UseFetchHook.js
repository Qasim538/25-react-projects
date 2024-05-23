import React, { useEffect, useState } from "react";

const UseFetchHook = (url, options = {}) => {
  // 3 states

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);

      // console.log(data);
    } catch (e) {
      setError(`$(e). Some Error has occured.`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    pending,
  };
};

export default UseFetchHook;
