# v3-form

::: info 配置式表单组件
基于 Json 配置生成表单，可快速完成详情页编辑。
:::

## 基础用法

设置 json 格式的表单数组，赋值给 v3-form 的`form-items`属性
::: danger 仔细阅读
具体属性功能见下方代码注释
:::

```js
const formItems = [
  {
    //设置此属性后 attrs失效
    slot: "自定义插槽",
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

## 插槽

在现有组件无法满足表单需求时，可使用插槽或[扩展组件](/docs/components/formItem.md)
::: warning 建议
优先推荐[扩展组件](/docs/components/formItem.md)，可复用，有利于维护
:::

```js
const formItems = [
  {
    slot: "cusSpan",
    itemAttrs: {
      label: "自定义",
      col: 12,
    },
  },
];
```

```vue{4-7}
<template>
  <div>
    <v3-form
      :form-items="formItems">
      <template #cusSpan>
        <span>这是自定义插槽</span>
      </template>
    </v3-form>
  </div>
</template>
```

## 表单提交

### 自定义事件

```vue{4}
<template>
  <div class="hello">
    <v3-form ref="formRef"
     @submit="onSubmit" />
     <--使用自定义按钮-->
     <el-button @click="onSave">保存</el-button>
  </div>
</template>
<script setup>

//调用实例校验表单 -- 非自定义按钮无需此操作
function onSave(){
  // 此操作会触发submit自定义事件回调
  formRef.value.submit
}

function onSubmit(){
    //校验成功后的业务逻辑
}
</script>
```

### 实例返回 promise

```vue{4}
<template>
  <div class="hello">
    <v3-form ref="formRef"/>
    <--使用自定义按钮-->
    <el-button @click="onSave">保存</el-button>
  </div>
</template>
<script setup>
//非自定义按钮无需此操作
function onSave() {
  formRef.value.promiseSubmit().then(()=>{
    //校验成功后的业务逻辑
  })
}
</script>
```

## 结合弹窗组件的表单

[弹窗](/docs/hooks/useDialog.md)或[抽屉](/docs/hooks/useDrawer.md)的形式进行表单编辑

```js
//hooks/useForm
export function useForm() {
  const editForm = reactive({
    checkboxGroup: ["1"],
  });
  const formRef = ref();
  const formItems = [
    {
      tag: "input",
      itemAttrs: {
        label: "姓名",
        col: 12,
        rules: [{ required: true, message: "年龄不能为空", trigger: "click" }],
      },
      attrs: {
        key: "name",
        placeholder: "请输入姓名",
      },
      getAttrs(Model) {
        // 返回一个被合并到当前attrs属性里的对象
        return Model.age === "22" ? { disabled: true } : null;
      },
    },
    {
      tag: "select",
      itemAttrs: {
        label: "兴趣",
        col: 10,
      },
      attrs: {
        key: "hobby",
        placeholder: "请输入兴趣",
        options: [
          { value: 1, label: "吃饭" },
          { value: 2, label: "睡觉" },
          { value: 3, label: "打豆豆" },
        ],
      },
    },
    {
      tag: "input",
      itemAttrs: {
        label: "年龄",
        rules: [{ required: true, message: "年龄不能为空", trigger: "click" }],
      },
      attrs: {
        key: "age",
        placeholder: "请输入年龄",
      },
      ifRender(Model) {
        return Model.hobby === 2;
      },
    },
    {
      tag: "date",
      itemAttrs: {
        label: "日期",
        col: 12,
      },
      attrs: {
        key: "date",
        "value-format": "yyyy-MM-dd",
      },
    },
    {
      tag: "radio",
      itemAttrs: {
        label: "单选框",
      },
      attrs: {
        value: "1",
        key: "radio",
        options: [
          { value: "1", label: "男" },
          { value: "2", label: "女" },
        ],
      },
    },
    {
      tag: "uploadImg",
      itemAttrs: {
        label: "文章封面",
        col: 24,
      },
      attrs: {
        key: "image_uri",
        limit: 2,
      },
    },
    {
      tag: "checkbox-group",
      itemAttrs: {
        label: "复选框组",
      },
      attrs: {
        key: "checkboxGroup",
        options: [
          { value: "1", label: "复选框1" },
          { value: "2", label: "复选框2" },
          { value: "3", label: "复选框3" },
        ],
      },
    },
    {
      tag: "checkbox",
      itemAttrs: {
        label: "复选框",
      },
      attrs: {
        key: "checkbox",
        value: true,
        label: "复选框",
      },
    },
    {
      tag: "textarea",
      itemAttrs: {
        label: "文本框",
      },
      attrs: {
        key: "textarea",
      },
    },
  ];
  return {
    formRef,
    editForm,
    formItems,
  };
}
```

::: info 提示
表单的属性 footer 如果设置为 true,则使用 v3-form 自带按钮（按钮样式按需求自定义）
保存或者其他逻辑要关闭抽屉，则需要定义`const emit = defineEmits(["clsDwr"])`
在需要关闭的时候`emit("clsDwr")`，如果是弹窗则是`clsDlg`。如果使用 useDialog 自带按钮(传入 footer 对象)，则表单必须暴露一个名为 expose_fn 的函数，一般保存逻辑写在此函数中
:::

```vue
//form表单组件（/comprnents/form）
<template>
  <div class="hello">
    <v3-form
      ref="formRef"
      footer
      :model="editForm"
      :form-items="formItems"
      @submit="onSubmit"
    />
    <p style="color:red;text-align:center">
      上方的的提交，重置按钮 通过footer进行隐藏显示
    </p>
  </div>
</template>

<script setup name="example-form">
import { useForm } from "./hooks/useForm";

const props = defineProps({
  oldForm: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["clsDwr"]);

const { formItems, editForm, formRef } = useForm();

onMounted(() => {
  setTimeout(() => {
    Object.assign(editForm, props.oldForm);
  }, 2000);
});

function onSubmit() {
  emit("clsDwr");
}

function expose_fn() {
  formRef.value.submit().then(() => {
    emit("clsDwr");
  });
}

defineExpose({
  expose_fn,
});
</script>
```

## 属性

| 参数       | 说明                                                                                        |       类型        | 默认值  |
| :--------- | ------------------------------------------------------------------------------------------- | :---------------: | :-----: |
| ...        | 支持 [el-form](https://element-plus.org/zh-CN/component/form.html#form-attributes) 所有属性 |        ...        |  必填   |
| model      | 表单数据对象                                                                                |      object       |  必填   |
| formItems  | 表单字段项（参见上方代码演示）                                                              |       array       |  必填   |
| inline     | 行内表单模式                                                                                |      boolean      | `false` |
| submitMsg  | 提交按钮文案(值为 false 时隐藏按钮)                                                         | string \| boolean |  提交   |
| resetMsg   | 重置按钮文案(值为 false 时隐藏按钮)                                                         | string \| boolean |  重置   |
| labelWitdh | 表单域标签的宽度                                                                            |      string       | `auto`  |
| footer     | 是否显示底部/右侧按钮                                                                       |      boolean      | `false` |
| size       | 用于控制该表单内组件的尺寸                                                                  |      string       | `small` |
| gutter     | 栅格间隔（当 inline 值为 false 时无效）                                                     |      number       |  `24`   |

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
