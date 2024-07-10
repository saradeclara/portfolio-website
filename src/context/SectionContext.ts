import { createContext, Dispatch } from "react";

type SectionContextType = {
	currentSection: number;
	setCurrentSection: Dispatch<React.SetStateAction<number>>;
};

const SectionContextDefault: SectionContextType = {
	currentSection: 0,
	setCurrentSection: () => {},
};

const SectionContext = createContext<SectionContextType>(SectionContextDefault);

export type { SectionContextType };

export { SectionContextDefault, SectionContext };
