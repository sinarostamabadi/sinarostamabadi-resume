type ResumeIconProps = {
  className?: string;
};

export function ResumeIcon({ className = "h-4 w-4" }: ResumeIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m8 10 4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
