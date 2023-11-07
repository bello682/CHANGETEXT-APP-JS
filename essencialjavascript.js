var countdownElement = document.getElementById("remove_add");
var loading = document.getElementById("romove");
var dot = document.getElementById("loadingdot");

const displayItems = [
	"JUST IN TIME",
	"JUST ME",
	"JUST ME AND YOU",
	"JUST IN ",
	"JUST IN HERE WITH YOU",
	"JUST IN PLAY",
	"JUST US",
];

countdownElement.addEventListener("click", () => {
	displayItems.map((item) => {
		loading.style.display = "none";
		setTimeout(function () {
			loading.style.display = "block";
			loading.innerHTML = item;
			loading.style.fontSize = "60px";
		}, 1000);
	});
});

let dotIncrement = "....";

setTimeout(() => {
	dot.innerHTML = dotIncrement;
}, 1000);

// Math.floor(Math.random(item))
