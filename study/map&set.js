// new Map() map을 만든다.
// map.set(key, value) - key를 이용해 value를 저장
// map.get(key) - key를 이용해 해당하는 값을 반환, key가 존재하지 않으면 undefined를 반환
// map.has(key) - key가 존재하면 true, 존재하지 않으면 false 반환
// map.delete(key) - key에 해당하는 값을 삭제
// map.clear() - map안에 모든 요소를 제거
// map.size - 요소의 개수를 반환

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "boo1");

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.size);

let john = { name: "John" };
let visitCountMap = new Map();

// 객체를 key로 사용할 수 있다는 점이 map의 가장 중요한 기능 중 하나이다.
visitCountMap.set(john, 123);
console.log(visitCountMap.get(john), "john");
