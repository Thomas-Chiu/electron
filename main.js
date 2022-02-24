const { app, BrowserWindow } = require("electron");
const { datadogLogs } = require("@datadog/browser-logs");
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

/**
 * datadog log
 */

datadogLogs.init({
  clientToken: "pubcd5f640151316f9c0c9c9da8da090479",
  site: "datadoghq.com",
  // forwardErrorsToLogs: true,
  sampleRate: 100,
});

console.log(datadogLogs);

datadogLogs.logger.info("Button clicked", {
  name: "buttonName",
  id: 123,
});
