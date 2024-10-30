mkdir neuerOrdner
cd neuerOrdner
npm install luxon

Damit wir mit imports/exports arbeiten können muss in die package.json:
  "type": "module",

---------------------------
mkdir projekt2
cd projekt2
mkdir src
touch src/index.js

npm install --save-dev webpack webpack-cli

in die package.json muss noch: 
  "scripts": {
    "build": "webpack"
  },

npm run build

Dependencies werden an den User ausgeliefert

Dev-Dependencies nicht. Die brauchen wir nur zum entwickeln. 