const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (allcountry) => {
  const allCountiesHTML = allcountry.map((country) => getCountryHTML(country));
  const container = document.getElementById("countries");
  container.innerHTML = allCountiesHTML.join(" ");
};

const getCountryHTML = ({ name, flags, area, region }) => {
  // option 1 : pass destructing asa parameter

  return `
    <div class="country">
    <h2>${name}<h2>
    <p>Area: ${area}<p>
    <p>Continet: ${region}<p>
    <img src="${flags.png}">
    </div>
    `;
};

// const getCountryHTML = (country) => {
//   // option 1 : just pass full object as a parameter and use then after destructuring
//   const { name, flags } = country;
//   return `
//     <div class="country">
//     <h2>${name}<h2>
//     <img src="${flags.png}">
//     </div>
//     `;
// };

// const getCountryHTML = (country) => {
//   // option 1 : just pass full object as a parameter

//   return `
//     <div class="country">
//     <h2>${country.name}<h2>
//     <img src="${country.flags.png}">
//     </div>
//     `;
// };

loadCountries();
