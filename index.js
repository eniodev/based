#!/usr/bin/env node

const readline = require('readline');
const init = require("./installer.js")
const projectFolder = process.argv.slice(2)[0];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stylesFolder = "CSS";
let scriptsFolder = "JS";
let htmlEntryFile = "index.html";
let cssEntryFile = "styles.css";
let jsEntryFile = "scripts.js";
let imagesFolder = "img";

const projectFileTree = {
  [projectFolder]: {
    htmlEntryFile,
    [stylesFolder]: cssEntryFile,
    [scriptsFolder]: jsEntryFile,
    "assets": imagesFolder
  }
}

init(projectFileTree);

module.exports = projectFileTree
