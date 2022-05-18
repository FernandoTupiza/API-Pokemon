//Solicitar lo que es informacion
//Primera Funcion
const consultarPokemon = (id,number) => 
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //Peticion
    .then((response) => {  
        //captura y lo hace un Json y me devuelve una promesa
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      pintarPokemon(data,number)
    })
    //capturar los errores que se puede generar
    .catch((error) => {
      console.log(error);
    });
};

//Segunda funcion 
// Numeros randomicos 
const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

//Tercera Funcion
const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

  item.getElementsByTagName("p")[0].innerHTML = data.name;

  



let pokeUno =' '
//Recorrer el array y almacenar el contenido en la variable respectiva
for(let i=0; i<data.abilities.length; i++)
{
 pokeUno += `<li> ${data.abilities[i].ability.name} </li>`   
}
console.log(pokeUno)
//Pintar  Habilidades

item.getElementsByTagName('ol')[0].innerHTML = pokeUno
}
//Referencia
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1