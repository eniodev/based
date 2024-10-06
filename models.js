module.exports = {
  html: () => {
    return `
    <!doctype html>
    <html lang="en">
      
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <link rel="stylesheet" href="css/styles.css">
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
        <div id="welcome"></div>
        <p><b>Based Stack</b></p>
        <script src="js/scripts.js"></script>
      
      </body>
    
    </html>`;
  },
  css: () =>{
    return `
    #welcome {
        width: 11px;
        height: 14px;
        background: url('data:image/gif;base64,R0lGOD lhCwAOAMQfAP////7+/vj4+Hh4eHd3d/v7+/Dw8HV1dfLy8ubm5vX19e3t7fr 6+nl5edra2nZ2dnx8fMHBwYODg/b29np6eujo6JGRkeHh4eTk5LCwsN3d3dfX 13Jycp2dnevr6////yH5BAEAAB8ALAAAAAALAA4AAAVq4NFw1DNAX/o9imAsB tKpxKRd1+YEWUoIiUoiEWEAApIDMLGoRCyWiKThenkwDgeGMiggDLEXQkDoTh CKNLpQDgjeAsY7MHgECgx8YR8oHwNHfwADBACGh4EDA4iGAYAEBAcQIg0Dk gcEIQA7');
    }
    
    @-webkit-keyframes rotating {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    
    .rotating {
        -webkit-animation: rotating 2s linear infinite;
    }
    `;
  },
  javascript: () => {
    return "js";
  }
}