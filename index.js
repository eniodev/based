#!/usr/bin/env node

const init = require("./installer.js")
const projectFolder = process.argv.slice(2)[0];

const stylesFolder = "css";
const scriptsFolder = "js";
const htmlEntryFile = "index.html";
const cssEntryFile = "styles.css";
const jsEntryFile = "scripts.js";
const imagesFolder = "img";

const projectFileTree = {
  [projectFolder]: {
    htmlEntryFile,
    [stylesFolder]: cssEntryFile,
    [scriptsFolder]: jsEntryFile,
    "assets": imagesFolder
  }
}

try {
  init(projectFileTree);
} catch(err) {
  console.log(err);    
}

