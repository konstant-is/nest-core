import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { createOpenApi } from "./create-openapi";
import { Logger, ValidationPipe } from "@nestjs/common";
export async function createNestApp({ name, docsUrl, module, corsOptions, openApiPath }, documentBuilder, swaggerOptions) {
    const app = await NestFactory.create(module);
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    const config = app.get(ConfigService);
    const port = config.get("PORT") || 8080;
    const environment = config.get("environment");
    const globalPrefix = "api";
    app.setGlobalPrefix(globalPrefix);
    await createOpenApi(app, docsUrl, documentBuilder, swaggerOptions, openApiPath);
    if (environment === "production" && corsOptions) {
        app.enableCors(corsOptions);
    }
    else {
        app.enableCors();
    }
    const rootPath = `http://localhost:${port}/${globalPrefix}`;
    await app.listen(port, () => {
        Logger.log(`Running in ${environment} mode`);
        Logger.log(`🚀 Application is running on: ${rootPath}`);
        Logger.log(`Docs at: ${rootPath}/swagger`);
    });
    return app;
}
