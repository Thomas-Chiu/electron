const { app, BrowserWindow } = require("electron");
const { datadogLogs } = require("@datadog/browser-logs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("./index.html");
};

app.on("ready", () => {
  createWindow();
});

app.on("quit", () => {
  app.quit();
});

try {
  require("electron-reloader")(module);
} catch {}
