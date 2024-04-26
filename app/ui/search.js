'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('search', term.replace(/\//g, '-'))
    } else {
      params.delete('search')
    }
    replace(`${pathName}?${params.toString()}`)
  }, 300)

  return (
    <div className='bg-black flex items-center justify-center p-2'>
      <div className='flex w-1/2 items-center justify-center bg-white rounded-md px-2'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <MagnifyingGlassIcon width={25} height={25} />
        <input
          className='peer block w-full rounded-md focus:outline-none py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-700'
          placeholder={'Search'}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('search')?.toString()}
        />
      </div>
    </div>
  )
}
