// 첫 글자를 대문자로 변경하기
// ucFirst('john') == 'John';을 충족시켜보기

// 스팸 문자열 걸러내기
// 대소문자 상관없이 str에 'viagra', 'XXX' 라는 문자열이 있으면 true를 반환해주는 함수를 만들어 보기
// 해당 문자열이 없으면 false를 반환하면 됩니다.

function ckSpam(str) {
  let lowStr = str.toLowerCase();
  return lowStr.includes("viagra") || lowStr.includes("xxx");
}

console.log(ckSpam("Buy Viagra"));
console.log(ckSpam("free XXXXXX"));
console.log(ckSpam("innocent rabbit"));

// 문자열 줄이기
// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str 끝을 생략 부호 ('...')로 대체 하는 함수 만들어 보기
// 예시:
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
// truncate("Hi everyone!", 20) = "Hi everyone!"

// 숫자만 추출하기
// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 '$120'가 있다고 가정해 봅시다.
// 위와 같이 문자열에서 숫자만 뽑아내는 함수를 작성해 봅시다.
// 예시:
// alert( extractCurrencyValue('$120') === 120 ); // true
