const  fs = require("fs");
const { html, css, javascript } = require("./models.js");

const init = async (projectFileTree) => {
  const projectFolder = Object.keys(projectFileTree)[0];
  
  for (const subFolder in projectFileTree[projectFolder]) {
    const entryFile = projectFileTree[projectFolder][subFolder];
    
    switch (extension(entryFile)) {
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
        await loadAssets(
          assetsFolderPath,
          {
            'based.png': './public/based_squidward.png',
            'favicon.ico': './public/favicon.ico'
          }
        );
        await process.exit(0);
    }
  }
}

const extension = (file) => file.split(".").pop();

const setupFolder = async (path, seedFile, loaderFn, loaderParam) => {
  await fs.mkdirSync(path, { recursive: true });
  await fs.writeFileSync(`${path}/${seedFile}`, loaderFn(loaderParam));
}

const loadAssets = async (path, assets) => {
  for (const file in assets) {
    await fs.copyFileSync(assets[file], `${path}/${file}`);
  }
}

const getValidName = (input, _default) => {
  // TODO: Write a better regex
  const FILE_NAME = /^[a-zA-Z].*/;
  
  if (!input) {
    return _default;
  }
  if (!FILE_NAME.exec(input)) {
    console.log(`:: Invalid name! Setting (${_default}) as default name`);
    return _default;
  }
  if(extension(input)!==extension(_default)){
    return extension(_default) !== _default 
      ? `${input}.${extension(_default)}`
      : input
    ;
  }
  return input;
}

const setupOptions = [
  {
    question: "Html file name: (index.html)",
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
  getValidName,
  setupOptions
}