export { default } from 'next-auth/middleware'

export const config = {
  // matcher: ['/dashboard/:path*'] applies all path that start with /dashboard
  matcher: ['/dashboard']
}

