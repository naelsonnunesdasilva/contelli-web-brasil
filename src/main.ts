import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as nunjucks from "nunjucks";
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const assets = path.join(__dirname, '..', 'assets');
  const views = path.join(__dirname, '..', 'views'); 

  nunjucks.configure(views, { express });
  
  app.useStaticAssets(assets);
  app.setBaseViewsDir(views);
  app.set('njk');

  await app.listen(3000);
}
bootstrap();
