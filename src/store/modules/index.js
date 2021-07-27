import { camelCase } from 'lodash';

const requireModule = require.context('.', false, /\.js$/);
const modules = {};

const fileExclusions = ['./index.js', './dummy.js'];

requireModule.keys().forEach((fileName) => {
  if (fileExclusions.some((x) => x === fileName)) {
    return;
  }

  // requireModule.keys().forEach((fileName) => {
  //   if (fileName === './index.js' || fileName === './dummy.js') {
  //     return;
  //   }

  const moduleConfig = requireModule(fileName);
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default modules;
