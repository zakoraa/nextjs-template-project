// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator("feature", {
    description: "Generate feature (Clean Architecture)",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Feature name:",
      },
    ],

    actions: [
      // DOMAIN

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/domain/entities/{{kebabCase name}}.entity.ts",
        template: `export interface {{pascalCase name}}Entity {

}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/domain/repositories/{{kebabCase name}}.repository.ts",
        template: `export interface {{pascalCase name}}Repository {

}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/domain/usecases/index.ts",
        template: `// usecases for {{kebabCase name}}
`,
      },

      // DATA

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/data/datasources/{{kebabCase name}}.api.ts",
        template: `export const {{camelCase name}}Api = {

};
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/data/repositories/{{kebabCase name}}.repository.impl.ts",
        template: `import { {{pascalCase name}}Repository } from "../../domain/repositories/{{kebabCase name}}.repository";

export class {{pascalCase name}}RepositoryImpl implements {{pascalCase name}}Repository {

}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/data/dto/index.ts",
        template: `// DTO types for {{kebabCase name}}
`,
      },

      // PRESENTATION

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/presentation/components/index.ts",
        template: `// components for {{kebabCase name}}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/presentation/hooks/index.ts",
        template: `// hooks for {{kebabCase name}}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/presentation/store/index.ts",
        template: `// zustand store for {{kebabCase name}}
`,
      },

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/presentation/pages/index.ts",
        template: `// pages for {{kebabCase name}}
`,
      },

      // FEATURE ENTRY

      {
        type: "add",
        path: "src/features/{{kebabCase name}}/index.ts",
        template: `export * from "./domain";
export * from "./data";
export * from "./presentation";
`,
      },
    ],
  });
}