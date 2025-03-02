import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import 'animate.css/animate.min.css';

export function Logo(props: { className?: string, link?: string }) {
    const { resolvedTheme } = useTheme();
    const lightLogo = '/img/svg/logo.svg';
    const darkLogo = '/img/svg/logo_ngtv.svg';

    const logo = resolvedTheme === 'dark' ? darkLogo : lightLogo;

    return (
        <Link href={props.link ?? '/'} className={cn("items-center space-x-2", props.className)}>
            {resolvedTheme && (
                <Image
                    src={logo}
                    alt="SolutionBox101"
                    width={160}
                    height={64}
                    className="animate__animated animate__fadeIn delay-2s"
                    placeholder="blur"
                    blurDataURL={lightLogo} // caminho para a imagem de placeholder
                />
            )}
        </Link>
    );
}