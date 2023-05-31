import { create } from 'zustand';

export const useModelStore = create<ModelStore>((set) => ({
    modelLoading: true,
    position: [1, 0, 0],
    lightPosition: [3, -1, 0],
    zoom: 10,
    setModelLoading: (newLoading: boolean) => set({ modelLoading: newLoading }),
    setPosition: (newPosition: number[]) => set({ position: newPosition }),
    setLightPosition: (newLightPosition: number[]) => set({ lightPosition: newLightPosition }),
    setZoom: (newZoom: number) => set({ zoom: newZoom }),
}));

type ModelStore = {
    modelLoading: boolean; 
    position: number[];
    lightPosition: number[];
    zoom: number;
    setModelLoading: (newLoading: boolean) => void;
    setPosition: (newPosition: number[]) => void;
    setLightPosition: (newLightPosition: number[]) => void;
    setZoom: (newZoom: number) => void;
};

