let listaNotas=[];
let seguir;
let numNota=0;
let i=0;


function addNotaTemp(){
    
    let notaTitle=  document.getElementById('inputTitle');
    let notaTexto=  document.getElementById('inputTexto');

    notaTexto.addEventListener()
    contenedor = document.createElement('div');
    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content; font-family: sans-serif; border-radius: 10px; margin-right: 10px; max-height: fit-content; display: flex; min-width: 150px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><u><textarea placeholder="Ingrese un titulo" class="inputTitle" name="inputTitle" id="notaTitle"></textarea></u></div></div><br><div class="contenidoNota" style="align-items:center"><textarea placeholder="Ingrese su nota" class="inputTexto" id="inputTexto"></textarea>`;
    document.getElementById("notasTotales").appendChild(contenedor);
    
    
}

function addNota(){
    let notaTitle=  document.getElementById('inputTitle');
    let notaTexto=  document.getElementById('inputTexto');

    this.i=i; 

    listaNotas.push({
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        numNota: i,
    })
    
    contenedor = document.createElement('div');
    contenedor.setAttribute("class", `nota`);
    contenedor.setAttribute("id", `nota${listaNotas[i].numNota}`);
    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content; font-family: sans-serif; border-radius: 10px; margin-right: 10px; max-width: 250px; max-height: fit-content; display: flex; min-width: 150px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><u><b>${notaTitle}</b></u></div><button class="botonDelete" onclick="deleteNota(${listaNotas[i].numNota})">X</button></div><br><div class="contenidoNota"><div class="notaTexto">${notaTexto}</div><button class="botonEdit" onclick="editarNota(${listaNotas[i].numNota})">Editar</button>`;
    document.getElementById("notasTotales").appendChild(contenedor);
    i++;
}
function deleteNota(del){
    let borrarNota = document.getElementById(`nota${del}`);
    borrarNota.remove();
    listaNotas.splice(del, 1);
    for(let i=0; i<listaNotas.length; i++){
        if(i>del){
            listaNotas[i].numNota=listaNotas[i].numNota-1;
    }
}
    
    i=(listaNotas.length)-1;
    if(i<0){
        i=0;
    }
}

function editarNota(del){
    let notaTitle=prompt(`Editar nota.\n----------\nTitulo:`);
    let notaTexto=prompt(`Editar nota.\n----------\nTexto:`);
    this.i=i;
    
    let editNota = document.getElementById(`nota${del}`);

    

    listaNotas.splice(del, {
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        numNota: del,
    })
    
    editNota.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37); font-family: sans-serif; border-radius: 10px; margin-right: 10px; max-width: 250px; max-height: 550px; height:fit-content; display: flex; min-width: 150px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");

    editNota.innerHTML = `<div class="notaTop"><div class="tituloNota"><u><b>${notaTitle}</b></u></div><button class="botonDelete" onclick="deleteNota(${del})">X</button></div><br><div class="contenidoNota"><div class="notaTexto">${notaTexto}</div><div class="footerNota"><button class="botonEdit" onclick="editarNota(${del})">Editar</button></div></div>`;
}