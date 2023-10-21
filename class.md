## Class

- JavaScript의 `class`는 객체와 관련이 있다. 객체를 직접 작성하여 정의하고 생성할 수도 있지만, 클래스로 만들어주면 여러 객체를 더 쉽게 만들 수 있다. **클래스는 객체를 생성하기 위한 템플릿**이다.
- `class`를 통해 원하는 구조의 객체 틀을 짜놓고, 비슷한 모양의 객체를 공장처럼 찍어낼 수 있다.

### 사용 이유

- 자바스크립트는 생성자 함수를 조금 더 편하게 쓸 수 있도록 클래스 문법을 도입.
- `class`기반 언어에 익숙한 개발자가 빠르게 적응할 수 있도록 클래스 문법을 도입.

#### 공장 함수

```javascript
function createMonster(name, hp, att, xp) {
  return {
    name,
    hp,
    att,
    xp,
    attack(monster) {
      // 함수 정의에서 function을 생략할 수 있다.
      monster.hp -= this.att;
      this.hp -= monster.att;
    },
    heal(monster) {
      this.hp += 20;
      this.hp -= monster.att;
    },
  };
}
```

- 위의 예제는 가장 간단하게 객체를 반환하는 함수를 만들면 됩니다. 이와 같이 객체를 반환하는 함수를 `공장 함수`라고 한다.
- `공장 함수`는 가장 간단하게 새로운 객체를 반환하는 함수이지만 재사용 되야하는 메서드들을 객체가 생성될 때 마다 새로 생성시킨다는 단점이 있다.

#### 생성자 함수

```javascript
function Monster(name, hp, att, xp) {
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.xp = xp;
}
Monster.prototype.attack = function (monster) {
  monster.hp -= this.att;
  this.hp -= monster.att;
};
Monster.prototype.heal = function (monster) {
  this.hp += 20;
  this.hp -= monster.att;
};

new Monster(); // new를 붙이면 this가 window객체가 아니고 Monster 객체 자신이 된다.
```

- 생성자 함수에 메서드를 추가할때는 prototype이라는 속성 안에 추가해야 한다. prototype 속성안에 추가한 메서드를 **프로토 타입 메서드** 이렇게 하면 attack과 heal 메서드를 재사용한다. 다만 생성자 함수와 프로토 타입의 메서드가 하나로 묶여 있지 않음. 이러한 문제점을 모두 해결한 것이 **`클래스 문법`**.
- 생성자 함수와 메서드가 묶여 있어서 보기에도 편하고 메서드 함수를 매번 재생성해야 하는 문제도 발생하지 않음.

### 클래스

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

new Human("youngWan", 27);
```

- `class` 문법의 장점은 객체의 메서드를 같이 묶을 수 있다. 클래스 내에 정의 함수 `메서드`이다.
- 클래스를 통해 생성된 객체를 인스턴스(instance)라고 부른다.
- `new` 키워드와 소괄호 `()` 클래스 명칭과 적절한 인수를 넣어서 호출할 수 있다. 또한, 클래스 이름은 대문자이다. 생성자 함수가 대문자라는 것을 기억하면 클래스 또한, 당연히 대문자이다.
- `constructor`는 `class`에서 필요한 기초 정보를 세팅하는 곳 객체를 `new`로 생성할 때 가장 먼저 호출 위의 예제에서 `this`는 클래스 객체 Monster를 뜻함.

### class 상속 extends super

- class에서의 중복된 코드를 제거하면서, 복제된 코드에서 확장시킨 클래스를 만들 수 있게 한다.

```javascript
class ParentsUnit {}

class Human extends ParentsUnit {
  // 상속에 상속 extends에 extends가 가능하다 대신 중복 상속은 불가능하다.
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
    super("노영완", 27); // 직접 지정도 가능 혹은 consturcto에 name age 넣어서
    // 기능만 복제 가능.
    this.skills = skills;
  }
  consoleSkills() {
    console.log(`${this.skills.join()}로 코딩해요.`);
  }
  example() {
    super.sayName(); // 이렇게 super를 통해 메서드를 불러올 수 있으며
    // 부모클래스의 메서드 기능을 활용과 동시에 다른 기능 또한 추가 가능
    // 반면 그냥 부모 클래스의 메서드를 사용하고 싶으면 그냥 호출하면 된다.
    console.log("이렇게 추가적인 super의 기능또한 가능");
  }
}

const developerClass = new DeveloperHuman(["HTML", "CSS", "JS"]);
developerClass.consoleSkills();
developerClass.sayName(); // 노영완 부모 클래스의 기능을 가져와 사용가능하게 했다.
```

- `class`내에서 복제된 기능을 따로 뺀다. 그리고 따로 기능을 추가할 수 도 있다.
- 즉, 위의 예제에서 Humna은 부모 클래스이고 DeveloperHuman은 자식 클래스로 상속관계에 있음을 뜻하고 자식에서 부모클래스를 자유롭게 사용 가능하면서 기능 또한, 추가할 수 있다는 이야기이다.
- `super`는 부모 클래스의 값을 상속받고, 추가적으로 자식만의 값을 사용하고 싶을때 사용하는 키워드 이다.
- 앞선 Human 부모 클래스의 값을 상속받아 `super`키워드를 사용해 부모 클래스의 constructor를 호출한다. 그리고 그 값을 사용할 수 있다.
- `super`를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
