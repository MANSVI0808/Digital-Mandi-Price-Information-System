let crops = [

{commodity:"Wheat",state:"Gujarat",price:2200},
{commodity:"Rice",state:"Punjab",price:2000},
{commodity:"Cotton",state:"Maharashtra",price:6500},
{commodity:"Maize",state:"Rajasthan",price:1800},
{commodity:"Soybean",state:"Madhya Pradesh",price:4200}

];

let table = document.getElementById("priceTable");

function loadTable(){

table.innerHTML = `
<tr>
<th>Crop</th>
<th>State</th>
<th>Price (₹)</th>
</tr>
`;

crops.forEach(crop => {

let row = table.insertRow();

row.insertCell(0).innerText = crop.commodity;
row.insertCell(1).innerText = crop.state;
row.insertCell(2).innerText = crop.price;

});

}

loadTable();

function searchCrop(){

let input = document.getElementById("search").value.toLowerCase();

let rows = table.getElementsByTagName("tr");

for(let i=1;i<rows.length;i++){

let crop = rows[i].cells[0].innerText.toLowerCase();

rows[i].style.display = crop.includes(input) ? "" : "none";

}

}

function sellCrop(){
alert("Your crop listing submitted!");
}