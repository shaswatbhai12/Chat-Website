import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-cover bg-center bg-no-repeat bg-gray">
        <div className="container mx-auto py-24 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to PieChat</h1>
        </div>
      </section>
    </div>
  );
}

export const metadata= {
  title: 'Home - PieChat',
  description: 'Piechat helps you connect to people of your choice'
}