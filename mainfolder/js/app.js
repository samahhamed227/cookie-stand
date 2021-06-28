'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*
Location 1
*/

let storedCreatedObj = [];
//constractour
function salmonecookies(name,minCust, maxCust, avgSale,cookieTotal) {
this.name=name;
this.minCust=minCust;
this.maxCust=maxCust;
this.avgSale=avgSale;
this.cookieTotal=cookieTotal;
this.hourlySales= [];
//method
this.customers= function(){
 
   return  Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
}

storedCreatedObj.push(this);
}
let Seattle = new salmonecookies ('Seattle',23,65,6.3,0);
Seattle.customers();
console.log(Seattle);
let Tokyo =new salmonecookies('Tokyo',3,24,1.2,0);
Tokyo.customers();
console.log(Tokyo);

  let Dubai =new salmonecookies('Dubai',11,38,3.7,0);
  Dubai.customers();
  console.log(Dubai);

  let Paris =new salmonecookies('PAris',20,38,2.3,0);
  Paris.customers();
  console.log(Paris);

  let Lima =new salmonecookies('Lima',2,16,4.6,0);
  Lima.customers();
  console.log(Lima);
  console.log( this.hourlySales);

salmonecookies.prototype.sales= function(){
  //Seattle.randomNumber();
  
  for(let i = 0; i < hours.length; i++){
    
    let sum = Math.ceil(this.customers() * this.avgSale);
    this.hourlySales[i].push(sum);


    this.hourlySales.push(sum);
    this.cookieTotal += sum;


 
  
     

  }
  
}


let parent10 = document.getElementById('creatTable');
let tableEl = document.createElement('table');
parent10.appendChild(tableEl);
let headingRow = document.createElement('th');
 tableEl.appendChild(headingRow);
 let nameData = document.createElement('td');
 headingRow.appendChild(nameData);

 for (let i = 0; i < hours.length; i++) {
  let nameEle = document.createElement('th');
  headingRow.appendChild(nameEle);
  nameEle.textContent = hours[i]; 
  
 }

 for (let i = 0; i < storedCreatedObj.length; i++){
  let studentRow2 = document.createElement('tr');
  tableEl.appendChild(studentRow2);
  let nameData2 = document.createElement('td');
  studentRow2.appendChild(nameData2);
  nameData2.textContent = storedCreatedObj[i].name;
  let studentRow3 = document.createElement('tr');

 }
 
 let hourlyTotal = function() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  for(let i = 0; i < hours.length; i++){
    let sumUpHourlySales = 0;
    tdEl = document.createElement('td');
    for(let j = 0; j < objectStoreNames.length; j++){
      sumUpHourlySales += objectStoreNames[j].cookieSalesEachHour[i];
      tdEl.textContent = sumUpHourlySales;
    }
    trEl.appendChild(tdEl);
  }
  salesTable.appendChild(trEl);
}
 
//let name = document.createElement('td');
  // studentRow.appendChild(ageData);
  // ageData.textContent = hours[i].age;
 
//   let weightData = document.createElement('td');
//   studentRow.appendChild(weightData);
//   weightData.textContent = hours[i].weight;
// }
// Location #2 Tokyo

  // //    
  // randomNumber: function(){
  //   for(let i = 0; i < hours.length; i++){
  //       this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  //     }
  //   },

// Location #3 Dubai

// let Dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   customers: [],
//   hourlySales: [],

//   randomNumber: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     }
//   },

//   sales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
//     }
//   },

//   render: function(){
//     let DubaiUL = document.getElementById('sal3');
//      let header2 = document.createElement('h2');
//     DubaiUL.appendChild(header2);
// header2.textContent = 'Dubai';
//     for(let i = 0; i < hours.length; i++){
//       let liEl = document.createElement('li');

//       liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
//       DubaiUL.appendChild(liEl);
//     }
//   },

//   total: function(){
//     let DubaiUL = document.getElementById('sal3');
//     let cookieTotal = 0;
//     for(let i = 0; i < hours.length; i++){
//       cookieTotal += this.hourlySales[i];
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
//     DubaiUL.appendChild(liEl);
//     return cookieTotal;
//   }
// };

// Dubai.randomNumber();
// Dubai.sales();
// Dubai.render();
// Dubai.total();

// // Location #4 Paris

// let Paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   customers: [],
//   hourlySales: [],

//   randomNumber: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     }
//   },

//   sales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
//     }
//   },

//   render: function(){
//     let ParisUL = document.getElementById('sal4');
//       let header2 = document.createElement('h2');
//     ParisUL.appendChild(header2);
// header2.textContent = 'Paris';
//     for(let i = 0; i < hours.length; i++){
//       let liEl = document.createElement('li');

//       liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
//       ParisUL.appendChild(liEl);
//     }
//   },

//   total: function(){
//     let ParisUL = document.getElementById('sal4');
//     let cookieTotal = 0;
//     for(let i = 0; i < hours.length; i++){
//       cookieTotal += this.hourlySales[i];
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
//     ParisUL.appendChild(liEl);
//     return cookieTotal;
//   }
// };

// Paris.randomNumber();
// Paris.sales();
// Paris.render();
// Paris.total();

// // Location #5 Lima

// let Lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   customers: [],
//   hourlySales: [],

//   randomNumber: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     }
//   },

//   sales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales[i] = (Math.floor(this.customers[i] * this.avgSale));
//     }
//   },

//   render: function(){
//     let LimaUL = document.getElementById('sal5');
//      let header2 = document.createElement('h2');
//     LimaUL.appendChild(header2);
// header2.textContent = 'Lima';
//     for(let i = 0; i < hours.length; i++){
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
//       LimaUL.appendChild(liEl);
//     }
//   },

//   total: function(){
//     let LimaUL = document.getElementById('sal5');
//     let cookieTotal = 0;
//     for(let i = 0; i < hours.length; i++){
//       cookieTotal += this.hourlySales[i];
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
//     LimaUL.appendChild(liEl);
//     return cookieTotal;
//   }
// };

// Lima.randomNumber();
// Lima.sales();
// Lima.render();
// Lima.total();


// //Seattle.render();


// //Seattle.sales();
// let SeattleUL = document.getElementById('sal');
// let header2 = document.createElement('h2');
// SeattleUL.appendChild(header2);
// header2.textContent = 'Seattle';
// for(let i = 0; i < hours.length; i++){
//   let liEl = document.createElement('li');
//   liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
//   SeattleUL.appendChild(liEl);
// }
// let liEl = document.createElement('li');
// liEl.textContent = 'Total: ' + this.cookieTotal + ' cookies';
// SeattleUL.appendChild(liEl)
