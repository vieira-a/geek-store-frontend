import Image from "next/image";
import Logo from "../../../../public/gs_logo.svg";
import Link from "next/link";

export default function AppFooter() {
  return (
    <div className="px-60 py-12 bg-zinc-950 mt-12">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image alt="Geek Store" width={110} height={14} src={Logo} />
        </Link>
        <nav className="text-slate-100 gap-2">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Produtos</Link>
            </li>
            <li>
              <Link href="/cart">Carrinho</Link>
            </li>
            <li>
              <Link href="/about">Sobre nós</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-6 text-center text-slate-100 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Geek Store. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
