'use strict';
const fs= require('fs');
let estudiante=[
    {
     nombre:'Angel',
     edad:17,
     genero: 'Masculino',
     departamento:'Antioquia',
     colegio:'Gilberto Alzate A.'
    },{
        nombre:'Angélica',
        edad:17,
        genero: 'Femenino',
        departamento:'Antioquia',
        colegio:'Gilberto Alzate A.'

    },{
        nombre:'Anlly Lorena',
        edad:17,
        genero: 'Femenino',
        departamento:'Antioquia',
        colegio:'Gilberto Alzate A.'

    },{
        nombre:'Angélica',
        edad:17,
        genero: 'Femenino',
        departamento:'Antioquia',
        colegio:'Gilberto Alzate A.'
    } ] // fin definición de datos

     let data= JSON.stringify(estudiante,null,2);
     fs.writeFile('estudiante.json',data,(err)=>{
      if(err) throw err;
      console.log('Escribiendo datos en el archivo');
      });
     console.log('Datos escritos e');