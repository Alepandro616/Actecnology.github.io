let questions = [
{
    pregunta:"Que puerto se usa para modems, impresoras, etc...",
    image:"",
    respuesta: "Serial",
    mas: ["VGA", "HDMI","Dysplayport"],
    
    
},
{
    pregunta:"Cuantos pines tiene el conector DVI",
    image: "",
    respuesta: "24 pines",
    mas: ["20 pines", "10 pines","15 pines"],
},
{
    pregunta:"Para que se utiliza el conector RCA",
    image: "",
    respuesta: "Para transmitir audio y video",
    mas: [ "Para transmitir imagenes","Para transmitir imagenes y sonido","Todas las anteriores son correctas"],
},
{
    pregunta:"que puerto se muestra en pantalla",
    image: "https://th.bing.com/th/id/R.b5f950378b292c76e63fa7f1618478f5?rik=DMpytdJ6neBOKw&pid=ImgRaw&r=0",
    respuesta: "HDMI",
    mas: ["VGA", "Dysplayport","Roseta"],
    
    
},

{
    pregunta:"Que puerto permite conectar, microfonos, altavoces, etc",
    image: "",
    respuesta: "Puerto de audio",
    mas: ["Video", "Dysplayport", "Serial"],
    
    
},
{
    pregunta:"¿En que puerto conectarias una impresora?",
    image: "",
    respuesta: "Paralelo",
    mas: ["Juego","Dysplayport"],
    
    
},
{
    pregunta:"¿Que conector se muestra?",
    image: "https://i.ibb.co/rQts98m/puerto-audio-y-video.png",
    respuesta: "RCA",
    mas: [ "Coaxial","USB tipo C","RJ-11"],
    
    
},

{
    pregunta:"que puerto se muestra en pantalla",
    image: "https://th.bing.com/th/id/OIP.5ifv28EkdF_Opjob0KMazQAAAA?w=201&h=145&c=7&r=0&o=5&pid=1.7",
    respuesta: "DVI",
    mas: ["VGA", "Serial","Dysplayport"],
    
    
},
{
    pregunta:"¿De que color es el puerto VGA y cuantos pines tiene?",
    image: "",
    respuesta: "Azul, con 15 pines",
    mas: [ "rojo, con 15 pines","Amarillo, con 30 pines", "Todas son incorrectas"],
    
    
},
{
    pregunta:"Ha un tecnico se le pide que conecte un teclado y un raton, en que puerto tendría que conectarlo  ",
    image: "",
    respuesta: "PS/2",
    mas: ["PS/4", "Juego", "Paralelo"],
    
    
},
{
    pregunta:"Que puerto de video se muestra en pantalla",
    image: "https://th.bing.com/th/id/OIP.3O6FKjjCIar7DEI4pCeJfgHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7",
    respuesta: "Dysplayport",
    mas: ["Puerto de audio", "Serial", "Ninguna es correcta"],
    
    
},
{
    pregunta:"Que conector se muestra en pantalla",
    image: "data:image/jpeg;base64,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",
    respuesta: "IDE",
    mas: ["IDE", "SATA", "eSATA", "Ninguna es correcta"],
    
    
},
{
    pregunta:"¿Que conector tiene forma de L y sirve para conectar discos duros?",
    image: "",
    respuesta: "SATA",
    mas: ["SATA", "IDE", "RJ-11", "RJ-45"],
    
    
},
{
    pregunta:"¿Porque un cliente pide que se instale una tarjeta de expansion eSATA?",
    image: "",
    respuesta: "Para conectar mas de un disco duro ",
    mas: ["Para conectar ratones y teclados", "Para conectar dispositivos intermedarios", "Todas son correctas"],
    
    
},
{
    pregunta:"¿Thunderbolt permite conexion de alta velocidad: discos duros, matrices RAID y interfaces de red?",
    image: "",
    respuesta: "Verdadero",
    mas: ["Falso", ".", "."],
    
    
},
{
    pregunta:"Cual de esta imagen es el puerto USB",
    image: "https://reticulated-howls.000webhostapp.com/img/Puertos.png",
    respuesta: "(8)",
    mas: ["(1)", "(2)", "(4)"],
    
    
},
{
    pregunta:"Los cables IDE son usados para:",
    image: "",
    respuesta: "Unidades de almacenamiento",
    mas: ["La pantalla de video", "La fuente de almacenamiento", "Ninguna es correcta"],
    
    
},
{
    pregunta:"¿Ha un tecnico se le pide que de energia a una unidad de almacenamiento que conector usaría?:",
    image: "",
    respuesta: "SATA",
    mas: ["eSATA", "IDE", "Coaxial"],
    
    
},
{
    pregunta:"Que dispositivo le permitiría conectar mas perifericos",
    image: "",
    respuesta: "Switch KVM ",
    mas: ["Router", "Switch", "Hub"],
    
    
},
{
    pregunta:"El cable coaxial que conecta:",
    image: "",
    respuesta: "Televisores",
    mas: ["Microondas", "Ordenadores", "Impresoras"],
    
    
},
{
    pregunta:"¿Un cliente pide que se le añada un conector para su disco SSD de 500GB cual usaria?",
    image: "",
    respuesta: "IDE",
    mas: ["SATA", "eSATA", "Impresoras"],
    
    
},
{
    pregunta:"¿Un cliente pide que se le conecte en su equipo a un monitor que conector usaría?",
    image: "",
    respuesta: "VGA",
    mas: ["HDMI", "DVI", "Serial"],
    
    
},
{
    pregunta:"De que color es el puerto paralelo",
    image: "",
    respuesta: "Rosa",
    mas: ["Amarillo", "Azul", "Verde"],

    
    
},
{
    pregunta:"Un cliente llama al servicio tecnico y dice que su disco duro no funciona al conectarlo a la placa y afirma que el conector se descoloca",
    image: "",
    respuesta: " Conector erroneo",
    mas: ["Que lo haya golpeado", "Ninguna es correcta", "Puede que falte algun cable conectado"],
    
    
},
{
    pregunta:"¿Que se le añada un conector para su disco SSD de 500GB cual usaria?",
    image: "",
    respuesta: "IDE",
    mas: ["SATA", "eSATA", "Impresoras"],
    
    
},
{
    pregunta:"De que color es el puerto de Juego",
    image: "",
    respuesta: "Amarillo",
    mas: ["Rosa", "Verde", "Negro"],
    
    
},
];
