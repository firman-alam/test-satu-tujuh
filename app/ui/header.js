import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex items-center justify-center text-center h-32 bg-red-600'>
      <div className=''>
        <h1 className='text-3xl'>Meet Our Heroes</h1>
        <h3>
          The man, the myth, the legend. Pick your hero and conquer the world!
        </h3>
      </div>
    </header>
  )
}
