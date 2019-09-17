<template>
  <div>
    <h1>FARM emblem</h1>
    <h2>Step {{stepCount}}</h2>
    <table>
      <tbody>
        <tr v-for="(row,rowIndex) in tableData" v-bind:key="rowIndex">
          <td v-for="(item,index) in row" v-bind:key="`${index}-${rowIndex}`">
            <div :style="[paint(item)]">
              <Character :name="item"></Character>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="menu">
      <div v-if="isStartSimulation">
        <button v-if="stepCount > 0" @click="setBack">back</button>
        <button v-if="checkEnd" @click="setNext">next</button>
        <button @click="reset">Reset</button>
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
      startState: [],
      tableData: [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""]
      ]
    };
  },

  created() {
    preloadCharacter(this.tableData, this.position);
  },

  computed: {
    checkEnd: function() {
      if (this.searchType == "bread first search") {
        return this.stepCount < window.BFS.action.length;
      } else if (this.searchType == "depth first search") {
        return this.stepCount < window.DFS.action.length;
      }
      return false;
    }
  },

  methods: {
    paint: function(item) {
      if (item == " " || item == "" || item == "#") {
        return;
      }
      if (item == item.toUpperCase()) {
        return { "background-image": "linear-gradient(DeepSkyBlue, blue)" };
      }
      if (item == item.toLowerCase()) {
        return { "background-image": "linear-gradient(yellow, red)" };
      }
    },
    startSimulation: function() {
      this.startState = this.tableData;
      this.isStartSimulation = !this.isStartSimulation;
      if (this.searchType == "bread first search") {
        window.BFS.findPath(this.tableData);
      } else if (this.searchType == "depth first search") {
        window.DFS.findPath(this.tableData);
      }
    },
    setNext: function() {
      this.stepCount += 1;
      let table;
      if (this.searchType == "bread first search") {
        table = window.BFS.next();
      } else if (this.searchType == "depth first search") {
        table = window.DFS.next();
      }
      this.tableData = table;
    },
    setBack: function() {
      this.stepCount -= 1;
      let table;
      if (this.searchType == "bread first search") {
        table = window.BFS.back();
      } else if (this.searchType == "depth first search") {
        table = window.DFS.back();
      }
      this.tableData = table;
    },
    reset: function() {
      this.stepCount = 0;
      this.tableData = this.startState;
      this.isStartSimulation = !this.isStartSimulation;
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
  width: 65px;
  height: 65px;
  background-image: url("../assets/terrain/grasstile.png");
}
#menu {
  margin-top: 15px;
}
</style>
