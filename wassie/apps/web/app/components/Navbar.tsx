import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/wassie.png" alt="Wassie" width={40} height={40} />
          <span className="font-bold">Wassie World</span>
        </Link>

        <nav className="space-x-4">
          <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">Explore</Link>
          <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">Docs</Link>
          <Link href="#" className="text-sm text-white bg-violet-600 px-3 py-1 rounded-md">Play</Link>
        </nav>
      </div>
    </header>
  )
}
