# v3-dialog

::: info 描述
对 Element Plus 中的 el-dialog 组件进行业务封装.<br/>
v3-dialog 为局部全屏弹出，以父元素的 position: relative 决定 dialog 位置
:::
如下：设置最外层的`div`样式`style="position:relative"`

```vue{2,5-7}
<template>
  <div class="table-box" style="position:relative">
    <v3-table ref="tableRef" :search-props :init-param :columns :request-api>
      <template #headLeft="{ rows, ids, isSelected }">
        <el-button class="btn" type="primary" @click="visible = true">
          局部弹框v3-ialog
        </el-button>
      </template>
    </v3-table>
    <v3-dialog v-model="visible">
      <span style="font-size:30px">弹框内容</span>
    </v3-dialog>
  </div>
</template>

<script setup name="example-table">

const tableRef = ref()
const visible = ref(false)
...
</script>
```

弹窗显示最外层 div 的相应位置(红色框区域)，在没有配置 keep-alived 的情况下，需要调整页面到详情等场景，返回到列表页面，页面数据会改变，如果用弹框的方式则不存在那样的问题；如下图
![图片](/imgs/dlg.png)
