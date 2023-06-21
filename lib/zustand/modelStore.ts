import { create } from 'zustand';

export const useModelStore = create<ModelStore>((set) => ({
    modelLoading: true,
    position: [0, 0, -20],
    lightPosition: [0, 0, 40],
    zoom: 0,
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

