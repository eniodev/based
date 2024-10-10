#!/usr/bin/env node

const readline = require('readline');
const { init, setupOptions } = require("./installer.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const projectFolder = process.argv.slice(2)[0];

const projectFileTree = {
  [projectFolder]: {}
}

const squidward = async () => {
  try {
    if (!setupOptions.length) {
      init(projectFileTree);
    }
    setupOptions.forEach((option) => {
      question(option);
    });
  } catch (err) {
    console.log(`💥 Something went wrong!! Please Try Again...${err.message}`);
    process.exit(1);
  }
}

const question  = async (option) => {
  await rl.question(option.question, (folderName) => {
    projectFileTree[projectFolder][option.parent ?? folderName] = folderName;
    if (option.child) {
      rl.question(option.child.question, (entryFileName) => {
        projectFileTree[projectFolder][folderName] = entryFileName;
        question(setupOptions[setupOptions.indexOf(option)+1]);
      })
    } 
    setupOptions.shift();
    squidward();
  });
}

squidward();
