#!/usr/bin/env node

const readline = require('readline');
const init = require("./installer.js")
const projectFolder = process.argv.slice(2)[0];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (str) => new Promise((cb) => rl.question(str, cb));

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

const setupQuestions = [
  {
    question: "Html file name: (root folder)",
    default: "index.html"
  },  
  {
    question: "Css folder name: (css)",
    default: "css",
    child: {
      question: "Css file name: (styles.css)",
      default: "styles.css"
    }
  },
  {
    question: "Javascript folder name: (js)",
    default: "js",
    child: {
      question: "Javascript file name: (scripts.js)",
      default: "scripts.js"
    }
  },
  {
    question: "Pick a name for your image folder: (img)",
    default: "img"
  }
]

const run = async () => {
  try {
    await new Promise(() => {
      setupQuestions.forEach(async (option) => {
        const subFolder = await question(option.question);
        console.log(subFolder);
      })
    });
  } catch (err) {
    console.log(`💥 Something went wrong!! Please Try Again...${err.message}`);
    process.exit(1);
  }
  finally {
    await process.exit(0);
  }
}

run();

module.exports = projectFileTree
