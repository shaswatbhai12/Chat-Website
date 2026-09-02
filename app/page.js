import Image from "next/image";
import Link from "next/link"

const Homepage = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 font-sans">
      <section className="bg-[#1e232d] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">PieChat - Chat with your friends and more</h1>
          <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed max-w-lg">Welcome to Piechat, the fun and easy way to connect with your friends and family. Stay in touch, share stories and laugh, and lasting memories - all in one place</p>
          <div className="flex flex-wrap gap-4">
          <Link href="https://github.com/shaswatbhai12/Chat-Website"><button className="border border-slate-600 hover:border-slate-400 text-slate-200 text-sm font-medium py-2.5 px-4 rounded-md transition">
            View on Github
          </button></Link>
          <button className="bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-medium py-2.5 px-4 rounded-md transition">
            Start Chatting
          </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-72 md:h-80">
            <Image src="/graffic.png" alt="Piechat" fill className="object-contain" priority/>
          </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-center font-extrabold mb-10 text-slate-900">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <svg className="w-8 h-8 text-blue-500 mb-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <h3 className="text-base font-bold mb-1 text-slate-900">Real-Time Messaging</h3>
            <p className="text-slate-500 text-xs">Enjoy instant messaging with friends and family</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <svg className="w-8 h-8 text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <h3 className="text-base font-bold mb-1 text-slate-900">Group Chat</h3>
            <p className="text-slate-500 text-xs">Create and join group chats with your loved ones</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <svg className="w-8 h-8 text-yellow-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <h3 className="text-base font-bold mb-1 text-slate-900">File Sharing</h3>
            <p className="text-slate-500 text-xs">Easily share photos, videos, and documents</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Pay once, use forever</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Standard</h3>
            <p className="text-xs text-slate-400 mb-6">1 license for only 1 activation</p>
            <div className="flex items-baseline space-x-2 mb-6">
            <span className="text-slate-400 line-through text-base font-normal">$39</span>
            <span className="text-4xl font-extrabold text-slate-900">$29</span>
            </div>
            <button className="w-full bg-[#f8fafc] hover:bg-slate-100 text-[#3b82f6] font-semibold py-2.5 rounded-lg border border-slate-200/80 text-sm mb-8 transition">
              Buy Now
            </button>
          </div>
          
          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Access</span>
            </li>

            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All AI Features</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Use your Own OpenAI Key</span>
            </li>
          </ul>
          </div>

          <div className="p-8 bg-white rounded-2xl border-2 border-blue-500 shadow-md flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-bold text-[#3b82f6]">Extended</h3>
            <span className="bg-blue-50 text-blue-600 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
              Most Popular
            </span>
            </div>
            <p className="text-xs text-slate-400 mb-6">1 license for up to 3 activations</p>
            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-slate-400 line-through text-base font-normal">$59</span>
              <span className="text-4xl font-extrabold text-slate-900">$39</span>
            </div>
            <button className="w-full bg-[#2563eb] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm mb-8 transition">
              Buy Now
            </button>
          </div>
          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Access</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All AI Features</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Use your Own OpenAI Key</span>
            </li>
          </ul>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Premium</h3>
            <p className="text-xs text-slate-400 mb-6">1 license for only 1 activation</p>

            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-slate-400 line-through text-base font-normal">$39</span>
              <span className="text-4xl font-extrabold text-slate-900">$29</span>
            </div>
            <button className="w-full bg-[#f8fafc] hover:bg-slate-100 text-[#3b82f6] font-semibold py-2.5 border border-slate-800/20 text-sm mb-8 transition rounded-lg">
              Buy Now
            </button>
          </div>
          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Access</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All AI Features</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Use your own OpenAI Key</span>
            </li>
          </ul>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage

export const metadata= {
  title: 'Home - PieChat',
  description: 'Piechat helps you connect to people of your choice'
}