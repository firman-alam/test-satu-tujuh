export default function Layout({ children }) {
  return (
    <div className='flex-row space-y-4 h-full p-8 bg-hero bg-cover bg-center'>
      {children}
    </div>
  )
}
