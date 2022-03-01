const { datadogLogs } = require("@datadog/browser-logs");

datadogLogs.init({
  clientToken: "pubcd5f640151316f9c0c9c9da8da090479",
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

const submit = document.getElementById("submit");
submit.addEventListener("click", onsubmit());

const onsubmit = () => {
  // datadogLogs.logger[level](name, { customAction: context }
  datadogLogs.logger["error"]("I am error", {
    name: "error1",
    id: 1,
  });
};
