- classList
- classList 객체를 통해 태그에 붙은 클래스 조작가능. 해당 클래스 존재하는지 확인 contaions 매서드 사용
- JS에서는 class가 아닌 className이다.

```javascript
태그.classList.contains("클래스");
```

```javascript
태그.classList.add("클래스"); // 추가
태그.classList.replace("기존클래스", "수정클래스"); // 수정
태그.classList.remove("클래스"); // 제거
```

- Date
- 현재 시간을 알고 싶을때 사용

```javascript
new Date();
console.log(시간 / 1000 / 60 / 60 / 24);
```

- 시간을 직접 지정하고 싶을 때는 인수로 연, 월, 시, 분, 초를 넣는다.
- 주의! 월은 0부터 시작

```javascript
> new Date(2023, 2, 31);
< Wed Mar 31 2023 00:00:00 GMT+0900 (대한민국 표준시)
> new Date(2023, 2, 31, 18, 30, 5);
< Wed Mar 31 2023 18:30:05 GMT+0900 (대한민국 표준시)
```

- Array.reduce
- reduce는 배열에 있는 반복 메서드의 일종으로 배열의 요소들을 하나의 값을 함침.
- 배열을 객체로 바꿀수 있다.

```javascript
Array.reduce((누적값, 현잿값) => {
  return 새로운누적값;
}, 초깃값);
```

- 함수에서 반환되는 값은 다음 번 누적값이 되고, 마지막으로 반환되는 값이 reduce 메서드의 결과값
- 초깃값을 지정하지 않으면 배열의 첫 번째 요소가 초깃값이 된다.
