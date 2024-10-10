const  fs = require("fs");
const { html, css, javascript } = require("./models.js");

const init = async (projectFileTree) => {
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
          projectFileTree
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
        await fs.mkdirSync(assetsFolderPath, { recursive: true });
        
        const assetsFolder = await fs.createWriteStream(`${assetsFolderPath}/based.png`);
        const based_squidward = await fs.createReadStream(`./public/based_squidward.png`);
        
        await based_squidward.pipe(assetsFolder);
        await based_squidward.on("end", () => {
          process.exit(0);
        });
    }   
  }
}

const setupFolder = async (path, seedFile, loaderFn, loaderParam) => {
  await fs.mkdirSync(path);
  await fs.writeFileSync(`${path}/${seedFile}`, loaderFn(loaderParam));
}

const setupOptions = [
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
    default: "img",
    parent: "assets"
  }
]

module.exports = { 
  init,
  setupOptions
}