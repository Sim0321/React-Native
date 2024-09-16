# RN 시작기

- `npx create-expo-app 프로젝트 이름--template blank` JS로 시작
- `npx create-expo-app 프로젝트 이름` TS로 시작

## 프로젝트

<details>
<summary>카카오톡 친구 목록</summary>
<div markdown="1">
<img src="https://github.com/user-attachments/assets/e6079446-f05c-4caf-957d-610eaab35d4b"  width="200" height="400"/>

### 노치 영역

- 아이폰 X부터 생긴 화면 상하단의 영역을 노치라 부르며, 노치 영역 부터 렌더링
- 대처 방법
  1. 최상단 컴포넌트를 SafeAreaView 사용(안드로이드,아이폰)
  2. 라이브러리 사용()
     - `react-native-iphone-x-helper`(2022년 11월 부터 아카이빙 됨)
     - 대체 라이브러리 : `react-native-safe-area-context`

### 아이콘

- https://icons.expo.fyi/Index

### ScrollView vs FlatList

- ScrollView 역할 : 데이터가 단순히 화면에 벗어났을 때 스크롤을 생성해서 스와이프를 통해 벗어난 부분을 보여줄 수 있게 해주는데에 목적이 있음. 따라서 데이터의 양이 많지 않고 고정적일 때 사용(그러므로 friendList에 사용하기엔 적절하지 않음)
- FlatList : 한 번에 모든 데이터 대신에 화면에 보여지는 부분만을 렌더링 하기 때문에 스크롤 뷰에 비해 압도적인 성능을 보여줌.

### 스타일

- inline : 만약 서비스가 커지면 inline은 최적화 측면에서는 좋지 않음. 이유는 렌더링 될 때마다 새로운 object가 할당되기 때문
- StyleSheet : 어떤 스타일인지 또 한번 들어가봐야 하는 단점 있음
- Styled Component : 네이밍을 직접할 수 있으므로 StyleSheet보다 직관적

</div>
</details>

<details>
<summary>계산기</summary>
<div markdown="1">

### UI

- 직관적이게 하기 위해 flex로 행을 나눈 뒤, 위에서 아래로 UI 그리기
- 7 ~ 9, 4 ~ 6, 1 ~ 3 부분은 같은 로직이라 배열 생성 후 map함수로 로직단축

### TextView 글자 수에 따라 글자 크기 줄이기

- `adjustsFontSizeToFit` 사용,
- `numberOfLines` 속성 이용해 한 줄로
- `minimumFontScale` 이용해 최소 크기 지정

### UI와 로직 분리

- custom hook으로 UI와 로직 분리

</div>
</details>
