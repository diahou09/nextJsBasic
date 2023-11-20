import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Template } from "@/components/template";

export default function Page() {
  return (
    <>
      <Header />
      <div className="space-y-4">
        <Content name="Haha" age={17} gender="male" />
        <Content name="Haehe" age={18} gender="female" />
      </div>
      <Footer />
    </>
  );
}
