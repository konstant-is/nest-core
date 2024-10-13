import * as _nestjs_common from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { OpenAPIObject, SwaggerDocumentOptions } from '@nestjs/swagger';

interface INestAppConfig {
    name: string;
    docsUrl: string;
    module: any;
    corsOptions?: CorsOptions;
    openApiPath?: string;
    port?: number;
}
declare function createNestApp<T>({ name, docsUrl, module, corsOptions, openApiPath }: INestAppConfig, documentBuilder: Pick<OpenAPIObject, "openapi" | "info" | "servers" | "security" | "tags" | "externalDocs">, swaggerOptions?: SwaggerDocumentOptions): Promise<_nestjs_common.INestApplication<any>>;

declare abstract class Service {
    logger: Logger;
    constructor(name: string);
}
declare abstract class Repo {
    logger: Logger;
    constructor(name: string);
}

export { type INestAppConfig, Repo, Service, createNestApp };
