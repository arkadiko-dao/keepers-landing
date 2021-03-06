export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-full py-8 lg:relative sm:py-12 md:py-16 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <div>
          <h1 className="max-w-md mx-auto text-4xl font-extrabold tracking-tight text-center text-white font-headings sm:text-5xl md:max-w-3xl">
            <span className="block xl:inline">Decentralized smart contract automation for Stacks developers</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-lg text-center text-gray-200 sm:text-xl md:mt-5 md:max-w-xl">
            Arkadiko Keepers is the ultimate solution for automating smart contract functions.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div>
              <div className="rounded-md shadow">
                <a href="https://shrl.ink/gYDt" rel="noopener noreferrer" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign up for Beta
                </a>
              </div>
            </div>

            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <a href="#triggers" className="flex items-center justify-center w-full px-8 py-3 text-base text-white bg-transparent border border-transparent rounded-md hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Learn More
              </a>
            </div>
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <a href="#faq" className="flex items-center justify-center w-full px-8 py-3 text-base text-white bg-transparent border border-transparent rounded-md hover:bg-transparent hover:border hover:border-gray-50 md:py-4 md:text-lg focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
