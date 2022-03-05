
//add the scroll with javascript

mydocument=document.getElementById('my_html');
mydocument.style.cssText+='scroll-behavior:smooth';
//create the navbar dynamically with javascript
const listElementsNavBar=['Home','Section1','Section2','Section3','Section4'];
const myNav=document.getElementById('navbar__list');
let list_id=[]; //i need to use this id to perform action Eventlistener and making the function ........
for(listElement of listElementsNavBar) //use loop to browse list 
{
    mynewli=document.createElement('li')
    mynewli.textContent=listElement; // add the textContent to a. Example <a href="">Section 1</a>
    
    mySectionId=`${listElement}`; //create de id of the a href element
    list_id.push(mySectionId);
    //console.log(mySectionId);
    mynewli.innerHTML=`<a href="#" id="${mySectionId}">  ${listElement}  </a>`; //set NavBar element like link
    myNav.appendChild(mynewli)
    mynewli.className+="top-link active"; //set top-link class to a href link
    
}
console.log(list_id);


window.scroll({
    top: 1000, 
    left: 0, 
    behavior: 'smooth'
});
window.scrollBy({ 
    top: 250, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

  //i need to get a new method and create function and note create 3 element
  //But here i created 3 EventListener
  
  //add actionEventListerner to section 1
document.querySelector('#Section1').addEventListener('click',function(e){
    console.log('click section 1');
    e.preventDefault();
    document.getElementById("section1").scrollIntoView();
    document.getElementById("Section1").style.cssText+='border:3px solid blue';
    document.getElementById("Section2").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section3").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section4").style.cssText+='border:2px solid lightskyblue';
});
  //add actionEventListerner to section 2
document.querySelector('#Section2').addEventListener('click',function(e){
    console.log('click section 2');
    e.preventDefault();
    document.getElementById("section2").scrollIntoView();
    document.getElementById("Section1").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section2").style.cssText+='border:3px solid blue';
    document.getElementById("Section3").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section4").style.cssText+='border:2px solid lightskyblue';
});
  //add actionEventListerner to section 3
document.querySelector('#Section3').addEventListener('click',function(e){
    console.log('click section 3');
    e.preventDefault();
    document.getElementById("section3").scrollIntoView();
    document.getElementById("Section1").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section2").style.cssText+='border:2px solid lightskyblue';
    document.getElementById("Section3").style.cssText+='border:3px solid blue';
    document.getElementById("Section4").style.cssText+='border:2px solid lightskyblue';
});
  //add actionEventListerner to section 4
document.querySelector('#Section4').addEventListener('click',function(e){
  console.log('click section 4');
  e.preventDefault();
  document.getElementById("section4").scrollIntoView();
  document.getElementById("Section1").style.cssText+='border:2px solid lightskyblue';
  document.getElementById("Section2").style.cssText+='border:2px solid lightskyblue';
  document.getElementById("Section3").style.cssText+='border:2px solid lightskyblue';
  document.getElementById("Section4").style.cssText+='border:3px solid blue';
});


