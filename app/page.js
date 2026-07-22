import Image from "next/image";

const Homepage = () => {
  return (
    <div className="bg-[#1e] min-h-screen">
      <section className="bg-cover bg-center bg-no-repeat bg-blue-50">
        <div className="max-w-6xl mx-auto py-24 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to PieChat</h1>
          <p className="text-lg mb-8">Your new favorite way to connect with friends and family</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-start">
            <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <h3 className="text-xl font-semibold mb-2">Real-Time Messaging</h3>
            <p>Enjoy instant messaging with friends and family</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-start">
            <svg className="w-10 h-10 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
            <p>Create and join group chats with your loved ones</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-start">
            <svg className="w-10 h-10 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p>Easily share photos, videos, and documents</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
            <p>Limited Features</p>
            <p className="text-2xl font-bold">$0/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 mt-4 rounded-md">
              Sign Up
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
            <p>All essential features</p>
            <p className="text-2xl font-bold">$5/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 mt-4 rounded-md">
              Buy Now
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p>All Features + Advanced Option</p>
            <p className="text-2xl font-bold">$10/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 mt-4 rounded-md">
              Learn More
            </button>
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