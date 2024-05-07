# v3-icon

::: info 描述
按需加载图标，
:::
在 element-plus 中使用图片需要安装相应的包，使用的时候需要 import 引入

```vue
<!-- 使用 el-icon 为 SVG 图标提供属性 -->
<template>
  <div>
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
    <!-- 或者独立使用它，不从父级获取属性 -->
    <Edit />
  </div>
</template>
```

使用此组件则不需要这么复杂，直接使用如下

```vue
<v3-icon icon="ep:plus" />
<v3-icon icon="ep:delete" />
```
