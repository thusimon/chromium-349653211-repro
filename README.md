Reproduce repo for https://issues.chromium.org/issues/349653211 on Windows machine

1. install node 20.10.0 and yarn 1.22.22
2. `yarn install`
3. `yarn start-server`
4. load extension `ext` in Chrome developer mode
5. open Chrome, go to `http://localhost:3005`, drag the url from the address bar to desktop to create a shortcut
6. exit Chrome, double click the shortcut and observe the server's log about the header, reproduce demo [here](https://drive.google.com/file/d/1qrPEAqd7T4bmw86HD0Q74zBNtzkvpmL_/view?usp=drive_link)