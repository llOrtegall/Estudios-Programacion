import { useTheme } from '../context/ThemeProvider'
import { Switch } from '@tremor/react'
import { NavLink } from 'react-router-dom'

const Links = [
  {
    id: 1,
    name: 'Home',
    url: '/'
  },
  {
    id: 2,
    name: 'Noticias',
    url: '/noticias'
  },
  {
    id: 3,
    name: 'Loterias',
    url: '/loterias'
  },
  {
    id: 4,
    name: 'Promociones',
    url: '/promociones'
  },
  {
    id: 5,
    name: 'Aplicaciones',
    url: '/aplicaciones'
  }
]

const NavBar = (): JSX.Element => {
  const { toggleTheme } = useTheme()

  return (
    <>
      <section className='py-3 flex items-center justify-around'>

        <figure className='flex'>
          <img src='/gane.webp' width={130} />
        </figure>

        <span className='text-4xl'>Intranet</span>

        <article className='flex gap-4 items-center'>
          <figure className='flex flex-col items-center'>
            <img src='/servired.webp' width={150} />
            <span className='font-medium'>Grupo Empresarial Servired SA.</span>
          </figure>
          <figure className='flex flex-col items-center'>
            <img src='/multired.webp' width={160} />
            <span className='font-medium'>Grupo Empresarial Multired SA.</span>
          </figure>
          <figure className='flex flex-col items-center pt-2'>
            <Switch onChange={toggleTheme} />
            <span>Theme</span>
          </figure>
        </article>
      </section>

      <ul className='flex w-full text-white justify-around bg-gradient-to-b from-blue-600 to-blue-900 p-2  font-semibold'>
        {Links.map((link) => (
          <li key={link.id} className='hover:text-yellow-300 text-xl'>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>)
        )}
      </ul>

    </>
  )
}

export default NavBar
