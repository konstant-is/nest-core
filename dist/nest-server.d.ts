import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { OpenAPIObject, SwaggerDocumentOptions } from "@nestjs/swagger";
export interface INestAppConfig {
    name: string;
    docsUrl: string;
    module: any;
    corsOptions?: CorsOptions;
    openApiPath?: string;
    port?: number;
}
export declare function createNestApp<T>({ name, docsUrl, module, corsOptions, openApiPath }: INestAppConfig, documentBuilder: Pick<OpenAPIObject, "openapi" | "info" | "servers" | "security" | "tags" | "externalDocs">, swaggerOptions?: SwaggerDocumentOptions): Promise<import("@nestjs/common").INestApplication<any>>;
//# sourceMappingURL=nest-server.d.ts.map