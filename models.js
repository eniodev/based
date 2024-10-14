module.exports = {
  html: (projectFileTree) => {
    const projectFolder = Object.keys(projectFileTree)[0];
    const projectFolderKeys = Object.keys(projectFileTree[projectFolder]);
    
    const htmlEntryFile = projectFolderKeys[0];
    const cssEntryFolder = projectFolderKeys[1];
    const jsEntryFolder = projectFolderKeys[2];
    
    return `
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${projectFolder}</title>
    <link rel="stylesheet" href="${cssEntryFolder}/${projectFileTree[projectFolder][cssEntryFolder]}">
    <link rel="icon" type="image/x-icon" href="./assets/${projectFileTree[projectFolder].assets}/favicon.ico">
  </head>
  <body>
    <!-- Add your content here -->
    <div style="padding-block: 5rem;">
      <div align="center">
        <img id="squidward" src="./assets/${projectFileTree[projectFolder].assets}/based.png" alt="Based Squidward" width="50"/>
        <h2>Blazingly Fast!</h2>
        <p>Start editing <code>${projectFileTree[projectFolder][htmlEntryFile]}</code> to see changes</p>
      </div> 
      <div align="center" style="margin-top: 10px;">
        <p>
          <a href="https://github.com/eniodev/based" target="_blank" style="color: #6666ff;">Learn the Based Stack</a>
        </p>
        <button type="button" data-counter>
          counter is <span></span>
        </button>       
      </div> 
    </div>
    <script src="${jsEntryFolder}/${projectFileTree[projectFolder][jsEntryFolder]}"></script>
  </body>
</html>`;
  },
  css: () =>{
    return `
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  align-content: center;
}

h2 {
  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}
 
p {
  margin: 8px 0;
}
 
button {
  padding: 4px 8px; 
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.02);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0.5px 0.5px rgba(0, 0, 0, 0.2);
}
 
code {
  padding: 2px 8px 2px 8px;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
  
@keyframes rainbow_animation {
  0%, 100% {
    background-position: 0 0;
  }
  
  50% {
    background-position: 100% 0;
  }
}
    `;
  },
  javascript: () => {
    return `
counter = 0;
const counterBtn = document.querySelector("[data-counter]");
counterBtn.firstElementChild.innerText += counter;
 
counterBtn.addEventListener("click", () => {
counterBtn.firstElementChild.innerText = ++counter;
});
    `;
  }
}