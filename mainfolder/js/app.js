'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*
Location 1
*/
let hourlySales= [];
let storedCreatedObj = [];
//constractour
function salmonecookies(name,minCust, maxCust, avgSale,cookieTotal) {
this.name=name;
this.minCust=minCust;
this.maxCust=maxCust;
this.avgSale=avgSale;
this.cookieTotal=cookieTotal;

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
  
  
  
  for(let i = 0; i < hours.length; i++){
    
    let sum = Math.ceil(this.customers() * this.avgSale);
    this.hourlySales[i].push(sum);
    this.cookieTotal += sum;
    
  }

  this.cookieTotal+=this.sales();
 console.log(this.cookieTotal);
  
}




let parent10 = document.getElementById('creatTable');
let tableEl = document.createElement('table');
parent10.appendChild(tableEl);
//let headingRow = document.createElement('th');
 //stableEl.appendChild(headingRow);
 let nameData = document.createElement('td');

  
  




  let studentRow22 = document.createElement('tr');
  tableEl.appendChild(studentRow22);
  let nameData23 = document.createElement('td');
    studentRow22.appendChild(nameData23);
    nameData23.textContent = "";
 for (let i = 0; i < hours.length; i++) {


  tableEl.appendChild(studentRow22);
  let nameData= document.createElement('td');
    studentRow22.appendChild(nameData); 
   nameData.textContent = hours[i]; 
  
  
 }
  tableEl.appendChild(studentRow22);
   nameData23 = document.createElement('td');
    studentRow22.appendChild(nameData23);
    nameData23.textContent = 'Daily total' ;
 

 
 
 //seattle
 let studentRow2 = document.createElement('tr');
 tableEl.appendChild(studentRow2);
 let nameData2 = document.createElement('td');
   studentRow2.appendChild(nameData2);
   nameData2.textContent = "seattle";
   
 for (let i = 0; i < hours.length; i++) {
 
  tableEl.appendChild(studentRow2);
  let nameData= document.createElement('td');
    studentRow2.appendChild(nameData); 
  nameData.textContent =Seattle.customers() ; 
  
 }

 tableEl.appendChild(studentRow2);
   nameData = document.createElement('td');
    studentRow2.appendChild(nameData);
    nameData.textContent =Seattle.cookieTotal ;
//tokyo
   let studentRow4 = document.createElement('tr');
 tableEl.appendChild(studentRow4);
 let nameData4 = document.createElement('td');
   studentRow4.appendChild(nameData4);
   nameData4.textContent = "Tokyo";
   for (let i = 0; i < hours.length; i++) {
 
    tableEl.appendChild(studentRow4);
    let nameData10= document.createElement('td');
      studentRow4.appendChild(nameData10); 
    nameData10.textContent =Tokyo.customers() ; 
    
   }
   tableEl.appendChild(studentRow4);
   let nameData101 = document.createElement('td');
    studentRow4.appendChild(nameData101);
    nameData101.textContent =Tokyo.cookieTotal ;
   
//Dubai
let studentRow5 = document.createElement('tr');
tableEl.appendChild(studentRow5);
 let nameData5 = document.createElement('td');
   studentRow5.appendChild(nameData5);
   nameData5.textContent = "Dubai";
   for (let i = 0; i < hours.length; i++) {
 
    tableEl.appendChild(studentRow5);
    let nameData11= document.createElement('td');
      studentRow5.appendChild(nameData11); 
    nameData11.textContent =Dubai.customers() ; 
   }

   tableEl.appendChild(studentRow5);
   let nameData102 = document.createElement('td');
    studentRow5.appendChild(nameData102);
    nameData102.textContent =Dubai.cookieTotal ;

//paris
let studentRow6 = document.createElement('tr');

 tableEl.appendChild(studentRow6);
 let nameData6 = document.createElement('td');
   studentRow6.appendChild(nameData6);
   nameData6.textContent = "Paris";
  
   for (let i = 0; i < hours.length; i++) {
 
    tableEl.appendChild(studentRow6);
    let nameData12= document.createElement('td');
      studentRow6.appendChild(nameData12); 
    nameData12.textContent =Paris.customers() ; 
   }

   tableEl.appendChild(studentRow6);
   let nameData103 = document.createElement('td');
    studentRow6.appendChild(nameData103);
    nameData103.textContent =Paris.cookieTotal ;
   //lima
   let studentRow7 = document.createElement('tr');

   tableEl.appendChild(studentRow7);
   let nameData7 = document.createElement('td');
     studentRow7.appendChild(nameData7);
     nameData7.textContent = "Lima";

     for (let i = 0; i < hours.length; i++) {
 
      tableEl.appendChild(studentRow7);
      let nameData13= document.createElement('td');
        studentRow7.appendChild(nameData13); 
      nameData13.textContent =Lima.customers() ; 
     }

     tableEl.appendChild(studentRow7);
     let nameData104 = document.createElement('td');
      studentRow7.appendChild(nameData104);
      nameData104.textContent =Lima.cookieTotal ;

      function makefooter(){
        let footerrow =document.createElement('tr');
tableEl.appendChild(footerrow);
let footerht =document.createElement('td');
footerrow.appendChild(footerht);
footerht.textContent='Total';
      
          let megaTotal = 0;
      for (let i = 0; i < hours.length; i++) {
          let sum = 0;
          for (var j = 0; j < hourlySales.length; j++) {
              sum += hourlySales[j].cookiesEachHouer[i];
          }
          let trEl=document.createElement("tr");
          megaTotal += sum;  
          let tdEl = document.createElement('td');
          trEl.appendChild(tdEl);
          tdEl.textContent = sum;
        
      let tddEl = document.createElement('td');
      trEl.appendChild(tddEl);
      tddEl.textContent = megaTotal;
        }
      }
      makefooter();
      
      
        
 
