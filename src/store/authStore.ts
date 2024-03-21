import { create, StoreApi } from 'zustand';
import { AuthInterface } from "../types/Auth.ts";

export interface IAuthStore extends AuthInterface {
    set: (newState: Partial<AuthInterface>) => void; // Update the type of newState to Partial<AuthInterface>
    setEmail: (newEmail: string) => void;
    setNickname: (newNickname: string) => void;
    getNickname : () => string;
    setCertification : (value : boolean) => void;
    setAuction : (value : boolean) => void;
    setEvent : (value : boolean) => void;
    setNotice : (value : boolean) => void;
}

const useAuthStore: StoreApi<IAuthStore> = create<IAuthStore>((set) => ({
    email: "",
    nickname: "",
    loginType: 'verifit',
    alert: {
        certification: false,
        auction: false,
        event: false,
        notice: false
    },
    rank : undefined,
    todayPoint : undefined,
    totalPoint : undefined,
    setCertification: (value) => set((state) => ({ ...state, alert: { ...state.alert, certification: value } })),
    setAuction: (value) => set((state) => ({ ...state, alert: { ...state.alert, auction: value } })),
    setEvent: (value) => set((state) => ({ ...state, alert: { ...state.alert, event: value } })),
    setNotice: (value) => set((state) => ({ ...state, alert: { ...state.alert, notice: value } })),
    set: (newState) => set((state) => ({ ...state, ...newState })),
    setEmail: (newEmail) => set((state) => ({ ...state, email: newEmail })),
    setNickname: (newNickname) => set((state) => ({ ...state, nickname: newNickname })) ,
    getNickname : () => useAuthStore.getState().nickname
}));

export default useAuthStore;
