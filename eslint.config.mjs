export default [
  {
    ignores: [
      'node_modules/*', // ignore all content in `node_modules/`
      '!node_modules/mylibrary/**', // unignore `node_modules/mylibrary` and its content
    ],
  },
];
