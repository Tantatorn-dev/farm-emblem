<template>
  <div>
    <h1>FARM emblem</h1>
    <table v-for="row in tableData" v-bind:key="row">
      <tr v-for="cell in row" v-bind:key="cell">
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
