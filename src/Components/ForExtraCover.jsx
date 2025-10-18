import React, { useState, useEffect } from 'react';
import img1 from '../assets/stars/star.png';
import img2 from '../assets/stars/2-star.png';
import img3 from '../assets/stars/3-star.png';
import img4 from '../assets/stars/4-star.png';
import img5 from '../assets/stars/5-star.png';
import img6 from '../assets/stars/6-star.png';
import coverColorOptionsimg2 from '../assets/cover images/none.png';
import whiteGlitter from '../assets/button images/white glitter.png';
import blackGlitter from '../assets/button images/black glitter.png';

import international from '../assets/flagbandimages/international.jpg';
import usakinaden from '../assets/flagbandimages/USAKINADEN.png';
import europe from '../assets/flagbandimages/europe.png';


const ForExtraCover = ({ programNew, current, forOptionChange, selectedOptions }) => {


     const accessoryOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
   ];
    // Default value functions
    const getDefaultCoverColor = () => {
        return 'Hvid'; // Default extra cover color
    };

    const getDefaultTopkantColor = () => {
        return 'NONE'; // Default no topkant
    };

    const getDefaultKantbandColor = () => {
        switch (programNew?.toLowerCase()) {

            default: return 'NONE';
        }
    };

    const getDefaultStarsStyle = () => {
        return 'NONE'; // Default no stars
    };

    const [selectedCoverColor, setSelectedCoverColor] = useState(
        selectedOptions.Farve || getDefaultCoverColor()
    );
    const [selectedTopkantColor, setSelectedTopkantColor] = useState(
        selectedOptions.Topkant || getDefaultTopkantColor()
    );
    const [selectedKantbandColor, setSelectedKantbandColor] = useState(
        selectedOptions.Kantbånd || getDefaultKantbandColor()
    );
    const [selectedStarsStyle, setSelectedStarsStyle] = useState(
        selectedOptions.Stjerner || getDefaultStarsStyle()
    );
    // ✅ Initialize cleanly
const [selectedFlagbånd, setSelectedFlagbånd] = useState(
  selectedOptions.Flagbånd && selectedOptions.Flagbånd !== 'Nej' ? 'Yes' : 'No'
);

const [selectedFlagbåndOption, setSelectedFlagbåndOption] = useState(
  selectedOptions.Flagbånd === 'Nej' ? '' : selectedOptions.Flagbånd || 'Nej'
);


    const coverColorOptions = [
        { name: 'Hvid', value: 'Hvid', color: '#ffffff' },
        { name: 'Sort', value: 'Sort', color: '#000000' },
        { name: 'Hvid med glimmer', value: 'Hvid med glimmer', img: whiteGlitter, color: '#ffffff' },
        { name: 'Sort med glimmer', value: 'Sort med glimmer', img: blackGlitter, color: '#000000' }
    ];

    const restrictedPrograms = [
        "sosuassistent",
        "sosuhjælper",
        "frisør",
        "kosmetolog",
        "pædagog",
        "pau",
        "ernæringsassistent"
    ];

    const isRestricted = restrictedPrograms.includes(programNew?.toLowerCase());

    const getCoverColor = () => {
        switch (programNew?.toLowerCase()) {
            case 'hhx': return { name: 'HHX', value: 'HHX', color: '#4169e1' };
            case 'htx': return { name: 'HTX', value: 'HTX', color: '#000080' };
            case 'stx': return { name: 'STX', value: 'STX', color: '#7F1D1D' };
            case 'hf': return { name: 'HF', value: 'HF', color: '#ADD8E6' };
            default: return null;
        }
    };

    const getCurrentEmblem = () => {
        return current.name === 'Guld'
            ? { name: 'Guld', value: 'Guld', color: '#FFD700' }
            : { name: 'Sølv', value: 'Sølv', color: '#C0C0C0' };
    };

    const edgebandColorOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        { name: 'Hvid', value: 'Hvid', color: '#ffffff' },
        { name: 'Sort', value: 'Sort', color: '#3d3d3d' },
        getCoverColor()
    ].filter(Boolean);

    const topKantColorOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        getCurrentEmblem()
    ].filter(Boolean);

    const starsOptions = [
        { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
        { name: 'One Star', value: '1', img: img1 },
        { name: 'Two Stars', value: '2', img: img2 },
        { name: 'Three Stars', value: '3', img: img3 },
        { name: 'Four Stars', value: '4', img: img4 },
        { name: 'Five Stars', value: '5', img: img5 },
        { name: 'Six Stars', value: '6', img: img6 },
    ];

    const flagbandOptions = [
        { name: 'International', value: 'International', img: international },
        { name: 'Frankrig-Spanien-Tyskland-UK-Danmark', value: 'Frankrig-Spanien-Tyskland-UK-Danmark', img: europe },
        { name: 'Usa-Kina-Danmark', value: 'Usa-Kina-Danmark', img: usakinaden },

    ];


    // Propagate changes to parent
    useEffect(() => { forOptionChange('Farve', selectedCoverColor); }, [selectedCoverColor]);
    useEffect(() => { forOptionChange('Topkant', selectedTopkantColor); }, [selectedTopkantColor]);
    useEffect(() => { forOptionChange('Kantbånd', selectedKantbandColor); }, [selectedKantbandColor]);
    useEffect(() => { forOptionChange('Stjerner', selectedStarsStyle); }, [selectedStarsStyle]);
    useEffect(() => {
  if (selectedFlagbånd === 'Yes') {
    // If user already has a valid selection, keep it
    if (selectedFlagbåndOption && selectedFlagbåndOption !== 'Nej') {
      forOptionChange('Flagbånd', selectedFlagbåndOption);
    } 
    // Otherwise, set default to International
    else {
      setSelectedFlagbåndOption('International');
      forOptionChange('Flagbånd', 'International');
    }
  } else if (selectedFlagbånd === 'No') {
    forOptionChange('Flagbånd', 'Nej');
  }
}, [selectedFlagbånd]);

useEffect(() => {
  if (selectedFlagbånd === 'Yes' && selectedFlagbåndOption) {
    forOptionChange('Flagbånd', selectedFlagbåndOption);
  }
}, [selectedFlagbåndOption]);



    const AccessorySelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange 
    }) => (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
            </div>
            <div className="flex space-x-3">
                {accessoryOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                            currentSelection === option.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
                    >
                        {option.icon}
                    </button>
                ))}
            </div>
        </div>
    );


    const Selector = ({ label, currentSelection, onSelectionChange, options, type = 'color' }) => (
        <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between flex-wrap">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                </div>
            </div>
            <div className="flex space-x-3 flex-wrap">
                {options.map(option => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 mb-2 transition-all duration-200 overflow-hidden hover:scale-110 flex items-center justify-center ${currentSelection === option.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={option.color ? { backgroundColor: option.color } : {}}
                        title={option.name}
                    >
                        {option.img && <img src={option.img} alt={option.name} className="w-14 h-14 object-contain" />}
                    </button>
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Valgt: {currentSelection}</p>
        </div>
    );

    return (
        <>
            <Selector
                label="Farve"
                currentSelection={selectedCoverColor}
                onSelectionChange={setSelectedCoverColor}
                options={coverColorOptions}
            />
            <Selector
                label="Topkant"
                currentSelection={selectedTopkantColor}
                onSelectionChange={setSelectedTopkantColor}
                options={topKantColorOptions}
            />
            {!isRestricted && (
                <>
                    <Selector
                        label="Kantbånd"
                        currentSelection={selectedKantbandColor}
                        onSelectionChange={setSelectedKantbandColor}
                        options={edgebandColorOptions}
                        type="color"
                    />

                    
                </>
            )}

             {!isRestricted && (
                <>
            <AccessorySelector
               label="Flagbånd"
               currentSelection={selectedFlagbånd}
               onSelectionChange={setSelectedFlagbånd}
           />

           {selectedFlagbånd === 'Yes' && (
                    
                <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between flex-wrap">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Flagbånd</label>
                </div>
            </div>
            <div className=" space-x-3 ">
                {flagbandOptions.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => setSelectedFlagbåndOption(option.value)}
                        className={`w-65 h-12 rounded-xl border-2 mb-2 transition-all duration-200 overflow-hidden hover:scale-110 flex items-center justify-center ${
                            selectedFlagbåndOption === option.value
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
                                className="w-70 h-50 object-contain"
                            />
                        )}
                    </div>
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Valgt: {selectedFlagbåndOption}</p>
        </div>
            )}
             </>
            )}


            {!isRestricted && (
                <>
                    

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
};

export default ForExtraCover;