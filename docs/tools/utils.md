# 常用函数

项目中经常会用到函数，如下：

## 获取数据类型

```js
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  return map[toString.call(obj)];
}
export { typeOf };
```

## 判断空对象

```js
/**
 *
 */
function isObjEmpty(obj) {
  return obj?.constructor === Object && Reflect.ownKeys(obj).length === 0;
}
export { isObjEmpty };
```

## 深拷贝

```js
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === "array") o = [];
  else if (t === "object") o = {};
  else return data;

  if (t === "array") {
    for (let i = 0; i < data.length; i++) o.push(deepCopy(data[i]));
  } else if (t === "object") {
    for (const i in data) o[i] = deepCopy(data[i]);
  }
  return o;
}
export { deepCopy };
```

## 清除对象无效属性

```js
export function filterEmptyValue(...rest) {
  const query = Object.assign({}, ...rest);
  for (const key in query) {
    if (!query[key] && query[key] !== 0 && typeof query[key] !== "boolean")
      delete query[key];
  }
  return query;
}
```

## blob 文件流生成本地地址并打开

```js
export function openDoc(blobStream) {
  const localUrl = URL.createObjectURL(blobStream);
  window.open(localUrl);
}
```

## base64 字符转 blob

```js
export function base64ToBlob(base64, mime = "") {
  let byteChars; // 解码base64后的字符串
  const sliceSize = 1024; // 切割文件按1G循环处理
  const byteArrays = [];
  const base64s = base64.split(",");

  const fileType = base64s[0].match(/:(.*?);/);

  if (fileType && fileType.length > 1) {
    mime = fileType[1];
    byteChars = window.atob(base64s[1]);
  } else {
    byteChars = window.atob(base64);
  }

  for (let offset = 0; offset < byteChars.length; offset += sliceSize) {
    const slice = byteChars.slice(offset, offset + sliceSize);
    const byteNumbers = new ArrayBuffer(slice.length);
    const byteArray = new Uint8Array(byteNumbers);
    for (let i = 0; i < slice.length; i++) byteArray[i] = slice.charCodeAt(i);

    byteArrays.push(byteNumbers);
  }

  return new Blob(byteArrays, { type: mime });
}
```

## 生成唯一标识

```js
export function uuid() {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.length - 36);
}
```

## 遍历 Tree 节点

```js
export const foreachTree = (data, callback, childrenName = "children") => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName);
    }
  }
};
```

### 使用示例

假设我们要从树状结构数据中查找 id 为 9 的节点

```js
const treeData = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
 }, {
  id: 2,
  label: '一级 2',
  children: [{
    id: 5,
    label: '二级 2-1'
  }, {
    id: 6,
    label: '二级 2-2'
  }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
}],
​
let result
foreachTree(data, (item) => {
  if (item.id === 9) {
    result = item
  }
})
```

## 扁平数据结构转 Tree

```js
export function arrayToTree(items) {
  if (items && items.length <= 1) return items || [];

  const result = []; // 存放结果集
  const itemMap = {}; //
  for (const item of items) {
    const id = item.id;
    const pid = item.parentId;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id].children,
    };

    const treeItem = itemMap[id];

    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}
```

## 根据字符串、字号计算在 html 中占用的宽度

```js
export function measureText(txt, fontSize) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `${fontSize}px arial`;
  const { width } = context.measureText(txt);
  return width;
}
```

## 生成随机码

```js
export function randomid() {
  let abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [max, min] = [
    Math.floor(Math.random() * (10 - 7 + 1) + 1),
    Math.floor(Math.random() * (17 - 10 + 1) + 17),
  ];
  abc = abc
    .sort(() => 0.4 - Math.random())
    .slice(max, min)
    .slice(0, 8)
    .join("");
  return abc + new Date().getTime();
}
```
