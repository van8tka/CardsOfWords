import { logger, consoleTransport } from 'react-native-logs';

const log = logger.createLogger({
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: {
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
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

  if(__DEV__) return time;

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
