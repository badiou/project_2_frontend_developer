

const listElementsNavBar=['Home','Section1','Section2','Section3'];
const myNav=document.getElementById('navbar__list');
var list_id=[]; //i need to use this id to perform action Eventlistener and making the function
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

  //i need to get a new method to create function and note create 3 element

  
  //add actionEventListerner to section 1


document.querySelector('#Section1').addEventListener('click',function(e){
    console.log('click section 1');
    e.preventDefault();
    document.getElementById("section1").scrollIntoView();
});
  //add actionEventListerner to section 2
document.querySelector('#Section2').addEventListener('click',function(e){
    console.log('click section 2');
    e.preventDefault();
    document.getElementById("section2").scrollIntoView();
});
  //add actionEventListerner to section 3
document.querySelector('#Section3').addEventListener('click',function(e){
    console.log('click section 3');
    e.preventDefault();
    document.getElementById("section3").scrollIntoView();
});



