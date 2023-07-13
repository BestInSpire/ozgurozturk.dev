const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 80;
const { createServer } = require("vue");
const isTest = process.env.NODE_ENV === "test";
const https = require("https");
const httpsOptions = {
  cert: fs.readFileSync("./ssl/certificate.crt"),
  ca: fs.readFileSync("./ssl/ca_bundle.crt"),
  key: fs.readFileSync("./ssl/private.key"),
};
async function createServerxd(root = process.cwd(), isProd = true) {
  const resolve = (p) => path.resolve(__dirname, p);

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (isProd) {
    // TODO: app.use(require('compression')());
    app.use(express.static(resolve("./dist")));
  } else {
    vite = await createServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  }

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    const template = fs.readFileSync(
      resolve(isProd ? "./dist/index.html" : "./index.html"),
      "utf-8"
    );

    res.status(200).set({ "Content-Type": "text/html" }).end(template);
  });

  return { app, vite };
}

if (!isTest) {
  createServerxd().then(({ app }) => {
    const httpServer = https.createServer(httpsOptions, app);
    httpServer.listen(443);
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });
  });
}

// for test use
module.export = createServerxd;
