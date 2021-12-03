// make array of substrings from string
export function splitText(string, char) {
  return string ? string?.split(char) : [];
}

// remove unnecesssary characters and remove the first char if #
export function fixTagName(tagName) {
  const fixedTagname =
    tagName.charAt(tagName.length - 1) === "?"
      ? tagName.substr(0, tagName.length - 1)
      : tagName;
  return fixedTagname.charAt(0) === "#"
    ? fixedTagname.substring(1)
    : fixedTagname;
}

export function generateCountriesOptions(countriesList) {
  let countriesOptions = [];
  countriesList &&
    countriesList.forEach((category) => {
      countriesOptions.push({
        label: category.name,
        value: category.code,
        id: category.id,
      });
    });
  return countriesOptions;
}

export function getCountryById(countryId, countries) {
  return countries.length > 0 && countryId
    ? countries.filter((country) => country.id === countryId)[0]
    : { label: "Germany", value: "DE", id: 55 };
}

// checks objects for emptyness
export function isObjectEmpty(obj) {
  const keys = Object.keys(obj);
  return !(keys.length > 0);
}

// generate unique ID
export function generateUID() {
  return Math.floor(Math.random() * 10000);
}

// cut text
export function cutText(str, length) {
  if (str.length > length) {
    return `${str.slice(0, length)}...`;
  }
  return str;
}
