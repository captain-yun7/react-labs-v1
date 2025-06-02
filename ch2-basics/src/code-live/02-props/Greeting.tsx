import styles from "./Greeting.module.css";
// interface User {
//   name: string;
// }
type User = { name: string; age?: number };

// props = 객체
export default function Greeting({ name, age }: User) {
  // 조건부 렌더링
  return (
    <p className={styles.hello}>
      안녕하세요, {name}
      {age !== undefined && `(${age})`}님!
    </p>
  );
}

// (1) if 문
//   if (!age) {
//     return <p>안녕하세요, {name}님!</p>;
//   } else {
//     return (
//       <p>
//         안녕하세요, {name}({age})님!
//       </p>
//     );
//   }

// (2) 삼항 연산자
//   return (
//     <p>
//       안녕하세요, {name}
//       {age !== undefined ? `(${age})` : ""}님!
//     </p>
//   );

// (3) && 연산자 (AND)
//   true && true -> true
//   false && (???) -> false
//   return (
//     <p>
//       안녕하세요, {name}
//       {age !== undefined && `(${age})`}님!
//     </p>
//   );
