<template>
  <div>
    <h1>FARM emblem</h1>
    <h2>Step {{stepCount}}</h2>
    <table v-for="(row,rowIndex) in tableData" v-bind:key="rowIndex">
      <tr v-for="(item,index) in row" v-bind:key="`${index}-${rowIndex}`">
        <td>{{tableData[rowIndex][index]}}</td>
      </tr>
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
export default {
  name: "MainPage",

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
      ]
    };
  },

  created() {
    // random enemies position
    let countEnemies = 0;
    while (countEnemies != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "b") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "L";
        countEnemies++;
      }
    }

    countEnemies = 0;
    while (countEnemies != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "S";
        countEnemies++;
      }
    }

    countEnemies = 0;
    while (countEnemies != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "A";
        countEnemies++;
      }
    }

    //random allies position
    countEnemies = 0;
  },

  methods: {
    startSimulation: function() {
      this.isStartSimulation = !this.isStartSimulation;
    },
    setNext: function() {
      this.tableData[3][3] = "";
      this.stepCount += 1;
    },
    setBack: function() {
      this.tableData[3][3] = "";
      this.stepCount -= 1;
    }
  }
};
</script>

<style scoped>
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
}
#menu {
  margin-top: 15px;
}
</style>
