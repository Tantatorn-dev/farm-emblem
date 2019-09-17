<template>
  <div>
    <h1>FARM emblem</h1>
    <h2>Step {{stepCount}}</h2>
    <h4>{{stepDes}}</h4>
    <table>
      <tbody>
        <tr v-for="(row,rowIndex) in tableData" v-bind:key="rowIndex">
          <td
            v-for="(item,index) in row"
            v-bind:key="`${index}-${rowIndex}`"
            :style="[paint1(rowIndex, index)]"
          >
            <div :style="[paint(item)]">
              <Character :name="item"></Character>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="menu">
      <div v-if="isStartSimulation">
        <button @click="setBack" :disabled="stepCount <= 0">&lt;= back</button>
        <button @click="setNext" :disabled="!checkEnd">next = &gt;</button>
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
    <audio id="audioWalk">
      <source src="@/assets/sound/walk.mp3" type="audio/mpeg" />
    </audio>
    <audio id="audioAttack">
      <source src="@/assets/sound/Attack.ogg" type="audio/ogg" />
    </audio>
    <audio id="audioBGM" loop>
      <source src="@/assets/sound/BGM.mp3" type="audio/mpeg" />
    </audio>
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
      stepDes: "- Click 'Start Simulation!' at bottom -",
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
  mounted() {
    let audioWalk = document.getElementById("audioBGM");
    audioWalk.volume = 0.3;
    audioWalk.play();
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
    paint1: function(i, j) {
      return {
        "animation-delay": "" + i * j * 0.04 + "s"
      };
    },
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
      this.stepDes = "Click 'Next' to show next step";
    },
    setNext: function() {
      let audioWalk = document.getElementById("audioWalk");
      let audioAttack = document.getElementById("audioAttack");

      this.stepCount += 1;
      let table;
      let action;
      if (this.searchType == "bread first search") {
        action = window.BFS.action[window.BFS.index];
        table = window.BFS.next();
      } else if (this.searchType == "depth first search") {
        action = window.DFS.action[window.DFS.index];
        table = window.DFS.next();
      }
      this.stepDes = "Charactor < ";
      switch (action.allies) {
        case 0:
          this.stepDes += "Lancer";
          break;
        case 1:
          this.stepDes += "Sword";
          break;
        case 2:
          this.stepDes += "Axe";
          break;
      }
      if (action.action == 0) {
        audioWalk.pause();
        audioWalk.currentTime = 0;
        audioWalk.play();

        this.stepDes += " > walk ( ";
      } else {
        audioAttack.pause();
        audioAttack.currentTime = 0;
        audioAttack.play();

        this.stepDes += " > kill ";
        switch (action.allies) {
          case 0:
            this.stepDes += "Sword";
            break;
          case 1:
            this.stepDes += "Axe";
            break;
          case 2:
            this.stepDes += "Lancer";
            break;
        }
        this.stepDes += " ( ";
      }

      switch (action.direction) {
        case 0:
          this.stepDes += "up";
          break;
        case 1:
          this.stepDes += "down";
          break;
        case 2:
          this.stepDes += "left";
          break;
        case 3:
          this.stepDes += "right";
          break;
      }
      this.stepDes += " ).";
      this.tableData = table;
    },
    setBack: function() {
      this.stepDes = "- back action -";
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
      this.stepDes = "- Click 'Start Simulation!' at bottom -";
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
  animation-name: bg;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

button {
  margin: 0px 10px;
}

#menu {
  margin-top: 15px;
}

/* Standard syntax */
@keyframes bg {
  0%,
  100% {
    background-position-x: 5px;
  }
  50% {
    background-position-x: -5px;
  }
}
</style>
