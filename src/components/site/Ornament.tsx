export function Ornament({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 text-gold">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
      <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-80" aria-hidden>
        <path
          d="M7 0 L8.4 5.6 L14 7 L8.4 8.4 L7 14 L5.6 8.4 L0 7 L5.6 5.6 Z"
          fill="currentColor"
        />
      </svg>
      {label && (
        <span className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium">
          {label}
        </span>
      )}
      <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-80" aria-hidden>
        <path
          d="M7 0 L8.4 5.6 L14 7 L8.4 8.4 L7 14 L5.6 8.4 L0 7 L5.6 5.6 Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
