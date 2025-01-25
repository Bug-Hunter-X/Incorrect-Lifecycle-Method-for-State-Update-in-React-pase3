```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data here using fetch or similar.
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once after mount

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render data here */}
      {JSON.stringify(data)}
    </div>
  );
}
export default MyComponent;
```