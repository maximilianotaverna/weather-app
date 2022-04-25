import { useEffect, useState } from "react";

// TODO: move key server side and use token based authentication
const api = {
  key: "ca7fe53f66e624037bd21bfee704fb23",
  base: "https://api.openweathermap.org/data/2.5/",
};

const useFetch = (city) => {
  // TODO: geocode using this url for 5 day forecast - ${api.base}forecast/daily?lat={lat}&lon={lon}&cnt=5&appid=${api.key}
  // http://api.openweathermap.org/geo/1.0/direct?q=Sydney&limit=5&appid=ca7fe53f66e624037bd21bfee704fb23
  // NOTE: openweather buit-in API requests by city name, zip-codes and city id will be deprecated soon.
  const url = `${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    city &&
      fetch(url)
        .then((eResponse) => {
          if (!eResponse.ok) {
            return;
          }
          return eResponse.json();
        })
        .then((result) => {
          setData(result);
          setError(null);
          setPending(false);
        })
        .catch((error) => {
          setError(error.message);
          setPending(false);
        });
  }, [city, url]);
  return { data, pending, error };
};

export default useFetch;
