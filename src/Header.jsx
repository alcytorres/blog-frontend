import {LogoutLink} from './LogoutLink'

export function Header() {
  return (
    <header>
      <a href="/">Home</a> | <a href="/signup">Signup</a> | <a href="login">Login</a> <LogoutLink />
    </header>
  )
}
