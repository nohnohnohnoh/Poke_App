// class로 묶을때는 비슷한 기능을 하는 코드끼리 묶는게 좋다.
// class에서 메서드로 묶는 이유 중복이 발생하는 객체 생성이면 메서드로 뺀다. 클래스에서 메서드 생성은 재사용 가능하기 때문 대신 공장함수의 메서드는 계속 중복생성되서 비효율적.

- 간단한 객체는 JSON.parse(JSON.stringify(객체))를 사용해도 크게 문제가 없다. 다만, 성능도 느리고 함수나 Math,Date 같은 객체를 복사할 수 없다는 단점이 있다. 따라서 실무에는 lodash 같은 라이브러리를 사용하곤 한다.

# rpg(알피지)

## window

- window 객체는 브라우저를 가리키는 객체로, 브라우저가 제공하는 기본 객체와 함수들은 대부분 window 객체안에 들어 있다. document 객체나 console 객체도 실제로는 window.document, window.console인데, window를 생략하고 document와 console만 적는다.

## this

- `this`는 상황에 따라 다른 값을 가진다. **기본적으로 `this`는 window 객체**를 가리키므로 어떤 때에 어떤 값을 가지는지 외우면 된다.

* 객체를 통해 `this`를 사용할 때는 `this`가 해당 객체를 가리키게 된다.
* 특정 메서드는 콜백 함수의 `this`를 바꾼다. addEventListener가 대표적이다.
* `this`가 바뀌는 것을 원치 않는다면 함수 선언문 대신 화살표 함수를 사용한다. 화살표 함수는 기본적으로 가장 상위 스코프에 this 값을 따르고 가장 큰 상위 스코프는 this는 window다.

## 참조, 깊은복사, 얕은 복사

- `복사`는 어떤 값을 다른 변수에 대입할 때 기존 값과 참조 관계가 끊기는 것을 의미.
- 객체가 아닌 값은 애초부터 참조 관계가 없으므로 그냥 복사 **즉, 원시값들은 얕은 복사해도 깊은 복사를 한것과 같음.**
- `얕은 복사`는 중첩 객체가 있을 때 가장 바깥 객체만 복사 **내부 객체는 그대로 참조 관계를 유지 하는 복사** ex. spread 문법 `{...객체}` , `[...배열]`
- `깊은 복사`는 내부 객체까지 참조 관계가 끊겨서 완벽한 복사가 되는 것을 의미. ex. `JSON.parse(JSON.stringify(값))`

```javascript
const array = [{ j: "k" }, { l: "m" }];
const reference = array; // 참조 , 얕은 복사
const shallowCopy = [...array]; // 얕은 복사
const deepCopy = JSON.parse(JSON.stringify(array)); // 깊은 복사
console.log(array === reference); // true
console.log(array[0] === reference[0]); // true
console.log(array === shallowCopy); // false
console.log(array[0] === shallowCopy[0]); // true
console.log(array === deepCopy); // false
console.log(array[0] === deepCopy[0]); // false
```

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

## 클래스

- **객체를 생성하는 템플릿 문법** `class` 예약어로 클래스를 선언하고 `constructor` 메서드 안에 기존 코드를 넣고 `new` 연산자를 붙여 `constructor` 함수가 실행되고 객체가 반환. 이때, `this`는 생성된 객체 자신을 가리키게 된다.

## 클래스 상속

- 클래스끼리 `extends` 예약어로 상속할 수 있다. 상속하는 클래스는 부모 클래스가 되고, 상속 받는 클래스는 자식 클래스가 되낟 공통되는 속성이나 메서드는 따로 빼 부모 클래스부터 상속받는다. 이러한 과정은 중복된 코드를 줄여주어 코드이 가독성을 높인다.

```javascript
class Hero extends Unit {
  constructor(game, name) {
    super(game, name, 100, 10, 0); // 부모 클래스의 생성자 호출
    this.lev = 1; // 그 외 속성
  }
  attack(target) {
    super.attack(target); // 부모 클래스의 attack
    // 자식 클래스만의 동작
  }
}
```

### Math.min()

- Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.

```javascript
var x = 10,
  y = -20;
var z = Math.min(x, y); // -20;
```

- 자식 클래스에서 `super`함수는 부모 클래스를 의마하며 부모 클래스의 생성자에 인수를 전달.
- 공통되는 속성은 부모 클래스의 것을 사용하고, 공통되지 않는 속성은 자식 클래스에 따로 선언한다.
- 메서드에서도 `super`를 사용할 수 있고, 자식 클래스에서 super.메서드를 호출하는 것은 부모 클래스의 메서드를 호출하는 것과 같다.
- 부모 클래스의 메서드를 호출한 후 다른 작업을 할 수 있고, 자식 클래스에 메서드를 생성하지 않은 경우에도 부모 클래스에 메서드가 존재한다면 호출할 수 있다.

### Quiz

- 1. 다음 다섯 개의 값을 각각 복사해 보세요. 여기서 복사라고 함은 복사본을 수정할 때 원본이 바뀌지 않는 것을 의미한다. 객체라면 복사한 객체 내부의 값을 바꿔도 원본 객체의 값이 바뀌지 않아야 합니다.

```javascript
const a = "b";
const c = ["d", true, 1];
const e = { g: "h" };
const i = [{ j: "k" }, { l: "m" }];
const n = { o: { p: "q" } };

const copyA = a; // 원시값 참조값이 없기때문 얕은 복사를 해도 완전히 복사가 됨.
const copyC = c.slice(); // 배열안에 요소들이 전부 원시 값 얕은 복사 해도 완전히 복사가 됨.
const copyE = { ...e }; // 객체안에 프로퍼티가 전부 원시 값 얕은 복사 해도 완전히 복사가 됨.
const copyI = JSON.parse(JSON.stringify(i)); // 객체안에 프로퍼티 값이 전부 객체 참조값을 복사하게 되는 것이기 때문에 새로운 객체를 반환해줘야 함. JSON.parse이용한 깊은 복사
const copyN = JSON.parse(JSON.stringify(n)); // 객체안에 프로퍼티 값이 전부 객체 참조값을 복사하게 되는 것이기 때문에 새로운 객체를 반환해줘야 함. JSON.parse이용한 깊은 복사
```

- 2. 이 세상에 존재하는 것을 클래스로 만드는 연습을 하면 좋습니다. 사람을 컴퓨터 세상 속에 구현해 봅시다. 사람(Human) 클래스를 만들고, 생성자 메서드에서는 이름과 나이를 속성으로 입력받으세요. 또한, 자신의 이름과 나이를 콘솔에 출력하는 메서드도 두 개 만드세요.

```javascript
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  consoleName() {
    console.log(this.name);
  }
  consoleAge() {
    console.log(this.age);
  }
}

new Human("youngWan", 27); // 생성자 함수는 무조건 대문자로 시작한다.
```

- 3. 퀴즈 2에서 다음과 같이 Human 클래스를 만들었습니다. Human 클래스를 상속하면 조금 더 구체적인 사람을 만들 수 있습니다. HTMl, CSS, JS를 할 줄 아는 개발자를 만들어 보자.

```javascript
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

class DeveloperHuman extends Human {
  constructor(skills) {
    super("노영완", 27);
    this.skills = skills;
  }
  consoleSkills() {
    console.log(`${this.skills.join()}로 코딩해요.`);
  }
}

const developerClass = new DeveloperHuman(["HTML", "CSS", "JS"]);
developerClass.consoleSkills();
```
