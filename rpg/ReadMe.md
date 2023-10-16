// Json 에 대해서 공부 그리고 form 태그에 대해서

```javascript
// 얕은 복사 : 객체안에 객체는 참조.
// 얕은 복사 array.slice(). spread 문법이 얕은 복사
const a = []; // 참조값 복사 안된다.
const b = "hello"; // 객체가 아닌 원시 값들은 참조가 없기 때문에 에초에 복사가된다.
const c = {}; // 참조값 복사 안된다.

const arr = [a, b, c];
const arr1 = arr; // 객체를 참조했다. 바뀌면 둘 다 바뀐다.

const arr2 = [...arr]; // 얕은 복사 겉 []만 복사 안에 arr는 참조
arr2[1] = "babo"; // "babo"
arr[1]; // "hi" 겉
arr2[0].push(1); // 1 안에 내부 index에 직접 연관지으면 참조값으로 둘 다 바귄다.
arr[0]; // [1]

// 깊은 복사
JSON.parse(JSON.stringify(arr));
// 보통 얕은 복사이면 대부분 해결하지만, 객체안에 객체 배열안에 배열은 깊은 복사.

const c1 = ["d", true, 1];
const c2 = { 1: "d", 2: true, 3: 1 };
// 애초에 원시값이기 때문 복사하려면 그냥 얕은복사를 해도 깊은 복사에 효과를 볼 수 있다.
```

```javascript
// this는 화살표함수 일 때, 제 기능을 못한다.
document.querySelector 가장 큰 부모 window

$('div').on('click', function() {
  console.log(this); // <div>
  const inner = () => {
    console.log('inner', this); // inner <div>
  }
  inner();
});

const a : {
    a : () => {
        console.log("this", this)
    }
}


객체 메서드를 사용해야 지만 this가 b를 가르킨다
```
