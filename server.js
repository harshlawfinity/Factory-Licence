import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { render } from "./dist/server/entry-server.js"

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, "dist"), { index: false }))

app.get("*", async (req, res) => {
  const indexFile = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8")
  const { appHtml, helmetContext } = render(req.url)
  const { helmet } = helmetContext

  const html = indexFile
    .replace("<!--app-html-->", appHtml)
    .replace(
      "</head>",
      `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`
    )

  res.status(200).set({ "Content-Type": "text/html" }).end(html)
})

app.listen(3000, () => {
  console.log("SSR server running at http://localhost:3000")
})
