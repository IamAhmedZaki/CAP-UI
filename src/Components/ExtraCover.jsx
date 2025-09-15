import React, { useState, useEffect } from 'react';

const ExtraCover = ({ selectedOptions = {}, onOptionChange }) => {
    const [selectedExtraCoverOption, setSelectedExtraCoverOption] = useState('Yes');
    const [selectedMaterialType, setSelectedMaterialType] = useState('Standard');
    const [selectedButtonMaterialColor, setSelectedButtonMaterialColor] = useState('Ingen');

    

    const extraCoverOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
    ];
    
    const hatbandColorOptions = [
        { name: 'HVID', value: '#ffffffff' },
        { name: 'SORT', value: '#000001' }, // Consider using different colors or removing duplicate
    ];

     const [selectedHatbandColor, setSelectedHatbandColor] = useState('EUX');


    const buttonMaterialMATTypes = [ 'Standard','Kantbånd','Flagbånd'];
    const buttonMaterialBLANKTypes = [ 'Ingen','Skolebroderi'];
    // Effect hook to propagate changes to parent component
    useEffect(() => {
        onOptionChange('Tilvælg', selectedExtraCoverOption);
    }, [selectedExtraCoverOption]);
    useEffect(() => {
        onOptionChange('Favre', selectedHatbandColor);
    }, [selectedHatbandColor]);
    useEffect(() => {
        onOptionChange('Type', selectedMaterialType);
    }, [selectedMaterialType]);
    useEffect(() => {
        onOptionChange('Skolebroderi', selectedButtonMaterialColor);
    }, [selectedButtonMaterialColor]);
    
    // Reusable option selector component
    const OptionSelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange, 
        options 
    }) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                    
                </div>
            </div>
            <div className="flex space-x-3 flex-wrap">
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 flex items-center justify-center ${
                            currentSelection === option.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
                        title={option.name}
                    >
                        {option.icon}
                    </button>
                ))}
            </div>
        </div>
    );

    const ColorSelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange, 
        colorOptions 
    }) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                </div>
            </div>
            <div className="flex space-x-3">
                {colorOptions.map((colorOption) => (
                    <button
                        key={colorOption.value}
                        onClick={() => onSelectionChange(colorOption.name)}
                        className={`w-12 h-12 flex justify-center items-center rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                            currentSelection === colorOption.name
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
                        style={{ backgroundColor: colorOption.color || colorOption.value }}
                        title={colorOption.name}
                    >
                        {colorOption.img && (
                            <img 
                                src={colorOption.img} 
                                alt={colorOption.name}
                                className="w-8 h-8 flex flex-justify object-contain"
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
            <div className="flex space-x-3 flex-wrap">
                {options.map((type) => (
                    <button
                        key={type}
                        onClick={() => onSelectionChange(type)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium m-1 transition-all duration-200 ${
                            currentSelection === type
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">EKSTRA BETRÆK</h3>
            </div>

            {/* Extra Cover Selection */}
            <OptionSelector
                label="Tilvælg"
                currentSelection={selectedExtraCoverOption}
                onSelectionChange={setSelectedExtraCoverOption}
                options={extraCoverOptions}
            />

             <ColorSelector
                label="Favre"
                currentSelection={selectedHatbandColor}
                onSelectionChange={setSelectedHatbandColor}
                colorOptions={hatbandColorOptions}
            />

            
            <TypeSelector
                label="Type"
                currentSelection={selectedMaterialType}
                onSelectionChange={setSelectedMaterialType}
                options={buttonMaterialMATTypes}
            />
            
            <TypeSelector
                label="Skolebroderi"
                currentSelection={selectedButtonMaterialColor}
                onSelectionChange={setSelectedButtonMaterialColor}
                options={buttonMaterialBLANKTypes}
            />
            
        </>
    );
}

export default ExtraCover;