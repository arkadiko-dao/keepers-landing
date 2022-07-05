import Image from 'next/image'
import contract from '../public/contract.png'
import fund from '../public/fund.png'
import manage from '../public/manage.png'


const features = [
  {
    description: 'Build your job as a Clarity smart contract and make it Keepers-compatible following the documentation.',
    image: contract
  },
  {
    description: 'Fund your address in the Arkadiko Job Registry with sufficient DIKO and STX. Each execution costs 10 DIKO plus a STX gas fee.',
    image: fund
  },
  {
    description: 'After your job is registered and funded, manage it in the Keepers app to follow up on execution.',
    image: manage
  }
]

const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

export default function GetStarted() {
  return (
    <section id="get-started" className="relative bg-black bg-opacity-80">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-40 sm:px-6 lg:px-8">
        <h2 className="mt-2 text-3xl tracking-tight font-headings text-gray-50">
          Get started
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.description} className="pt-6">
                <div className="flow-root h-full px-6 pb-8 border border-indigo-300 rounded-sm bg-gradient-to-tr from-indigo-100/20 to-transparent rounded-tr-2xl">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center w-12 h-12 p-3 text-3xl font-semibold text-indigo-800 bg-indigo-300 rounded-sm shadow-indigo-200/80">
                       {index + 1}
                      </span>
                    </div>
                    <p className="mt-6 text-base text-gray-50">{feature.description}</p>
                    <div className="mt-8">
                      <Image
                        loader={myLoader}
                        alt={feature.description}
                        src={feature.image}
                        layout="responsive"
                        quality={100}
                        width={543}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

