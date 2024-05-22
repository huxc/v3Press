# v3-icon

在 element-plus 中使用图标缺点：

- 全局注册 (大量没有使用的图标会打包进项目)
- 按需加载需要 import 导入(按组件形式使用)，略有繁琐
- 需要结合 el-icon 组件使用

::: info 为了解决以上问题
v3-icon 则可以直接使用，其中 ep 为 element 图标的命名空间。所有 Element Plus 提供的图标集合，都可以通过`ep:`加`图标名称`来使用。
如果 Element Plus 提供的图标集合满足不了时，可以在[iconify](https://icon-sets.iconify.design/)网站，通过英文关键词搜索你所需要的图标。
如：搜素 pdf 点击搜素出的图标的结果，选择你需要的图标进入详情，点击复制按钮填写在组件的`icon属性上`即可；样式修改可用`style` 或者 `class` 与 el-icon 使用方法相同
:::

```vue
<v3-icon class="icon-plus" icon="ep:plus" />
<v3-icon style="color:red" icon="bi:file-pdf" />
```

::: danger 注意
因为此组件是按需加载图标；如果需要动态隐藏显示图标，应避免使用 v-if v-else 可用 v-show 替代
:::
