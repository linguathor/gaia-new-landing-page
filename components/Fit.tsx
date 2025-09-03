// components/Fit.tsx
export default function Fit({
  title,
  forList,
  notForList
}: {
  title: string;
  forList: string[];
  notForList: string[];
}) {
  return (
    <section aria-labelledby="fit-title" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
        <h2 id="fit-title" className="text-2xl font-bold sm:text-3xl">{title}</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-gray-50 p-6">
            <h3 className="font-semibold text-green-700">Passt</h3>
            <ul className="mt-3 space-y-2">
              {forList.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-800">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-gray-50 p-6">
            <h3 className="font-semibold text-red-700">Passt nicht</h3>
            <ul className="mt-3 space-y-2">
              {notForList.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-800">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
