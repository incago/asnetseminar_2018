# 내가 앱을 만들어야 한다면?

## 앱을 만드는 방법

- 조건
  - 게임이 아니다
  - iOS 와 Android 양쪽으로 빌드가 가능해야 한다
  - 네이티브 앱이어야 한다

## 후보

- 각 플랫폼(안드로이드, iOS)의 제조사가 제공하는 언어/개발환경을 사용한다.
  - 안드로이드
    - 언어 : JAVA, Kotlin
    - 개발환경 : Android Studio
  - iOS
    - 언어 : Objective C, Swift
    - 개발환경 : Xcode
- 멀티플랫폼 빌드를 지원하는 별도의 언어/개발환경을 사용한다.

  - Xamarin
    - 언어 : C#
    - 개발환경 : Xamarin Studio
    - 장점
      - 마이크로소프트의 개발환경/지원
      - C# 은 참 편리한 언어, 훌륭한 문서화(MSDN)
    - 단점
      - 상대적으로 적은 사용자/강좌
      - Hot Reload 불가
        - https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.- html (React Native 의 Hot Reloading 소개영상)
  - React Native
    - 언어 : Javascript
    - 개발환경 : VS Code, Atom
    - 장점
      - 페이스북의 꾸준한 개발/지원
      - 데스크탑 앱도 개발 가능
      - 자바스크립트, 친근한 언어
      - 많은 강좌/사용자
    - 단점
      - 브릿지 사용으로 인한 애니메이션 퍼포먼스 저하
      - 자바스크립트, 언어에 대한 불편함
        - https://medium.com/@xiaoyunyang/javascript-is-a-loosely-typed-language-meaning-you-dont-have-to-specify-what-type-of-information-137408d54fc7
        - http://bonsaiden.github.io/JavaScript-Garden/ko/#types
        - ligature font
  - Flutter
    - 언어 : Dart
    - 개발환경 : VS Code, Android Studio
    - 장점
      - 플랫폼(Android) 소유자인 구글이 직접 만든 SDK
      - 자바스크립트와 유사한 언어
      - 브릿지를 사용하지 않는 구조로 네이티브 어플과 동일한 퍼포먼스
    - 단점
      - 아직 릴리즈 프리뷰 1 단계
      - React Native 보다 적은 사용자/강좌

- [React Native at Airbnb](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)

- [React Native vs Flutter - Which to Learn?](https://www.youtube.com/watch?v=tSyXb0sHBoE)
