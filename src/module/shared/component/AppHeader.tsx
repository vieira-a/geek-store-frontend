import Image from "next/image";
import Logo from "../../../../public/gs_logo.svg";
import Link from "next/link";

export default function AppHeader() {
  return (
    <>
      <div className="px-60 py-12 bg-zinc-950 flex justify-between items-center">
        <Image alt="Geek Store" width={110} height={14} src={Logo} />
        <nav className="text-slate-100">
          <ul>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
