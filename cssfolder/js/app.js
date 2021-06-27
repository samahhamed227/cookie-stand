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
                this.cookieTotal += this.array3[k];

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






let Tokyo  ={

    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    customers: [],
    hourlySales: [],
  
    randomNumber: function(){
      for(let i = 0; i < array1.length; i++){
        this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      }
    },
  
    sales: function(){
      for(let i = 0; i < array1.length; i++){
        this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
      }
    },
  
    render: function(){
      let TokyotUL = document.getElementById('Tokyo');
      for(let i = 0; i < array1.length; i++){
        let liEl = document.createElement('li');
  
        liEl.textContent = array1[i] + ': ' + this.hourlySales[i] + ' cookies';
        TokyotUL.appendChild(liEl);
      }
    },
  
    total: function(){
      let TokyoUL = document.getElementById('Tokyo');
      let cookieTotal= 0;
      for(let i = 0; i < array1.length; i++){
        cookieTotal += this.hourlySales[i];
      }
      let liEl = document.createElement('li');
      liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
      TokyoUL.appendChild(liEl);
      return cookieTotal;
    }
  };
  
  Tokyo.randomNumber();
  Tokyo.sales();
  Tokyo.render();
  Tokyo.total();
  












//     location2:'Tokyo',
//     mincus :3,
//     maxcus :24,
//     avgcookies:1.2,
//     cookieTotal: 0,
//     customers: [],

  
//     array2 : [], 
//     getrandom: function() {
       

//        return this.array2 = b.rand() + ' cookies'+'';

//         },
        
    
//         array3 : [], 
//         getarr3: function() {
//             for(var k= 0; k < array1.length; k++){
//                 this.array3[k] = Math.ceil(this.array2[k] * this.avgcookies);
//                 this.cookieTotal += this.array3[k];

//            return this.cookieTotal += this.array3[k];

//             }
//         },
//         rand: function (min, max) {
            
//           return this.customers.push( Math.floor(Math.random() * (this.maxcus - this.mincus + 1)) + this.mincus);
            
        
//         },
    

//         cutomer2 :function(){
//             return this.array2 = ''+b.rand() + ' customer';  }
//             ,

//         }
   


// let parent2 = document.getElementById('sal2');
// let header = document.createElement('h1');
// parent2.appendChild(header);
// header2.textContent = b.location2;
// let unOr = document.createElement('ul');
// parent2.appendChild(unOr);
// for (let i = 0; i < array1.length; i++){
   
    
//     let lis = document.createElement('li');
//     unOr.appendChild(lis);
//   lis.textContent =  array1[i]  + "   "+b.getrandom()  +"" + b.cutomer2()+"customers" ;
 


// }

// let lis= document.createElement('li');
// lis.textContent = 'Total: ' +  b.getarr3() + ' cookies';
// unOrderedList.appendChild(lis);


let c ={
    location3:'Dubai',
    mincus :11,
    maxcus :38,
    avgcookies:3.7,

    getrandom: function() {
        this.age = randomAge(11, 38) + ' cookies';
    }
   
}
let d ={
    location4:'Paris',
    mincus :20,
    maxcus :38,
    avgcookies:2.3,

    getrandom: function() {
        this.age = randomAge(20, 38) + ' cookies';
    }
   
}
let e ={
    location5:'Lima',
    mincus:2,
    maxcus :6,
    avgcookies:4.6,

    getrandom: function() {
        this.age = randomAge(2, 6) + ' cookies';
    }
   
}
