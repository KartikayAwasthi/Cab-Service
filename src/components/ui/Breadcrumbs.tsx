import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-charcoal-700/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-charcoal-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-forest-800">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-charcoal-700/40" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
