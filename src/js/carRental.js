'use strict';
document.getElementById('dateNow').innerText = " تاریخ امروز :  "  + new Date().toLocaleDateString('fa-IR');
const carsCost = new Map([
  ["BmwI8", 10000000],
  ["BmwX6", 3500000],
  ["Bmw528", 2500000],
  ["BenzE350", 2600000],
  ["Toyota4Doors", 3500000],
  ["Porsche911", 5000000],
  ["PorscheBoxster", 2500000],
  ["BenzCls", 2600000],
]); 
const rentedCars = new Array();
let selectedCar;
let selectedCarParentEle;
let selectedCarEle;
function selectCarName(name, ele) {

    for(let index=0; index<rentedCars.length;index++){
        if(rentedCars[index] ==  name){
            alert(" در حال حاضر اجاره این خودرو امکانپذیر نمی باشد. ") ;
            return;
        }else{
           resultSection.classList.add('hidden'); 
        }
    }
      const whiteLine = document.getElementById('whiteLine');
      const calcSection = document.getElementById('calcSection');
      const infoSection = document.getElementById('infoSection');
  selectedCar = name;
  selectedCarParentEle = ele.parentElement;
  selectedCarEle = ele;
  const selectedList = document.getElementsByClassName("border-green-500");
  const selectedListMarginTop = document.getElementsByClassName("-mt-2");
  for(let index =0; index < selectedList.length; index++){//car selected border change color
      selectedList[index].classList.remove('border-green-500', 'border-4');
      selectedListMarginTop[index].classList.remove('-mt-2');
  }
  ele.parentElement.classList.add('border-green-500', 'border-4' , '-mt-2');
   whiteLine.classList.remove('hidden');
   calcSection.classList.remove('hidden');
   infoSection.classList.remove('hidden'); 
};
function calcCost(){
  const dayNum =  persionToEnNumber(document.getElementById('dayNum').value);
  const costResult = document.getElementById('costResult');
  const price = carsCost.get(selectedCar);
  
  if(dayNum == "" || dayNum <=0 || dayNum > 365){
    alert("روز وارد شده اشتباه است");
    return;
  }
  costResult.value= Number(price * dayNum) + " تومان ";
};
function submitRent() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const phone = document.getElementById('phone').value;
  const showFullName = document.getElementById('showFullName');
  const resultSection = document.getElementById('resultSection');
  const calcSectionForms = document.getElementById('calcSectionForms');
  if(fname == "" || lname == "" || phone == ""){
     alert(' اطلاعات خود را به درستی وارد نمایید ');
     return;
  }
  resultSection.classList.remove('hidden');
  showFullName.innerText = fname + ' ' + lname;
  whiteLine.classList.add('hidden');
  calcSection.classList.add('hidden');
  infoSection.classList.add('hidden');
  selectedCarParentEle.classList.add('grayscale');
  selectedCarEle.classList.add('cursor-not-allowed')
  rentedCars.push(selectedCar);
  calcSectionForms.reset();
}

let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
  persionToEnNumber = function (str) {
    if (typeof str === 'string') {
      for (let i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
      }
    }
    return str;
  }
