type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-signal">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
