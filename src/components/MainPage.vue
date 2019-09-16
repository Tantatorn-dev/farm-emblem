<template>
  <div>
    <h1>FARM emblem</h1>
    <h2>Step {{stepCount}}</h2>
    <table>
      <tbody>
        <tr v-for="(row,rowIndex) in tableData" v-bind:key="rowIndex">
          <td
            v-for="(item,index) in row"
            :style="[paint(item)]"
            v-bind:key="`${index}-${rowIndex}`"
          >
            <Character :name="item"></Character>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="menu">
      <div v-if="isStartSimulation">
        <button @click="setBack">back</button>
        <button @click="setNext">next</button>
      </div>
      <div v-else>
        <form>
          <input
            type="radio"
            name="search type"
            value="bread first search"
            checked
            v-model="searchType"
          /> Bread First Search
          <input
            type="radio"
            name="search type"
            value="depth first search"
            v-model="searchType"
          /> Depth First Search
        </form>
        <button @click="startSimulation">Start Simulation!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { preloadCharacter } from "../lib/preload";
import Character from "./character/Character";

export default {
  name: "MainPage",

  components: {
    Character
  },

  data() {
    return {
      searchType: "bread first search",
      isStartSimulation: false,
      stepCount: 0,
      tableData: [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
      ],
    };
  },

  created() {
    preloadCharacter(this.tableData, this.position);
  },

  methods: {
    paint: function(item) {
      if (item == " " || item == "") {
        return;
      }
      if (item == item.toUpperCase()) {
        return { background: "blue" };
      }
      if (item == item.toLowerCase()) {
        return { background: "red" };
      }
    },
    startSimulation: function() {
      this.isStartSimulation = !this.isStartSimulation;
      window.BFS.findPath(this.tableData);
    },
    setNext: function() {
      this.stepCount += 1;
      let table = window.BFS.next();
      this.tableData = table;
    },
    setBack: function() {
      this.stepCount -= 1;
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "MedievalSharp", cursive;
  color: #daa520;
}
table {
  display: flex;
  align-items: center;
  justify-content: center;
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 60px;
  height: 60px;
  background-image: url("../assets/terrain/grasstile.png");
}
#menu {
  margin-top: 15px;
}
</style>
