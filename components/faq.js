const faqs = [
  {
    question: "Not your keys, not your coins?",
    answer: "When in doubt, zoom out."
  },
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
                  <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{__html: faq.answer}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
