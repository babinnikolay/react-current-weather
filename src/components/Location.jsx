import { useEffect, useState } from "react";

function Location({ city, country }) {
  const [name, setName] = useState("Undefined");

  useEffect(() => {
    if (!country) return;

    async function getCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${country}`,
      );

      const data = await response.json();
      setName(data[0]?.name.common);
    }

    getCountry();
  }, [country]);

  return (
    <div className="location">
      <h2>{city}</h2>
      <p>{name}</p>
    </div>
  );
}

export default Location;
