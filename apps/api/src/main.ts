/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = config.get('port');
  const env = config.get('environment');

  await app.listen(port);

  Logger.log(
    `🚀 Application is running in ${env} mode on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`GraphQL playground running on http://localhost:${port}/graphql`);
}

void bootstrap();
