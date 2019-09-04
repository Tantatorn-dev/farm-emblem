<template>
  <div>
    <h1>FARM emblem</h1>
    <table v-for="row in tableData" v-bind:key="row">
      <tr v-for="cell in row" v-bind:key="cell">
        <td></td>
      </tr>
    </table>
    <div id="menu">
      <div v-if="isStartSimulation">
        <button>back</button>
        <button>next</button>
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
  methods: {
    startSimulation: function() {
      this.isStartSimulation = !this.isStartSimulation;
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
