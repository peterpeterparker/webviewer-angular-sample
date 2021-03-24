# WebViewer - There may be some degradation of performance

This sample repo displays that the following WebViewer warning message is triggered even if all resources are gzipped.

> There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See http://www.pdftron.com/kb_content_encoding for instructions on how to resolve this.

## Install

```
git clone https://github.com/peterpeterparker/webviewer-angular-sample
cd webviewer-angular-sample
npm ci
npm run build
npm run serve
```

Open http://localhost:3000 in your favorite browser. The warning message popups even if WebViewer is delivered as gzip.
