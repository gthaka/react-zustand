import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const storeStuff = (set) => ({
  theme: "corporate",
  toggleTheme: () => set((state) => ({ theme: state.theme === "corporate" ? "black" : "corporate" })),
  resetTheme: () => set({ theme: "corporate" }),
})

const useStore = create(devtools(persist(storeStuff, { name: "theme" })))
export default useStore