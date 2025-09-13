import React, { useState, useEffect } from 'react';
import img1 from '../assets/stars/star.png';
import img2 from '../assets/stars/2-star.png';
import img3 from '../assets/stars/3-star.png';
import img4 from '../assets/stars/4-star.png';
import img5 from '../assets/stars/5-star.png';
import coverColorOptionsimg1 from '../assets/cover images/silverahh.png';
import coverColorOptionsimg2 from '../assets/cover images/none.png';
import coverColorOptionsimg3 from '../assets/cover images/darkblueahh.png';

const Cover = ({ selectedOptions = {}, onOptionChange }) => {
    const [selectedCoverColor, setSelectedCoverColor] = useState('#ffffff');
    const [selectedEdgebandColor, setSelectedEdgebandColor] = useState('NONE');
    const [selectedStarsStyle, setSelectedStarsStyle] = useState('1');
    
    const coverColorOptions = [
        { name: 'WHITE - WATER REPELLENT', value: '#ffffff', color: '#ffffff' },
        { name: 'BLACK - WATER REPELLENT', value: '#000000', color: '#000000' },
        { name: 'WHITE GLITTER', value: '#dedede', img: coverColorOptionsimg1 },
        { name: 'SORT GLIMMER', value: '#292929', color: '#292929'  }
    ];

    const edgebandColorOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        { name: 'WHITE', value: 'WHITE', color: '#E5E7EB' },
        { name: 'BLACK', value: 'BLACK', color: '#3d3d3d' },
        { name: 'STX', value: 'STX', color: '#782834' },
        { name: 'HHX', value: 'HHX', color: '#243859' },
        { name: 'EUD', value: 'EUD', img: coverColorOptionsimg3 },
        { name: 'GREEN', value: 'GREEN', color: '#E5E7EB' },
        { name: 'GUL', value: 'GUL', color: '#E5E7EB' },
        { name: 'EUX', value: 'EUX', color: '#E5E7EB' },
        { name: 'PINK', value: 'PINK', color: '#E5E7EB' },
    ];
    
    const starsOptions = [
        { name: 'One Star', value: '1', img: img1 },
        { name: 'Two Stars', value: '2', img: img2 },
        { name: 'Three Stars', value: '3', img: img3 },
        { name: 'Four Stars', value: '4', img: img4 },
        { name: 'Five Stars', value: '5', img: img5 },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('Farve', selectedCoverColor);
    }, [selectedCoverColor]);

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
                        className={`w-12 h-12 rounded-xl border-2 mb-2 transition-all duration-200 hover:scale-110 flex items-center justify-center ${
                            currentSelection === option.value
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
                label="Kantbånd"
                currentSelection={selectedEdgebandColor}
                onSelectionChange={setSelectedEdgebandColor}
                options={edgebandColorOptions}
                type="color"
            />

            {/* Stars Style Selection */}
            <Selector
                label="Stjerner"
                currentSelection={selectedStarsStyle}
                onSelectionChange={setSelectedStarsStyle}
                options={starsOptions}
                type="image"
            />
        </>
    );
}

export default Cover;