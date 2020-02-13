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
//extraer links md

module.exports = {
    mdLinks
}