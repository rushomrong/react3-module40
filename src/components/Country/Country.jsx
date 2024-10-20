import "./Country.css";

const Country = ({ country }) => {
  // console.log(country);
  if (!country) return null;

  const { name, flags } = country; //destructuring

  return (
    <div className="country">
      <h3>Name: {name?.common || "No Name Available"}</h3>
      <h3>Short Code: {country?.cca3 || "Not Found the Short Code"} </h3>
      <img src={flags?.png} alt={`${name} flag`} />
    </div>
  );
};

export default Country;
