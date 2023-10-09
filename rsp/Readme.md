# RSP(가위바위보)

## setInterval

- setTimeout과 비슷한 효과를 냅니다. 다만, 한 번만 실행되는 setTimeout과는 달리 지정한 시간마다 주기적으로 지정한 함수를 실행.

```javascript
setInterval(() => {
  // 내용
}, 밀리초);
```

## clearInterval, clearTimeout

- `setInterval` 과 `setTimeout` 함수는 각각 `clearInterval`과 `clearTimeout` 함수로 취소할 수 있습니다. **다만, clearTimeout은 setTimeout에 지정한 함수가 아직 실행되지 않았을 때만 취소할 수 있습니다.**

```javascript
let 아이디 = setInterval(함수, 밀리초);
clearInterval(아이디);
let 아이디 = setTimeout(함수, 밀리초);
clearTimeout(아이디);
```

## 배열.includes

- `||`을 사용한 코드는 배열의 includes 메서드로 반복을 줄일 수 있다.

```javascript
diff = '바나나' || diff ='사과' || diff = '오렌지'
['바나나', '사과', '오렌지'].inclues(diff)
```

## removeEvnetListner

- `addEventListener`로 연결한 함수를 `removeEventListener`로 제거할 수 있습니다. 단, 연결할 때의 함수와 제거할 때의 함수가 같아야 합니다.

```javascript
function 함수() {}
태그.addEventListener("이벤트", 함수);
태그.removeEventListener("이벤트", 함수);
```

## Quiz

1. 다음 setInterval 함수를 같은 효과를 내는 setTimeout으로 바꿔 보세요.

```javascript
setInterval(() => {
  console.log("hello");
}, 1000);

const Hello = () => {
  console.log("hello");
  setTimeout(Hello, 1000);
};

setTimeout(Hello, 1000);
```

2. 다음 이벤트 리스너를 removeEventListener 메서드로 제거해 보세요.

```javascript
const fun = (값) => () => {
  console.log("고차 함수입니다", 값);
};
태그.addEventListener("click", fun(1));
태그.removeEventListener("click", fun(1)); // 틀린 답.
fun(1) === fun(1); // false

// 정답
const fun1 = fun(1);
태그.removeEventListener("click", fun1);
```

```javascript
const fun = () => {};
const Fun = () => {};
fun === Fun; // false
fun === fun; // true
// 함수 새로운 함수 값 반환 다른 함수임.
// 같은 변수에 담긴 함수는 참조 값이 같으므로 같은 함수임.
```

- 고차함수 fun은 매개변수에 따라 새로운 함수를 계속 반환하고 있다. 고로 비교하면 false 값 반환 값은 같으나 새로운 함수이기에 false이다. 그래서 변수에 담아 참조값을 같게하고
