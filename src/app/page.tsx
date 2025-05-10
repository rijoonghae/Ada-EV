import Image from "next/image";
import Link from "next/link";
//import { Button, Stack } from '@geist-ui/components'

//context: penggunaan <a> di dalam <Link> sudah deprecated, gunakan <Link> sebagai pengganti <a>
//ada error saat logo navbar di pencet, "legacyBehavior" digunakan sementara.

export default function Home() {
return (
    <div className="min-h-screen bg-[#FBD9CD]">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between bg-[#F27E68] px-10 py-4">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link href="#home">
              <Image src="/Ada-EV.png" alt="Logo Ada-EV" width={108} height={60} priority/>
          </Link>
        </div>

        {/* MENU NAVBAR */}
        <div className="flex space-x-8 text-white font-normal text-lg">
          <a href="#rekomendasi" className="hover:underline">Rekomendasi</a>
          <a href="#mobil-listrik" className="hover:underline">Mobil Listrik</a>
          
        </div>
      </nav>

      {/* MAINPAGE */}
      <main className="max-w-4xl text-[#4C4547] mx-auto px-6 py-24">
        <h1 className="text-2xl  font-bold mb-6">Selamat datang di Ada-EV</h1>

        <Image
          src="/Ada-EV.png"
          alt="Ada-EV Logo"
          width={320*2}
          height={160*2}
          className="mb-6"
          priority
        />

        <p className="text-lg font-normal max-w-md">
          Bingung cari mobil listrik? Ada-EV bisa bantu rekomendasiin kamu cari mobil listrik terbaik!
        </p>
      </main>
      <section>
          <h2 className="text-center text-1 font-normal mb-12 text-2xl text-gray-800">
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
    </div>
  );
}
