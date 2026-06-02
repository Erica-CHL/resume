type InfoSectionProps = {
  title: string;
  content?: string;
  items?: string[];
};

export function InfoSection({ title, content, items }: InfoSectionProps) {
  return (
    <section className="glass-panel rounded-lg p-5">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {content ? <p className="mt-3 text-sm leading-7 text-slate-300">{content}</p> : null}
      {items ? (
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
