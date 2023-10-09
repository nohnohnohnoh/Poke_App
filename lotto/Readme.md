# Lotto(공 정렬하기)

## sort

배열을 정렬하는 메서드.

```javascript
array.sort(비교함수); // 기본 형식
```

```javascript
(a, b) => 반환값;
// 반환값이 0보다 크면 b,a 순으로 정렬되고, 0보다 작으면 a,b 순으로 정렬

array = [2, 34, 53, 17];
console.log(array.sort((a, b) => a - b)); // [ 2, 17, 34, 53 ]
console.log(array.sort((a, b) => b - a)); // [ 53, 34, 17, 2 ]
```

## setTimeout

- 지정한 시간(밀리초)뒤에 지정한 작업을 수행하는 타이머.

```javascript
setTimeout(() => {
  // 내용
}, 밀리초);
```

- 주의! setTimeout 첫 번재 인자에 함수가 와야한다. 함수 선언식이 오면 안된다.

## tag.style.css

```javascript
$ball.style.backgroundColor = "red";
// ball에 해당하는 태그에 backgroundColor를 변경할 수 있다.
```

## Quiz

1. while 문 대신 for 문으로 만들어 보고, 어느 때 while 문이 좋고, 어느 때 for 문이 좋은지 느껴 보세요. 단, for 문에서 사용하는 변수 i의 시작 값이 candidate.length가 되게 해 보세요.

```javascript
for (let i = candidate.length; i > 0; ) {
  const random = Math.floor(Math.random() * i);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

// 조건이 간다하면 while문이 편하고 조건이 복잡하면 for 문이 편하다.
```

2. 3.5초 뒤에 다음 func 함수를 실행되게 해 보세요.

```javascript
function func() {
  console.log("hello");
}

setTimeout(func, 3500);
```
