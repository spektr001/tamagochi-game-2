
  // MENU

  let menuElem = document.getElementById('menu');
  let titleElem = menuElem.querySelector('#menu-title');
 
  titleElem.onclick = function() {
    menuElem.classList.toggle('open');
  };
 
   // NAME BUTTON
 
 document.getElementById('greeting-btn').onclick = function () {
 
     let petName = prompt("System: I think it's time to give a name to your pet (6 symbols max)");
     
     while (petName.length > 6 || petName == null || petName == '') {
      petName = prompt("System: I think it's time to give a name to your pet (6 symbols max)");
     }
 
     localStorage.setItem('petName', petName);
     location.reload()   
 }
 
   // LOCAL SAVER
 
  document.getElementById('name').innerHTML = ("Name: ");
 
 window.onload = function() {
   
   if (localStorage.getItem('petName') !== null) {
     document.getElementById('name').innerHTML = ("Name: " + localStorage.getItem('petName'));
   }
   
   localStorage.setItem('petName', petName);
 
   }
 
   // LIFETIME

  let lifeTime = {
   seconds: 0,
   minutes: 0,
 }
 let timeChecker = 0;
 
 function timer() {
  timeChecker++
 
  if(timeChecker < 60) {
    lifeTime.seconds++
  }
  else if(timeChecker >= 59) {
    lifeTime.minutes++
    lifeTime.seconds = 0 
    timeChecker = 0
   }
   document.getElementById('lifetime').innerHTML = ("Time: " + lifeTime.minutes + " m " +  lifeTime.seconds + " s")  
 }
 
   // RULES BUTTON 
 
   document.getElementById('rules-btn').onclick = function () {
   alert("Rules:\n - All stats decrease each 5 second\n - You will lose if one of stats got 0\n - You can restart if you lose")
   }
   
   // RESTART BUTTON
 
   document.getElementById('restart-btn').onclick = function () {
     location.reload() 
 }

  // ABOUT BUTTON

  document.getElementById('about-btn').onclick = function () {
    alert("Tamagochi World Game 2\n          version 2.0\n        by Spektr_001\n            ©2020")
   }