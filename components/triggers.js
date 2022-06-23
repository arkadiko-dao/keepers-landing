import {
  CubeTransparentIcon,
  TerminalIcon,
  SparklesIcon,
  ServerIcon,
  } from '@heroicons/react/outline'

const features = [
  {
    name: 'A custom computation',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TerminalIcon,
  },
  {
    name: 'Any Chainlink oracle data',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SparklesIcon,
  },
  {
    name: 'Any on-chain activity',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Block number',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  }
]

export default function Triggers() {
  return (
    <section id="triggers" className="relative bg-indigo-900 bg-opacity-90">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-48 sm:px-6 lg:px-8">
        <h2 className="mt-2 text-3xl tracking-tight font-headings text-gray-50">
          Trigger your smart contracts to execute automatically based on:
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root px-6 pb-8 rounded-sm bg-gradient-to-br from-gray-50 to-indigo-300 rounded-br-2xl">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-sm shadow-lg shadow-slate-500/80 bg-slate-900">
                        <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-700">{feature.description}</p>
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

