<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="getCity" />
    <Weather />
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";
import cities from "./services/cities";

export default {
  name: "App",
  components: {
    Weather,
  },
  data() {
    return {
      importedCities: cities,
    };
  },
  methods: {
    getCity() {
      cities.getCity();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
