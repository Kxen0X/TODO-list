const input = document.querySelector("#input");
const ul = document.querySelector("#ul");
const btn = document.querySelector("#button");
const theme = document.querySelector("#theme");
const length = 50;

btn.addEventListener("click", () => {
  if (input.value === "") return;
  CreateElements(input.value);
  input.value = "";
});
function CreateElements(value) {
  const element = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  element.textContent = value + " ";

  ul.appendChild(element);

  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "delete";

  element.appendChild(button);

  button.onclick = () => {
    ul.removeChild(element);
  };
  element.addEventListener("dblclick", () => {
    element.classList.add("li-active");
  });
}
theme.onclick = () => {
  document.body.classList.toggle("bodyTheme");
};
