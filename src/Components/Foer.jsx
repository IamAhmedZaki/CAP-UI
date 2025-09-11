import React, { useState, useEffect } from 'react';
import img1 from '../assets/shadeimages/glimmer.png';

const Foer = ({ selectedOptions = {}, onOptionChange }) => {
    // State variables with descriptive names
    const [selectedKokardeMaterial, setSelectedKokardeMaterial] = useState('Leather');
    const [selectedKokardeColor, setSelectedKokardeColor] = useState('black');
    const [selectedBowColor, setSelectedBowColor] = useState('HVID');
    const [selectedFoerMaterial, setSelectedFoerMaterial] = useState('Viscose');
    const [selectedbowMaterialType, setBowMaterialTypes] = useState('');
    
    // Color options with descriptive names
    const bowColorOptions = [
        { name: 'HVID', value: 'HVID', color: '#FFFFFF' },
        { name: 'Sort', value: 'Sort', color: '#000000' },
        { name: 'Gold', value: 'gold', color: '#ba9200' },
    ];

    const bowMaterialTypes = [
        { name: 'HVID', value: 'HVID', color: '#000000' },
        { name: 'BRUN', value: 'BRUN', color: '#a66f5a' },
        { name: 'STX', value: 'STX', color: '#782834' },
        { name: 'CHAMPAGNE', value: 'CHAMPAGNE', img: img1 },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('kokardeMaterial', selectedKokardeMaterial);
    }, [selectedKokardeMaterial]);

    useEffect(() => {
        onOptionChange('kokardeColor', selectedKokardeColor);
    }, [selectedKokardeColor]);

    useEffect(() => {
        onOptionChange('bowColor', selectedBowColor);
    }, [selectedBowColor]);

    useEffect(() => {
        onOptionChange('foerMaterial', selectedFoerMaterial);
    }, [selectedFoerMaterial]);
    
    useEffect(() => {
      if (selectedFoerMaterial=='Satin') {
        setBowMaterialTypes('HVID')
        
      }else{
         setBowMaterialTypes('')
      }
    }, [selectedFoerMaterial]);

    useEffect(() => {
        onOptionChange('bowMaterialType', selectedbowMaterialType);
    }, [selectedbowMaterialType]);

    const getKokardeColorOptions = (material) => {
        switch (material) {
            case 'Leather':
                return [
                    { name: 'HVID', value: 'HVID', color: '#ffffff' },
                    { name: 'Sort', value: 'Sort', color: '#000000' },
                ];
            case 'Artificial Leather':
                return [
                    { name: 'Sort', value: 'Sort', color: '#000000' },
                ];
            case 'Ruskin':
                return [
                    { name: 'Cognac', value: 'Cognac', color: '#a66f5a' },
                ];
            case 'Alcantra':
                return [
                    { name: 'Sort', value: 'Sort', color: '#000000' },
                ];
            default:
                return [
                    { name: 'Black', value: 'black', color: '#000000' },
                ];
        }
    };

    const kokardeColorOptions = getKokardeColorOptions(selectedKokardeMaterial);

    useEffect(() => {
        // Reset Kokarde color to first available option
        if (kokardeColorOptions.length > 0 && !kokardeColorOptions.some(opt => opt.value === selectedKokardeColor)) {
            setSelectedKokardeColor(kokardeColorOptions[0].value);
        }
    }, [selectedKokardeMaterial, kokardeColorOptions, selectedKokardeColor]);

    const kokardeMaterialTypes = ['Leather', 'Artificial Leather', 'Ruskin', 'Alcantra'];
    const foerMaterialTypes = ['Viscose', 'Polyester', 'Satin', 'Silk'];

    // Reusable color selector component
    const ColorSelector = ({
        label,
        currentSelection,
        onSelectionChange,
        colorOptions
    }) => (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
            </div>
            <div className="flex space-x-3">
                {colorOptions.map((colorOption) => (
                    <button
                        key={colorOption.value}
                        onClick={() => onSelectionChange(colorOption.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 flex items-center justify-center ${currentSelection === colorOption.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={colorOption.color ? { backgroundColor: colorOption.color || colorOption.value } : {}}
                        title={colorOption.name}
                    >
                        {colorOption.img && (
                            <img
                                src={colorOption.img}
                                alt={colorOption.name}
                                className="w-8 h-8 object-contain"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );

    // Reusable type selector component
    const TypeSelector = ({
        label,
        currentSelection,
        onSelectionChange,
        options
    }) => (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
                <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {currentSelection}
                    </span>
                </div>
            </div>
            <div className="flex space-x-3">
                {options.map((type) => (
                    <button
                        key={type}
                        onClick={() => {onSelectionChange(type)
                           
                           
                        }}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${currentSelection === type
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
            {currentSelection == 'Satin' &&
                <ColorSelector
                    label="Type"
                    currentSelection={selectedbowMaterialType}
                    onSelectionChange={setBowMaterialTypes}
                    colorOptions={bowMaterialTypes}
                />
            }
        </div>
    );

    return (
        <>
            {/* Kokarde Material Selection */}
            <TypeSelector
                label="Svederem"
                currentSelection={selectedKokardeMaterial}
                onSelectionChange={setSelectedKokardeMaterial}
                options={kokardeMaterialTypes}
            />

            {/* Kokarde Color Selection */}
            <ColorSelector
                label="Color"
                currentSelection={selectedKokardeColor}
                onSelectionChange={setSelectedKokardeColor}
                colorOptions={kokardeColorOptions}
            />

            {/* Bow Color Selection */}
            <ColorSelector
                label="Bow"
                currentSelection={selectedBowColor}
                onSelectionChange={setSelectedBowColor}
                colorOptions={bowColorOptions}
            />

            {/* Foer Material Selection */}
            <TypeSelector
                label="Foer"
                currentSelection={selectedFoerMaterial}
                onSelectionChange={setSelectedFoerMaterial}
                options={foerMaterialTypes}
            />
        </>
    );
}

export default Foer;