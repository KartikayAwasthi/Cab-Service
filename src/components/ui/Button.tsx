import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-charcoal-950 hover:bg-gold-400 focus-visible:outline-gold-600",
  secondary:
    "bg-forest-900 text-cream-50 hover:bg-forest-800 focus-visible:outline-forest-700",
  outline:
    "border border-cream-100/40 text-cream-50 hover:bg-cream-50/10 backdrop-blur-sm",
  ghost: "text-forest-900 hover:bg-forest-900/5",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    icon: _icon,
    iconPosition: _iconPosition,
    className: _className,
    children: _children,
    href: _href,
    ...buttonProps
  } = props;
  void _variant;
  void _size;
  void _icon;
  void _iconPosition;
  void _className;
  void _children;
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
