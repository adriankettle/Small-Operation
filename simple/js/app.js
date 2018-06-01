//Examine the documentobject

//console.dir(document);

//console.log(document);
//console.log(document.title);
//document.title = 1234;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
 // console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//getElementsByClassName('className')
//console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
 //console.log(headerTitle);
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Hellp</h3>';
//header.style.borderBottom = 'solid 3px #000';

//get elements by className
// var items = document.getElementsByClassName('list-group-item');
// //console.log(items);
// console.log(items[3]);
// items[2].textContent = 'Hello wio';
// items[2].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
//
// //Gives error
// //items.style.backgroundColor = '#f4f4f4';
//
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

//get elements by tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello wio';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
//
// //Gives error
// //items.style.backgroundColor = '#f4f4f4';
//
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//query selector
// var header = document.querySelector('#main-header');
//
// header.style.borderBottom = 'solid 4px #ccc';
//
//
// var input = document.querySelector('input');
// input.value = 'Hello World';
//
// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND"
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
//
// var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
// thirdItem.style.color = 'green';

//query selector all
//
// var titles = document.querySelectorAll('.title')
//
// console.log(titles);
// titles[0].textContent = 'Hello'
//
// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for (var i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = '#f4f4f4';
// // }
//
//
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = 'steelblue';
// }

//traverse the DOM
//var itemList = document.querySelector('#items');

//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'skyblue';
// console.log(itemList.parentElement.parentElement.parentElement);


//child node
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'skyblue';
//
// //firstchild
// // console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello you from 1'
// itemList.firstElementChild.style.backgroundColor = 'skyblue'
//
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'skyblue';
//
// //lastchild
// // console.log(itemList.lastChild);
// //firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello you from last child'
// itemList.lastElementChild.style.backgroundColor = 'skyblue'

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// //backgroundColor
// itemList.previousElementSibling.style.backgroundColor = 'skyblue';
//
// //text color
// itemList.previousElementSibling.style.color = 'white';
// //markup
// itemList.previousElementSibling.textContent = 'Hello from sibling elment';

//createElement

//create a div
// var newDiv = document.createElement('div');
//
// newDiv.className = 'Hello';
// //Add id
// newDiv.id= 'hello1';
// //Add attribute
// newDiv.setAttribute('title', 'Hello Div');
// //create text note
// var newDivText = document.createTextNode('Hello World');
// //Add child to Div
// newDiv.appendChild(newDivText);
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
//
// //Setting fontSize
// newDiv.style.fontSize = '30px';
//
// //Adding markup
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

//Event option
// var button = document.getElementById('button').addEventListener('click', buttonClick);
//
// function buttonClick(e) {
//   //console.log('Button is clicked');
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = 'skyblue';
//   // document.querySelector('#main').style.color = 'white';
//  //  console.log(e);
// // console.log(e.target);
// // console.log(e.target.id);
// // console.log(e.target.className);
// // console.log(e.target.classList);
// // var output = document.getElementById('output');
// // output.innerHTML = '<h3>'+e.target.id+'</h3>';
// // console.log(e.type);
//   //from window
// // console.log(e.clientX);
// // console.log(e.clientY);
//
// //console.log(e.offsetX);
// //console.log(e.offsetY);
// //
// // console.log(e.altKey);
// // console.log(e.ctrlKey);
// // console.log(e.shiftKey);
//
// }
// 
// var button = document.getElementById('button');
// var box = document.getElementById('box');
//
// //button.addEventListener('click', runEvent);
// //button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);
// ////to be continued......
// //box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);
// //box.addEventListener('mousemove', runEvent);
// //box.addEventListener('mouseout', runEvent);
// //box.addEventListener('mouseover', runEvent);
//
// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');
//
// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // //itemInput.addEventListener('keypress', runEvent);
// // itemInput.addEventListener('focus', runEvent);
// // // itemInput.addEventListener('blur', runEvent);
// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);
// // itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('input', runEvent);
//
// // select.addEventListener('Change', runEvent);
// // select.addEventListener('input', runEvent);
//
// form.addEventListener('submit', runEvent);
//
// function runEvent(e) {
//   e.preventDefault();
//   // //beauty
//    console.log('EVENT TYPE: ' +e.type);
//    //MOB
//    //document.body.style.display = 'none';
//    //continued
//   //  console.log(e.target.value);
//   //  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


  // output.innerHTML = '<h3>MouseX: ' +e.offsetX+ ' </h3><h3>MouseY: ' +e.offsetY+ '</h3>';


}









//
