// 아래 코드를 실행하면 어떤 결과가 나올까요?
let fruits = ["apple", "pear", "orange"];
let shoppingCart = fruits;
shoppingCart.push("banana");

console.log(shoppingCart, "shoppingCart");

// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
// 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
styles[Math.floor(styles.length - 1) / 2] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles, "styles");

// 입력한 숫자의 합 구하기

// 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 배열 요소의 합을 계산하고 리턴합니다.
// 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.

let a = parseInt(prompt());
let b = parseInt(prompt());
let c = [];

function sumInput(a, b) {
  c.push(a, b);
  console.log(c, "c");
  console.log(typeof c[0]);
  console.log(typeof c[1]);
  console.log(`a + b = ${c[0] + c[1]}`);
}

sumInput(a, b);
