// 컴포넌트를 props로 받는 방법
type CardProps = {
  title: string;
  children: React.ReactNode;
};

// slot 패턴/ 조합형 UI 패턴
export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
