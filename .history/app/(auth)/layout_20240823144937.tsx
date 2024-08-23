export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full border flex">
      <div className="flex-[0.5]">hii</div>

      <div>{children}</div>
    </div>
  );
}
