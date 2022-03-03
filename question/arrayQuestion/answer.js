// 첫 글자를 대문자로 변경하기

// str이 비어있는 문자열인 경우 undefined가 되는 문제가 발생합니다.
// 그러므로, 빈 문자열인지를 확인하는 코드를 작성합니다.
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john")); // John

// 스팸 문자열 걸러내기

// 대소문자 관계없이 스팸 문자열을 확인하려면 인수로 받은 문자열을 구성하는 문자를 모두 소문자로 바꾼 후 작업을 해야합니다.

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

// 문자열 줄이기

// 생략 부호는 유니코드에 등록된 독립된 글자임에 유의하여 답안을 작성해야 합니다. 점 세 개가 아님에 유의하시기 바랍니다.

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

// 숫자만 추출하기

function extractCurrencyValue(str) {
  return +str.slice(1);
}
