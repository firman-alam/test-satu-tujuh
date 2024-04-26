import Image from 'next/image'

export default function CardAbility({ data }) {
  return (
    <div className='flex-row bg-slate-600 w-[400px] h-[200px] p-4 text-white space-y-4'>
      <p>
        {data?.slot} - {data?.displayName}
      </p>
      {data?.displayIcon && (
        <Image
          src={data?.displayIcon}
          alt={data?.displayName}
          width={50}
          height={50}
          loading='lazy'
        />
      )}

      <p>{data?.description}</p>
    </div>
  )
}
