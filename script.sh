#! /bin/sh
ls
npm run static-run-http-server -- --port 3000 --proxy http://localhost:3000?
