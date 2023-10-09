# Caculator(계산기)

## eval

```javascript
eval("1 + 2"); // 3 사용예시

document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    $result.value = eval(numOne + operator + numTwo);
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
});
```

- ex. numOne이 5, operator가 -, numTwo가 2인 경우 numOne + operator + numTwo는 '5-2'라는 문자열이 됩니다. 이 문자열이 eval 함수로 실행되면 결과로 3이 반환
- 문자열을 자바스크립트 코드처럼 실행 가능. 즉, 문자열을 연산자로 바꿀 수 있음.ㄴ
- eval 함수를 남용하면 해커가 악용할 가능이 있기에 실무에서는 피하는것이 보안상 안전. 그래도 알아야 하기에 정리.

## 고차 함수 사용하기

- 함수를 호출할 때마다 반환 함수를 생성하는 함수를 `고차 함수`라고 한다.

```javascript
const func = () => {
  return () => {
    console.log("hello");
  };
};
```

- 반환된 함수는 다른 변수에 저장할 수 있고, 그 변수에 저장된 함수를 다시 호출할 수 있다.

```javascript
const innerFunc = func();
innerFunc(); // hello
```

- 반환하는 값을 바꾸고 싶을 때는 매개변수를 사용.
- 화살표 함수 문법 사용 return 값 생략 가능.

```javascript
const func = (msg) => {
  return () => {
    console.log(msg);
  };
};

// 화살표 함수 고차 함수
const func = (msg) => () => {
  console.log(msg);
};
```

## if문 중첩 제거하기

- 공통된 절차를 각 분기점 내부에 넣는다
- 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
- 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for 문 내부의 경우)로 중단.
- else를 제거한다.
- 위의 과정을 반복한다.

## Quiz

1. 다음 코드의 console.log 결과를 맞혀 보세여.

```javascript
const hof = (a) => (b) => (c) => {
  return a + b * c;
};
const first = hof(3);
// (b) => (c) => {
//   return 3 + (b * c);
// }
const second = first(4);
// (c) => {
//   return 3 + (4 * c);
// }
const third = second(5);
// 3 + (4 * 5);
console.log(third); // 23
// 코드는 위에서부터 아래로 순차 적으로 실행
```

2. 다음 if 문의 중첩을 줄여보세요.

```javascript
function test() {
  let result = "";
  if (!a) {
    result = "a";
    result += "b";
    return result;
  }
  if (!b) {
    result = "c";
  }
  result += "b";
  return result;
}
```

3. (가) 부분에 어떤 문자열을 넣으면 alert 창이 실행될까요? 단, eval의 실행을 막은 사이트들도 있으므로 calculator.html을 띄운 창의 콘솔에서 실행해야 합니다.

```javascript
const str = 가;
eval("a" + str + 't("eval은 위험해요")');
// const str = ler
```
