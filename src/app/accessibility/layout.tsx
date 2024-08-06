export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          {children}
        </div>
      </div>
    </div>
  );
}
