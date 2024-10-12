import { INestApplication } from "@nestjs/common";
import { OpenAPIObject, SwaggerDocumentOptions } from "@nestjs/swagger";
export declare const createOpenApi: (app: INestApplication, path: string, openApi: Omit<OpenAPIObject, "paths">, options?: SwaggerDocumentOptions, openApiPath?: string) => Promise<OpenAPIObject>;
//# sourceMappingURL=create-openapi.d.ts.map