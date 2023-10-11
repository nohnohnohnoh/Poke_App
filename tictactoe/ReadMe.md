# Tictactoe

## 이차원 배열

- 배열안에 배열이 있을 때 **이차원 배열**이라고 한다. 배열이 몇 번 중첩됐느냐에 따라 몇 차원 배열인지 정해진다.
- 3X3은 행열이 적어 직접 만들 수 있으나 100X100은 힘드니 반복문을 사용해 만든다.

```javascript
[
  [null, "X", null],
  ["O", null, "X"],
  [null, "O", "X"],
];
```

## 구조분해 할당

```javascript
const { body } = document;
const body = document.body;
```

```javascript
const obj = { a: 1, b: 2 };
const { a, b } = obj;
const a = obj.a;
const b = obj.b;
```

## 이벤트 버블링

- **이벤트 버블링**은 이벤트가 발생할 때 부모 태그에도 동일한 이벤트가 발생하는 현상을 말한다.

```javascript
<table>
  <tr>
    <td></td>
  </tr>
</table>
```

- td tag를 클릭하면 td tag에 `click 이벤트`가 발생하고, td 태그의 부모인 tr 태그와 tr 태그의 부모인 table 태그에도 발생한다. **즉, td 태그에 발생한 click 이벤트가 table 태그까지 전달된다.**

## parentNode 와 children

- 현재 태그의 부모 태그를 찾고 싶을 때는 `parentNode`를 사용.
- 자식 태그를 찾으려면 `children 속성`을 사용 자식 태그는 여러 개일 수 있으므로 children 속성은 배열 모양의 값이 된다. **단, 진짜 배열은 아니고 배열 모양의 객체이다.** 이것을 **유사 배열 객체**라고 부른다

```javascript
<table>
  <tr>
    <td></td>
  </tr>
</table>;

document.querySelector("tr").parentNode; // table 태그
document.querySelector("tr").children; // { 0: td, 1: td, 2: td }
```

## 유사 배열 객체와 Array.from

- `유사 배열 객채`는 배열 모양의 객초로 배열 메서드를 사용할 수 없다. 배열 메서드를 사용하고 싶다면 `Array.from 메서드`로 유사 배열 객체를 배열로 바꾼다.
- 문자열도 `Array.from 메서드`를 사용해 배열로 바꿀 수 있다.

```javascript
Array.from($tr.children).indexOf($td);
```

```javascript
Array.from("123"); // ['1', '2', '3']
```

## rowIndex와 cellIndex

- `tr`태그는 몇 번째 줄인지를 알려주는 `rowIndex`라는 속성 제공
- `td`태그는 몇 번째 칸인지를 알려주는 `cellIndex`라는 속성 제공

```javascript
const rowIndex = $tr.rowIndex;
const cellIndex = $td.cellIndex;
```

## flat

- `flat`은 배열의 차원을 한 단계 낮추는 메서드 **즉, n차원 배열을 n-1 배열로 낮춥니다.**
- 차원을 낮추는 게 배열을 평평하게 만드는 것 처럼 보여서 `flat`이라는 이름이 붙었습니다.
- 일차원 배열은 `flat`을 적용해도 그대로 일차원 배열이 된다.

```javascript
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
array.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = [
  1,
  2,
  3,
  [
    [4, 5, 6],
    [7, 8, 9],
  ],
];
array2.flat(); // [1, 2, 3, [4, 5, 6], [7, 8, 9]]
```

## every와 some

- 배열에서 모든 값이 조건에 해당하는지 판단하려면 `every` 메서드를 사용하고 하나라도 조건에 해당하는지 판단하려면 `some` 메서드를 사용.

```javascript
배열.every(조건함수);
배열.some(조건함수);
```

- `every`와 `some`도 반복문으로 일반 반복문을 사용하면 끝까지 탐색하지만, **every와 some 메서드는 조건이 충족 또는 불충족 되면 멈추므로 일반 반복문 보다 효율적인 경우가 많다.**
- `every`는 **하나라도 조건을 만족하지 않는 요소(조건 함수가 false를 return)**를 찾으면 반복을 중단하고, `some`은 **하나라도 조건을 만족하는 요소(조건 함수가 true를 return)**를 찾으면 반복을 중단.

### Quiz

1. 다음 객체에서 a, c, e 속성을 구조분해 할당 문법으로 변수에 할당해 보세요.

```javascript
const obj = {
  a: "hello",
  b: {
    c: "hi",
    d: { e: "wow" },
  },
};

// const { a, b: { c, d: { e } } } = obj;
// const a = obj.a
// const c = obj.b.c
// const e = obj.b.d.e
```

2. 5(줄) X 4(칸) 이차원 배열을 만들어 보세요. 배열의 요소는 모두 1로 만듭니다.

```javascript
const array = [];
for (let i = 1; i <= 5; i++) {
  const arrayNumber = [];
  for (let j = 1; j <= 4; j++) {
    arrayNumber.push(1);
  }
  array.push(arrayNumber);
}
```

3. 버튼을 클릭할 때 'hello, event bubbling'을 alert 하게 다음 코드를 수정하세요. 단, 이벤트 리스너를 button 태그에 달아서는 안 됩니다.

```javascript
<header>
  <div>
    <button>클릭</button>
  </div>
</header>
<script>
const $header = document.querySelector('header')
 $header.addEventListener('click', () => {
    console.log('hello, event bubbling');
  });
</script>
```

4. 다음 배열에서 한 칸이라도 null이 들어 있으면 ture를 반환하고, 아니면 false를 출력하는 코드를 작성하세요.

```javascript
const array = [1, "hello", null, undefined, false];

array.forEach((T) => {
  if (T === null) {
    return console.log(true);
  }
  return console.log(false);
});

const some = array.some((T) => {
  T === null;
});
// some은 하나라도 조건에 만족하면 true가 나온다.
```
