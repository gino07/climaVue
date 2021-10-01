<template>
  <div class="weather">
    <h2>Weather</h2>
    <input v-model="newCity" type="text" />
    <button @click="addCity" id="add">Agregar ciudad</button>
    <br />
    <br />
    <br />
    <select @change="getWeather" name="" v-model="selectedCity">
      <option v-for="city in cities" :key="city"> {{ city }}</option>
    </select>
    <p>{{ selectedCity }}: {{ weather }}</p>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "Weather",
  data() {
    return {
      cities: ["London", "Rosario"],
      newCity: "",
      weather: "",
      selectedCity: "",
    };
  },
  methods: {
    async getWeather() {
      let { data } = await api.getWeather(this.selectedCity);

      this.weather = data.weather[0].description;
    },
    async addCity() {
      let res = await api.getWeather(this.newCity);
      let est = true;

      for (let index = 0; index < this.cities.length; index++) {
        if (this.cities[index] === this.newCity) {
          est = false;
        }
      }

      if (res.status === 200 && est) {
        this.cities.push(this.newCity);
      }
      this.newCity = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
