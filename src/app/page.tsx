import FeaturedProducts from "@/app/product/component/FeaturedProducts";
import AppHeader from "@/module/shared/component/AppHeader";
import AppHero from "@/module/shared/component/AppHero";

export default function Home() {
  return (
    <main>
      <AppHero />
      <FeaturedProducts />
    </main>
  );
}
