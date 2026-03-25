import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            stash<span className="text-accent">.</span>
          </span>
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:stashapplabs@gmail.com"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            stashapplabs@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
