import FeaturedProducts from "@/app/product/component/FeaturedProducts";
import AppFooter from "@/module/shared/component/AppFooter";
import AppHero from "@/module/shared/component/AppHero";

export default function Home() {
  return (
    <main>
      <AppHero />
      <FeaturedProducts />
      <AppFooter />
    </main>
  );
}
