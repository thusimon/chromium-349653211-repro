Reproduce repo for https://issues.chromium.org/issues/349653211 on Windows 10 machine

# Reproduce environments and video
1. OS: we stably reproduce it on a VMware ESXi windows 10 machine, the OS details in [os-version.txt](https://drive.google.com/file/d/1U0esy386gRZTSQEtL0bK9a77ntU7L-uP/view?usp=sharing)
2. Chrome: version details in [chrome-version.txt](https://drive.google.com/file/d/1rUmao_hbUX_NnZoSqa2KY3k54JqBSZVl/view?usp=sharing)
3. Video: refer to this [mov file](https://drive.google.com/file/d/1XkTMpwN8m0zUVjSLiWVbH5_kEozCsALX/view?usp=sharing)

# Reproduce steps
## 1. start a local server for testing
1. install nodejs, go to this [link](https://nodejs.org/en/download/package-manager)
    -  On `Package Manager` tab, choose version 20.16.0(LTS), windows OS and using fnm, run the scripts in powershell, make sure `node -v` and `npm -v` output the correct number
    - if the powsershell script doesn't work, you can download the `.msi` installer in the `Prebuilt installer` tab
2. open a cmd or powershell window, go to the root folder, run command `npm install`
3. if no error, run command `node server.js`
4. if no error, keep the cmd or powershell window open, open Chrome, and go to `http://localhost:3003/app/Userhome`, the web page should be loaded

## 2. install plugin and test
1. remove all the previous DNR-test plugin
2. load extension `ext` in Chrome developer mode
4. open Chrome, go to `http://localhost:3003/app/Userhome`, drag the url from the address bar to desktop to create a shortcut
3. close Chrome and launch it by clicking the shortcut, if the issue reproduces, the webpage will display `DNR header test: value = undefined`, refreshing the page will show the header
