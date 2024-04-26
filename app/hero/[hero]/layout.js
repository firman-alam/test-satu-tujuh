export default function Layout({ children }) {
  return (
    <div className='flex-row space-y-4 p-8 bg-hero bg-cover bg-center'>
      {children}
    </div>
  )
}
