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
  ![img]()

### 잘 만들어진 컴포넌트란?

- 컴포넌트를 만드는 이유는 바로 재사용성 때문임
- 컴포넌트화 하지 않고 만들다 보면 너무 많은 코드 양으로 유지보수 난이도 증가
- 너무 잦은 컴포넌트화는 예상하지 못한 변경점이 생겨 버그로 이어짐

#### Atomic design pattern이란?

- 작은 단위부터 큰 단위까지의 컴포넌트를 조합해 만들어가는 것
  <img src="https://github.com/user-attachments/assets/e6f4fc5e-6585-4a13-8bc1-7d2124926a99"  width="400" height="200"/>

#### Dumb Component vs Smart Component

- Dumb Component : **보여주는 일**에만 집중
  - state를 따로 가지고 있지 않고 props를 통해 어떻게 보여질지만 보여지는 컴포넌트
- Smart component : 상태를 가지고 **스스로 변함**
  - 스스로 state를 가지고 계산하는 것 (드롭다운 등)

#### 컴포넌트를 재사용 언제 만드는지에 대한 기준

- 제일 작은 단위는 우선적으로 컴포넌트로 만들어 재사용
- Molecules이상의 단계들 중에서 3회 이상 반복되면 컴포넌트로 만듦 등

### hook에 대해서

- react 16.8 버전에서 탄생
- functional component에서도 state와 기타 다른 사이트 이펙트를 다루기 위해 탄생 됨
- functional component
  - hook 탄생 이전에는 state를 가질 수가 없었기 때문에 주로 dumb component로만 활용, hook의 등장으로 주목받기 시작함

#### 왜 hook을 만들었는가?

1. 컴포넌트간 상태 관련 로직 재사용이 어려움
   - 매번 같은 상태 관리 로직을 Copy & Paste
   - 공통화 되지 않다보니 컴포넌트 마다 변경사항을 수정해야 하는 어려움
2. 컴포넌트가 커질수록 복잡해지는 로직
   - componentDidmount에서 너무 많은 일을 하게 됨
   - ex: 컴포넌트 마운트시 api 호출 및 event listener를 subscribe 단일 원칙(SRP)에서 벗어나게 되어 버그가 쉽게 발생(클린 아키텍처)
3. 혼라을 주는 class
   - class this 키워드에서 오는 좋지 못한 경험

#### hook 사용의 규칙

1. 모든 hook을 사용할 때 함수의 최상단에서 호출해야만 함

|                       | class 컴포넌트의 동작         | functional 컴포넌트의 동작(렌더링 = 함수호출) |
| --------------------- | ----------------------------- | --------------------------------------------- |
| component 생성 시     | Class 생성하여 instance 생성  | function 호출                                 |
| component 최초 렌더시 | Class 내부 render method 호출 | function 호출                                 |
| component 업데이트시  | Class 내부 render method 호출 | function 호출                                 |

2. React 함수에서만 hook을 사용해야 함

- 순수함수 같은 곳에서 사용하면 에러

#### 자주 사용하는 훅

1. useScreenSize
2. useBackHandler(안드로이드를 위한) npm install @react-native-community/hooks
3. useAppState npm install @react-native-community/hooks
4. useNavigation, useRoute
5. uselsFocused, useFocusEffect
6. useScrollToTop
7. useMount(컴포넌트가 mount된 시점에 callback 호출)
8. usePrevious (state의 이전 값을 알아내고자 할 때 사용)

#### Memoization

- functional component는 render가 함수 호출이다
- 함수 호출을 하며 생긴 함수 내부의 변수, 함수 등은 모두 호출 될 때마다 새로 할당하게 됨
- 즉, Memoization이란 수행했던 연산 결과들을 어딘가 저장한 뒤 동일한 입력값인 경우 재활용 하는 것

1. useMemo (기억할 값을 리턴해주는 함수, dependency array)
2. useCallback (기억할 함수를 리턴해주는 함수, dependency array)

### Redux middleware

- store.dispatch 함수의 실행 뒤 어떠한 작업을 하기 위해 호출

1. redux logger
2. thunk(특정 작업을 나중에 하기 위해서 만들어둔 함수)
   - redux-thunk : 비동기 작업을 처리할 때 가장 많이 사용하는 middleware. 객체 대신 함수를 Dispatch 할 수 있게 해주는 것
3. redux-saga : action의 발생여부를 모니터링 하다가 그 뒤 작업을 진행 하도록 함(제너레이터)

- |       | redux thunk                                 | redux saga                                                                            |
  | ----- | ------------------------------------------- | ------------------------------------------------------------------------------------- |
  | props | 낮은 Boilerplate, 이해하기 쉬운 코드        | 초기에 구현해야 할 Boilerplate가 많음 , 순수함수로 작성되기 때문에 테스트 적용이 쉬움 |
  | cons  | 잘못 다뤄지면 수 없이 많은 콜백 지옥에 빠짐 | 높은 러닝커브(ES6 제너레이터)                                                         |

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
<img src="https://github.com/user-attachments/assets/6df7f50b-0107-4f65-a441-9762694986d9"  width="200" height="400"/>

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

<img src="https://github.com/user-attachments/assets/46c8c6ae-e816-4530-a460-b5af197dbc36"  width="200" height="400"/>

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

<img src="https://github.com/user-attachments/assets/9e0b408b-aecd-45c4-904d-bdd81a48c5e9"  width="200" height="400"/>

### 내장 갤러리

- `expo-image-picker`를 이용한 갤러리

</div>
</details>

<details>
<summary>버스 앱</summary>
<div markdown="5">

<img src="https://github.com/user-attachments/assets/d238a154-ab92-40a8-8e62-e9abd34dfefd"  width="200" height="400"/>

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

<img src="https://github.com/user-attachments/assets/36050a6b-9de1-4cbe-b6fb-eab0000a4813"  width="200" height="400"/>

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

<details>
<summary>핸드폰 배경화면 다운 앱</summary>
<div markdown="7">

<!-- <img src="https://github.com/user-attachments/assets/36050a6b-9de1-4cbe-b6fb-eab0000a4813"  width="200" height="400"/> -->

### UI

- react-navigation/native를 이용해 최상단은 StackNavigator로, bottomTab은 BottomTabNavigator로 구현

### 파일 다운로드

- expo의 file system을 이용해 다운로드
- `FileSystem.createDownloadResumable`과 `downloadAsync`를 이용해 `file:///var/mobile/Containers/Data/Application/26B31479-C1B1-4D09-91ED-4D418B2A1D4C/Documents/ExponentExperienceData/@anonymous/phone-wallpaper-03204172-9059-4918-9ac3-ec83a08ec379/49.jpg` 이 곳에 저장을 시킴

- media-library를 이용해 권한을 부여받은 후 나의 휴대폰 앨범에 저장
- onPressIn과 onPressOut을 이용해 DetailImageList에 진입 시 애니메이션 추가

  </div>
    </details>
