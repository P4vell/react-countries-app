import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/react-countries-app/country/${country.name.common}`}>
      <div className="rounded-div bg-secondary w-full overflow-hidden">
        <div className="w-full h-[200px] md:h-[250px]">
          <img
            src={country.flags.png}
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 font-bold">
          <p className="text-xl">{country.name.common}</p>
          <div className="text-[14px] py-4">
            <p>
              Population:{" "}
              <span className="font-normal">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p>
              Region: <span className="font-normal">{country.region}</span>
            </p>
            <p>
              Capital: <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
