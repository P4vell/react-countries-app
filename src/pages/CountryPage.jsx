import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";

const CountryPage = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const API_URL = `https://restcountries.com/v3.1/name/${name}`;

  const navigateToBorder = (id) => {
    const API_URL = `https://restcountries.com/v3.1/alpha?codes=${id}`;
    axios.get(API_URL).then((response) => {
      setCountry(response.data[0]);
    });
  };

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setCountry(response.data[0]);
    });
  }, [API_URL]);

  return (
    <div className="flex justify-center items-center lg:h-[800px] p-8 relative">
      <button
        className="rounded-div bg-secondary flex items-center px-6 py-1 absolute top-8 left-8"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft size={20} />
        <span className="ml-2">Back</span>
      </button>

      <div className="grid lg:grid-cols-2 mt-14 gap-12 items-center justify-center">
        <div>
          <img src={country.flags?.png} alt="/" className="" />
        </div>

        <div className="font-bold">
          <p className="text-2xl lg:text-3xl">{country.name?.common}</p>

          <div className="py-6">
            <p>
              Native Name:{" "}
              <span className="font-normal">
                {country.name?.nativeName
                  ? Object.values(country.name?.nativeName)[0].official
                  : null}
              </span>
            </p>
            <p>
              Population:{" "}
              <span className="font-normal">
                {country.population?.toLocaleString()}
              </span>
            </p>
            <p>
              Region: <span className="font-normal">{country?.region}</span>
            </p>
            <p>
              Sub Region:{" "}
              <span className="font-normal">{country?.subregion}</span>
            </p>
            <p>
              Capital: <span className="font-normal">{country?.capital}</span>
            </p>
          </div>

          <div>
            <p>
              Top Level Domain:{" "}
              <span className="font-normal">{country?.tld}</span>
            </p>
            <p>
              Currencies:{" "}
              <span className="font-normal">
                {country?.currencies
                  ? Object.values(country.currencies).map(
                      (currency) => currency.name
                    )
                  : null}
              </span>
            </p>
            <p>
              Languages:{" "}
              <span className="font-normal">
                {country?.languages
                  ? Object.values(country.languages).join(", ")
                  : null}
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row mt-8">
            <p className="mr-4">Border Countries:</p>

            <div className="flex items-center flex-wrap gap-2 py-4 md:pt-0">
              {country?.borders
                ? country.borders.map((border, id) => (
                    <button
                      key={id}
                      className="rounded-div font-normal bg-secondary px-8 py-1 text-sm"
                      onClick={() => navigateToBorder(border)}
                    >
                      {border}
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
