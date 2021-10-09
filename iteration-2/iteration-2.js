// 2.1------------------------------------------------------------------>
const $$divClean = document.createElement("div");
document.body.appendChild($$divClean);
// 2.2------------------------------------------------------------------>
const $$div = document.createElement("div");
const $$paragrahp = document.createElement("p");
$$div.appendChild($$paragrahp);
document.body.appendChild($$div);
// 2.3------------------------------------------------------------------>
const $$divP = document.createElement("div");
document.body.appendChild($$divP);
for (let i = 0; i < 6; i++) {
  const $$paragrahp1 = document.createElement("p");
  $$divP.appendChild($$paragrahp1);
};
// 2.4------------------------------------------------------------------>
const $$paragrahp2 = document.createElement("p");
$$paragrahp2.innerHTML = "Soy dinámico!";
document.body.appendChild($$paragrahp2);
// 2.5------------------------------------------------------------------>
const $$h2 = document.querySelectorAll(".fn-insert-here");
$$h2[0].innerHTML = "Wubba Lubba dub dub";
//Con el querySelectorAll más la posición de la clase, en el caso de que se repita podemos indicarle donde queremos que añada el texto.
// 2.6------------------------------------------------------------------>
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
//Ceate ul
const $$ul = document.createElement("ul");
document.body.appendChild($$ul);
//Create li
for(let app of apps){
   const $$li = document.createElement('li');
   $$li.innerHTML = app;
   $$li.className = 'test2';//Añadir una nueva clase a cada li
   $$ul.appendChild($$li);
};
// 2.7------------------------------------------------------------------>
const $$nodes = document.querySelectorAll(".fn-remove-me");
//Para eliminarlos tenemos que realizar un bucle para recorrer cada nodo
for(let remove of $$nodes){
   //Ambos metodos funcionan igual.
   /* remove.parentNode.removeChild(remove);
   * node.parentNode --> solo lectura, devuelve el padre del nodo especificado
   * removeChild(nodo) --> elimina el node hijo y puede devolver el nodo eliminado
   */
   remove.remove();//IE no lo admite, se inspiro en jQuery
};
// 2.8------------------------------------------------------------------>
//Función para cambiar insertBefore a insertAfter (Fuente: Stackoverflow)
/* ReferenceNode --> está el nodo que desea colocar;
 * newNode --> la posicion (después)
* Si referenceNode es el último hijo dentro de su elemento padre, en este caso   
* body es el padre y div su ultimo hijo, funciona correctamente. 
* Ya que  referenceNode.nextSibling = null y 
* insertBefore agregara al final de la lista y no antes.
*/

//Test 1
function insertAfter(referenceNode, newNode) {
   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
 };
 const $$paragrahp3 = document.createElement('p');
 $$paragrahp3.innerHTML = 'Voy en medio!';
 const $$div1 = document.querySelector('div');
 insertAfter($$div1, $$paragrahp3);

 //Test 2
 const $$paragrahp4 = document.createElement('p');//Cramos el nodo(p)
 $$paragrahp4.innerHTML = 'Voy en medio 2!';//Añadimos texto al nodo o con innertText
 const $$div2 = document.querySelectorAll('div');//Seleccionamos todos los divs
 document.body.insertBefore($$paragrahp4, $$div2[1]);//Indicamos en el primer parametro lo que deseamos insertar y en el segundo parametro el div haciendo referencia a la posición del mismo.
 // 2.9------------------------------------------------------------------>
 //Lo añadimos al primer div con la clase .fn-insert-here

/*  const $$paragrahp5 = document.createElement('p');
 $$paragrahp5.innerText = 'Voy dentro!';
 const $$firstDiv = document.querySelectorAll('.fn-insert-here')
 $$firstDiv[1].appendChild($$paragrahp5); */

//Lo añadimos a los dos divs con la clase .fn-insert-here

const $$allDiv = document.querySelectorAll('div.fn-insert-here');//Capturamos los divs con la clase .fn-insert-here

for(let div of $$allDiv){
   //Para tener cada parrafo en cada iteración, lo añadimos dentro del bucle
   const $$paragrahp6 = document.createElement('p');//Cremos el parrafo
   $$paragrahp6.innerText = 'Voy dentro!';//Añadimos el texto
   div.appendChild($$paragrahp6);//Añadimos el parrafo a cada div
};
 













