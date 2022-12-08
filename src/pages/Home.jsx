import Form from "../components/Form";
import Select from "../components/Select";
import CountryCard from "../components/CountryCard";

const Home = ({ countries, filteredCountries, filterCountries }) => {
  return (
    <>
      <div className=" w-full mt-6 px-4 md:px-16 flex flex-col justify-between gap-10 md:flex-row">
        <Form countries={countries} />
        <Select filterCountries={filterCountries} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10 mt-10 lg:px-16 mx-auto justify-center">
        {filteredCountries.map((item) => (
          <CountryCard key={item.name.common} country={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
