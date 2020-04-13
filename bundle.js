/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculatorLoans/calculatorLoans.js":
/*!************************************************!*\
  !*** ./src/calculatorLoans/calculatorLoans.js ***!
  \************************************************/
/*! exports provided: loanСalculation, handleChange, calculateLoan, clearCalculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loanСalculation", function() { return loanСalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleChange", function() { return handleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLoan", function() { return calculateLoan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCalculation", function() { return clearCalculation; });
let loanPurpose = document.getElementById('loanPurpose');
let interestRate = document.getElementById('interestRate');
let amountOfCredit = document.getElementById('amountOfCredit');
let finalPayoutInput = document.getElementById('finalPayout');

async function loanСalculation() {
  console.log(loanPurpose.options.selectedIndex);

  switch (loanPurpose.options.selectedIndex) {
    case 0:
      interestRate.value = 13.1;
      break;

    case 1:
      interestRate.value = 11.2;
      break;

    case 2:
      interestRate.value = 10.5;
      break;

    case 3:
      interestRate.value = 9.8;
      break;
  }
}

async function handleChange() {
  if (amountOfCredit.value > 200 && amountOfCredit.value < 20000) {} else {
    if (amountOfCredit.value < 200) amountOfCredit.value = 200;
    if (amountOfCredit.value > 2000) amountOfCredit.value = 20000;
  }
}

async function calculateLoan() {
  finalPayoutInput.value = Number(amountOfCredit.value) + amountOfCredit.value * interestRate.value / 100;
  monthlyPayment.value = (finalPayoutInput.value / loanTerm.value).toFixed(4);
}

async function clearCalculation() {
  loanPurpose.selectedIndex = 0;
  document.getElementById('loanTerm').selectedIndex = 0;
  interestRate.value = 13.1;
  amountOfCredit.value = 200;
  finalPayoutInput.value = "";
  monthlyPayment.value = "";
}



/***/ }),

/***/ "./src/crypto/crypto.js":
/*!******************************!*\
  !*** ./src/crypto/crypto.js ***!
  \******************************/
/*! exports provided: addCryptocurrencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCryptocurrencies", function() { return addCryptocurrencies; });
/* harmony import */ var _login_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.js */ "./src/login/login.js");
let typeOfCryptocurrency = document.getElementById('typeOfCryptocurrency');
let numberOfCryptocurrencies = document.getElementById('numberOfCryptocurrencies');


function addCryptocurrencies() {
  if (numberOfCryptocurrencies.value > 0) {
    let date = new Date();
    _login_login_js__WEBPACK_IMPORTED_MODULE_0__["user"].transactionHistory.push({});
    let oldItem = [];

    if (oldItem.length > 0) {
      oldItem = [JSON.parse(localStorage.getItem('test'))];
    }

    oldItem.push({
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      type: typeOfCryptocurrency.value,
      purchase: numberOfCryptocurrencies.value
    });
    localStorage.setItem('test', JSON.stringify(oldItem));
    typeOfCryptocurrency.selectedIndex = 0;
    numberOfCryptocurrencies.value = "";
    alert('Валюта куплена');
  } else {
    alert('Введены неверные данные');
  }
}



/***/ }),

/***/ "./src/currencyConverter/currencyConverter.js":
/*!****************************************************!*\
  !*** ./src/currencyConverter/currencyConverter.js ***!
  \****************************************************/
/*! exports provided: calc, convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
let calc = document.getElementById('container2');
async function convert(URL) {
  fetch(URL).then(response => {
    response.json().then(data => {
      let usd_by = data[4].Cur_OfficialRate;
      let eur_by = data[5].Cur_OfficialRate;
      let rub_by = data[16].Cur_OfficialRate;
      let oneInput = document.getElementById('oneInput');
      let twoInput = document.getElementById('twoInput');
      let optionOneClick = document.getElementById('one').value;

      switch (optionOneClick) {
        case 'BYN':
          twoInput.value = oneInput.value;
          break;

        case 'USD':
          twoInput.value = (oneInput.value * usd_by).toFixed(4);
          break;

        case 'EUR':
          twoInput.value = (oneInput.value * eur_by).toFixed(4);
          break;

        case 'RUB':
          twoInput.value = (oneInput.value * rub_by).toFixed(4);
          break;
      }
    }).catch(() => {
      console.log('Извените данные недоступны');
    });
  });
}

/***/ }),

/***/ "./src/exchangeRates/exchangeRates.js":
/*!********************************************!*\
  !*** ./src/exchangeRates/exchangeRates.js ***!
  \********************************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
async function getData(URL) {
  fetch(URL).then(response => {
    response.json().then(data => {
      let bodyTable = document.getElementById('bodyTable');
      let usd_by = data[4].Cur_OfficialRate;
      let eur_by = data[5].Cur_OfficialRate;
      let rub_by = data[16].Cur_OfficialRate;
      let uah_by = data[2].Cur_OfficialRate;
      let pln_by = data[6].Cur_OfficialRate;
      bodyTable.innerHTML = `
            <tr>
                <td>Паритетбанк</td>                    
                    <td>${usd_by.toFixed(4)}</td>
                    <td>${eur_by.toFixed(4)}</td>
                    <td>${rub_by.toFixed(4)}</td>
                    <td>${uah_by.toFixed(4)}</td>
                    <td>${pln_by.toFixed(4)}</td>                
                </tr>
            `;
      bodyTable.innerHTML += `
            <tr>
                <td>Альфа-Банк</td>                    
                    <td>${(usd_by + 0.1234).toFixed(4)}</td>
                    <td>${(eur_by + 0.1234).toFixed(4)}</td>
                    <td>${(rub_by + 0.1234).toFixed(4)}</td>
                    <td>${(uah_by + 0.1234).toFixed(4)}</td>
                    <td>${(pln_by + 0.1234).toFixed(4)}</td>                
                </tr>
            `;
      bodyTable.innerHTML += `
            <tr>
                <td>Беларусбанк</td>                    
                    <td>${(usd_by - 0.2314).toFixed(4)}</td>
                    <td>${(eur_by - 0.2314).toFixed(4)}</td>
                    <td>${(rub_by - 0.2314).toFixed(4)}</td>
                    <td>${(uah_by - 0.2314).toFixed(4)}</td>
                    <td>${(pln_by - 0.2314).toFixed(4)}</td>                
                </tr>
            `;
      bodyTable.innerHTML += `
            <tr>
                <td>Белагропромбанк</td>                    
                    <td>${(usd_by + 0.1786).toFixed(4)}</td>
                    <td>${(eur_by - 0.1786).toFixed(4)}</td>
                    <td>${(rub_by + 0.1786).toFixed(4)}</td>
                    <td>${(uah_by - 0.1786).toFixed(4)}</td>
                    <td>${(pln_by + 0.1786).toFixed(4)}</td>                
                </tr>
            `;
      bodyTable.innerHTML += `
            <tr>
                <td>МТБанк</td>                    
                    <td>${(usd_by + 0.1111).toFixed(4)}</td>
                    <td>${(eur_by - 0.1111).toFixed(4)}</td>
                    <td>${(rub_by + 0.1111).toFixed(4)}</td>
                    <td>${(uah_by - 0.1111).toFixed(4)}</td>
                    <td>${(pln_by + 0.1111).toFixed(4)}</td>                
                </tr>
            `;
    }).catch(() => {
      console.log('Извените данные недоступны');
    });
  });
}
;

/***/ }),

/***/ "./src/login/login.js":
/*!****************************!*\
  !*** ./src/login/login.js ***!
  \****************************/
/*! exports provided: openLogIn, autorizationBtn, checkUser, btnIn, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLogIn", function() { return openLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorizationBtn", function() { return autorizationBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnIn", function() { return btnIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
let autorizationBtn = document.getElementById('autorization');
let logIn = document.getElementById('log_in');
let emailIn = document.getElementById('email_in');
let passwordIn = document.getElementById('password_in');
let btnIn = document.getElementById('btn_in');
let userName = document.getElementById('userName');
let infoUser = document.getElementById('infoUser');

function openLogIn() {
  autorizationBtn.style.display = 'none';
  logIn.style.display = 'flex';
}

const user = {
  name: 'admin',
  email: 'admin@gmail.ru',
  passwrod: '1',
  transactionHistory: []
};

function checkUser() {
  if (user.email === emailIn.value && user.passwrod === passwordIn.value && user.name === name_in.value) {
    let newSpan = document.createElement('span');
    newSpan.className = "";
    newSpan.innerText = `${user.name}`;
    newSpan.addEventListener('click', function () {
      container1.style.display = 'none';
      container2.style.display = 'none';
      container3.style.display = 'none';
      container4.style.display = 'none';
      main_container.style.display = 'none';
      container_autorization.style.display = 'block';
      let userTest = JSON.parse(localStorage.getItem('test'));
      infoUser.innerHTML = `
            <span>Имя: ${user.name}</span><br>
            <span>Email: ${user.email}</span><br>
            <span>История транзакций: </span><br>`;

      if (userTest !== null) {
        infoUser.innerHTML += `<table class='tableInfo'><tbody id='tableInfo'></tbody></table>`;
        let tableInfo = document.getElementById('tableInfo');

        for (let i = 0; i < userTest.length; i++) {
          tableInfo.innerHTML += `<tr><td>${userTest[i].date}</td><td> ${userTest[i].type}</td><td> ${userTest[i].purchase}</td></tr>`;
        }

        ;
      }
    });
    alert('Добро пожаловать!');
    menuBuyCryptocurrency.style.display = 'flex';
    logIn.style.display = 'none';
    userName.style.display = 'flex';
    userName.append(newSpan);
  } else {
    alert('Неверно введены данные!');
  }
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exchangeRates_exchangeRates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangeRates/exchangeRates.js */ "./src/exchangeRates/exchangeRates.js");
/* harmony import */ var _currencyConverter_currencyConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyConverter/currencyConverter.js */ "./src/currencyConverter/currencyConverter.js");
/* harmony import */ var _calculatorLoans_calculatorLoans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatorLoans/calculatorLoans.js */ "./src/calculatorLoans/calculatorLoans.js");
/* harmony import */ var _login_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.js */ "./src/login/login.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");
/* harmony import */ var _crypto_crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crypto/crypto.js */ "./src/crypto/crypto.js");
alert(`Имя: admin
Email: admin@gmail.ru
Пароль: 1`);
const CUR_BYR = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';






Object(_exchangeRates_exchangeRates_js__WEBPACK_IMPORTED_MODULE_0__["getData"])(CUR_BYR);

for (let i = 0; i < document.getElementById('menu').getElementsByTagName('li').length; i++) {
  document.getElementById('menu').getElementsByTagName('li')[i].addEventListener('click', _menu_menu_js__WEBPACK_IMPORTED_MODULE_4__["menuClick"]);
}

document.getElementById('one').addEventListener('change', () => Object(_currencyConverter_currencyConverter_js__WEBPACK_IMPORTED_MODULE_1__["convert"])(CUR_BYR));
document.getElementById('oneInput').addEventListener('input', () => Object(_currencyConverter_currencyConverter_js__WEBPACK_IMPORTED_MODULE_1__["convert"])(CUR_BYR));
document.getElementById('loanPurpose').addEventListener('change', _calculatorLoans_calculatorLoans_js__WEBPACK_IMPORTED_MODULE_2__["loanСalculation"]);
document.getElementById('amountOfCredit').addEventListener('change', _calculatorLoans_calculatorLoans_js__WEBPACK_IMPORTED_MODULE_2__["handleChange"]);
document.getElementById('calculateLoan').addEventListener('click', _calculatorLoans_calculatorLoans_js__WEBPACK_IMPORTED_MODULE_2__["calculateLoan"]);
document.getElementById('clearCalculation').addEventListener('click', _calculatorLoans_calculatorLoans_js__WEBPACK_IMPORTED_MODULE_2__["clearCalculation"]);
document.getElementById('buy').addEventListener('click', _crypto_crypto_js__WEBPACK_IMPORTED_MODULE_5__["addCryptocurrencies"]);
_login_login_js__WEBPACK_IMPORTED_MODULE_3__["autorizationBtn"].addEventListener('click', _login_login_js__WEBPACK_IMPORTED_MODULE_3__["openLogIn"]);
_login_login_js__WEBPACK_IMPORTED_MODULE_3__["btnIn"].addEventListener('click', _login_login_js__WEBPACK_IMPORTED_MODULE_3__["checkUser"]);

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! exports provided: menuClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuClick", function() { return menuClick; });
let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let container3 = document.getElementById('container3');
let main_container = document.getElementById('main_container');
let container_autorization = document.getElementById('container_autorization');

function menuClick(event) {
  console.log(event.currentTarget.innerHTML);

  switch (event.currentTarget.innerHTML) {
    case "Главная":
      main_container.style.display = 'block';
      container1.style.display = 'none';
      container2.style.display = 'none';
      container3.style.display = 'none';
      container_autorization.style.display = 'none';
      break;

    case "Курсы валют":
      main_container.style.display = 'none';
      container1.style.display = 'flex';
      container2.style.display = 'none';
      container3.style.display = 'none';
      container4.style.display = 'none';
      container_autorization.style.display = 'none';
      break;

    case "Конвертер валюты":
      main_container.style.display = 'none';
      container1.style.display = 'none';
      container2.style.display = 'flex';
      container3.style.display = 'none';
      container4.style.display = 'none';
      container_autorization.style.display = 'none';
      break;

    case "Калькулятор кредитов":
      main_container.style.display = 'none';
      container1.style.display = 'none';
      container2.style.display = 'none';
      container3.style.display = 'block';
      container4.style.display = 'none';
      container_autorization.style.display = 'none';
      break;

    case "Приобрести криптовалюту":
      main_container.style.display = 'none';
      container1.style.display = 'none';
      container2.style.display = 'none';
      container3.style.display = 'none';
      container4.style.display = 'block';
      container_autorization.style.display = 'none';
      break;
  }
}

;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map