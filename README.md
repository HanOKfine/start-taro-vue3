# start-taro-vue3

taro+vue3 的开发微信小程序

## 准备工作：Vscode 插件安装

- Eslint
- Prettier
- Volar

## 如何使用

1. 克隆项目

```bash
git clone https://github.com/HanOKfine/start-taro-vue3.git
```

2. 进入项目目录安装依赖

node ver 16.13.0

```bash
cd start-taro-vue3
pnpm install
```

3. 运行小程序开发编译

```bash
pnpm dev:weapp
```

4. 打开微信开发工具 项目目录指向 `dist` 目录 填写自己的 AppId 或者使用测试 AppId

## 小程序分包配置

> 随着业务代码和组件的引入越来越多，主包的大小一定会越来越大，超过 2m 的主包以后微信开发工具就无法使用预览的功能，为了提前做好准备在一开始就进行分包处理，主包只包含公共组件和公共代码，分包里放入业务代码和业务代码

```js
//app.config.ts
export default {
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'sub-pages/featureA',
      pages: ['index/index'],
    },
  ],
}
```

### 其他限制(微信小程序)

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。
- 不能在页面组件的 DOM 树之外插入元素，因此不支持 `<teleport>`
- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。
- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。
- 所有组件的 id 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题

### TODO List

[ ] - 添加 husky 触发 Git 钩子来保证代码提交时 Ts 检查和 Eslint 检查都符合规范
[ ] - 添加并配置 [commitlint](https://github.com/conventional-changelog/commitlint) 提高提交时的规范
[ ] - 添加 Pinia 进行状态管理
[ ] - 增加 Vue DevTools 调试模式
