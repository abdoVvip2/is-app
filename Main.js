cat <<EOF > main.js
const { app, BrowserWindow } = require('electron');
app.on('ready', () => {
  const win = new BrowserWindow({ width: 1000, height: 800 });
  win.setMenu(null); 
  win.loadFile('index.html');
});
EOF
