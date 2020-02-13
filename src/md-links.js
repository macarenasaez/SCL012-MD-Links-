const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetch = require('node-fetch');

//FILEHOUND NOS SIRVE PARA ENCONTAR ARCHIVOS MD DENTRO DE UN DIRECTORÍO
const mdLinks = (path => {
    return new Promise((resolve, reject) => {
        FileHound.create()
            .paths(path)
            .ext('md')
            .find()
            .then(
                file => {
                    if (file.length !== 0) {
                        resolve(file)
                        console.log(file)
                    }
                }
            )
            .catch(err => {
                reject(new Error("Esta ruta no existe"))
            })
    })
})


//leer archibos .md 
const readMD =(path =>{
    return new Promise ((resolve,reject)=>{
        fs.readFile(path,'utf8', (err,data)=>{
            if (err){
                reject(console.log("!Ouch¡ nose a encontrado este archivo: " + userpath))
            }
            resolve(data)
        }) 
    })
})

//obtener links de un archivo .md
const indlinks =(path =>{
    return new  Promise((resolve,reject) =>{
        readMD(path).then(res =>{
            let links =[];
            const renderer = new marked.Renderer();
            renderer.link = function(href,title,text){

                if(!href.startsWith("mai:")){
                    links.push({
                        //encotrada la url
                        href:href,
                        //el texto que aparece acompañado al link
                        text:text,
                        //ruta del archivodonde encuentra el links
                        file:path })
                   
                }
            }
            marked(res,{renderer:renderer});
            resolve(links)
        })
        .catch(err =>{
            reject(err)
        })
    })
})

//module.exports = {
  //  mdLinks
//}