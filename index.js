// 1 uzduotis
const change1 = document.getElementById("change1");
const change2 = document.getElementById("change2");
const change3 = document.getElementById("change3");

change1.style.backgroundColor = 'blue';
change2.innerText = "Paragrafas";
change3.innerHTML = "Labai laba diena";

// 2 užduotis

const pirmas_p = document.getElementById("uzd2-1");
const antras_p = document.getElementById("uzd2-2");
const trecias_p = document.getElementById("uzd2-3");

// nauji elementai
const pirmas_p_naujas = document.createElement('p');
pirmas_p_naujas.textContent = 'Naujas 1';
pirmas_p.appendChild(pirmas_p_naujas);
pirmas_p_naujas.style.color = "yellow";
pirmas_p_naujas.style.backgroundColor = "black";

const antras_p_naujas = document.createElement('p');
antras_p_naujas.textContent = 'Naujas 2';
antras_p.appendChild(antras_p_naujas);
antras_p_naujas.style.fontSize = "25px";

const trecias_p_naujas = document.createElement('p');
trecias_p_naujas.textContent = 'Naujas 3';
trecias_p.appendChild(trecias_p_naujas);
trecias_p_naujas.style.fontFamily = "Cursive";
trecias_p_naujas.style.fontSize = "35px";

// elementų keitimas
document.body.replaceChild(pirmas_p_naujas,pirmas_p);
document.body.replaceChild(antras_p_naujas,antras_p);
document.body.replaceChild(trecias_p_naujas,trecias_p);