# Number_BaseBall(숫자야구 게임)

## Math.random()

- 이 함수는 0 이상 1 미만의 수를 무작위로 생성한다.
- 이 함수에 9를 곱하면 0 이상 9 미만이다. 또한 1을 더하면 1 이상 10 미만이다.

* Math.floor 내림
* Math.ceil 올림
* Math.round 반올림

## indexOf / includes

- indexOf와 includes는 `배열`이나 `문자열`에 원하는 값이 들어 있는지 찾는 메서드.
- indexOf는 원하는 값이 들어 있다면 해당 인덱스를 알려주고, 들어 있지 않다면 -1을 반환.
- includes는 조금 더 직관적으로 `true`/`false`를 반환.

```javascript
"2345".indexOf(3) === 1;
"2345".indexOf(6) === -1;
["2", "3", "4", "5"].indexOf("5") === 3;
["2", "3", "4", "5"].indexOf(5) === -1; // 요소의 자료형까지 같아야 함
"2345".includes(3) === true;
["2", "3", "4", "5"].includes(5) === false; // 요소의 자료형까지 같아야 함
```

## forEach / map

- `forEach`는 반복문 효과를 내는 배열의 메서드 인수로 함수를 넣고, 이 함수가 각각의 배열 요소들에 순서대로 적용되는 구조. `forEach`는 배열을 읽는 효과를 냄.
- `map`도 반복문 역할을 하지만, 반환값이 있다는 점에서 forEach와 다릅니다. `map`은 기존 배열의 요소를 일대일로 다른 값으로 바꿉니다. **단, 기본 배열의 값이 바뀌는 것이 아니라 새로운 배열을 만듭니다**

```javascript
const array = [1, 3, 5, 7];
array.forEach((number, index) => {
  console.log(number, index);
});
// (1,0), (3,1), (5,2), (7,3)
```

```javascript
const array = [1, 3, 5, 7];
const newArray = array.map((number, index) => {
  console.log(number, index);
  return number + 1;
});
console.log(array); // [1,3,5,7]
console.log(newArray); // [2,4,6,8]
```

## document.createElement, document.createTextNode

- 각각 `tag`, `text`를 만드는 메서드 단, 다른 태그에 append나 appendChild 하기 전까지는 화면에 보이지 않음.

## appendChild append

- document.createElement, document.createTextNode로 만든 `태그`나 `텍스트`를 선택한 태그의 자식 태그로 넣는다.
- `appendChild`로는 하나만 넣을 수 있고, `append`를 사용하면 여러 개를 동시에 넣을 수 있다.
- `append`로 텍스트를 추가할 때는 document.createTextNode 대신 `문자열`을 바로 넣어도 된다.

## Tip

- 프로그래밍을할 때 for 문을 아예 사용하지 않고, 모든 값을 배열로 만들어서 처리

```javascript
const numbers = [];
for (let n = 1; n <= 9; n += 1) {
  numbers.push(n);
}
const numbers = Array(9)
  .fill()
  .map((v, i) => i + 1);
// 1 ~ 9 까지의 배열을 만들려면 for문을 쓰는 것 보다 Array fill map을 사용해 간결한 한줄짜리 코드가 훨씬 보기 좋다.
```

## Quiz

1. 2에서 5까지의 숫자를 뽑고 싶습니다. 제대로 작동하도록 (가)~(라)를 모두 채우세요. 반복문의 시작 값과 끝 값을 입력하는 스타일에 관련된 문제입니다.

```javascript
const answer = [];
for (let n = 0; n < 가; n++) {
  answer.push(n + 2);
}
// 4
```

```javascript
const answer = [];
for (let n = 0; n <= 나; n++) {
  answer.push(n + 2);
}
// 3
```

```javascript
const answer = [];
for (let n = 1; n < 다; n++) {
  answer.push(n + 1);
}
// 5
```

```javascript
const answer = [];
for (let n = 1; n <= 라; n++) {
  answer.push(n + 1);
}
// 4
```

2. forEach 메서드를 사용한 코드를 for 문으로 바꿔 보세요.

```javascript
const array = [1, 3, 5, 7];
array.forEach((number, index) => {
  console.log(number, index);
});

for (let i = 0; i < array.length; i++) {
  console.log(array[i], i);
}
```
