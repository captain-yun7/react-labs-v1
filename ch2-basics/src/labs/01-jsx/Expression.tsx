export default function Expression() {
  const a = 5;
  const b = 3;
  function add(x: number, y: number): number {
    return x + y;
  }
  return (
    <>
      <h2>a : {a}</h2>
      <h2>b : {b}</h2>
      <h2>a + b = {a + b}</h2>
      <h2>add(a, b) = {add(a, b)}</h2>
    </>
  );
}
