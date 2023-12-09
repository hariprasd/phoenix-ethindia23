import { create } from "zustand";

const useMyStore = create((set) => ({
    identity: {},
    setIdentity: (identity) => {
        set(() => ({ identity }));
    },
}));

export default useMyStore;
