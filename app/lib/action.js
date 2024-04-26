export async function getData() {
  const res = await fetch(`https://staging.ina17.com/data.json`)

  return res.json()
}

export async function getHeroByName(name) {
  const res = await fetch(`https://staging.ina17.com/data.json`)
  const data = await res.json()
  const hero = data?.find(
    (hero) => hero.displayName.replace(/\//g, '-') == name
  )

  return hero
}
