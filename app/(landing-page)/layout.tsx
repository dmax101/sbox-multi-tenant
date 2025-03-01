import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Recursos", href: "/#features" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="StudioBox 101"
        builtByLink="https://sbox101.com/"
        linkedinLink="linkedin.com/company/stack-auth"
      />
    </div>
  );
}
