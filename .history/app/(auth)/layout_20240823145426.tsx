export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full border flex flex-col lg:flex-row">
      <div className="flex-[0.5] p-4">
        <div></div>
      </div>

      <div>{children}</div>
    </div>
  );
}
