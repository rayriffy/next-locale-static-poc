import React from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page: NextPage = props => {
  const router = useRouter()

  const locales = {
    en: 'Hello',
    iskallian: 'Halo',
    jp: 'こんにちわ',
  }

  return (
    <div className="container mx-auto pt-12">
      <h1 className="font-semibold text-4xl pb-2">Riffy's Next locale demo</h1>
      <p>
        inb4 Next with dynamic routes when we{' '}
        <code className="bg-black text-white text-sm p-1 rounded">
          next export
        </code>{' '}
        it should be able to navigate dynamically by configure <b>redirects</b>{' '}
        correctly. (
        <a
          className="text-blue-500"
          href="https://github.com/Brikl/opensource/tree/master/libs/netlify-plugin-next-dynamic"
        >
          More info about this
        </a>
        )
      </p>
      <p>
        With experimental i18n in Next 9.5, it cannot do like that due to how{' '}
        <code className="bg-black text-white text-sm p-1 rounded">
          useRouter()
        </code>{' '}
        works (and it experimental). But let's see with the power with Next 10!
      </p>
      <div className="border-b py-2"></div>
      <h2 className="font-medium text-2xl py-4">{locales[router.locale]}</h2>
      <p>Detected locales: {router.locale}</p>
      <p>Available locales: {router.locales?.join(', ')}</p>
      <div className="border-b py-2"></div>
      <div className="font-bold py-4">Buttons! Many buttons!!!</div>
      {Object.entries(locales).map(([key, val]) => (
        <div key={`button-${key}`} className="p-2 flex">
          <Link href={`/${key}`}>
            <a>
              <div className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-300 transition duration-200">
                {key}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Page
