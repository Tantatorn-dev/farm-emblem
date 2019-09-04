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
          >{{tableData[rowIndex][index]}}</td>
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
    let count = 0;
    while (count != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "l";
        count++;
      }
    }

    count = 0;
    while (count != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "s";
        count++;
      }
    }

    count = 0;
    while (count != 2) {
      let randRow = Math.floor(Math.random() * 4);
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        this.tableData[randRow][randCol] = "a";
        count++;
      }
    }

    //random allies position
    count = 0;
    while (count != 3) {
      let randRow = Math.floor(Math.random() * 3) + 5;
      let randCol = Math.floor(Math.random() * 7);
      if (this.tableData[randRow][randCol] != "") {
        continue;
      } else {
        switch (count) {
          case 0:
            this.tableData[randRow][randCol] = "L";
            break;
          case 1:
            this.tableData[randRow][randCol] = "S";
            break;
          case 2:
            this.tableData[randRow][randCol] = "A";
            break;
        }
        count++;
      }
    }
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
  color: white;
}
#menu {
  margin-top: 15px;
}
</style>
