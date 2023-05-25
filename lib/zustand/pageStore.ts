import { create } from 'zustand';

export const usePageStore = create<PageStore>((set) => ({
    currentSection: 'Hero',
    sections: {
        heroSection: null,
        aboutSection: null,
        serviceSection: null,
        serviceSection2: null,
        serviceSection3: null,
        contactSection: null,
        portfolioSection: null,
    },
    setCurrentSection: (section: string) => set({ currentSection: section }),
    setSections: (sections: Sections) => set({ sections: sections }),
}));

type Sections = {
    heroSection: React.MutableRefObject<HTMLElement | null> | null,
    aboutSection: React.MutableRefObject<HTMLElement | null> | null,
    serviceSection: React.MutableRefObject<HTMLElement | null> | null,
    serviceSection2: React.MutableRefObject<HTMLElement | null> | null,
    serviceSection3: React.MutableRefObject<HTMLElement | null> | null,
    contactSection: React.MutableRefObject<HTMLElement | null> | null,
    portfolioSection: React.MutableRefObject<HTMLElement | null> | null
}

type PageStore = {
    currentSection: string; 
    sections: Sections;
    setCurrentSection: (currentSection: string) => void;
    setSections: (section: Sections) => void;
};