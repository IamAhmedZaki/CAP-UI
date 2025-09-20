import React, { useState, useEffect } from 'react';
import img1 from '../assets/stars/star.png';
import img2 from '../assets/stars/2-star.png';
import img3 from '../assets/stars/3-star.png';
import img4 from '../assets/stars/4-star.png';
import img5 from '../assets/stars/5-star.png';
import img6 from '../assets/stars/6-star.png';
import coverColorOptionsimg1 from '../assets/cover images/silverahh.png';
import coverColorOptionsimg2 from '../assets/cover images/none.png';
import coverColorOptionsimg3 from '../assets/cover images/darkblueahh.png';

const Cover = ({ selectedOptions = {}, onOptionChange, program, currentEmblem }) => {
    const [selectedCoverColor, setSelectedCoverColor] = useState('');
    const [selectedEdgebandColor, setSelectedEdgebandColor] = useState('');
    const [selectedKantbandColor, setSelectedKantbandColor] = useState('');
    const [selectedStarsStyle, setSelectedStarsStyle] = useState('');

    const hideSelectorsPrograms = [
    'sosuassistent',
    'sosuhjælper',
    'frisør',
    'kosmetolog',
    'pædagog',
    'pau',
    'ernæringsassisten'
];

const shouldHideSelectors = hideSelectorsPrograms.includes(program?.toLowerCase());

    const coverColorOptions = [
        { name: 'Hvid', value: 'Hvid', color: '#ffffff' },
        { name: 'Sort', value: 'Sort', color: '#000000' },
        { name: 'Hvid med glimmer', value: 'Hvid med glimmer', img: coverColorOptionsimg1 },
        { name: 'Sort med glimmer', value: 'Sort med glimmer', color: '#292929' }
    ];

    const getCoverColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'HHX', value: 'HHX', color: '#4169e1' };
            case 'htx':
                return { name: 'HTX', value: 'HTX', color: '#000080' };
            case 'stx':
                return { name: 'STX', value: 'STX', color: '#7F1D1D' };
            case 'hf':
                return { name: 'HF', value: 'HF', color: '#ADD8E6' };
            case 'eux':
                return { name: 'EUX', value: 'EUX', color: '#7c7f82' };
            case 'eud':
                return { name: 'EUD', value: 'EUD', color: '#522854' };
            default:
                return null; // nothing if no match
        }
    };
    const getCurrentEmblem = () => {
        switch (currentEmblem.name) {
            case 'Guld':

                return { name: 'Guld', value: 'Guld', color: '#FFD700' };

            default:
                return { name: 'Sølv', value: 'Sølv', color: '#C0C0C0' };

        }
    }
    const edgebandColorOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        { name: 'SORT', value: 'SORT', color: '#3d3d3d' },
        getCoverColor()

    ].filter(Boolean);

    const topKantColorOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        getCurrentEmblem(),



    ];

    const starsOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        { name: 'One Star', value: '1', img: img1 },
        { name: 'Two Stars', value: '2', img: img2 },
        { name: 'Three Stars', value: '3', img: img3 },
        { name: 'Four Stars', value: '4', img: img4 },
        { name: 'Five Stars', value: '5', img: img5 },
        { name: 'Six Stars', value: '6', img: img6 },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('Farve', selectedCoverColor);
    }, [selectedCoverColor]);

    useEffect(() => {
        onOptionChange('Topkant', selectedKantbandColor);
    }, [selectedKantbandColor]);

    useEffect(() => {
        onOptionChange('Kantbånd', selectedEdgebandColor);
    }, [selectedEdgebandColor]);

    useEffect(() => {
        onOptionChange('Stjerner', selectedStarsStyle);
    }, [selectedStarsStyle]);

    // Reusable selector component for both colors and images
    const Selector = ({
        label,
        currentSelection,
        onSelectionChange,
        options,
        type = 'color' // 'color' or 'image'
    }) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                </div>
            </div>
            <div className="flex space-x-3 flex-wrap">
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 mb-2 transition-all duration-200 hover:scale-110 flex items-center justify-center ${currentSelection === option.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={option.color ? { backgroundColor: option.color || option.value } : {}}
                        title={option.name}
                    >
                        {option.img && (
                            <img
                                src={option.img}
                                alt={option.name}
                                className="w-8 h-8 object-contain"
                            />
                        )}
                    </button>
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Selected: {currentSelection}</p>
        </div>
    );

    return (
        <>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">BETRÆK</h3>
            </div>

            {/* Cover Color Selection */}
            <Selector
                label="Farve"
                currentSelection={selectedCoverColor}
                onSelectionChange={setSelectedCoverColor}
                options={coverColorOptions}
                type="color"
            />

            {/* Edgeband Color Selection */}
            <Selector
                label="Topkant"
                currentSelection={selectedKantbandColor}
                onSelectionChange={setSelectedKantbandColor}
                options={topKantColorOptions}
                type="color"
            />

           {!shouldHideSelectors && (
    <>
        <Selector
            label="Kantbånd"
            currentSelection={selectedEdgebandColor}
            onSelectionChange={setSelectedEdgebandColor}
            options={edgebandColorOptions}
            type="color"
        />

        <Selector
            label="Stjerner"
            currentSelection={selectedStarsStyle}
            onSelectionChange={setSelectedStarsStyle}
            options={starsOptions}
            type="image"
        />
    </>
)}
        </>
    );
}

export default Cover;