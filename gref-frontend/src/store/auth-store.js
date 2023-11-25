import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: undefined,
      accessToken: undefined,
      updateToken: (token) => set(() => ({ accessToken: token }), false, 'updateToken'),
      updateUser: (user) => set(() => ({ user }), false, 'updateUser')
    }),
    {
      name: 'authStore',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
