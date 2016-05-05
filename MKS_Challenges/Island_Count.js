//
// Island Count
// Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).
//
// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a
//
// \n
// character. Check your console when submitting to see the input for yourself.

function countIslands (mapStr) {

  var x = mapStr.indexOf('\n');
  var y = 1;
  for(var i=0; i<mapStr.length; i++){
    if(mapStr[i] === '\n'){
      y++;
    }
  }

  var temp = mapStr.split('\n').join('');
  var matrix = []; // arrays inside arrays
  var temp2 = 0;
  var count = 0; //count the number of islands

   for(var i=0; i<y; i++){
        matrix.push([]);
        for(var j=0;j<x; j++){
            matrix[i].push(temp[temp2]);
            temp2++;
        }
   }

  if(mapStr === '0'){
    return 1;
  }


  var recurse = function(i, j){

      if(matrix[i][j] === '0'){
          matrix[i][j] = '.';
          //checks for boundaries
          if(i===0 && j===0){ //top left, check bottom and right
              recurse(i+1,j); //bottom
              recurse(i,j+1); //right

          }
          else if(i===0 && j===x-1){ //top right, ccheck bottom and left
              recurse(i+1,j); //bottom
              recurse(i,j-1); //left

          }
          else if(i===y-1 && j===0){ //botton left
              recurse(i-1,j); //top
              recurse(i,j+1); //right
          }
          else if(i===y-1 && j===x-1){ //bottom right
              recurse(i-1,j); //top
              recurse(i,j-1); //left
          }
          else if(i===0 && j!==0 && j!==x-1){ //top
                recurse(i+1,j); //bottom
              recurse(i,j+1); //right
              recurse(i,j-1); //left
          }
          else if(j===0 && i!==y-1 && i!==0){ //left side
                recurse(i+1,j); //bottom
              recurse(i,j+1); //right
              recurse(i-1,j); //top
          }
          else if(i===y-1 && j!==x-1 && j!==0){ //bottom
              recurse(i-1,j); //top
              recurse(i,j+1); //right
              recurse(i,j-1); //left
          }
          else if(j===x-1 && i!==0 && i!==y-1){ //right
                recurse(i+1,j); //bottom
              recurse(i-1,j); //top
              recurse(i,j-1); //left
          }
          else{ //check all sides
              recurse(i+1,j); //bottom
              recurse(i-1,j); //top
              recurse(i,j+1); //right
              recurse(i,j-1); //left
          }
  }
}


    for(var i=0; i<y; i++){
          for(var j=0; j<x; j++){
                if(matrix[i][j] === '0'){
                    recurse(i,j);
                    count++;
                }

          }
    }



 return count;

}

countIslands('.0...\n.00..\n....0');



//FIRST ATTEMPT

// function countIslands (mapStr) {
//   // Write your code here, and
//   // return your final answer.
//   if(mapStr === '0'){
//     return 1;
//   }
//   var x = mapStr.indexOf('\n');
//   var y = 1;
//   for(var i=0; i<mapStr.length; i++){
//     if(mapStr[i] === '\n'){
//       y++;
//     }
//   }

//   mapStr = mapStr.split('\n').join('');
//   var new_index = x;
//   var index = 0;
//   var count = 0;
//   var first_column;
//   var curr_column = 1;

// //the rows
// for(var i=0; i<y; i++){
//   //the columns
//   for(index; index<new_index; index++){
//     //debugger;
//     //IF GOING THROUGH FIRST ROW
//     if(i === 0){
//       //checks the very first char
//       if(index === 0){
//         if(mapStr[index] === '0'){
//           //debugger;
//           count++;
//         }
//       }
//       //checks other chars in first row
//       else{
//         if(mapStr[index] === '0' && mapStr[index-1] === '.'){
//           //debugger;
//           count++;

//         }
//       }
//     }

//     //GOES THROUGH 2nd TO LAST ROW
//       else{

//         //IF IN THE FIRST COLUMN
//         if(curr_column === 1){
//           if(mapStr[index] === '0' && mapStr[index - x]){

//             //EDGE CASE
//                 if(mapStr[index + 1] === 0){
//                   if(mapStr[index - x +1] === '.'){
//                     count++;
//                     //debugger;
//                   }
//                   else{
//                     count++;
//                   }
//                 }


//           }
//         }

//         //2nd TO LAST COLUMNS
//         else{
//           if(mapStr[index] === '0'){
//             if(mapStr[index-1] === '.' && mapStr[index-x] === '.'){

//               if(curr_column !== x){
//                 //EDGE CASE
//                 if(mapStr[index + 1] === 0){
//                   if(mapStr[index - x +1] === '.'){
//                     count++;
//                     //debugger;
//                   }
//                   else{
//                     count++;
//                   }
//                 }
//               }
//             }
//           }


//         }


//       }
//   curr_column++;
//   }

//   new_index += x;
//   curr_column = 1;
//   //debugger;
// }
//   return count;
// }







//SECOND ATTEMPT

// function countIslands (mapStr) {
// var count = 0; //count the number of islands
// var test = mapStr.split('/n');
// var template = [];
// var objCoords = [];  //Array with all the coordinate arrays


//     for(var i = 0; i < test.length; i++){
//         template.push(test[i].split(''));
//     }

//     //make an array with all the coordinate arrays
//     for(var j = 0; j < template.length; j++){
//         for(var k = 0; k < template[j].length; k++){
//             if(template[j][k] === '0'){
//                 objCoords.push([j,k]);
//             }
//         }
//     }


//           var check_extensions = function(coord){
//             if(coord !== undefined){
//               var up_neighbor = [coord[0] + 1, coord[1]];
//               var down_neighbor = [coord[0] - 1, coord[1]];
//               var right_neighbor = [coord[0], coord[1] + 1];
//               var left_neighbor = [coord[0], coord[1] - 1];



//               for(var i=0; i<objCoords.length; i++){
//                 if(objCoords[i] !== undefined){
//                   var compare1 = objCoords[i][0] === up_neighbor[0] && objCoords[i][1] === up_neighbor[1];
//                   var compare2 = objCoords[i][0] === down_neighbor[0] && objCoords[i][1] === down_neighbor[1];
//                   var compare3 = objCoords[i][0] === right_neighbor[0] && objCoords[i][1] === right_neighbor[1];
//                   var compare4 = objCoords[i][0] === left_neighbor[0] && objCoords[i][1] === left_neighbor[1];
//                   if(compare1){
//                     delete objCoords[i];
//                     check_extensions(up_neighbor);
//                   }
//                   if(compare2){
//                     delete objCoords[i];
//                     check_extensions(down_neighbor);
//                   }
//                   if(compare3){
//                     delete objCoords[i];
//                     check_extensions(right_neighbor);
//                   }
//                   if(compare4){
//                     delete objCoords[i];
//                     check_extensions(left_neighbor);
//                   }

//                 }
//               }
//             }

//           }

//           var recurse = function(){
//             check_extensions(objCoords[0]);
//             objCoords.splice(0,1);
//             for(var i=0; i<objCoords.length; i++){
//               if(objCoords[i] === undefined){
//                 objCoords.splice(i,1);
//               }
//             }

//             count++;

//             if(objCoords.length>0){
//               recurse();
//             }
//           }
//     recurse();
//     return count;

//   }
//
