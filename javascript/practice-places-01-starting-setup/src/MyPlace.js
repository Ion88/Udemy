import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);

    const headerTitle = document.querySelector("header h1");
    headerTitle.textContent = address;
  }
}

const url = new URL(location.href);
const queryParam = url.searchParams;
// const coords = {
//   lat: +queryParam.get("lat"),
//   lng: +queryParam.get("lng"),
// };
// const address = queryParam.get("address");
const locId = queryParam.get("location");
fetch("http://localhost:3000/location/" + locId)
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Could not find location!");
    }
    return response.json();
  })
  .then((data) => {
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch((err) => {
    alert(err.message);
  });
