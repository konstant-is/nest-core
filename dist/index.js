"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Repo: () => Repo,
  Service: () => Service,
  createNestApp: () => createNestApp
});
module.exports = __toCommonJS(src_exports);

// src/nest-server.ts
var import_core = require("@nestjs/core");
var import_config = require("@nestjs/config");

// src/create-openapi.ts
var import_swagger = require("@nestjs/swagger");
var import_fs_extra = require("fs-extra");
var import_js_yaml = require("js-yaml");
var createOpenApi = async (app, path, openApi, options, openApiPath) => {
  const document = import_swagger.SwaggerModule.createDocument(app, openApi, options);
  import_swagger.SwaggerModule.setup(path ?? "swagger", app, document);
  const filePath = openApiPath ?? "docs/openapi/openapi.yaml";
  try {
    await (0, import_fs_extra.ensureFile)(filePath);
    await (0, import_fs_extra.writeFile)(filePath, (0, import_js_yaml.dump)(document, { noRefs: true }));
    console.log("OpenAPI written to ", filePath);
  } catch (err) {
    console.error(err);
  }
  return document;
};

// src/nest-server.ts
var import_common = require("@nestjs/common");
async function createNestApp({
  name,
  docsUrl,
  module: module2,
  corsOptions,
  openApiPath,
  enableCors
}, documentBuilder, swaggerOptions) {
  const app = await import_core.NestFactory.create(module2);
  app.useGlobalPipes(new import_common.ValidationPipe({ transform: true }));
  const config = app.get(import_config.ConfigService);
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
    import_common.Logger.log(`Running in ${environment} mode`);
    import_common.Logger.log(`\u{1F680} Application is running on: ${rootPath}`);
    import_common.Logger.log(`Docs at: ${rootPath}/swagger`);
  });
  return app;
}

// src/service.ts
var import_common2 = require("@nestjs/common");
var _Service_decorators, _init;
_Service_decorators = [(0, import_common2.Injectable)()];
var Service = class {
  logger;
  constructor(name) {
    this.logger = new import_common2.Logger(name);
  }
};
_init = __decoratorStart(null);
Service = __decorateElement(_init, 0, "Service", _Service_decorators, Service);
__runInitializers(_init, 1, Service);
var _Repo_decorators, _init2;
_Repo_decorators = [(0, import_common2.Injectable)()];
var Repo = class {
  logger;
  constructor(name) {
    this.logger = new import_common2.Logger(name);
  }
};
_init2 = __decoratorStart(null);
Repo = __decorateElement(_init2, 0, "Repo", _Repo_decorators, Repo);
__runInitializers(_init2, 1, Repo);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Repo,
  Service,
  createNestApp
});
//# sourceMappingURL=index.js.map