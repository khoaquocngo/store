import '@app/config';

import { startHttpServer } from '@app/server';
import { defaultLogger } from '@gln-libs/node-infrastructure';

global.logger = defaultLogger();

const start = async () => {
  startHttpServer();
};

start();
