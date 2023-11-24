import { redirect } from 'next/navigation'

const IndexPage = () => redirect('auth/login')

export default IndexPage
