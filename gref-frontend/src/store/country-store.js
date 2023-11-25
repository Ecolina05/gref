import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useCountryStore = create(
  persist(
    (set) => ({
      currentCountry: undefined,
      currentState: undefined,
      updateCurrentCountry: (currentCountry) =>
        set(() => ({ currentCountry }), false, 'updateCurrentCountry'),
      updateCurrentState: (currentState) =>
        set(() => ({ currentState }), false, 'updateCurrentState')
    }),
    {
      name: 'countryStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
