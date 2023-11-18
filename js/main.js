let sudokuArr = [];

// to generate table
const tablePoper = () =>{
	for (let x = 0; x < 9; ++x) {
		let tr = document.createElement("tr");
		for (let y = 0; y < 9; ++y) {
			let td = document.createElement("td");
			tr.append(td);
		}	
		document.querySelector("tbody").append(tr);
	}
	setDefaultData();
}


// to set Default Data
const setDefaultData = () =>{
	let dTr;
	let tdIdx;
	const secondBox = 3;
	const thirdBox = 6;
	

	for (let i = 0; i < sudokuArr.length; i++) {
		for (let j = 0; j < sudokuArr[i].length; j++) {
			//console.log("i : ", i, ", j :", j, "-- ", sudokuArr[i][j]);

			switch (i) {
				case 0 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) -1];
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;

				case 1 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +secondBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) -1];
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;

				case 2 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +thirdBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) -1];
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;
				
				case 3 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +secondBox -1];
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;
				
				case 4 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +secondBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +secondBox -1]
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;

				case 5 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +thirdBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +secondBox -1]
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;

				case 6 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +thirdBox -1]
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;
				
				case 7 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +secondBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +thirdBox -1]
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;
				
				case 8 :
					if(j == 0 || j == 3 || j == 6){
						tdIdx = parseInt(sudokuArr[i][j]) +thirdBox -1;
					}else if(j == 1 || j == 4 || j == 7){ 
						dTr = document.querySelectorAll("tr")[parseInt(sudokuArr[i][j]) +thirdBox -1]
					}else{
						dTr.children[tdIdx].innerText = sudokuArr[i][j];
					}
				break;
			}
		}
	}
}


//to get json file
$.getJSON("/MOCK_DATA.json", (response) => {
	$.each(response, (i, el) => {
		let valString = el.val;
		let val = valString.split("");
		sudokuArr.push(val);
	});
	 tablePoper();
});



// x : 0 , 3, 6
// y : 1, 4, 7
// vlaue : 3, 5, 8
