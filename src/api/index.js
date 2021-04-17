import axios from "axios"; // package.json의 dependencies에 추가된 의존성 라이브러리를 import

/**
 * HTTP Request & Response와 관련된 기본 설정
 * @type {{baseUrl: string}}
 */
const config = {
  baseUrl : 'https://api.hnpwa.com/v0/'
};

/**
 * API 통신 모듈 정의
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchAsksList() {
  return axios.get(`${config.baseUrl}ask/1.json`); // ES6의 Template String을 이용한 자바스크립트 변수와 문자열 연결 : `${변수}문자열`
}

/**
 * ES6의 모듈 문법 :
 *  - 특정 파일에서 정의된 함수&변수를 외부에서 사용하게 하려면 export를 이용하여 반출
 *  - 외부에서 참조하기 위해서는 import를 이용하여 export된 모듈에 접근
 * API 통신 모듈 반출
 */
export{
  fetchAsksList
}
