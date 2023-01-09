lef = pc1 = {
    nombre: "CAMILOPC",
    procesador: "Intel Core I3",
    ram: "8GB",
    espacio: "1TB"
};

lef = nombre = pc1["nombre"];
lef = procesador = pc1 ["procesador"];
lef = ram = pc1 ["ram"];
lef = espacio = pc1 ["espacio"];

frase = `el nombre de mi PC es : <b> ${nombre}</b> </br>
         el procesardor es: <b> ${procesador} </b> </br>
         la memoria RAM es: <b> ${ram} </b> </br>
         el espacio en disco es de <b> ${espacio}</b> </br>`;

document.write(frase);         
