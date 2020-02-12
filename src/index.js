#!/usr/bin/env node
const mdLinks = require('./md-links.js');
const process = require('process');
const pathNode = require('path');
const chalk = require('chalk');

let path = process.argv[2]
//path.resolve para poder convertir en absoluta
path = pathNode.resolve(path);
//pat.normalize es para normalizar path en caso de q hayan errores de semanticas 
path.normalize('NFC');

let options ={
    stats:false,
    validate:false,
}

process.argv.forEach(element =>{
if(element == "--stats" || element == "-s" ){
    option.validate = true
}
})

mdLinks.mdLinks(path,options).then(res =>{
    if (options.validate && options.stats){
        return console.log(chalk.bgblue("Total Links: " + res.total) + "\n" + chalk.bgGreen("Ok Links:" + res.ok) + "\n" + chalk.bgRed("Broken Links: " + res.bronken))
    }

    if (options.validate){
        if (res.length === 0){
            return
        }
    }
})