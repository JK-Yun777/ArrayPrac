// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을
// 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

// 예시)
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


function camelize(str) {
  const spreadStr = [];

  for (let key of str) {
    spreadStr.push(key);
  }

  for (let i = 0; i < spreadStr.length; i++) {
    if (spreadStr[i] === "-") {
      spreadStr[i+1] = spreadStr[i+1].toUpperCase();
      spreadStr.splice(i, 1);
    }
  }

  return spreadStr.join("");
};

