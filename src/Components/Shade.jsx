import React, { useState, useEffect } from 'react';
import img1 from '../assets/shadeimages/glimmer.png';
import img2 from '../assets/shadeimages/none.png';
import img3 from '../assets/shadeimages/shade.png';

const Shade = ({ selectedOptions = {}, onOptionChange }) => {
    // State variables with descriptive names
   const [selectedShadeType, setSelectedShadeType] = useState(selectedOptions.Type || '');
const [selectedMaterialType, setSelectedMaterialType] = useState(selectedOptions.Materiale || '');
const [selectedShadowTapeColor, setSelectedShadowTapeColor] = useState(selectedOptions.Skyggebånd || '');
const [engravingLine1, setEngravingLine1] = useState(selectedOptions['Skyggegravering Line 1'] || '');
const [engravingLine2, setEngravingLine2] = useState(selectedOptions['Skyggegravering Line 2'] || '');
const [engravingLine3, setEngravingLine3] = useState(selectedOptions['Skyggegravering Line 3'] || '');


    

    // Shade type options
    const shadeTypeOptions = [
        { name: 'Blank', value: 'Blank', img: img3 },
        { name: 'Shiny', value: 'Shiny', color: '#2d2d2e' },
        { name: 'Glimmer', value: 'Glimmer', img: img1 },
    ];

    // Shadow tape color options
    const shadowTapeColorOptions = [
        { name: 'INGEN', value: 'INGEN', img: img2 },
        { name: 'Guld', value: 'Guld', color: '#bb9300' },
        { name: 'Sølv', value: 'Sølv', color: '#C0C0C0' }
    ];

    const materialBlankTypes = ['Uden kant', 'Med kant'];
    const materialMATTypes = [''];
    const materialGlimmerTypes = ['Uden kant', 'Med kant'];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('Type', selectedShadeType);
    }, [selectedShadeType]);

    useEffect(() => {
        onOptionChange('Materiale', selectedMaterialType);
    }, [selectedMaterialType]);

    useEffect(() => {
        onOptionChange('Skyggebånd', selectedShadowTapeColor);
    }, [selectedShadowTapeColor]);

    useEffect(() => {
        onOptionChange('Skyggegravering Line 1', engravingLine1);
    }, [engravingLine1]);

    useEffect(() => {
        onOptionChange('Skyggegravering Line 2', engravingLine2);
    }, [engravingLine2]);

    useEffect(() => {
        onOptionChange('Skyggegravering Line 3', engravingLine3);
    }, [engravingLine3]);

    // Get available material options based on selected shade type
    const getMaterialOptions = () => {
        switch (selectedShadeType) {
            case 'Blank': return materialBlankTypes;
            case 'Mat': return materialMATTypes;
            case 'Glimmer': return materialGlimmerTypes;
            default: return materialBlankTypes;
        }
    };

    // Effect to automatically select the first material option when shade type changes
    useEffect(() => {
        const materialOptions = getMaterialOptions();
        if (materialOptions.length > 0 && !materialOptions.includes(selectedMaterialType)) {
            setSelectedMaterialType(materialOptions[0]);
        }
    }, [selectedShadeType]);

    // Reusable selector component
    const Selector = ({
        label,
        currentSelection,
        onSelectionChange,
        options,
        type = 'color' // 'color' or 'image'
    }) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                </div>
            </div>
            <div className="flex space-x-3">
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 flex items-center justify-center ${currentSelection === option.value
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
            <p className="text-sm mt-2 text-slate-700">Valgt: {currentSelection}</p>
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
                        onClick={() => onSelectionChange(type)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${currentSelection === type
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
                <h3 className="text-2xl font-bold text-slate-900">SKYGGE</h3>
            </div>

            {/* Shade Type Selection */}
            <Selector
                label="Type"
                currentSelection={selectedShadeType}
                onSelectionChange={setSelectedShadeType}
                options={shadeTypeOptions}
            />

            {/* Material Type Selection */}
            {selectedShadeType!='Glimmer'&&(

            <TypeSelector
                label="Materiale"
                currentSelection={selectedMaterialType}
                onSelectionChange={setSelectedMaterialType}
                options={getMaterialOptions()}
            />
            )}
            

            {/* Shadow Tape Color Selection */}
            <Selector
                label="Skyggebånd"
                currentSelection={selectedShadowTapeColor}
                onSelectionChange={setSelectedShadowTapeColor}
                options={shadowTapeColorOptions}
            />

            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Skyggegravering</h4>
                        
                        <div className="flex items-center gap-2 mt-1">
                           
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <span className="inline-flex items-center px-3 pt-2 rounded-full text-xs font-bold">
                                Maks. 30 Tegn
                            </span>
                        <input
                            type="text"
                            value={engravingLine1}
                            onChange={(e) => setEngravingLine1(e.target.value)}
                            placeholder="Linje 1"
                            maxLength={30}
                            className="w-full my-4 px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <span className="inline-flex items-center px-3 pt-2 rounded-full text-xs font-bold">
                                Maks. 30 Tegn
                            </span>
                        <input
                            type="text"
                            value={engravingLine2}
                            onChange={(e) => setEngravingLine2(e.target.value)}
                            placeholder="Linje 2"
                            maxLength={30}
                            className="w-full px-4 my-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <span className="inline-flex items-center px-3 pt-2 rounded-full text-xs font-bold">
                                Maks. 30 Tegn
                            </span>
                        <input
                            type="text"
                            value={engravingLine3}
                            onChange={(e) => setEngravingLine3(e.target.value)}
                            placeholder="Linje 3"
                            maxLength={30}
                            className="w-full px-4 my-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shade;