# RN 시작기

- `npx create-expo-app 프로젝트 이름--template blank` JS로 시작
- `npx create-expo-app 프로젝트 이름` TS로 시작

## 카카오톡 친구 목록

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
