'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Navbar({ data }) {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const [activeCategory, setActiveCategory] = useState('All')
  const roles = {}

  data
    ?.sort((a, b) => a.displayName.localeCompare(b.displayName))
    ?.forEach((d) => {
      if (roles[d.role]) {
        roles[d.role]++
      } else {
        roles[d.role] = 1
      }
    })

  const handleClick = (category) => {
    setActiveCategory(category)

    const params = new URLSearchParams(searchParams)

    if (category !== 'All') {
      params.set('role', category)
    } else {
      params.delete('role')
    }
    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <nav className='flex items-center justify-center text-center p-4 bg-black text-white'>
      <div className='flex items-center justify-center gap-6 w-3/4'>
        <p
          className={`cursor-pointer ${
            activeCategory === 'All' ? 'text-red-500' : ''
          }`}
          onClick={() => handleClick('All')}
        >
          All
        </p>
        {Object.keys(roles)?.map((role) => (
          <p
            className={`cursor-pointer ${
              activeCategory === role ? 'text-red-500' : ''
            }`}
            onClick={() => handleClick(role)}
            key={role}
            title={`${roles[role]} heroes`}
          >
            {role}
          </p>
        ))}
      </div>
    </nav>
  )
}
