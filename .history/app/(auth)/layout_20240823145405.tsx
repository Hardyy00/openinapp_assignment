

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full border flex flex-col lg:flex-row">
      <div className="flex-[0.5]">hii</div>

      <div>{children}</div>
    </div>
  );
}
