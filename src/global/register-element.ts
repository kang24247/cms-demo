//按需挂载element-plus组件
import {
  ElButton,
  ElInput,
  ElForm,
  ElRadio,
  ElAlert,
  ElAside
} from 'element-plus'
import { App } from 'vue'
export function registerElement(app: App): void {
  const components = [ElButton, ElInput, ElForm, ElRadio, ElAlert, ElAside]
  for (const component of components) {
    app.component(component.name, component)
  }
}
