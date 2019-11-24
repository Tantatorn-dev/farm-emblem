export function preloadCharacter(tableData) {
    // random enemies position
       let count = 0;
       while (count != 3) {
           let randRow = Math.floor(Math.random() * 7);
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "l";
               count++;
           }
       }
   
       count = 0;
       while (count != 3) {
           let randRow = Math.floor(Math.random() * 7);
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "s";
               count++;
           }
       }
   
       count = 0;
       while (count != 3) {
           let randRow = Math.floor(Math.random() * 7);
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "a";
               count++;
           }
       }

       //random allies position
       count = 0;
       while (count != 3) {
           let randRow = Math.floor(Math.random() * 7) + 8;
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               switch (count) {
                   case 0:
                       tableData[randRow][randCol] = "L";
                       break;
                   case 1:
                       tableData[randRow][randCol] = "S";
                       break;
                   case 2:
                       tableData[randRow][randCol] = "A";
                       break;
               }
               count++;
           }
       }

       //random terrains
       count = 0;
       while (count != 8) {
           let randRow = 7;
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "#"
               count++;
           }
       }

       // sand tile
       count = 0;
       while (count != 15) {
           let randRow = Math.floor(Math.random() * 14);
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "##"
               count++;
           }
       }

       // water tile
       count = 0;
       while (count != 15) {
           let randRow = Math.floor(Math.random() * 14);
           let randCol = Math.floor(Math.random() * 14);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "###"
               count++;
           }
       }
}
