import React, { useEffect, useState } from "react";

export default function LazyLoadedComponent() {
  const remote_api = "https://api.spacexdata.com/v4/crew";
  const [crewData, setCrewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const resp = await fetch(remote_api);

        if (!resp.ok) {
          throw new Error("Request failed with status: " + resp.status);
        }

        const result = await resp.json();
        console.log(`result ${JSON.stringify(result)}`);
        setCrewData(result);
      } catch (error) {
        setError(error.message);
      }
    }

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!crewData) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <ul>
        {crewData.map((crew) => (
          <li key={crew.id}>
            {crew.name} --> {crew.agency}
          </li>
        ))}
      </ul>
    </div>
  );
}
