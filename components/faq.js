const faqs = [
  {
    question: "When is Keepers launching?",
    answer: "Arkadiko Keepers is currently in closed beta and will be open for public use at the end of Q3 2022!"
  },
  {
    question: "Is Keepers safe?",
    answer: "The Arkadiko Keepers contracts are currently not audited! However, they have been peer reviewed by several Stacks members. Every job is written by individual people or teams, so you cannot assume that a job is inherently safe."
  },
  {
    question: "What can I do with Arkadiko Keepers?",
    answer: "You can automate smart contract execution recurringly based on any kind of logic. Whether it is arbitrage, buying an NFT when it drops under a certain price, automatically claiming yield farming rewards or executing some protocol logic... All of it is possible!"
  },
  {
    question: "How do Keepers work?",
    answer: "You can read full documentation on <a class='underline' target='_blank' rel='noopener noreferrer' href='https://docs.arkadiko.finance/keepers/introduction'>https://docs.arkadiko.finance/keepers/introduction</a> but in short everyone can deploy a job that should be ran recurringly. Each block that is mined, a network of keepers will check whether your job should be ran or not. If it should be ran, a keeper will execute it and charge your account for the execution."
  },
  {
    question: "Can I run a decentralised keeper and earn DIKO?",
    answer: "Certainly! Our keeper network should be expanded continously to become more decentralised. Running a keeper is fairly straightforward and documentation will be available soon."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="relative bg-white bg-opacity-90">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-48 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl text-gray-900 font-headings">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Reach out to our{' '}
              team on{' '}
              <a href="https://discord.gg/7UB6JjjCNV" className="font-medium text-indigo-600 hover:text-indigo-500">
                Discord
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-2 lg:col-span-2">
            <div className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <p className="text-lg font-medium leading-6 text-gray-900">{faq.question}</p>
                  <p className="mt-2 text-base text-gray-500 break-words" dangerouslySetInnerHTML={{__html: faq.answer}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
