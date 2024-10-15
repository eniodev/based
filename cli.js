#!/usr/bin/env node

const  fs = require("fs");
const readline = require("readline");
const { init, getValidName, setupOptions } = require("./installer.js");

const projectFolder = process.argv.slice(2)[0];

if (!projectFolder) {
  console.log(':: Invalid folder name! Please, pick another name.');
  process.exit(1);  
}
else if (fs.existsSync(projectFolder)) {
  console.log(':: Directory already exists! Please, pick another name.');
  process.exit(1);
}
else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const projectFileTree = {
    [projectFolder]: {}
  }
  
  const based = async () => {
    try {
      if (!setupOptions.length) {
        init(projectFileTree);
      }
      setupOptions.forEach((option) => {
        question(option);
      });
    } catch (err) {
      console.log(`:: Something went wrong!! Please try again...${err.message}`);
      process.exit(1);
    }
  }
  
  const question  = async (option) => {
    await rl.question(option.question, (folderName) => {
      const _folderName = getValidName(folderName, option.default);
      projectFileTree[projectFolder][option.parent ?? _folderName] = _folderName;

      if (option.child) {
        rl.question(option.child.question, (fileName) => {
          projectFileTree[projectFolder][_folderName] = getValidName(fileName, option.child.default);
          question(setupOptions[setupOptions.indexOf(option) + 1]);
        });
      } 
      setupOptions.shift();
      based();
    });
  }
  
  based();
}
