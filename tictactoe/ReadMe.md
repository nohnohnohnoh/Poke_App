버튼을 클릭할 때 'hello, event bubbling'을 alert 하게 다음 코드를 수정하세요. 단, 이벤트 리스너를 button 태그에 달아서는 안 됩니다.

<header> 
  <div> 
    <button>클릭</button> 
  </div> 
</header> 
<script> 
</script>

- 배열 구조 분해 할당화 공부.

const obj = {
a: 'hello',
b: {
c: 'hi',
d: { e: 'wow'},
},
};

```javascript
// 만약 a , b, e를 선택하게끔 구조분해할당화 하여 변수 지정하면
const { a, b } = obj;
const {
  d: { e },
} = b;
```

// 이벤트 버블링. <div>와 <button>을 이용해서 이벤트 버블링 설명
