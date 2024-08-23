export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full full">
      <div></div>

      <div>{children}</div>
    </div>
  );
}
