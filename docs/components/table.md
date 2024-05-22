---
title: v3-table表格组件
---

# v3-table

::: info 配置式表格组件
用与列表页中的列表数据展示，它是基于配置展示所需数据。拥有自定义 slot、render 渲染、formatter 等功能使其在快速开发的前提下同时拥有极高的可定制能力。支持 el-table 的所有属性
:::

## 基础用法

### 自动请求

定义一个数组对象，作为列表列名(`columns`)，`request-api` 为列表请求接口，定义后会自动发起请求
::: warning 注意
使用组件 v3-table，在给 request-api `首次赋值`后会自动请求一次；如需要设置查询条件等情况，在设置条件后再赋值 request-api 会自动请求
:::

```js
// hooks/useHandle.js

export function useHandle() {
  // 分页查询接口
  const requestApi = ref("api-url");

  // 列表列名
  const columns = [
    { type: "selection", label: "多选" },
    { type: "index", label: "序号", width: "60px" },
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
      :columns
      :request-api
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

`requestApi`已赋值,在需要请求的逻辑中，调用 table 的 `tableRef` 实例的`refresh`方法请求

```vue
<!-- table.vue -->
<template>
  <div class="tabel-box">
    <v3-table ref="tableRef" />
  </div>
</template>

<script setup name="example-table">
const tableRef = ref();

onMounted(() => {
  tableRef.value.refresh();
});
</script>
```

### 获取数据初始化参数

赋值`initParam`可设置查询默认参数

```vue{5}
<template>
  <div class="table-box">
    <v3-table
      ref="tableRef"
      :initParam="{xx:'xx'}"
      :columns
      :request-api
    >
  </div>
</template>

```

## 按钮插槽

### 顶部插槽

`#headLeft`顶部左侧按钮，`#headRight`顶部右侧按钮；

```vue{9-16}
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns
      :request-api
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
  { type: 'selection', label: '多选' },
  { type: 'index', label: '序号', width: '60px' },
  ...
  { slot: "operation", label: "操作" },
];
```

```vue{8-14}
<template>
  <div class="tabel-box">
    <v3-table
      ref="tableRef"
      :columns
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

### render 函数

如果不想使用插槽可选择使用 `render` 函数, 如下设置绿色的部门名称

```js
  const columns = [
    { type: 'selection', label: '多选' },
    { type: 'index', label: '序号', width: '60px' },
    {
      prop: 'departmentName',
      label: '部门',
      render: (h, { row }) => {
        return h('span', { style: { color: '#60D7A7' } }, row.departmentName)
      },
    },
    ...
  ]
```

## 筛选条件

传入`searchProps`属性自动显示查询条件，详情查看下表[searchProps](#筛选属性)

---

分页参数在`hooks/useTable.js`中，可以修改`state中的listQuery`

```js{3-7}
...
  const state = reactive({
    // 页码及每页条数
    listQuery: {
      pageNum: pageRequest.page,
      pageSize: pageRequest.pageSize,
    },
    ...
  })
  ...
```

赋值`searchProps.formatQuery`可格式化查询参数

```js
export function useSearch() {
    ...
  const formatQuery = (data) => {
    //data为所有的查询条件，此处可随意更改
    data.a = 2;
    data.b = "全部";
    delete data.c
    ...
  };
  ...

   return {
    formatQuery
  };
}
```

```vue
<template>
  <div class="table-box">
    <v3-table
      ref="tableRef"
      :search-props
      :columns
      :request-api
    >
  </div>
</template>

<script setup name="example-table">
import { useSearch } from './hooks/useSearch'
const tableRef = ref()

const searchProps = useSearch()
```

### 可折叠搜索框

`searchProps`传入`collapse`为`true`开启折叠功能。`defaultOver`属性配置是否默认展开；详见下表[searchProps](#筛选属性)

## 属性

| 参数          | 说明                                                                                                            |   类型   |             默认值             |
| :------------ | --------------------------------------------------------------------------------------------------------------- | :------: | :----------------------------: |
| ...           | 支持 [el-table](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) 的所有属性 |   ...    |              可选              |
| requestApi    | 表格数据接口                                                                                                    |  string  |              必填              |
| columns       | 表格字段（参见上方代码演示）                                                                                    |  array   |              必填              |
| isMultiple    | 是否可选择多列                                                                                                  | boolean  |             `true`             |
| indexVisible  | 是否显示序号                                                                                                    | boolean  |             `true`             |
| isPagination  | 是否显示分页                                                                                                    | boolean  |             `true`             |
| isOnePage     | 数据只有一页是否显示分页                                                                                        | boolean  |            `false`             |
| initParam     | 获取数据初始化参数                                                                                              |  object  |              `{}`              |
| formatRequest | 格式化列表接口返回数据                                                                                          | function |             `null`             |
| searchProps   | 表格查询`详见下表searchProps`                                                                                   |  object  |             `null`             |
| pageRequest   | 页码与每页条数                                                                                                  |  object  |    `{page: 1,pageSize: 10}`    |
| pageSizes     | 每页显示个数选择器的选项设置                                                                                    | number[] | ` [10, 20, 50, 100, 200, 500]` |

### 筛选属性

| 参数        | 说明                                      |      类型      | 默认值  |
| :---------- | ----------------------------------------- | :------------: | :-----: |
| collapse    | 是否开启折叠功能                          |    boolean     | `false` |
| defaultOver | collapse 为 true 生效，搜索栏默认是否折叠 |    boolean     | `true`  |
| formItems   | 查询表单（数组 json）                     |     array      |  `[]`   |
| formatQuery | 格式化查询参数                            | function(data) | `null`  |

## 列属性

::: danger 注意
列属性支持所有[el-table-column](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)属性；如：type, fixed，formatter 等，独有属性如下
:::

| 参数   | 说明                         |
| :----- | ---------------------------- |
| render | 支持 rander，h 函数渲染      |
| slot   | 支持插槽，常用于列中操作按钮 |
| isImg  | 支持图片展示                 |

## 事件

| 方法名      | 说明                           |   类型   |
| :---------- | ------------------------------ | :------: |
| rowClick    | 点击行时触发该事件             | function |
| rowDblclick | 双击行时触发该事件             | function |
| callBack    | table 数据源变化后时触发该事件 | function |

## 插槽

| name        | 说明                                 |
| :---------- | ------------------------------------ |
| headLeft    | 表格上方左侧区域（一般用于展示按钮） |
| headRight   | 表格上方右侧区域（一般用于展示按钮） |
| column.slot | 表格列插槽（定制化列）               |

## Exposes

| 属性            | 说明                 |   类型   |
| :-------------- | -------------------- | :------: |
| refresh         | 刷新表单(会重置页码) | function |
| getList         | 请求表单数据         | function |
| tableData       | 返回表单数据         |  array   |
| searchReset     | 重置查询条件         | function |
| resetSelections | 清空已选择行         | function |
| setTableData    | 手动设置表格数据     | function |
