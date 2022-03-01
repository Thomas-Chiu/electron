const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 720,
    height: 480,
    useContentSize: true,
    webPreferences: {
      enableRemoteModule: true,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("./index.html");
};

app.on("ready", () => {
  createWindow();
});

app.on("quit", () => {
  app.quit();
});

// electron-reloader setting
try {
  require("electron-reloader")(module);
} catch {}
