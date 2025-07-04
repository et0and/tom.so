export default function NotFound() {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          <h1 className="font-base text-2xl mb-8 tracking-tighter mx-auto">
            Oh no! This page does not exist.
          </h1>
        </div>
      </div>
    </div>
  );
}
