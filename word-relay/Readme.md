# Word-Relay(끝말잇기 게임)

## 대화 상자 띄우기

- 웹 브라우저에 대화 상자는 다음 세 가지(`prompt`,`alert`,`confirm`)로 띄울 수 있다.

* prompt 대화 상자에 사용자가 입력한 메세지가 문자열 형태로 전달, 입력하지 않고 취소를 누르면 null이 전달.
* alert 단순한 알림창으로, 호출하면 확인을 누르기 전까지 다음 스크립트 실행이 중단 디버깅 용도로 사용할 때는 console.log를 사용.
* confirm 사용자에게 확인을 받을 때 사용. 사용자가 확인을 누르면 true가 전달 취소를 누르면 false가 전달.

```javascript
prompt("사용자에게 표시할 메시지");
alert("사용자에게 표시할 메시지");
confirm("사용자에게 표시할 메시지");
```

## HTML 태그 선택하기

```javascript
document.querySelector("선택자"); // 하나의 태그만 선택 가능.
document.querySelectorAll("선택자"); // 여러개의 태그 선택 가능.
document.querySelector("#아이디"); // <div id> 태그 선택 가능 즉, id가 있는 태그 선택 가능.
document.querySelectorAll(".클래스"); // <div class> 태그 선택 가능 즉, class가 있는 태그 선택 가능.
document.querySelector("선택자 내부선택자 내부선택자..."); // 어떤 태그 안에 들어 있는 다른 태그를 선택 하고 싶을 때 중요한 점은 한 칸을 띄워야 한다.
```

## 태그에 이벤트 달기

```javascript
태그.addEventListener("이벤트 이름", 리스너함수); // 주의! 리스너함수를 기입해야 한다. 리스너 함수 실행식을 기입 하면 안된다.
```

- 입력 태그(`input`, `select`, `textarea`등)가 아닌 일반 태그들의 내부 값을 가져올 때는 value가 아나리 textContent 속성을 사용

```javascript
입력창.focus(); // 입력창을 하이라이트
```

## Quiz

1. 다음 중 함수 설명이 올바른 것을 고르세요.

- prompt 함수는 사용자로부터 값을 전달받는다.(O)
- alert 함수는 사용자의 확인을 요구한다.(confirm 함수는 사용자의 확인을 요구한다.)
- confirm 함수는 사용자에게 경고 메시지를 표시한다.(alert 함수는 사용자에게 경고 메시지를 표시한다.)

2. a 태그 안에 id가 b인 태그 안에 class가 c인 태그를 선택하려면 어떤 선택자를 사용해야 할까요?

```javascript
querySelector(a #b .c)
```

3. 이벤트를 달 때 사용하는 메서드는 무엇인가요?

- addEventListener

4. 세 글자 이상의 단어를 저장하고 있는 word라는 변수가 있을 때 뒤에서 세 번째 글자를 가져오는 코드를 작성하세요.

```javascript
word[word.length - 3];
```

기본적으로 태그 내부의 값을 선택할 때는 textContent를 사용하는 게 맞지만, 입력 태그만 value를 사용합니다. input은 대표적인 입력 태그입니다. 다른 입력 태그로는 select와 textarea가 있습니다.
