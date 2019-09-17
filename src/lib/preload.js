export function preloadCharacter(tableData) {
    // random enemies position
       let count = 0;
       while (count != 2) {
           let randRow = Math.floor(Math.random() * 4);
           let randCol = Math.floor(Math.random() * 7);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "l";
               count++;
           }
       }
   
       count = 0;
       while (count != 2) {
           let randRow = Math.floor(Math.random() * 4);
           let randCol = Math.floor(Math.random() * 7);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "s";
               count++;
           }
       }
   
       count = 0;
       while (count != 2) {
           let randRow = Math.floor(Math.random() * 4);
           let randCol = Math.floor(Math.random() * 7);
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
           let randRow = Math.floor(Math.random() * 3) + 5;
           let randCol = Math.floor(Math.random() * 7);
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

       //random allies position
       count = 0;
       while (count != 5) {
           let randRow = 4;
           let randCol = Math.floor(Math.random() * 7);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               tableData[randRow][randCol] = "#"
               count++;
           }
       }

}
