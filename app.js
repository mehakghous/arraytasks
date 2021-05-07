// 1. Declare an empty array using JS literal notation to store student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = new Array();

// 3. Declare and initialize a strings array.

// var stringArray = ["mehak","ghous","abro"];

// 4. Declare and initialize a numbers array.

// var noArray = [5,6,7];
// 5. Declare and initialize a boolean array.

// var bolArray = [true,false];

// 6. Declare and initialize a mixed array.

// var mixArray = ["mehak", 1 , true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualInPak = ['SSC','M.phil', 'PHD' , 'BCOM' , 'HSC' , 'BCS' , 'BS' , 'MSC'];
// for (let i = 0; i < qualInPak.length; i++) {
//     document.write("("+i+' '+qualInPak[i] + "<br>");
// }

// 8.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students = ['mehak', 'imran', 'irfan'];
// var marks = [234, 500, 450];
// var percentage;
// for (var i = 0; i < students.length; i++) {
//     percentage = marks[i] / 500 * 100;
//     document.write('score of ' + students[i] + ' is ' + marks[i] + ' and percentage is ' + percentage + '<br>');
// }


// 9. Initialize an array with color names. Display the array
// elements in your browser.

// document.write("<b>old color Array</b>" + "<br>");
// var colors = ['red', 'blue', 'green', 'pink'];
// document.write(colors.join("<br>"));
// document.write("<br><b>New color Array</b><br>");

// // a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var choose = prompt("enter any color to add at begining");
// colors.unshift(choose);
// document.write(colors.join("<br>"));
// document.write("<br><b>last color Array</b><br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var choose2 = prompt("enter any color to add at end");
// colors.push(choose2);
// document.write(colors.join("<br>"));

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// document.write("<b>New color Array</b><br>");
// colors.unshift("brown","dark");
// document.write(colors.join("<br>"));


// d. Delete the first color in the array. Display the updated
// array in your browser.

// document.write("<br><b>removing first color</b><br> ")
// colors.shift();
// document.write(colors.join("<br>"));

// e. Delete the last color in the array. Display the updated
// array in your browser.

// document.write("<br><b>removing last color</b> <br>" )
// colors.pop();
// document.write(colors.join("<br>"));

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// // browser.

// var position = +prompt("At which position do you want to add color?");
// var colorName = prompt('write color name');
// document.write("<br><b>adding color at index</b> " + position + "<br>")
// colors.splice(position,0 ,colorName);
// document.write(colors.join("<br>"));

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// document.write("<br><b>rmoving colors frome given index</b> <br>")
// var positionRemove = +prompt("At which position do you want to delete color?");
// var positionlast = +prompt("how many colors you want to delete?");

// colors.splice(positionRemove,positionlast);
// document.write(colors.join("<br>"));


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var studentsScore = [110, 30, 90, 80, 100];
// studentsScore.sort((a, b) => a - b);
// document.write(studentsScore);

// // 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


// var cityNames = ['karachi','islamabad','lahore','quetta','hyderabad','sukkur','peshawar'];
// var selectedCities = cityNames.slice(1,4);
// document.write(selectedCities);
// 12. Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// var arr = ["This", "is" ,  "my" ,  "cat"];
// var x = arr.join(" ");
// document.write(x);



// 13.
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var newarr = [];
// newarr.push("mehak");
// newarr.push("mehak1");
// newarr.push("mehak2");
// newarr.push("mehak3");
// newarr.push("mehak4");

// document.write(newarr + "<br>");
// var elements = newarr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newarr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newarr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newarr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newarr.shift();
// document.write("<br>OUT:<br>"+elements);

// 14.
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


//  var newArr = [];
// newArr.push("mehak");
// newArr.push("mehak1");
// newArr.push("mehak2");
// newArr.push("mehak3");
// newArr.push("mehak4");
// document.write(newArr + "<br>");
// var elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);


// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// var phone = ["Samsung" , "Nokia" , "Haier" , "Sony" , "Motorolla" , "Apple"];
// document.write(`<select>
// <option>${phone[0]}</option>
// <option>${phone[1]}</option>
// <option>${phone[2]}</option>
// <option>${phone[3]}</option>
// <option>${phone[4]}</option>
// <option>${phone[5]}</option>
// </select>`)