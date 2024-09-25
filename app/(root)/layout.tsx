import Image from 'next/image';
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Damian', lastName: 'Balarezo' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex w-full h-full flex-col">
        <div className="root-layout flex items-center gap-2 p-4">
          <Image src='/icons/logo.svg' width={30} height={30} alt='logo' />
          <div>
          <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}