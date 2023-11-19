const tbody = document.querySelector("tbody");
const rows = tbody.rows;
const mockData = [];
const sudokuBoard = [];

// Get all number of rows, columns, boxs from a table
const getNumbers = () => {
  for (let i = 0; i < rows.length; i++) {
    let numList = [];
    for (let j = 0; j < rows[i].children.length; j++) {
      numList.push(rows[i].children[j].innerText);
    }
    sudokuBoard.push(numList);
  }
};

// Validate numbers
// Are there duplicates in each row, column, 3x3 box? return true / false
// If everything passes, return true at the end
const validateSudoku = (sudokuBoard) => {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let boxSet = new Set();

    for (let j = 0; j < 9; j++) {
      let rowNum = sudokuBoard[i][j];
      let colNum = sudokuBoard[j][i];
      let boxNum =
        sudokuBoard[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          3 * (i % 3) + (j % 3)
        ];

      if (rowNum != "") {
        if (rowSet.has(rowNum)) return false;
        rowSet.add(rowNum);
      }
      if (colNum != "") {
        if (colSet.has(colNum)) return false;
        colSet.add(colNum);
      }
      if (boxNum != "") {
        if (boxSet.has(boxNum)) return false;
        boxSet.add(boxNum);
      }
    }
  }
  return true;
};

// to generate table
const tablePoper = () => {
  for (let x = 0; x < 9; ++x) {
	let tr = document.createElement("tr");
	for (let y = 0; y < 9; ++y) {
		let td = document.createElement("td");
		tr.append(td);
	}
    tbody.append(tr);
  }
  setDefaultData();
};



// to set Default Data
const setDefaultData = () => {
	let tdIdx;
	let dTr;

	for (let i = 0; i < mockData.length; i++) {
		for (let j = 0; j < mockData[i].length; j++) {

			if (Math.floor(j % 3) == 0) {
				tdIdx = parseInt(mockData[i][j]) +getStartingPointColumn(i) -1;
			} else if (Math.floor(j % 3) == 1) {
				dTr = document.querySelectorAll("tr")[parseInt(mockData[i][j]) +getStartingPointRow(i) -1];
			} else {
				dTr.children[tdIdx].innerText = mockData[i][j];
        dTr.children[tdIdx].setAttribute('data-disabled', true);    // add class 'disabled' to block click event
			}
		}
	}
};

const getStartingPointColumn = (i) =>{
	if(Math.floor(i / 3) < 1){
		return 0;
	}else if(Math.floor(i / 3) < 2){
		return 3;
	}else{
		return 6;
	}
}

const getStartingPointRow = (i) =>{
	if(Math.floor(i % 3) == 0){
		return 0;
	}else if(Math.floor(i % 3) == 1){
		return 3;
	}else{
		return 6;
	}
}


// click event
const clickEvent = ()=>{
  let selected = null;
  let tdAll = document.querySelectorAll('td');
  let btns = document.querySelectorAll('button');

  // click event for td
  for(let td of tdAll){
    if(!td.getAttribute('data-disabled')){
      td.addEventListener('click', (e)=>{
        selected !== null ? selected.setAttribute('data-selected', false) : '';
        selected = e.target;
        selected.setAttribute('data-selected', true);
      });
    }
  }

  // click event for button
  for(let btn of btns){
    btn.addEventListener('click', ()=>{
      switch (btn.name) {
        case 'deleteAll':
          for(let td of tdAll){
            if(!td.getAttribute('data-disabled')){
              td.innerText = '';
            }
          }
          break;
        case 'correct':
          
          break;
        case 'number':
          if(selected === null){
            alert('Please select a cell');
          }
          selected.innerText = btn.value;
          break;
      }
    });
  }
}



// //to get json file
$.getJSON("/MOCK_DATA.json", (response) => {
  $.each(response, (i, el) => {
    let valString = el.val;
    let val = valString.split("");
    mockData.push(val);
  });
  tablePoper();
  getNumbers();
  clickEvent();
  console.log(validateSudoku(sudokuBoard));
});

// const load = () => {
//   let promise = new Promise((res, rej) => {
//     //to get json file
//     $.getJSON("/MOCK_DATA.json", (data, status, xhr) => {
//       if (status == "success") {
//         $.each(data, (i, el) => {
//           let valString = el.val;
//           let val = valString.split("");
//           mockData.push(val);
//         });
// 	} else {
// 		rej(status);
// 	}
// });
// }).then(
// 	  tablePoper(),
// 	  getNumbers(),
//     console.log(validateSudoku(sudokuBoard)) // return true or false
//   );
// };
// load();

// x : 0 , 3, 6
// y : 1, 4, 7
// vlaue : 3, 5, 8
