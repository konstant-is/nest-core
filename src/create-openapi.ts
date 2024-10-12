import { INestApplication } from "@nestjs/common";
import {
  OpenAPIObject,
  SwaggerDocumentOptions,
  SwaggerModule,
} from "@nestjs/swagger";

import { ensureFile, writeFile } from "fs-extra";
import { dump } from "js-yaml";

export const createOpenApi = async (
  app: INestApplication,
  path: string,
  openApi: Omit<OpenAPIObject, "paths">,
  options?: SwaggerDocumentOptions,
  openApiPath?: string
) => {
  const document = SwaggerModule.createDocument(app, openApi, options);
  SwaggerModule.setup(path ?? "swagger", app, document);

  const filePath = openApiPath ?? "docs/openapi/openapi.yaml";

  try {
    await ensureFile(filePath);
    await writeFile(filePath, dump(document, { noRefs: true }));
    console.log("OpenAPI written to ", filePath);
  } catch (err) {
    console.error(err);
  }

  return document;
};
