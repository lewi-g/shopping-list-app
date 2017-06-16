
// 1 global state
const shoppingState = {
	list:[],
};

//2 functions that modify state
// add item to list
function addItem(state, item) {
	state.list.push({
		displayName:item,
		checkedOff: false 
	});
}

function removeItem(state, targetItem) {
	let deletedItem = state.list.find(function(stateItem) {
		return stateItem.displayName === targetItem;	
	});
	let index = state.list.indexOf(deletedItem);
	state.list.splice(index, 1);
}


addItem(shoppingState, 'yogurt');
console.log(shoppingState);
removeItem(shoppingState, 'yogurt');
console.log(shoppingState);



//checkButton();

//function checkButton(item) {

// remove item from list

//let template = " all the html we need to add"
//3 functions that render state

function renderItem(state, element) {
	let itemsHtml = state.list.map(function(item) {
		return (`
			<li>
        <span class="shopping-item">${item}</span>
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
		addItem(shoppingState, $('#shopping-list-entry').val());
		console.log(shoppingState);

		//renderItem(shoppingState, 'ul');

	})
});
// when user clicks/return call the add function
//all the functions from step 2
//${function(){
	//checkButton();
//}
