# electron-webdriverJS-test

## Steps To Reproduce

1. download driver for electron-10.1.3 from [here](https://npm.taobao.org/mirrors/electron/10.1.3/) 
2. start chrome driver on port 9515
   ```
   cd chromedriver-v10.1.3-linux-x64
   ./chromedriver
   ```
3. clone project and build app
   ```
   git clone https://github.com/ss7424Refar/electron-webdriverJS-test.git
   cd cd electron-quick-start
   npm install
   npm run build-linux-u
   ```    
   
4. use webdriverJS to start app
   ```
   cd electron-quick-start
   node chromeWeb.js   ## need to replace the path for chromeOptions.binary
   ```   
