import Link from 'next/link'
import Card from './ui/card'
import Footer from './ui/footer'
import Header from './ui/header'
import Navbar from './ui/navbar'
import Search from './ui/search'
import { getData } from './lib/action'

export default async function Home({ searchParams }) {
  const search = searchParams?.search || ''
  const role = searchParams?.role || ''

  const data = await getData()
  const uniqueRoles = new Set()
  data?.forEach((d) => {
    uniqueRoles.add(d.role)
  })

  return (
    <main className='flex gap-4 h-screen'>
      <div className='flex-row min-w-full'>
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar data={data} />
        <Search />

        {/* Data */}
        <section className='flex justify-center bg-image p-4 min-h-[80%] min-w-full'>
          <div className='flex items-center justify-center flex-wrap gap-6 w-3/4'>
            {data
              ?.filter(
                (char) =>
                  !search ||
                  char.displayName.toLowerCase().includes(search.toLowerCase())
              )
              ?.filter(
                (char) =>
                  !role || char.role.toLowerCase().includes(role.toLowerCase())
              )
              ?.sort((a, b) => a.displayName.localeCompare(b.displayName))
              ?.map((char, index) => (
                <Link href={`/hero/${char.displayName.replace(/\//g, '-')}`}>
                  <Card char={char} key={char.displayName + index} />
                </Link>
              ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
