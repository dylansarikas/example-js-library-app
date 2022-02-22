<script>
/* global L */
export default {
  data: function () {
    return {};
  },
  mounted: function () {
    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.VUE_APP_MAP_API_KEY,
    }).addTo(map);
  },
};
</script>

<template>
  <div class="about">
    <h1>This is the about page</h1>
  </div>
  <div id="map"></div>
</template>

<style>
#map {
  height: 180px;
}
</style>
