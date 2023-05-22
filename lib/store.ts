import { create} from 'zustand';

type ModelStore = {
    position: number[];
    lightPosition: number[];
    zoom: number;
    setPosition: (newPosition: number[]) => void;
    setLightPosition: (newLightPosition: number[]) => void;
    setZoom: (newZoom: number) => void;
};

export const useModelStore = create<ModelStore>((set) => ({
    position: [0, 0, 0],
    lightPosition: [0, 0, 0],
    zoom: 1,
    setPosition: (newPosition: number[]) => set({ position: newPosition }),
    setLightPosition: (newLightPosition: number[]) => set({ lightPosition: newLightPosition }),
    setZoom: (newZoom: number) => set({ zoom: newZoom }),
}));