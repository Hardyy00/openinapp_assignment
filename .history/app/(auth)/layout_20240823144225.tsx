export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full full border">
      <div>hii</div>

      <div>{children}</div>
    </div>
  );
}
