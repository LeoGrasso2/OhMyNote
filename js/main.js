let listaNotas=[];
let seguir;
let numNota=0;
let i=0;


function addNota(){
    let notaTitle=prompt(`Nueva nota.\n----------\nTitulo:`);
    let notaTexto=prompt(`Nueva nota.\n----------\nTexto:`);
    this.i=i;
    

    listaNotas.push({
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        numNota: i,
    })
    
    contenedor = document.createElement('div');
    contenedor.setAttribute("class", `nota`);
    contenedor.setAttribute("id", `nota${listaNotas[i].numNota}`);
    contenedor.innerHTML= `<div class="tituloNota"><u><b>${notaTitle}</b></u><button class="botonDelete" onclick="deleteNota(${listaNotas[i].numNota})">X</button></div><br><div class="contenidoNota">${notaTexto}`;
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
