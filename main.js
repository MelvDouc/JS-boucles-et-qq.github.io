let i;

// For

const forDivs = document.querySelectorAll('div.for');

for (i = 0; i < forDivs.length; i++) {
    forDivs[i].style.color = 'red';
}

// For... of

const forOfDivs = document.querySelectorAll('div.for-of');

for (forOfDiv of forOfDivs) {
    forOfDiv.style.fontStyle = 'italic';
}

// For... in

const objet1 = {
    nom: 'Doucet',
    prenom: 'Melvin',
    age: 29,
    deviendraDeveloppeur: true
};

for(propriete in objet1) {
    document.querySelector('#p-for-in').innerHTML += `<b>${propriete} :</b> ${objet1[propriete]}<br>`;
};

// While

let texte = '';
let j = 0;

while(j < 10) {
    texte += 'chiffre ' + j + '<br>';
    j++;
}

document.querySelector('#p-while').innerHTML = texte;

// every()

const nbrDeZeroATrente = [1, 2, 5, 15, 27, 29, 30];
const estInferieurAQuarante = (valeur) => valeur < 40;

document.querySelector('#p-every').innerHTML = nbrDeZeroATrente.every(estInferieurAQuarante);

// some()

const egaleVingtSept = (valeur) => valeur === 27;

document.querySelector('#p-some').innerHTML = nbrDeZeroATrente.some(egaleVingtSept);

// find()

const tableauNbr1 = [1, 6, 24, 25, 40];
const multipleDeQuatre = tableauNbr1.find(nbr => nbr % 4 === 0 && nbr !== 0);

document.querySelector('#p-find').innerHTML = multipleDeQuatre;

// includes()

const tableauNbr2 = [1, '1', 2];

document.querySelector('#p-includes1').innerHTML = tableauNbr2.includes(1);
document.querySelector('#p-includes2').innerHTML = tableauNbr2.includes('2');
document.querySelector('#p-includes3').innerHTML = tableauNbr2.includes(1, 1);

// filter()

const animaux = ['chien', 'chat', 'souris', 'tyrannosaure', 'loup', 'ornithorynque'];
const sixLettresOuPlus = animaux.filter(argt => argt.length >= 6);

sixLettresOuPlus.forEach(function (animal) {
    let li = document.createElement('li');
    document.querySelector('#ul-filter').appendChild(li);
    li.innerHTML += animal;
});

let contientOu = animaux.filter(argt => argt.includes('ou'));
document.querySelector('#p-filter-includes').innerHTML = contientOu.join('; ');

// join()

document.querySelector('#p-join').innerHTML = animaux.join(' ');

// splice()

const alphabetIncomplet = ['A', 'B', 'C', 'E'];
alphabetIncomplet.splice(3, 0, 'D'); // Remplace 0 valeur à l'indice 3.
document.querySelector('#p-splice1').innerHTML = alphabetIncomplet;

const alphabetIncompletBis = ['A', 'B', 'C', 'C'];
alphabetIncompletBis.splice(3, 1, 'D');  // Remplace 1 valeur à l'indice 3.
document.querySelector('#p-splice2').innerHTML = alphabetIncompletBis;