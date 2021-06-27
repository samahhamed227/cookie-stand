'use strict';

let array1=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let A ={
    location1:'Seattle',
    mincus :23	,
    maxcus :65 ,
    avgcookies:6.3,
    cookieTotal: 0,
    customers: [],

  
    array2 : [], 
    getrandom: function() {
       

       return this.array2 = A.rand() + ' cookies'+'';

        },
        
    
        array3 : [], 
        getarr3: function() {
            for(var k= 0; k < array1.length; k++){
                this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
              

           return this.cookieTotal += this.array3[k];

            }
        },
        rand: function (min, max) {
            
          return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
        },
    

        cutomer2 :function(){
            return this.array2 = ''+A.rand() + ' customer';  },

        }
   


let parent = document.getElementById('sal');
let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = A.location1;
let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);
for (let i = 0; i < array1.length; i++){
   
    
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
  listItem.textContent =  array1[i]  + "   "+A.getrandom()  +"" + A.cutomer2()+"customers" ;
 


}

let listItem = document.createElement('li');
listItem.textContent = 'Total: ' +  A.getarr3() + ' cookies';
unOrderedList.appendChild(listItem);


//location2



let b ={

    location2:'Tokyo',
    mincus :3,
    maxcus :24,
    avgcookies:1.2,
    cookieTotal: 0,
    customers: [],

  
    array2 : [], 
    getrandom: function() {
       

       return this.array2 = b.rand() + ' cookies'+'';

        },
        
    
        array3 : [], 
        getarr3: function() {
            for(var k= 0; k < array1.length; k++){
                this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
               // this.cookieTotal += this.array3[k];

           return this.cookieTotal += this.array3[k];

            }
        },
        rand: function (min, max) {
            
          return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
        },
    

        cutomer2 :function(){
            return this.array2 = ''+b.rand() + ' customer';  }
            ,

        }
   


let parent2 = document.getElementById('sal2');
let header1 = document.createElement('h1');
parent2.appendChild(header1);
header1.textContent = b.location2;
let unOr = document.createElement('ul');
parent2.appendChild(unOr);
for (let i = 0; i < array1.length; i++){
   
    
    let lis = document.createElement('li');
    unOr.appendChild(lis);
  lis.textContent =  array1[i]  + "   "+b.getrandom()  +"" + b.cutomer2()+"customers" ;
 


}

let lis= document.createElement('li');
lis.textContent = 'Total: ' +  b.getarr3() + ' cookies';
unOr.appendChild(lis);


//locatio 3
let c ={
    location3:'Dubai',
    mincus :11,
    maxcus :38,
    avgcookies:3.7,
    cookieTotal: 0,
    customers: [],


  
    array2 : [], 
    getrandom: function() {
       

       return this.array2 = c.rand() + ' cookies'+'';

        },
        
    
        array3 : [], 
        getarr3: function() {
            for(var k= 0; k < array1.length; k++){
                this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
                //this.cookieTotal += this.array3[k];

           return this.cookieTotal += this.array3[k];

            }
        },
        rand: function (min, max) {
            
          return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
        },
    

        cutomer2 :function(){
            return this.array2 = ''+c.rand() + ' customer';  }
            ,

        }
   


let parent3 = document.getElementById('sal3');
let header3 = document.createElement('h1');
parent3.appendChild(header3);
header3.textContent = c.location3;
let unOrd = document.createElement('ul');
parent3.appendChild(unOrd);
for (let i = 0; i < array1.length; i++){
   
    
    let list1 = document.createElement('li');
    unOrd.appendChild(list1);
  list1.textContent =  array1[i]  + "   "+c.getrandom()  +"" + c.cutomer2()+"customers" ;
 


}

let list1= document.createElement('li');
list1.textContent = 'Total: ' +  c.getarr3() + ' cookies';
unOrd.appendChild(list1);

   
//location 4


let d ={
    location4:'Paris',
    mincus :20,
    maxcus :38,
    avgcookies:2.3,
    cookieTotal: 0,
    customers: [],


  
    array2 : [], 
    getrandom: function() {
       

       return this.array2 = d.rand() + ' cookies'+'';

        },
        
    
        array3 : [], 
        getarr3: function() {
            for(var k= 0; k < array1.length; k++){
                this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
                //this.cookieTotal += this.array3[k];

           return this.cookieTotal += this.array3[k];

            }
        },
        rand: function (min, max) {
            
          return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
        },
    

        cutomer2 :function(){
            return this.array2 = ''+d.rand() + ' customer';  }
            ,

        }
   


let parent5= document.getElementById('sal4');
let header5 = document.createElement('h1');
parent5.appendChild(header5);
header5.textContent = d.location4;
let unOrd5 = document.createElement('ul');
parent5.appendChild(unOrd5);
for (let i = 0; i < array1.length; i++){
   
    
    let list5 = document.createElement('li');
    unOrd5.appendChild(list5);
  list5.textContent =  array1[i]  + "   "+d.getrandom()  +"" + d.cutomer2()+"customers" ;
 


}

let list5= document.createElement('li');
list5.textContent = 'Total: ' +  d.getarr3() + ' cookies';
unOrd5.appendChild(list5);
   




//location 5
let e ={
    location5:'Lima',
    mincus:2,
    maxcus :6,
    avgcookies:4.6,
    cookieTotal: 0,
    customers: [],


  
    array2 : [], 
    getrandom: function() {
       

       return this.array2 = e.rand() + ' cookies'+'';

        },
        
    
        array3 : [], 
        getarr3: function() {
            for(var k= 0; k < array1.length; k++){
                this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
                //this.cookieTotal += this.array3[k];

           return this.cookieTotal += this.array3[k];

            }
        },
        rand: function (min, max) {
            
          return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
        },
    

        cutomer2 :function(){
            return this.array2 = ''+e.rand() + ' customer';  }
            ,

        }
   


let parent6 = document.getElementById('sal5');
let header6 = document.createElement('h1');
parent6.appendChild(header6);
header6.textContent = e.location5;
let unOrd6 = document.createElement('ul');
parent6.appendChild(unOrd6);
for (let i = 0; i < array1.length; i++){
   
    
    let list6 = document.createElement('li');
    unOrd6.appendChild(list6);
  list6.textContent =  array1[i]  + "   "+e.getrandom()  +"" + e.cutomer2()+"customers" ;
 


}

let list6= document.createElement('li');
list6.textContent = 'Total: ' +  e.getarr3() + ' cookies';
unOrd6.appendChild(list6);
