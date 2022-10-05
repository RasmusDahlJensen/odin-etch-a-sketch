//Page elements
const gridContainer = document.getElementById("grid");

//buttons
const reset = document.getElementById("reset");
const sixteen = document.getElementById("16x");
const thirtytwo = document.getElementById("32x");
const sixtyfour = document.getElementById("64x");
const colorPicker = document.getElementById("colorPicker");

let color = "#000000";
const changeColor = () => {
	color = colorPicker.value;
};
colorPicker.addEventListener("change", changeColor);

//Coloring
const coloring = () => {
	const items = document.querySelectorAll(".gridItem");
	items.forEach((item) => {
		item.addEventListener("mouseover", () => {
			item.style.backgroundColor = color;
		});
	});
};

//16x16 (default)
for (let i = 0; i < 255; i++) {
	const gridItem = document.createElement("div");
	gridItem.classList.add("gridItem");
	gridItem.classList.add("gridItem16x16");
	gridContainer.appendChild(gridItem);
	coloring();
}

//Reset function
let funcReset = () => {
	const items = document.querySelectorAll(".gridItem");
	items.forEach((item) => {
		item.style.backgroundColor = "white";
	});
};
reset.addEventListener("click", funcReset);

//16x16 Function
let funcSixteen = () => {
	gridContainer.innerHTML = "";
	for (let i = 0; i < 255; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		gridItem.classList.add("gridItem16x16");
		gridContainer.appendChild(gridItem);
	}
	coloring();
};
sixteen.addEventListener("click", funcSixteen);

//32x32 Function
let funcThirtytwo = () => {
	gridContainer.innerHTML = "";
	for (let i = 0; i < 1023; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		gridItem.classList.add("gridItem32x32");
		gridContainer.appendChild(gridItem);
	}
	coloring();
};
thirtytwo.addEventListener("click", funcThirtytwo);

//64x64 Function
let funcSixtyfour = () => {
	gridContainer.innerHTML = "";
	for (let i = 0; i < 4070; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		gridItem.classList.add("gridItem64x64");
		gridContainer.appendChild(gridItem);
	}
	coloring();
};
sixtyfour.addEventListener("click", funcSixtyfour);
