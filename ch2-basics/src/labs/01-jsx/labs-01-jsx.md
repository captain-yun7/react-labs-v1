# labs-01-jsx.md

## 문제 1. Hello 컴포넌트 만들기

- `Hello.tsx` 파일에 `Hello`라는 이름의 함수형 컴포넌트를 만드세요.
- 이 컴포넌트는 JSX를 이용해 화면에 **“Hello, React!”** 라는 글자를 `<h1>` 태그 안에 렌더링해야 합니다.

---

## 문제 2. 변수와 연산, 함수 결과를 JSX로 출력하기

아래 요구사항을 순서대로 모두 구현하세요.

1. **숫자 변수 선언**

   - 컴포넌트 함수 안에  
     `const a = 5;`  
     `const b = 3;`  
     두 변수를 선언하세요.

2. **함수 선언**

   - `function add(x: number, y: number): number` 형태로  
     두 수를 더하는 함수 `add`를 선언하세요.

3. **JSX 반환**

   - 아래 내용이 화면에 보이게 JSX를 작성하세요.  
     각 값은 **중괄호 `{}`** 안에 변수나 함수 호출 결과로 넣어야 합니다.
   - (각 내용은 `<div>`, `<p>`, `<ul>` 등 자유롭게 감싸도 됩니다.)

   ```
   a = 5
   b = 3
   a + b = 8
   add(a, b) = 8
   ```

4. **예상 출력 결과**

   ```
   a = 5
   b = 3
   a + b = 8
   add(a, b) = 8
   ```
