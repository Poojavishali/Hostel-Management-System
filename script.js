// // Login form validation
// const loginForm = document.querySelector("#login form");
// const loginUsername = document.querySelector("#login input[name='username']");
// const loginPassword = document.querySelector("#login input[name='password']");

// loginForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
	
// 	if (loginUsername.value.trim() === "") {
// 		alert("Please enter a username");
// 		loginUsername.focus();
// 		return;
// 	}

// 	if (loginPassword.value.trim() === "") {
// 		alert("Please enter a password");
// 		loginPassword.focus();
// 		return;
// 	}

// 	alert("Login successful!");
// 	loginForm.reset();
// });

// // Search form validation
// const searchForm = document.querySelector("#search form");
// const searchLocation = document.querySelector("#search input[name='location']");
// const searchFacility = document.querySelector("#search select[name='facility']");

// searchForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
	
// 	if (searchLocation.value.trim() === "") {
// 		alert("Please enter a location");
// 		searchLocation.focus();
// 		return;
// 	}

// 	if (searchFacility.value === "") {
// 		alert("Please select a facility");
// 		searchFacility.focus();
// 		return;
// 	}

// 	alert(`Search results for ${searchFacility.value} in ${searchLocation.value}`);
// 	searchForm.reset();
// });

// // Payment form validation
// const paymentForm = document.querySelector("#payment form");
// const paymentName = document.querySelector("#payment input[name='name']");
// const paymentCardNumber = document.querySelector("#payment input[name='card-number']");
// const paymentExpiration = document.querySelector("#payment input[name='expiration']");
// const paymentCvv = document.querySelector("#payment input[name='cvv']");

// paymentForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
	
// 	if (paymentName.value.trim() === "") {
// 		alert("Please enter a name");
// 		paymentName.focus();
// 		return;
// 	}

// 	if (paymentCardNumber.value.trim() === "") {
// 		alert("Please enter a card number");
// 		paymentCardNumber.focus();
// 		return;
// 	}

// 	if (paymentExpiration.value.trim() === "") {
// 		alert("Please enter an expiration date");
// 		paymentExpiration.focus();
// 		return;
// 	}

// 	if (paymentCvv.value.trim() === "") {
// 		alert("Please enter a CVV code");
// 		paymentCvv.focus();
// 		return;
// 	}

// 	alert("Payment successful!");
// 	paymentForm.reset();
// });
