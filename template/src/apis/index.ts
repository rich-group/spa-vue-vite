import { AxiosRequestConfig } from 'axios';
import { instance, Module, ApiConfig } from '../utils/axios'


// 合并文件夹下所有模块
const queryAllModules = () => {
  const files = import.meta.glob<any>('./*.ts', { eager: true })
  return Object.keys(files).reduce((modules: Module, modulePath) => {
    files[modulePath].default.forEach((config: ApiConfig) => {
      const moduleName = /\w+/.exec(modulePath)?.[0]?.toUpperCase() || ''; // 模块名大写
      const apiName = `${moduleName}_${config.name}`
      modules[apiName] = (params: any, resetConfig: AxiosRequestConfig<any> | undefined) =>
        ['POST', 'CANCELPOST'].includes(config.type.toUpperCase())
          ? instance[config.type](config.path, params, resetConfig)
          : instance[config.type](config.path, params);
    });
    return modules
  }, {})
};

export default queryAllModules()