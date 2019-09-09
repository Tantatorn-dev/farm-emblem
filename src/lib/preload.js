export function preloadCharacter(tableData, position) {
    // random enemies position
       let count = 0;
       while (count != 2) {
           let randRow = Math.floor(Math.random() * 4);
           let randCol = Math.floor(Math.random() * 7);
           if (tableData[randRow][randCol] != "") {
               continue;
           } else {
               if(count == 0){
                position.l1 = [randRow,randCol];
               }
               else if(count == 1){
                position.l2 = [randRow,randCol];
               }
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
               if(count == 0){
                position.s1 = [randRow,randCol];
               }
               else if(count == 1){
                position.s2 = [randRow,randCol];
               }
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
               if(count == 0){
                position.a1 = [randRow,randCol];
               }
               else if(count == 1){
                position.a2 = [randRow,randCol];
               }
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
                       position.L = [randRow,randCol];
                       tableData[randRow][randCol] = "L";
                       break;
                   case 1:
                       position.S = [randRow,randCol];
                       tableData[randRow][randCol] = "S";
                       break;
                   case 2:
                       position.A = [randRow,randCol];
                       tableData[randRow][randCol] = "A";
                       break;
               }
               count++;
           }
       }

}
