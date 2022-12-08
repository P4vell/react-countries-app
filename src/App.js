import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ThemeProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const API_URL = "https://restcountries.com/v3.1/all";

  const filterCountries = (filter) => {
    if (filter === "All") return setFilteredCountries(countries);
    setFilteredCountries(
      countries.filter((country) => country.region === filter)
    );
  };

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
    });
  }, [API_URL]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/react-countries-app/"
          element={
            <Home
              countries={countries}
              filteredCountries={filteredCountries}
              filterCountries={filterCountries}
            />
          }
        />
        <Route path="react-countries-app/country/:name" element={<CountryPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
