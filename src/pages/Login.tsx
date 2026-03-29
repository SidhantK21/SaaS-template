import { Navbar } from '@/components/sections/Navbar'

const LOGO_TOKEN = 'pk_JP50tcEERzagas9Bkl48xA'

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-[400px]">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-[22px] font-semibold text-gray-900 mb-1.5">Sign in to your account</h1>
            <p className="text-[14px] text-gray-500">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {/* Email */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[14px] font-medium text-gray-700">Password</label>
                <a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Forgot?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
              />
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-500 text-white text-[14px] font-medium hover:bg-blue-600 active:scale-[0.99] transition-all"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-dashed border-gray-300" />
            <span className="text-[12px] text-gray-400 uppercase tracking-wide">OR</span>
            <div className="flex-1 border-t border-dashed border-gray-300" />
          </div>

          {/* OAuth buttons */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border border-gray-200 text-[14px] text-gray-700 hover:bg-gray-50 active:scale-[0.99] transition-all"
            >
              <img
                src={`https://img.logo.dev/google.com?token=${LOGO_TOKEN}`}
                alt="Google"
                className="w-5 h-5 rounded-sm"
              />
              Continue with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border border-gray-200 text-[14px] text-gray-700 hover:bg-gray-50 active:scale-[0.99] transition-all"
            >
              <img
                src={`https://img.logo.dev/apple.com?token=${LOGO_TOKEN}`}
                alt="Apple"
                className="w-5 h-5 rounded-sm"
              />
              Continue with Apple
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-[13px] text-gray-500 mt-6">
            Don&apos;t have an account?{' '}
            <a href="#" className="font-semibold text-gray-900 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}
