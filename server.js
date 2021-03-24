const compression = require('compression');
const shrinkRay = require('shrink-ray-current');

const express = require('express');
const app = express();
const port = 3000;

app.use(shrinkRay({ useZopfliForGzip: false, filter: shouldCompressBr }))
app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {

  console.log(req.url, compression.filter(req, res) && !/PDFNet.*\.br\./g.test(req.url));

  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res) && !/PDFNet.*\.br\./g.test(req.url)

}

function shouldCompressBr(req, res) {
  return /PDFNet.*\.br\./g.test(req.url);
}

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
