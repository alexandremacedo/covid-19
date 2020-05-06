export default function formatCountryName(countries) {
  return countries.map((country) => {
    // if(country.split("-")){
    if (country === 'R&eacute;union') {
      return 'Réunion';
    } else if (country === 'Cura&ccedil;ao') {
      return 'Curaçao';
    } else if (country === 'S-Korea') {
      return 'South Korea';
    } else if (country === 'Diamond-Princess-') {
      return false;
    } else if (country === 'All') {
      return false;
    }
    const splitCountry = country.split('-');
    const joinCountry = splitCountry.join(' ');

    return joinCountry;
  });
}
