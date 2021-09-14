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
const coords = {
  lat: +queryParam.get("lat"),
  lng: +queryParam.get("lng"),
};
const address = queryParam.get("address");
new LoadedPlace(coords, address);
