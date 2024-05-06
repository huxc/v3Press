# cus-el-form

::: info 配置式表单组件
基于配置生成表单，可快速完成详情页编辑。
:::

## 基础用法

设置 json 格式的表单数组，赋值给 v3-form 的`form-items`属性
::: danger 仔细阅读
具体属性功能见下方代码注释
:::

```js
const formItems = [
  {
    //表单组件名称
    tag: "input",
    itemAttrs: {
      //表单字段名称
      label: "姓名",
      //当表单属性inline为false时候可用，配置栅格间隔 默认24
      col: 12,
      // 校验表单rules
      rules: [{ required: true, message: "年龄不能为空", trigger: "click" }],
    },
    // attrs 可设置组件的所有属性(如此组件input则可以设置el-input的所有属性，其他组件相同)
    attrs: {
      key: "name", //表单提交字段名称 需要唯一
      placeholder: "请输入姓名",
    },
    getAttrs(Model) {
      // 返回一个被合并到当前attrs属性里的对象
      return Model.age === "22" ? { disabled: true } : null;
    },
    ifRender(Model) {
      // 返回true/false用于是否显示该字段
      return Model.hobby === 2;
    },
  },
];
```

```vue
<template>
  <div class="form-x">
    <v3-form ref="formRef" :model="editForm" :form-items="formItems" />
  </div>
</template>
```

## 赋默认值

表单赋默认值只需要给 model 的参数(editForm)赋值即可
::: warning 注意
表单对象如果直接等于则会失去响应式，应使用 Object.assign 合并对象；
或者赋值单个属性 editForm.xx = xx
:::

```vue
<template>
  <div class="hello">
    <v3-form ref="formRef" :model="editForm" :form-items="formItems" />
  </div>
</template>

<script setup name="example-form">
import { useForm } from "./hooks/useForm";

const props = defineProps({
  oldForm: { type: Object, default: () => ({}) },
});

const { formItems, editForm, formRef } = useForm();

onMounted(() => {
  Object.assign(editForm, props.oldForm);
});
</script>
```

## 结合弹窗组件的表单

## 属性

| 参数       | 说明                                        |       类型        | 默认值  |
| :--------- | ------------------------------------------- | :---------------: | :-----: |
| model      | 表单数据对象                                |      object       |  必填   |
| formItems  | 表单字段项（参见上方代码演示）              |       array       |  必填   |
| inline     | 行内表单模式                                |      boolean      | `false` |
| submitMsg  | 提交按钮文案(值为 false 时隐藏按钮)         | string \| boolean |  提交   |
| resetMsg   | 重置按钮文案(值为 false 时隐藏按钮)         | string \| boolean |  重置   |
| labelWitdh | 表单域标签的宽度                            |      string       | `auto`  |
| footer     | 是否显示底部/右侧按钮                       |      boolean      | `false` |
| size       | 用于控制该表单内组件的尺寸                  |      string       | `small` |
| gutter     | 栅格间隔（当 inline 值为 false 时无效）     |      number       |  `24`   |
| btnCol     | 按钮区域布局（当 inline 值为 false 时无效） |      string       |  `24`   |

## 事件

| 方法名      | 说明                     | 参数 |
| :---------- | ------------------------ | :--: |
| submit      | 表单校验完成后提交       |  无  |
| after-reset | 点击重置按钮会触发该事件 |  无  |

## 插槽

| name         | 说明                               |
| :----------- | ---------------------------------- |
| item.colSlot | 自定义表单元素（参见上方代码演示） |

## Exposes

| 属性          | 说明                      |    类型    |
| :------------ | ------------------------- | :--------: |
| handleReset   | 重置表单                  | `Function` |
| promiseSubmit | 表单验证返回 promise 对象 | `Function` |
