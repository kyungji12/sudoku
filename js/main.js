const table = document.querySelectorAll("tbody tr");
console.log(table[0].children[0].innerText);

let sudokuArr = [];
$.getJSON("/MOCK_DATA.json", (response) => {
  //   console.log(response);
  $.each(response, (i, el) => {
    let valString = el.val;
    let val = valString.split("");
    // console.log("i : ", i, "-- val : ", val);
    sudokuArr.push(val);
  });
  //   console.log(sudokuArr);

  for (let i = 0; i < sudokuArr.length; i++) {
    // console.log(sudokuArr[i]);
    for (let j = 0; j < sudokuArr[i].length; j++) {
      console.log("i : ", i, ", j :", j, "-- ", sudokuArr[i][j]);
    }
  }
});
// x : 0 , 3, 6
// y : 1, 4, 7
// vlaue : 3, 5, 8
