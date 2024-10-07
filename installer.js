const  fs = require("fs");
const { html, css, javascript } = require("./models.js");

const init = (projectFileTree) => {
  const projectFolder = Object.keys(projectFileTree)[0];
  
  for (const subFolder in projectFileTree[projectFolder]) {
    const entryFile = projectFileTree[projectFolder][subFolder];
    const fileExt = entryFile.split(".").pop();
    
    switch (fileExt) {
      case "html":
        setupFolder(
          projectFolder,
          entryFile,
          html,
          projectFileTree[projectFolder]
        );
        break;
      case "css":
        setupFolder(
          `${projectFolder}/${subFolder}`,
          entryFile,
          css
        );
        break;
      case "js":
        setupFolder(
          `${projectFolder}/${subFolder}`,
          entryFile,
          javascript
        );
        break;
      default:
        const assetsFolderPath = `${projectFolder}/${subFolder}/${entryFile}`;
        fs.mkdirSync(assetsFolderPath, { recursive: true });
        const assetsFolder = fs.createWriteStream(`${assetsFolderPath}/based.png`);
        const based_squidward = fs.createReadStream(`./public/based_squidward.png`);
        based_squidward.pipe(assetsFolder);
        based_squidward.on("end", () => {
          process.exit(0);
        })
    }   
  }
}

const setupFolder = (path, seedFile, loaderFn, loaderParam) => {
  fs.mkdirSync(path);
  fs.writeFileSync(`${path}/${seedFile}`, loaderFn(loaderParam));
}

module.exports = init;