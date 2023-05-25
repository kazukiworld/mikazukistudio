import { create } from 'zustand';

export const useModelStore = create<ModelStore>((set) => ({
    position: [40, 10, 0],
    lightPosition: [3, -1, 0],
    zoom: 1.3,
    setPosition: (newPosition: number[]) => set({ position: newPosition }),
    setLightPosition: (newLightPosition: number[]) => set({ lightPosition: newLightPosition }),
    setZoom: (newZoom: number) => set({ zoom: newZoom }),
}));

type ModelStore = {
    position: number[];
    lightPosition: number[];
    zoom: number;
    setPosition: (newPosition: number[]) => void;
    setLightPosition: (newLightPosition: number[]) => void;
    setZoom: (newZoom: number) => void;
};

