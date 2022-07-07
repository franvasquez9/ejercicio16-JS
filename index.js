const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("se arrastra el parrafo: " + parrafo.innerText);
        parrafo.classList.add("parrafo-dragging");
        event.dataTransfer.setData("id" , parrafo.id)
        
    })
    parrafo.addEventListener("dragend", () => {
       // console.log("se dejo de arrastrar");
        parrafo.classList.remove("parrafo-dragging");

    })
    
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
       // console.log("drag over");
    });
    seccion.addEventListener("drop", event => {
       // console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });

})

const papelera = document.querySelectorAll(".papelera");

papelera.forEach(pape =>{
    pape.addEventListener("dragover", event => {
        event.preventDefault();
    });
    
    pape.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");        
        const parrafo = document.getElementById(id_parrafo);
        parrafo.remove();
    })
})

    