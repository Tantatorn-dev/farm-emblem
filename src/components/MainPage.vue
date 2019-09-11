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
            value="depth first search"
            checked
            v-model="searchType"
          /> Depth First Search
          <input
            type="radio"
            name="search type"
            value="depth limited search"
            v-model="searchType"
          /> Depth Limited Search
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

  components:{
    Character
  },

  data() {
    return {
      searchType: "depth first search",
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
        ["", "", "", "", "", "", "", ""]
      ],
      position: {
        L: [0, 0],
        S: [0, 0],
        A: [0, 0],
        l1: [0, 0],
        l2: [0, 0],
        s1: [0, 0],
        s2: [0, 0],
        a1: [0, 0],
        a2: [0, 0]
      }
    };
  },

  created() {
    preloadCharacter(this.tableData, this.position);
  },

  methods: {
    paint: function(item) {
      if (item == "") {
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
    },
    setNext: function() {
      this.stepCount += 1;
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
  width: 50px;
  height: 50px;
  color: white;
}
#menu {
  margin-top: 15px;
}
</style>
