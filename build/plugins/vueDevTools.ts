import type { PluginOption } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

/**
 * 配置 Vue DevTools 插件
 *
 * 未配置编辑器时不传 launchEditor，让插件沿用自身默认值（process.env.LAUNCH_EDITOR ?? 'code'）；
 * 传空值或字符串 "undefined" 会让它在「打开组件源码」时去启动一个不存在的编辑器。
 */
export function setupVueDevToolsPlugin(launchEditor?: string): PluginOption {
  return vueDevTools(launchEditor ? { launchEditor } : {})
}
