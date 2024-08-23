export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full full border flex">
      <div>hii</div>

      <div>{children}</div>
    </div>
  );
}
