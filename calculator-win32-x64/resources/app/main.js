const path = require('path');                           //!модуль для работы с файлима внутри проекта
const url  = require('url');                            //!модуль для отслеживания url адресов
const {app, BrowserWindow} = require('electron');       //!

let win;                                                //!инициализация окна

function createWindow(){                                //!создание окна
    win = new BrowserWindow({
        width: 1920,
        height: 1138,
        icon: __dirname + "/img/icon.png",
        resizable: false
    });

    win.loadURL(url.format({                            //!
        pathname: path.join(__dirname, 'index.html'),   //!указал главный файл для загрузки
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();                     //!среда разработки

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);                          //!
app.on('window-all-closed', () => {                     //!завершить процесс при закрытии всех окон
    app.quit();
});