import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Form = ({ countries }) => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const searchCountry = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const searchedCountry = countries.find(
      (country) =>
        country.name.common.toLowerCase() === inputValue.toLowerCase()
    );
    if (!searchedCountry) {
      alert("Country not found");
      return;
    }

    navigate(`/country/${searchedCountry.name.common}`);
  };

  return (
    <form
      className="rounded-div w-full max-w-[400px] h-14 text-secondary bg-secondary overflow-hidden relative"
      onSubmit={searchCountry}
    >
      <AiOutlineSearch
        size={25}
        className="absolute left-4 top-[50%] translate-y-[-50%]"
      />
      <input
        type="text"
        placeholder="Search for a country"
        className="w-full h-full pl-16 text-sm bg-secondary outline-none"
        ref={inputRef}
      />
    </form>
  );
};

export default Form;
