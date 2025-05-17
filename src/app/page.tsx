import Image from "next/image";
import Link from "next/link";
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { Button, Page, Text } from '@geist-ui/core'


//context: penggunaan <a> di dalam <Link> sudah deprecated, gunakan <Link> sebagai pengganti <a>
//ada error saat logo navbar di pencet, "legacyBehavior" digunakan sementara.

export default function Home() {
return (
    <div className="min-h-screen bg-[#FBD9CD]">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between bg-[#F27E68] px-10 py-4">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link href="/">
              <Image src="/Ada-EV.png" alt="Logo Ada-EV" width={108} height={60} priority/>
          </Link>
        </div>

        {/* MENU NAVBAR */}
        <div className="flex space-x-8 text-white font-normal text-lg">
          <Link href="/rekomendasi" className="hover:underline">Rekomendasi</Link>
          <Link href="#mobil-listrik" className="hover:underline">Mobil Listrik</Link>
          
        </div>
      </nav>

      {/* MAINPAGE */}
      <main className="max-w-4xl text-gray-700 mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-6">Selamat datang di Ada-EV</h1>

        <Image
          src="/Ada-EV.png"
          alt="Ada-EV Logo"
          width={320*2}
          height={160*2}
          className="mb-6"
          priority
        />

        <p className="text-2xl font-normal max-w-md text-gray-800">
          Bingung cari mobil listrik? Ada-EV bisa bantu rekomendasiin kamu cari mobil listrik terbaik!
        </p>
      </main>
      
      {/* Placeholder section untuk form rekomendasi */}
      <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-center text-1 font-normal mb-12 text-2xl text-gray-800 ">
            Mobil yang baru ditambahkan
          </h2>

          <div className="flex justify-center px-5 gap-8">
            {/* Placeholder gambar mobil listrik */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-70 h-70 bg-gray-300 flex items-center justify-center rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 16V8a4 4 0 10-8 0v8"
                  />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder section untuk rekomendasi */}
          <section className="flex items-center justify-center gap-8 bg-[#FBD9CD] text-gray-700 py-20">
            <div className="max-w-xs text-center">
              <h2 className="mb-4 font-normal text-2xl">Kami bantu rekomendasikan</h2>
              <p className="mb-6 font-extralight xl">
                Indolore harum vue quam natus quas velit dolore
              </p>
              <Link href="/rekomendasi">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                  Coba Rekomendasi
                </button>
              </Link>
            </div>
            <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md">
              {/* Ganti dengan Image jika sudah ada */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 16V8a4 4 0 10-8 0v8"
                />
              </svg>
            </div>
      </section>
    </div>
  );
}
