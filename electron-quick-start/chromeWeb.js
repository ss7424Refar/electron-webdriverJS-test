const webdriver = require('selenium-webdriver')

const driver = new webdriver.Builder()
// "9515" 是ChromeDriver使用的端口
    .usingServer('http://localhost:9515')
    .withCapabilities({
        chromeOptions: {
            // 这里设置Electron的路径
            binary: '/opt/electron-webdriverJS/electron-quick-start/ers-app/electron-quick-start-linux-x64/electron-quick-start'
        }
    })
    .forBrowser('electron')
    .build()

driver.get('http://www.baidu.com')
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver')
// driver.findElement(webdriver.By.name('hello')).click()
// driver.wait(() => {
//     return driver.getTitle().then((title) => {
//         return title === 'webdriver - Google Search'
//     })
// }, 1000)

// driver.quit()
