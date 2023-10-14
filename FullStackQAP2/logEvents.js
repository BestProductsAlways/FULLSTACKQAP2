const { clear } = require('console');
const { format } = require('date-fns');
const { v4: uuid } = ('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = ' ${format(new Date(), 'yyyyMMdd')} ';
    const lonItem = '${dateTime}\t${uuid()}\t${message}';
    console.log(logItem);
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs' , 'eventLog.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;