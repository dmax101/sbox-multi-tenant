import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Logo(props: { className?: string, link?: string }) {

  const { theme } = useTheme();

  const logo = theme === 'dark' ? '/img/svg/logo_ngtv.svg' : '/img/svg/logo.svg';
  
  return (
    <Link href={props.link ?? '/'} className={cn("items-center space-x-2", props.className)}>
      <Image src={logo} alt="SolutionBox101" width={160} height={64} />
    </Link>
  );
}
