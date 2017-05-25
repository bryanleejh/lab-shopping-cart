$(document).ready(function(){
	var returnSubtotalPrice = function(price, quantity, i) {
		var itemSubtotalPrices = $(".item-subtotal");
		var annoying = $(itemSubtotalPrices.eq(i)).text("$" + (price * quantity).toFixed(2));
		console.log(annoying);
	};

	var returnTotalPrice = function() {
		console.log("return connected");
		var itemPrices = $(".item-price");
		var itemQuantities = $(".input-field");
		var itemLength = itemPrices.length;
		
		var totalPrice = 0;
		for (var i = 0; i < itemLength; i++) {
			var price = itemPrices.eq(i).text().replace("$", "");
			var quantity = itemQuantities.eq(i).val();
			console.log(quantity);
			returnSubtotalPrice(price, quantity, i);
			totalPrice += price * quantity
		}
		$("#total-price").text("$" + totalPrice.toFixed(2))
	};


	var createItem = function () {
		console.log("create connected");
		var itemName = $('.input-item').val();
		var itemPrice = $('.input-price').val();
		itemPrice = '$' + Number(itemPrice).toFixed(2);

		var newItem = '<div class="item row">' +
		'<div class="item-name col-xs-4">'+ itemName + '</div>' +
		'<div class="item-price col-xs-3">'+ itemPrice + '</div>' +
		'<div class="item-qty col-xs-3">' +
		'<label>Qty</label>' +
		'<input class="quantity" value="0">' +
		'<button class="cancel">Cancel</button>' +
		'</div>' +
		'<div class="item-subtotal col-xs-2"> $0.00 </div>' +
		'</div>';

		$('.container .items-list').append(newItem);
	};

	var removeItem = function(event) {
		
	};

	$('.input-button').on('click', function(){
		createItem();
	});

	$('#calc-prices-btn').on('click', function(){
		returnTotalPrice();
	});

	$('.cancel').on('click', function(){
		console.log("remove connected");
		$(event.target).parents('.item').remove();
		calculateTotal();
	});

});
