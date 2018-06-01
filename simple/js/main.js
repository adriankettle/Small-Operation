var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//deleteEvent
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//Add items
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;

  //Create new li element
  var li = document.createElement('li');

  //Add className
  li.className = 'list-group-item';

  //add textNode with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  //create del button element
  var deleteBtn = document.createElement('button');

  //add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  //append to delete li
  li.appendChild(deleteBtn);

  //append button to li
  itemList.appendChild(li);

  //console.log(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

  //console.log();
}

function filterItems(e) {
  //convert to lower case
  var text = e.target.value.toLowerCase();
  //Get list
  var items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    }else {
      item.style.display = 'none';
    }
  });


  // console.log(items);
}


//
