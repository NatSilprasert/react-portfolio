import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="py-16 px-4 bg-card relative border-t border-border mt-4 flex flex-wrap justify-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nat Silprasert. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer