# Capstone Design - WeatherBomb
### 한국외국어대학교 글로벌 캠퍼스 24년도 종합설계 프로젝트, "GQ"
> **주제** : 위치별 기온, 습도에 따른 병해충 예보 및 예방 웹 앱 서비스
> 
> **배포 서버** : https://hufs-gq.vercel.app/
> <details><summary>날씨 API CORS(에러 발생 시 참고)</summary>https://cors-anywhere.herokuapp.com/corsdemo <br /> 에러 발생 시 위의 사이트에 접속하여 버튼 클릭후 배포 서버에 재접속 해주세요.</details>

### DEMO

|지역, 작물, 날짜 선택|해충 발생 위험도 및 날씨 정보 제공|발생가능 해충 정보&농약 및 대처법 정보 제공|
|:-:|:-:|:-:|
|<img width="300" src="https://github.com/CapstoneDesign24-GQ/.github/assets/118183190/3d36f5a1-3544-46ab-afdf-b9408492418b" />|<img width="300" src="https://github.com/CapstoneDesign24-GQ/.github/assets/118183190/0dc201b4-57c3-44e8-98a5-45388f9bf971" />|<img width="300" src="https://github.com/CapstoneDesign24-GQ/.github/assets/118183190/c71a1c97-7dea-4b71-8859-1af6b3f3663b" /> |


#### 👥 팀원
- **유지희** : 팀장 | FE / 디자인
- **김현아** : 팀원 | FE 
- **김예경** : 팀원 | DATA 
- **양혜인** : 팀원 | BE

#### 📦 기술스택
###### 👩‍💻 Front-End
&nbsp; <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white">
###### 💿 Back-End
&nbsp; <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=Django&logoColor=white">
###### ⚙️ Development Tools
&nbsp; <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Notion-000?style=flat&logo=notion&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white">



## 개발 환경 세팅

- Node.js 18+를 설치합니다.
- 터미널을 열고 `npm install`을 입력하여 패키지를 모두 설치합니다.
- `npm run start` 명령어로 개발 서버를 실행합니다.

## Commit Convention

커밋 요약은 "(type): (content)" 형식으로 작성합니다.

type은 영어 소문자로 작성하며, content는 한국어로 명확하게 작성합니다. 요약이 너무 길어지면 세부적인 내용은 커밋 설명에 풀어적고 요약은 간결하게 수정합니다. (이모지는 선택사항)

| 이모지 | 깃모지 사용        | 타입     | 상황                                                  |
| ------ | ------------------ | -------- | ----------------------------------------------------- |
| 🎨     | : art :            | design   | CSS 등 사용자 UI 디자인 변경                          |
| 💄     | : lipstick :       | style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| ✨     | : sparkles :       | feat     | 새로운 기능 추가, 구현                                |
| 💬     | : speech_balloon : | chore    | 텍스트 또는 리터럴 추가 및 수정                       |
| 📝     | : memo :           | docs     | 문서 파일 추가 및 수정 (readme)                       |
| ✏️     | : pencil2 :        | chore    | 단순 오타 수정                                        |
| 🐛     | : bug :            | fix      | 버그 수정                                             |
| 🚚     | : truck :          | docs     | 파일, 경로, route를 옮기거나 이름 변경                |
| ♻️     | : recycle :        | refactor | 코드 리팩토링                                         |
| 🔥     | : fire :           | remove   | 삭제 (파일, 코드)                                     |
| 🚚     | : truck :          | rename   | 파일, 폴더명 수정                                     |
| 💡     | : bulb :           | comment  | 필요한 주석 추가 및 변경                              |

## PR Convention

PR 제목은 커밋 요약과 동일하게 "(type): (content)" 형식으로 작성하며, 내용은 다음을 포함하여 작성합니다.

### Changes 📝

이 PR에서 작업한 사항을 적어주세요.

### Issues 🚩

이 PR과 연관된 Issue를 작성해주세요. 해당 PR이 Issue를 해결한다면 Issue도 꼭 닫아주세요!

### Screenshot 📷 (선택)

작업한 사항을 스크린샷으로 찍을 수 있다면 (예: 신규 페이지 구현, 새로운 컴포넌트 구현) 스크린샷을 찍어서 올려주세요. 반드시 올릴 필요는 없습니다!
