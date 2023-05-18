import { useState, useEffect } from "react";
import yelp from "../apis/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      await searchApi("food");
    })();
  }, []);

  const searchApi = async (term) => {
    try {
      const response = await yelp("/search", {
        params: {
          limit: 50,
          term,
          location: "vancouver, BC, Canada", // will update request with lat, lon info
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Oops, something went wrong.");
    }
  };
  return [searchApi, results, errorMessage];
};
