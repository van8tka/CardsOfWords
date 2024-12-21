import {logger, consoleTransport, crashlyticsTransport} from 'react-native-logs';
import crashlytics from '@react-native-firebase/crashlytics';

const InteractionManager = require('react-native').InteractionManager;
const crashlyticsModule = crashlytics();

const log = logger.createLogger({
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: __DEV__ ? 'debug' : 'info',
  transport: __DEV__ ? consoleTransport : crashlyticsTransport,
  transportOptions: {
    CRASHLYTICS: {
      recordError(msg) {
        if(msg.includes('error')) {
          crashlyticsModule.recordError(new Error(msg));
        }
        else {
          crashlyticsModule.log(msg);
        }
      },
    },
    colors: {
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  printLevel: true,
  fixedExtLvlLength: false,
  enabled: true,
  formatFunc: formatFunction,
});

function getDateLogFormat(): string {
  const dt = new Date();
  const date = `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
  const addedZero = (timeNumber: number) => (timeNumber < 10) ? `0${timeNumber}` : String(timeNumber);
  const time = `${addedZero(dt.getHours())}:${addedZero(dt.getMinutes())}:${addedZero(dt.getSeconds())}.${addedZero(dt.getMilliseconds())}`;

  if(__DEV__) {return time;}

  return `${date}:${time}`;
}

function formatFunction(level:string, extension: string|null, msgs: any) : string {
  const formattedDate = getDateLogFormat();

  if(msgs && msgs.length > 1){
    const ind = msgs.indexOf(',');
    const tag = msgs.slice(0,ind);
    const msg = msgs.slice(ind + 2);

    return `${formattedDate} | ${level.toUpperCase()} : ${tag} | ${msg}`;
  }
  return `${formattedDate} | ${level.toUpperCase()} | ${msgs}`;
}


export default log;
