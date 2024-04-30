---
title: v3-table表格组件
---

# v3-table 配置式表格组件

用与列表页中的列表数据展示，它是基于配置展示所需数据。拥有自定义 slot、render 渲染、formatter 等功能使其在快速开发的前提下同时拥有极高的可定制能力。支持 el-table 的所有属性

## 基础用法

### 自动请求

定义一个数组对象，作为列表列名(`columns`)，`request-api` 为列表请求接口，定义后会自动发起请求

```js
// hooks/useHandle.js

export function useHandle() {
  // 分页查询接口
  const requestApi = ref("api-url");

  // 列表列名
  const columns = [
    { prop: "jobNo", label: "工号" },
    { prop: "nickName", label: "姓名" },
    { prop: "roleName", label: "角色" },
    { prop: "createAt", label: "创建时间" },
    { slot: "operation", label: "操作" },
  ];

  return {
    columns,
    requestApi,
  };
}
```

```vue{7-8}
<!-- table.vue -->
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns="columns"
      :request-api="requestApi"
    />
  </div>
</template>

<script setup name="example-table">
import { useHandle } from "./hooks/useHandle";

const tableRef = ref();
const { searchItems } = useSearch();
const { columns, requestApi } = useHandle();
</script>
```

### 手动请求

`requestApi`设置为 `null`,在 `onMounted` 定义，需求请求的适合调用 table 的 `tableRef` 实例的`refresh`方法请求

```js
// hooks/useHandle.js
const requestApi = ref(null);
```

```vue{5,19,20}
<!-- table.vue -->
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns="columns"
      :request-api="requestApi"
    />
  </div>
</template>

<script setup name="example-table">
import { useHandle } from "./hooks/useHandle";

const tableRef = ref();
const { columns, requestApi } = useHandle();

onMounted(() => {
  requestApi.value = 'api-url'
  tableRef.value.refresh()
})
</script>
```

## 按钮插槽

### 顶部插槽

`#headLeft`顶部左侧按钮，`#headRight`顶部右侧按钮；

```vue{9-16}
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns="columns"
      :request-api="requestApi"
      :query-columns="searchItems"
    >
      <template #headLeft="{ rows, ids, isSelected }">
        <el-button
          class="btn"
          type="primary"
        >
          左侧按钮
        </el-button>
      </template>
    </v3-table>
  </div>
</template>
```

### 列插槽

列按钮需要定义`columns`中的对象的 `slot` 属性，`slot` 的值为插槽名称。

```js{7}
// hooks/useHandle.js
const columns = [
  ...
  { slot: "operation", label: "操作" },
];
```

```vue{8-14}
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns="columns"
      :request-api="requestApi"
    >
      <template #operation>
        <el-table-column label="操作" width="120px" align="center">
          <template #default="{ row }">
            <el-button type="primary" @click="handleM(row)"> 编辑 </el-button>
          </template>
        </el-table-column>
      </template>
    </v3-table>
  </div>
</template>
```

## 带查询条件

查询条件是利用`v3-form`组件，详细参数查看[v3-form](/docs/components/form.md)节点

## Attributes

| 参数          | 说明                               |   类型   |          默认值          |
| :------------ | ---------------------------------- | :------: | :----------------------: |
| sourceData    | 显示的数据                         |  array   |           必填           |
| total         | 总条目数                           |  number  |           必填           |
| columns       | 需要展示的字段（参见下方代码演示） |  array   |           必填           |
| loading       | 是否加载中                         | boolean  |         `false`          |
| selectVisible | 是否可选择行                       | boolean  |          `true`          |
| pageRequest   | 页码与每页条数                     |  object  | `{page: 1,pageSize: 10}` |
| exportVisible | 是否可导出                         | boolean  |          `true`          |
| deleteVisible | 是否可以批量删除                   | boolean  |          `true`          |
| exportName    | 导出文件默认名称                   |  string  |            ''            |
| pageSizes     | 每页显示个数选择器的选项设置       | number[] |          ` []`           |

## Events

| 方法名            | 说明                           |   参数    |
| :---------------- | ------------------------------ | :-------: |
| selectionChange   | 当选择项发生变化时会触发该事件 | selection |
| handleBatchDelete | 点击批量删除会触发该事件       | selection |
| changePage        | 切换页码时触发该事件           |   page    |
| changeSize        | 切换每页条数时触发该事件       | pagesize  |

## Slot

| name    | 说明                             |
| :------ | -------------------------------- |
| buttons | 表格上方区域（一般用于展示按钮） |
