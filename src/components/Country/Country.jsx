import "./Country.css";

const Country = ({ country }) => {
  // console.log(country);
  if (!country) return null;

  const { name, flags, population, area } = country; //destructuring

  return (
    <div className="country">
      <h3>Name: {name?.common || "No Name Available"}</h3>
      <img src={flags?.png} alt={`${name} flag`} />
      <h3>Short Code: {country?.cca3 || "Not Found the Short Code"} </h3>
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
    </div>
  );
};

export default Country;
