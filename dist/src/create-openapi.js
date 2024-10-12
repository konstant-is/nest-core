import { SwaggerModule, } from "@nestjs/swagger";
import { ensureFile, writeFile } from "fs-extra";
import { dump } from "js-yaml";
export const createOpenApi = async (app, path, openApi, options, openApiPath) => {
    const document = SwaggerModule.createDocument(app, openApi, options);
    SwaggerModule.setup(path ?? "swagger", app, document);
    const filePath = openApiPath ?? "docs/openapi/openapi.yaml";
    try {
        await ensureFile(filePath);
        await writeFile(filePath, dump(document, { noRefs: true }));
        console.log("OpenAPI written to ", filePath);
    }
    catch (err) {
        console.error(err);
    }
    return document;
};
