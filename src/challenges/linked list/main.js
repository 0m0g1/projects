import linkedList from "./linkedlist.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const list = new linkedList(pen);
list.append("Davis");
list.append("Sheillah");
list.append("Willis");
list.append("Jeff");
list.append("Zelda");
list.show()