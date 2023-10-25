import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite';
import jsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import Config from './config'
import path from 'path';
import inject from '@rollup/plugin-inject'

export default ({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [
      vue(), 
      jsx(),
      inject({
        $API: path.resolve('src/apis/index.ts')
      })
    ],
    define: {
      'process.env': JSON.stringify(Object.assign({}, env, Config[mode])),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}