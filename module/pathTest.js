const { O_DIRECT } = require('constants');
const path = require('path');

console.log(__dirname);

// 파라미터 마다 문자열 값을 넣어 주면 그사이에 /을 적용 시켜서 경로를 조합해준다.
const pathTest = path.resolve(__dirname, 'abc');
console.log(pathTest);