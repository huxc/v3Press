# v3-icon

在 element-plus 中使用图标

- 全局注册 (缺点大量没有使用的图标会打包进项目)
- 自动导入配置略有繁琐
- 按需加载需要 import 导入(按组件形式使用)
- 结合 el-icon 使用 (同上)

::: info 说明
v3-icon 则不需要这么繁琐，可以直接使用，其中 ep 为 element 图标的命名空间。所有 Element Plus 提供的图标集合，都可以通过`ep:`加`图标名称`来使用。
如果 Element Plus 提供的图标集合满足不了时，可以在[iconify](https://icon-sets.iconify.design/)网站，通过英文关键词搜索你所需要的图标。
如：搜素 pdf 点击搜素出的图标复制最上方的`Icon`即可使用；样式可用`style` 或者 `class` 与 el-icon 相同
:::

```vue
<v3-icon class="icon-plus" icon="ep:plus" />
<v3-icon style="color:red" icon="bi:file-pdf" />
```

::: danger 注意
因为此组件是按需加载图标；如果需要动态隐藏显示图标，应避免使用 v-if v-else 可用 v-show 替代
:::
