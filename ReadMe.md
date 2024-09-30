# RN 시작기

- `npx create-expo-app 프로젝트 이름--template blank` JS로 시작
- `npx create-expo-app 프로젝트 이름` TS로 시작

## 학습

### React Navigation

> React-Native에서 사용하는 화면 이동을 위한 라이브러리

- Stack, BottomTab, Drawer등 앱 개발시 많이 사용하는 화면 이동에 대해 각 플랫폼 환경에 맞도록 쉽게 변환 해 주도록 되어있음
- 구성 요소
  - Navigator + Screen
    - Navigator : Navigation이 어떤 구조로 되어있는지 나타내는 컴포넌트(Screen의 집합)
    - Screen : 화면을 그리는 컴포넌트
- Stack Navigator : Stack과 동일한 자료 구조로 화면을 그리는 Navigator
  - options(presentation) 
    - card : 오른쪽에서 왼쪽으로 이동하는 애니메이션
    - modal : 아래에서 위로 이동하는 애니메이션
- Drawer Navigator : 슬라이드를 통해 이동한 Screen들을 나타내는 Navigator
- Tab Navigator : 하단에 탭의 형태로 제공
  - options(backBehavior)
  - Android에서 H/W Back Button을 눌렀을 때 어떻게 이동하는지 지정
    - firstRoute : 선언상 제일 처음에 있는 탭으로 이동
    - initialRoute : 최초 지정한 탭으로 이동
    - order : 탭을 선언한 순으로 이동
    - history : 이동한 히스토리 역순으로 이동

- Nesting Navigator
  - Navigator의 Screen을 Component가 아닌 다른 Navigator로 선언하는 것. 주로, Presentation을 다르게 선언하거나, 조건에 따라 Navigator의 분기가 필요할 때 사용 

- 사용시 주의 사항
  1. Navigator는 각자의 History를 가지고 있음
  2. Navigator에서 Screen Param은 전달되지 않음
  3. 상위 Navigator A의 이벤트를 Navigator B에서 받아 볼 수 없음. focus, blur등 필요한 경우 getParent로 찾아서 등록해야 함
  4. Tab, Drawer의 하위 Navigator일 경우 Tab 또는 Drawer에 가려짐 
### React Life Cycle

- constructor -> render -> componentDidMount -> componentWillUnmount

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
<div markdown="2">

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

<details>
<summary>캘린더 투두</summary>
<div markdown="3">

### UI

> - 배경 이미지를 전체적으로 먹이고 싶어 SafeAreaView가 아닌 그냥 View로 했고, FlastList에 statusBar의 높이 값 만큼 paddingTop을 주고 싶은 상황

1. react-native-iphont-x-helper 라이브러리를 이용해 statuBarHeight값을 구해 paddingTop에 주려고 했지만 더 이상은 사용하지 않는 라이브러리이며 테스트 기계가 iphone 15 pro라 height값이 정확하지 않았음
2. react-native-safe-area-context 라이브러리에 있는 ueSafeAreaInsets() 훅을 이용해 사용하려 했지만 SafeAreaProvider보다 먼저 선언이 되어 오류 발생

```js
export default function App() {
  const insets = useSafeAreaInsets()
  console.log(insets)
  ....
  return(
    <SafeAreaProvider>
     기존 코드 ...
    </SafeAreaProvider>
  )
}

```

3. SafeAreProvider 안에서 SafeAreaInsetsContext.Consumer를 이용해 구현

```js
<SafeAreaInsetsContext.Consumer>
  {(insets) => {
    console.log(insets); // {"bottom": 34, "left": 0, "right": 0, "top": 59}
    return (
      <FlatList
        contentContainerStyle={{ paddingTop: insets.top }}
        keyExtractor={(_, index) => `column-${index}`}
        data={columns}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      />
    );
  }}
</SafeAreaInsetsContext.Consumer>
```

> - TextInput이 하단에 위치하는데 keyboard가 올라오면서 TextInput이 덮여지는 형상

1. KeyboardAvoidingView로 해결
2. keybord가 올라온 후 날짜를 누르면 키보드가 내려가지만 여백을 누르면 내려가지지 않아 최상단 컴포넌트를 Pressable로 수정 후 누르면 이벤트를 삭제하는 방식으로 수정

</div>
</details>

<details>
<summary>나의 이미지 갤러리</summary>
<div markdown="4">

### 내장 갤러리

- `expo-image-picker`를 이용한 갤러리

</div>
</details>

<details>
<summary>버스 앱</summary>
<div markdown="5">

### 버스 앱

- FlatList VS SectionList

  - SectionList는 sections라는 prop을 받아야함, FlatList는 그냥 data를 받으면 됨.
  - SectionList는 renderSectionHeader를 prop으로 받음

- refreshControl
  - FlatList, ScrollView 등 스크롤이 가능한 곳에서 스크롤Y가 0미만으로 되면 실행되는 이벤트

</div>
</details>

<details>
<summary>번역 포춘쿠키</summary>
<div markdown="6">

### 번역기

- expo-localization
  - 기기에 설정된 첫번째 언어를 가져오게 해주는 것
  - 현지화(로케일) 지원
- i18n-js

  - 다국어 지원

- splash-screen

  - splash img를 컨트롤할 수 있게 해주는 것
  - 만약 통신하는 무언가가 있다고 가정했을 때 통신이
    다 끝나고 splashScreen을 끄면 앱이 오히려 더 느리다는 인상을 줌
  - 그러므로 splashScreen은 필수적인 요소가 다 준비되면 얼른 닫고, 그 다음에 로딩되는 데이터가 있으면 추가적으로 로딩화면을 보여주는게 더 이상적

- Lottie
  - 로딩화면을 띄워주기 위해
  - 보통 움직이는 애니메이션을 표현하려면 GIF 사용, 그러나 길이별로 해상도에 따라서 대응하기 때문에 파일이 무거워진다.
  - Lottie는 애니메이션을 코드로 변환해주기 때문에 Vector 이미지 처럼 사이즈 변경에 손실이 없는 것이 특징
  </div>
    </details>
