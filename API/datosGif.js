//API GENERADA POR GIPHY TUPIZA ALEXANDER
let urlGif = "https://api.giphy.com/v1/gifs/random?api_key=UbVWalr452W5uibsXuZ0Y9P0Zwn9OXhL&tag=pokemon";
//BLOQUE PARA DETECTAR EL ERROR SI EN EL CASO SE DA
const obtenerGif = async () => {
  try {
    let response = await fetch(urlGif);

    if(!response.ok)
    {
        throw new Error("Ourrio un Error al realizar la petición")
    }

    let data = await response.json();
    console.log(data)
    pintarGif(data);



  } catch (error) 
  {
    console.log(error);
  }
};
obtenerGif();

//localizar gif
const variableGif1=document.getElementById("gif1")
//SE CREA LA FUNCION PASANDO EL JSON 
const pintarGif =(data1) => {
  //ME POSICIONO DENTRO DEL GIF
  let variableGif2=variableGif1.querySelector(`#gif2`);
  //PRIMERO ES LA VARIABLE, SEGUNDO LA GERARQUIZACION DEL JSON
  variableGif2.getElementsByTagName("img")[0].setAttribute("src",data1.data.images.fixed_height_small.url)
}
