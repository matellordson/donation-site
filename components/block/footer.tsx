export default function Footer({ className }: { className: string }) {
  return (
    <footer
      className={`max-w-mx-auto mx-auto w-full max-w-sm lg:max-w-6xl ${className}`}
    >
      <div className="h-20 w-full bg-primary"></div>
    </footer>
  );
}
