import { create } from 'zustand';

interface User {
  image_source: string;
  email: string;
  id: number;
}

interface UserState {
  user: User | null;
  setUserInfo: (user: User | null) => void;
}

export const useUserInfo = create<UserState>((set) => ({
  user: null,
  setUserInfo: (user: User | null) => set({ user: user }),
}));
