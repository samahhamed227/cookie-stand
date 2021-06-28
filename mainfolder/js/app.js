'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*
Location 1
*/

let Seattle = {

  
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customers: [],
  hourlySales: [],
  cookieTotal: 0,

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    Seattle.randomNumber();
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.ceil(this.customers[i] * this.avgSale);
      this.cookieTotal += this.hourlySales[i];
    }
  },

  render: function(){
    Seattle.sales();
    let SeattleUL = document.getElementById('sal');
    let header2 = document.createElement('h2');
    SeattleUL.appendChild(header2);
header2.textContent = 'Seattle';
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      SeattleUL.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookieTotal + ' cookies';
    SeattleUL.appendChild(liEl);
  },
};

Seattle.render();

// Location #2 Tokyo

let Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let TokyotUL = document.getElementById('sal2');
    let header2 = document.createElement('h2');
    TokyotUL.appendChild(header2);
header2.textContent = 'Tokyo';
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
     
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      TokyotUL.appendChild(liEl);
    }
  },

  total: function(){
    let TokyoUL = document.getElementById('sal2');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
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

// Location #3 Dubai

let Dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let DubaiUL = document.getElementById('sal3');
     let header2 = document.createElement('h2');
    DubaiUL.appendChild(header2);
header2.textContent = 'Dubai';
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      DubaiUL.appendChild(liEl);
    }
  },

  total: function(){
    let DubaiUL = document.getElementById('sal3');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    DubaiUL.appendChild(liEl);
    return cookieTotal;
  }
};

Dubai.randomNumber();
Dubai.sales();
Dubai.render();
Dubai.total();

// Location #4 Paris

let Paris = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let ParisUL = document.getElementById('sal4');
      let header2 = document.createElement('h2');
    ParisUL.appendChild(header2);
header2.textContent = 'Paris';
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      ParisUL.appendChild(liEl);
    }
  },

  total: function(){
    let ParisUL = document.getElementById('sal4');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    ParisUL.appendChild(liEl);
    return cookieTotal;
  }
};

Paris.randomNumber();
Paris.sales();
Paris.render();
Paris.total();

// Location #5 Lima

let Lima = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = (Math.floor(this.customers[i] * this.avgSale));
    }
  },

  render: function(){
    let LimaUL = document.getElementById('sal5');
     let header2 = document.createElement('h2');
    LimaUL.appendChild(header2);
header2.textContent = 'Lima';
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      LimaUL.appendChild(liEl);
    }
  },

  total: function(){
    let LimaUL = document.getElementById('sal5');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    LimaUL.appendChild(liEl);
    return cookieTotal;
  }
};

Lima.randomNumber();
Lima.sales();
Lima.render();
Lima.total();