
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


// check and uncheck item on list listening to "check" buton
// function checkButton(){
// 	$('.shopping-item-toggle').click(function(event) {
// 		//$('span', '.shopping-item').removeClass('.shopp');
// 		$('.shopping-item').parent().addClass('.shopping-item__checked');
// 	})
// }

//checkButton();

//function checkButton(item) {

// remove item from list


//3 functions that render state

//let template = " all the html we need to add"

//4 event listeners

// when user clicks/return call the add function
//all the functions from step 2
//${function(){
	//checkButton();
//}
