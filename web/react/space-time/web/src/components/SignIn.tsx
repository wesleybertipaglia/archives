import { User } from 'lucide-react'

export function SignIn() {
  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        className="flex items-center gap-3 text-left"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="aspect-square h-5 w-5 text-gray-500"></User>
        </div>

        <p className="text-sm leading-snug">
          <span className="underline transition-colors hover:text-gray-50">
            Crie sua conta
          </span>{' '}
          e salve suas memórias!
        </p>
      </a>
    </div>
  )
}
