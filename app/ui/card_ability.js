import Image from 'next/image'

export default function CardAbility({ data }) {
  return (
    <div className='flex-row bg-slate-600 w-full md:w-[400px] h-[200px] p-4 text-center  text-white space-y-4'>
      <p>
        {data?.slot} - {data?.displayName}
      </p>
      <div className='flex items-center justify-center'>
        {data?.displayIcon && (
          <Image
            src={data?.displayIcon}
            alt={data?.displayName}
            width={50}
            height={50}
            loading='lazy'
          />
        )}
      </div>

      <p>{data?.description}</p>
    </div>
  )
}
