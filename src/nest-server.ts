import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { OpenAPIObject, SwaggerDocumentOptions } from "@nestjs/swagger";

import { createOpenApi } from "./create-openapi";
import { Logger, ValidationPipe } from "@nestjs/common";
// import { NestExpressApplication } from "@nestjs/platform-express";

export interface INestAppConfig {
  name: string;
  docsUrl: string;
  module: any;
  enableCors?: boolean;
  corsOptions?: CorsOptions;
  openApiPath?: string;
  port?: number;
}

export async function createNestApp<T>(
  {
    name,
    docsUrl,
    module,
    corsOptions,
    openApiPath,
    enableCors,
  }: INestAppConfig,
  documentBuilder: Pick<
    OpenAPIObject,
    "openapi" | "info" | "servers" | "security" | "tags" | "externalDocs"
  >,
  swaggerOptions?: SwaggerDocumentOptions
) {
  const app = await NestFactory.create(module);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = app.get(ConfigService);
  const port = config.get("PORT") || 8080;
  const environment = config.get("environment");

  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  await createOpenApi(
    app,
    docsUrl,
    documentBuilder,
    swaggerOptions,
    openApiPath
  );

  if (enableCors) {
    app.enableCors(corsOptions);
  }

  const rootPath = `http://localhost:${port}/${globalPrefix}`;
  await app.listen(port, () => {
    Logger.log(`Running in ${environment} mode`);
    Logger.log(`🚀 Application is running on: ${rootPath}`);
    Logger.log(`Docs at: ${rootPath}/swagger`);
  });

  return app;
}
