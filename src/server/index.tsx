import config from '../config/server';
import { server } from './routes';

server.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Running on ${config.port}`);
});
