import React, { useState } from 'react'
import CardTheme from './CardTheme';
import { useSlideContext } from '@/context/slide.context';
interface SelectedSubThemesInterface {
    selectedSubThemes: string[];
    setSelectedSubThemes: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardThemeList = ({ selectedSubThemes, setSelectedSubThemes }: SelectedSubThemesInterface) => {
    const [removedIndexes, setRemovedIndexes] = useState<number[]>([]);
    const { store } = useSlideContext()
    const handleSubThemeChange = (subTheme: string, index: number) => {
        if (selectedSubThemes.includes(subTheme) && selectedSubThemes.length > 5) {
            setRemovedIndexes([...removedIndexes, index]);
            setSelectedSubThemes(selectedSubThemes.filter((item) => item !== subTheme));
        }
    };
    return (
        <div className="overflow-x-auto overflow-y-scroll h-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
            {selectedSubThemes.slice(0, store.countSubtheme).map((subTheme, index) => (
                removedIndexes.includes(index) ? (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange} index={index} />
                ) : (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange} index={index} />
                ))
            )
            }
        </div>
    )
}

export default CardThemeList