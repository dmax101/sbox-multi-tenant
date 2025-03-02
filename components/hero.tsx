import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  readonly capsuleText: string;
  readonly capsuleLink: string;
  readonly title: string;
  readonly subtitle: string;
  readonly credits?: React.ReactNode;
  readonly primaryCtaText: string;
  readonly primaryCtaLink: string;
  readonly secondaryCtaText?: string;
  readonly secondaryCtaLink?: string;
}) {
  return (
    <section className="space-y-6 py-32 md:py-48 lg:py-52 bg-[url('/img/jpg/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={props.capsuleLink}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          {props.capsuleText}
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl text-white">
          {props.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-white">
          {props.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {props.primaryCtaText}
          </Link>

          {props.secondaryCtaText && props.secondaryCtaLink && (
            <div className="hidden sm:flex gap-4">
              <Link
                href={props.secondaryCtaLink}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                {props.secondaryCtaText}
              </Link>
            </div>
          )}
        </div>

        {props.credits && (
          <p className="text-sm text-muted-foreground mt-4">{props.credits}</p>
        )}
      </div>
    </section>
  );
}
