export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full border flex flex-col lg:flex-row">
      <div className="flex-[0.5] p-4">
        <div className="p-4 bg-blue-400 h-full rounded-lg">
          <div className="p-4 bg-blue-500 h-full">hii</div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
