import Image from 'next/image'

export default function Card({ char }) {
  return (
    <section className='flex-row items-center justify-center w-56 h-56 cursor-pointer text-center p-2 '>
      <div className='flex bg-slate-600 rounded-lg p-4 items-center justify-center'>
        <Image
          src={char.displayIcon}
          alt={char.displayName}
          width={165}
          height={165}
        />
      </div>
      <p>{char.displayName}</p>
    </section>
  )
}
