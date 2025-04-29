// "use client"

// import type React from "react"

// import { createContext, useContext, useEffect, useState } from "react"
// import { useRouter, usePathname } from "next/navigation"

// type User = {
//   name: string
//   email: string
//   role: "distributor" | "admin"
// }

// type AuthContextType = {
//   user: User | null
//   isLoggedIn: boolean
//   login: (user: User) => void
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// })

// export const useAuth = () => useContext(AuthContext)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const router = useRouter()
//   const pathname = usePathname()

//   useEffect(() => {
//     // Check if user is logged in from localStorage
//     const authData = localStorage.getItem("durasol-auth")
//     if (authData) {
//       try {
//         const { isLoggedIn, user } = JSON.parse(authData)
//         if (isLoggedIn && user) {
//           setUser(user)
//           setIsLoggedIn(true)
//         }
//       } catch (error) {
//         console.error("Error parsing auth data:", error)
//         localStorage.removeItem("durasol-auth")
//       }
//     }
//     setIsLoading(false)
//   }, [])



//   // useEffect(() => {
//   //   // Redirect logic
//   //   if (!isLoading) {
//   //     // If not logged in and not on login page, redirect to login
//   //     if (!isLoggedIn && pathname !== "/login") {
//   //       router.push("/login")
//   //     }

//   //     // If logged in and on login page, redirect to appropriate dashboard
//   //     if (isLoggedIn && pathname === "/login") {
//   //       if (user?.role === "admin") {
//   //         router.push("/admin")
//   //       } else {
//   //         router.push("/")
//   //       }
//   //     }
//   //   }
//   // }, [isLoggedIn, isLoading, pathname, router, user])

//   useEffect(() => {
//     if (isLoading) return
  
//     if (isLoggedIn) {
//       if (pathname === "/login") {
//         router.push(user?.role === "admin" ? "/admin/birthday-form" : "/")
//       }
//     } else {
//       if (pathname !== "/login") {
//         router.push("/login")
//       }
//     }
//   }, [isLoggedIn, isLoading, pathname, router, user])

//   const login = (userData: User) => {
//     setUser(userData)
//     setIsLoggedIn(true)
//     localStorage.setItem("durasol-auth", JSON.stringify({ isLoggedIn: true, user: userData }))
//   }

//   const logout = () => {
//     setUser(null)
//     setIsLoggedIn(false)
//     localStorage.removeItem("durasol-auth")
//     router.push("/login")
//   }

//   return (
//     <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>{!isLoading && children}</AuthContext.Provider>
//   )
// }







"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  name: string
  email: string
  role: "distributor" | "admin"
}

type AuthContextType = {
  user: User | null
  isLoggedIn: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authLoaded, setAuthLoaded] = useState(false) // Indicates auth info is ready
  const router = useRouter()
  const pathname = usePathname()

  // Load user from localStorage once
  useEffect(() => {
    const authData = localStorage.getItem("durasol-auth")
    if (authData) {
      try {
        const parsed = JSON.parse(authData)
        if (parsed?.isLoggedIn && parsed?.user) {
          setUser(parsed.user)
          setIsLoggedIn(true)
        }
      } catch (err) {
        console.error("Error parsing auth data", err)
        localStorage.removeItem("durasol-auth")
      }
    }
    setAuthLoaded(true) // ✅ mark auth loaded
  }, [])

  // Redirect based on auth state
  useEffect(() => {
    if (!authLoaded) return // wait until auth is fully loaded

    const onLoginPage = pathname === "/login"

    // if (!isLoggedIn && !onLoginPage) {
    //   router.push("/login")
    // }

    if (isLoggedIn && onLoginPage) {
      if (user?.role === "admin") {
        router.push("/admin/birthday-form")
      } else {
        router.push("/")
      }
    }
  }, [authLoaded, isLoggedIn, pathname, router, user])

  const login = (userData: User) => {
    setUser(userData)
    setIsLoggedIn(true)
    localStorage.setItem("durasol-auth", JSON.stringify({ isLoggedIn: true, user: userData }))
  }

  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("durasol-auth")
    router.push("/login")
  }

  // Don’t render children until auth info is loaded
  if (!authLoaded) return null

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
