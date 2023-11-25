import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useSavingGroupsStore = create(
  persist(
    (set) => ({
      savingGroups: [],
      updateSavingGroups: (savingGroup) =>
        set(
          (state) => ({ savingGroups: [...state.savingGroups, savingGroup] }),
          false,
          'updateSavingGroups'
        )
    }),
    {
      name: 'savingGroupsStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
