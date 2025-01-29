import Image from "next/image";
import Logo from "../../../../public/gs_logo.svg";
import Link from "next/link";

export default function AppHeader() {
  return (
    <>
      <div className="px-60 py-12 bg-zinc-950 flex justify-between items-center">
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
          </ul>
        </nav>
      </div>
    </>
  );
}
