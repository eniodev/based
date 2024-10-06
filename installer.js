const  fs = require("fs");
const { html, css, javascript } = require("./models.js");

const init = (projectFileTree) => {
  const projectFolder = Object.keys(projectFileTree)[0];
  
  for (const folder in projectFileTree[projectFolder]) {
  
    const subFolder = folder;
    const entryFile = projectFileTree[projectFolder][folder];
    const fileExt = entryFile.split(".").pop();
    
    switch (fileExt) {
      case "html":
        fs.mkdirSync(projectFolder);
        fs.writeFileSync(`${projectFolder}/${entryFile}`, html(projectFileTree[projectFolder]));
        break;
      case "css":
        fs.mkdirSync(`${projectFolder}/${subFolder}`);
        fs.writeFileSync(`${projectFolder}/${subFolder}/${entryFile}`, css());
        break;
      case "js":
        fs.mkdirSync(`${projectFolder}/${subFolder}`);
        fs.writeFileSync(`${projectFolder}/${subFolder}/${entryFile}`, javascript());
        break;
      default:
        fs.mkdirSync(`${projectFolder}/${subFolder}/${entryFile}`, { recursive: true });
    }   
  }
}

module.exports = init;