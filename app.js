
// 1 global state
const shoppingState = {
	list:[],
};

//2 functions that modify state
// add item to list
function addItem(state, itemName) {
	state.list.push({
		displayName: itemName,
		checkedOff: false 
	});
}

// function getItem(state, index)

function checkItem(state, index) {
	// target correct item in array
	// change its checked property?

	state.list[index].checkedOff = !state.list[index].checkedOff;
}

function removeItem(state, index) {

	// let deletedItem = state.list.find(function(stateItem) {
	// 	return stateItem.displayName === targetItem;	
	// });
	// let index = state.list.indexOf(deletedItem);
	state.list.splice(index, 1);
}


//addItem(shoppingState, 'yogurt');
//console.log(shoppingState);
//removeItem(shoppingState, 'yogurt');
//console.log(shoppingState);



//checkButton();

//function checkButton(item) {

// remove item from list

//let template = " all the html we need to add"
//3, functions that render state

function renderItem(state, element) {
	let itemsHtml = state.list.map(function(item) {
		return (`
			<li>
        <span class="shopping-item">${item.displayName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
`);

	});
	$(element).html(itemsHtml);
}

//renderItem(shoppingState, 'ul',);



//4 event listeners
$(function() {
	$('#js-shopping-list-form').on('submit', function(event){
		event.preventDefault();
		addItem(shoppingState, $('#shopping-list-entry').val());
		renderItem(shoppingState, 'ul');

	})
});
console.log(shoppingState);
// when user clicks/return call the add function
//all the functions from step 2
//${function(){
	//checkButton();
//}
