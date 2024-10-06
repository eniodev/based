module.exports = {
  html: (projectFolder) => {
    const projectFolderKeys = Object.keys(projectFolder);
    const cssEntryFolder = projectFolderKeys[1];
    const jsEntryFolder = projectFolderKeys[2];
    
    return `
    <!doctype html>
    <html lang="en">
      
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <link rel="stylesheet" href="${cssEntryFolder}/${projectFolder[cssEntryFolder]}">
        <meta name="description" content="">
      
        <meta property="og:title" content="">
        <meta property="og:type" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <meta property="og:image:alt" content="">
      
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/icon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="icon.png">
      
        <link rel="manifest" href="site.webmanifest">
        <meta name="theme-color" content="#fafafa">
      </head>
      
      <body>
      
        <!-- Add your site or application content here -->
        <div align="center">
            <img id="squidward" src="./assets/${projectFolder.assets}/based.png" alt="Based Squidward" width="50"/>
            <h2>Blazingly Fast!</h2>
            <p>Start editing <code>${projectFolder.htmlEntryFile}</code> too se changes</p>
        </div>
        
        <script src="${jsEntryFolder}/${projectFolder[jsEntryFolder]}"></script>
      
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
        display: grid;
        place-items: center;
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
    
    `;
  }
}