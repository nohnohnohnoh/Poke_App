## This

- `this`는 **window**다, 상위 스코프에서의 this 변수를 참조한다.
- `this`는 **해당 함수 호출 방식에 따라 this에 바인딩 되는 객체가 달라진다.**
- 화살표 함수에서의 `this`는 **선언될 시점에서의 상위 스코프**가 this로 바인딩 된다.

### 함수 호출 방식

#### 1. 함수 호출

- 일반 함수 호출에서의 this는 전역 객체에 바인딩 된다.

```javascript
function This() {
  console.log(this); // window {}
  // this는 기본적으로 window다.
}
```

#### 2. 메소드 호출

- `메소드` : 객체의 값이 함수로 이루어 진 경우

```javascript
let Test = {
  name: "noh",
  testName: function () {
    console.log(this.name);
  },
};
Test.testName(); // noh

let Test = {
  name: "noh",
  testName() {
    // 이렇게 function 생략해도 메소드 형식이 실행된다.
    console.log(this.name);
  },
};
Test.testName(); // noh
```

- 메소드 호출에서의 `this`는 해당 메소드를 소유한 객체에 바인딩 된다.

#### 3. apply/call/bind 호출

- `apply` `call` `bind` 메소드를 통해 `this`를 특정 객체에 명시적으로 바인딩이 가능

```javascript
function getTinsBind() {
  return this; // 전역 객체로 바인딩 되므로 window가 나옴.
}

const thisArg = { a: 1 };

console.log(getTinsBind.apply(thisArg));
console.log(getTinsBind.apply(thisArg));

const Person = function (name) {
  this.name = name;
};
const foo = {};

Person.apply(foo, ["noh"]);
console.log(foo); // { name: 'noh' }
```

- `apply` `call`을 통해 생성자 함수 getTinsBind, Person 내부의 this에 객체를 바인딩 시켰다.

```javascript
function getTinsBind() {
  return this; // 전역 객체로 바인딩 되므로 window가 나옴.
}

// this로 사용할 객체
const thisArg = { a: 1 };

// bind 메서드는 첫 번재 인수로 전달한 thisArg로 this 바인딩이 교체됨.
// getTinsBind 함수를 새롭게 생성해 반환.
console.log(getTinsBind.bind(thisArg)); // getTinsBind
// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getTinsBind.bind(thisArg)()); // { a : 1}
```

#### 4. 생성자 함수 호출

- `생성자 함수`는 객체를 생성하는 역할을 한다. 생성자 함수의 동작 과정을 3가지로 요약하자면

* 빈 객체 생성 및 this 바인딩 생성자 함수가 실행되기 전, 빈 객체가 생성되고 이는 this로 바인딩 된다.
* this를 통한 프로퍼티 생성
* 생성된 객체 반환.

```javascript
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
console.log(circle1);
// Circle {
//   radius: 5,
//   getDiameter: ƒ (),
//   __proto__: { constructor: ƒ Circle() }
// }
console.log(circle1.getDiameter()); // 10
```

- `결론` : 함수의 인자로 전달 받은 값을 객체의 속성에 할당하기 위해 this 키워드를 사용.

### 화살표 함수에서의 this

- 화살표 함수에는 this라는 변수 자체가 존재하지 않기 때문에 그 상위 환경에서의 this를 참조하게 된다. **즉, 선언될 시점에서의 상위 스코프가 `this`로 바인딩 된다.**

```javascript
// addEventListener

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log(this); // Window
  this.innerHTML = "clicked";
}); // 화살표함수는 속한 객체에 상위 스코프 즉, 상위 환경에서 this 참조 속한 객체는 button이고
// 그 상위 환경은 전역이다 그래서 window

button.addEventListener("click", function () {
  console.log(this); // button 엘리먼트
  this.innerHTML = "clicked";
}); // function은 속한 객체에서 this를 바인딩 그래서 button이다.

// 객체 메소드의 function에서의 this 바인딩에서는 자신이 속한 객체에서 this를 참조한다.
// 아래 예제에서는 this.name을 참조할게 없다.
const cat = {
  name: "meow",
  foo1: function () {
    const foo2 = function () {
      console.log(this.name);
    };
    foo2();
  },
};

cat.foo1(); // undefined

// 화살표 함수에서 this는 존재 하지않는다. 그냥 상위 환경에서의 this를 참조한다.
// 위로 거슬러 올라가보니 name이 보였고 this로 참조할 수 있는 변수가 있으니 meow가 나왔다.
const cat = {
  name: "meow",
  foo1: function () {
    const foo2 = () => {
      console.log(this.name);
    };
    foo2();
  },
};

cat.foo1(); // meow
```
