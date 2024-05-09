import { create } from "zustand";
import { persist } from "zustand/middleware";

import { USER_STORE_LOCAL_STORAGE_NANE } from "@/constant/local-storage";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type UserState = {
  user: User;
};

type UserAction = {
  setUser: (user: User) => void;
};

export const useUserStore = create<UserState & UserAction>()(
  persist(
    (set) => ({
      user: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        role: "",
      },
      setUser: (user: User) => set({ user }),
    }),
    {
      name: USER_STORE_LOCAL_STORAGE_NANE,
    }
  )
);
