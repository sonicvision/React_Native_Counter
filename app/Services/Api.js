export const fetchOutlets = () => {
  return fetch(
    "https://raw.githubusercontent.com/adamterlson/react-native-coffee/master/venue-search.json"
  ).then(response => response.json());
};
