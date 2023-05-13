const input = document.getElementById("note");
const addButton = document.getElementById("add-note");
const notesCont = document.getElementById("zone-note");

addButton.addEventListener("click", () => {
    const noteText = input.value;
    const noteElement = document.createElement("div");
    noteElement.innerText = noteText;
    notesCont.appendChild(noteElement);
    input.value = "";
});

