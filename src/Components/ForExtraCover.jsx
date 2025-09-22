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
    import whiteGlitter from '../assets/button images/white glitter.png';
import blackGlitter from '../assets/button images/black glitter.png';

    const ForExtraCover = ({ programNew,current,forOptionChange }) => {
        const [selectedCoverColor, setSelectedCoverColor] = useState('');
        const [selectedEdgebandColor, setSelectedEdgebandColor] = useState('');
        const [selectedKantbandColor, setSelectedKantbandColor] = useState('');
        const [selectedStarsStyle, setSelectedStarsStyle] = useState('');
        
        const coverColorOptions = [
               { name: 'Hvid', value: 'Hvid', color: '#ffffff' },
               { name: 'Sort', value: 'Sort', color: '#000000' },
               { name: 'Hvid med glimmer', value: 'Hvid med glimmer', img: whiteGlitter,color:'#ffffff' },
               { name: 'Sort med glimmer', value: 'Sort med glimmer', img: blackGlitter,color:'#000000' }
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
                case 'hhx':
                    return { name: 'HHX', value:'HHX', color: '#4169e1' };
                case 'htx':
                    return { name: 'HTX', value:'HTX', color: '#000080' };
                case 'stx':
                    return { name: 'STX', value:'STX', color: '#7F1D1D' };
                case 'hf':
                    return { name: 'HF', value:'HF', color: '#ADD8E6' };
                
                default:
                    return null
            }
        };
        const getCurrentEmblem = () => {
            switch (current.name) {
                case 'Guld':

                    return { name: 'Guld', value: 'Guld', color:'#FFD700' };
                        
                default:
                    return { name: 'Sølv', value: 'Sølv', color:'#C0C0C0' };
                        
            }
        }
        const edgebandColorOptions = [
    { name: 'NONE', value: 'NONE', img: coverColorOptionsimg2 },
      { name: 'Hvid', value: 'Hvid', color: '#ffffff'  },
    { name: 'Sort', value: 'Sort', color: '#3d3d3d' },
    getCoverColor()
    ].filter(Boolean); // removes undefined

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

        // Effect hooks to propagate changes to parent component
        useEffect(() => {
            forOptionChange('Farve', selectedCoverColor);
        }, [selectedCoverColor]);

        useEffect(() => {
            forOptionChange('Topkant', selectedKantbandColor);
        }, [selectedKantbandColor]);

        useEffect(() => {
            forOptionChange('Kantbånd', selectedEdgebandColor);
        }, [selectedEdgebandColor]);

        useEffect(() => {
            forOptionChange('Stjerner', selectedStarsStyle);
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
                            className={`w-12 h-12 rounded-xl border-2 mb-2 transition-all duration-200 overflow-hidden hover:scale-110 flex items-center justify-center ${
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
                                    className="w-14 h-14 object-contain"
                                />
                            )}
                        </button>
                    ))}
                </div>
                <p className="text-sm mt-2 text-slate-700">Valgt: {currentSelection}</p>
            </div>
        );

        return (
            <>
                <div className="space-y-2">
                    {/* <h3 className="text-2xl font-bold text-slate-900">BETRÆK</h3> */}
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
                
                 {!isRestricted && (
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

    export default ForExtraCover;