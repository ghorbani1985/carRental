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
  const selectedList = document.getElementsByClassName("border-red-500");
  const selectedListMarginTop = document.getElementsByClassName("-mt-2");
  for(let index =0; index < selectedList.length; index++){//for one car border change
      selectedList[index].classList.remove('border-red-500');
      selectedListMarginTop[index].classList.remove('-mt-2');
  }
  ele.parentElement.classList.add('border-red-500','-mt-2');
   whiteLine.classList.remove('hidden');
   calcSection.classList.remove('hidden');
   infoSection.classList.remove('hidden'); 
};
function calcCost(){
    const dayNum = document.getElementById('dayNum').value;
    const costResult = document.getElementById('costResult');
    const price = carsCost.get(selectedCar);
    if(dayNum == "" || dayNum <=0 || dayNum > 365){
        alert("روز وارد شده اشتباه است");
        return;
    }
    costResult.value= price * dayNum + " تومان ";
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





/* carLinks.onclick = function carList(item) {

}; */


 /*  console.log('element = ' + element, 'index = ' + index, 'array = ' + array); */


/* costBtn.onclick = function(){

 costResult.value = 3500000 * dayNum + " تومان ";
} */
/* rentBtn.onclick = function(){
 const fname = document.getElementById('fname').value;
 const lname = document.getElementById('lname').value;
 const phone = document.getElementById('phone').value;
 const showFullName = document.getElementById('showFullName');
 const resultSection = document.getElementById('resultSection');
 resultSection.classList.remove('hidden');
 showFullName.innerText = fname + " " + lname;
 whiteLine.classList.add('hidden');
 calcSection.classList.add('hidden');
 infoSection.classList.add('hidden');
carLinks.classList.remove('cursor-cell');
carLinks.classList.add('grayscale', 'pointer-events-none');

} */






//grayscale cursor-not-allowed

