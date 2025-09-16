import React, { useState, useEffect } from 'react';

import coverColorOptionsimg2 from '../assets/cover images/none.png';

const EducationalTape = ({ selectedOptions = {}, onOptionChange, program, currentEmblem }) => {
    // State variables with descriptive names
    const currentYear = new Date().getFullYear();
    const [selectedHatbandColor, setSelectedHatbandColor] = useState(`${program.toUpperCase()}`);
    const [selectedMaterialType, setSelectedMaterialType] = useState('VELOUR');
    const [selectedChinStrapColor, setSelectedChinStrapColor] = useState('Mat');
    const [selectedButtonMaterialColor, setSelectedButtonMaterialColor] = useState('FOOD GRADE');
    const [selectedEmbroideryColor, setSelectedEmbroideryColor] = useState('Guld');
    const [selectedButtonColor, setSelectedButtonColor] = useState('Guld');
    const [embroideryText, setEmbroideryText] = useState('');
    const [selectedYear, setSelectedYear] = useState(currentYear.toString());




    useEffect(() => {
        onOptionChange('Huebånd', selectedHatbandColor)
    }, [selectedHatbandColor])
    useEffect(() => {
        onOptionChange('Materiale', selectedMaterialType)
    }, [selectedMaterialType])
    useEffect(() => {
        onOptionChange('Hagerem', selectedChinStrapColor)
    }, [selectedChinStrapColor])
    useEffect(() => {
        onOptionChange('Hagerem Materiale', selectedButtonMaterialColor)
    }, [selectedButtonMaterialColor])
    useEffect(() => {
        onOptionChange('Broderi farve', selectedEmbroideryColor)
    }, [selectedEmbroideryColor])
    useEffect(() => {
        onOptionChange('Knap farve', selectedButtonColor)
    }, [selectedButtonColor])
    useEffect(() => {
        onOptionChange('Broderi foran', embroideryText)
    }, [embroideryText])

    const getCurrentEmblem = () => {
        switch (currentEmblem.name) {
            case 'Guld':

                return [{ name: 'Sort/Guld', value: '#695406ff' },
                    { name: 'Guld', value: '#f0bd06ff' }];
            default:
                return [{ name: 'Sølv', value: '#C0C0C0' },
                    { name: 'Sølv/Sort', value: '#71706C' }];
        }
    }

    const getHuebandColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'HHX', value: '#4169e1' };
            case 'htx':
                return { name: 'HTX', value: '#000080' };
            case 'stx':
                return { name: 'STX', value: '#7F1D1D' };
            case 'hf':
                return { name: 'HF', value: '#ADD8E6' };
            default:
        }
    };

    const hatbandColorOptions = [
        getHuebandColor(),
        { name: 'SORT', value: '#000001' }, // Consider using different colors or removing duplicate
    ];

    const chinStrapColorOptions = [
        { name: 'Mat', value: '#2e2e2e' },
        { name: 'Blank', value: '#757575' },
        { name: 'Sort/Sort', value: '#000000' },
        ...getCurrentEmblem()
    ];

 const getEmbroideryColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'HHX', value: 'HHX', color: '#4169e1' };
            case 'htx':
                return { name: 'HTX', value: 'HTX', color: '#000080' };
            case 'stx':
                return { name: 'STX', value: 'STX', color: '#7F1D1D' };
            case 'hf':
                return { name: 'HF', value: 'HF', color: '#ADD8E6' };
            default:
        }
    };

    const embroideryColorOptions = [
        { name: 'Guld', value: 'Guld', color: '#ba9200' },
        { name: 'Sølv', value: 'Sølv', color: '#757575' },
        getEmbroideryColor(),
        { name: 'HVID', value: 'HVID', color: '#E5E7EB' },
        { name: 'SORT', value: 'SORT', color: '#000000' },
    ];

    const buttonColorOptions = [
        // { name: 'BLANK', value: 'BLANK', img: coverColorOptionsimg2 },
        { name: 'Guld', value: 'Guld', color: '#ba9200' },
        { name: 'Sølv', value: 'Sølv', color: '#757575' },
    ];

    const materialEUXTypes = ['BOMULD', 'VELOUR', 'SATIN', 'GLIMMER', 'SHIMMER',];
    const materialSORTTypes = ['VELOUR', 'SATIN', 'GLIMMER', 'SHIMMER'];

    const buttonMaterialMATTypes = ['Mat hagerem'];
    const buttonMaterialBLANKTypes = ['Blank hagerem', 'Blank kunstlæder hagerem'];
    const buttonMaterialSortSortTypes = ['Sort hagerem med sorte knuder'];
    const buttonMaterialSortGuldTypes = ['Sort hagerem med guld knuder'];
    const buttonMaterialSolvTypes = ['Sølv hagerem med Sølv knuder'];
    const buttonMaterialSolveSortTypes = ['Sølv hagerem med sorte knuder'];
    const buttonMaterialGuldTypes = ['Guld hagerem med guld knuder'];
    const year = ['Ingen', ...Array.from({ length: 2 }, (_, i) => (currentYear + i).toString())];

    function getMaterialOptions() {
        switch (selectedHatbandColor) {
            case 'HHX':

                return materialEUXTypes;
            case 'HTX':

                return materialEUXTypes;
            case 'STX':

                return materialEUXTypes;
            case 'HF':

                return materialEUXTypes;
            case 'SORT':

                return materialSORTTypes;

            default:
                return [];
        }
    }
    useEffect(() => {
        let materialType = getMaterialOptions()
        if (materialType.length > 0 && !materialType.includes(selectedMaterialType)) {
            console.log(materialType);

            setSelectedMaterialType(materialType[0])
        }
    }, [selectedHatbandColor])


    function getMaterialOptions2() {
        switch (selectedChinStrapColor) {
            case 'Mat':

                return buttonMaterialMATTypes;
            case 'Blank':

                return buttonMaterialBLANKTypes;
            case 'Sort/Sort':

                return buttonMaterialSortSortTypes;
            case 'Sort/Guld':

                return buttonMaterialSortGuldTypes;
            case 'Sølv':

                return buttonMaterialSolvTypes;
            case 'Sølv/Sort':

                return buttonMaterialSolveSortTypes;
            case 'Guld':

                return buttonMaterialGuldTypes;

            default:
                return [];
        }
    }
    useEffect(() => {
        let materialType = getMaterialOptions2()
        if (materialType.length > 0) {
            console.log(materialType);

            setSelectedButtonMaterialColor(materialType[0])
        }
    }, [selectedChinStrapColor])

    // Reusable color selector component
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
            <div className="flex space-x-3 flex-wrap">
                {colorOptions.map((colorOption) => (
                    <>
                        <button
                            key={colorOption.value}
                            onClick={() => onSelectionChange(colorOption.name)}
                            className={`w-12 h-12 flex m-1 justify-center items-center rounded-xl border-2 transition-all duration-200 hover:scale-110 ${currentSelection === colorOption.name
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

                    </>
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Selected: {currentSelection}</p>
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
                        className={`px-6 py-3 rounded-xl m-3 text-sm font-medium transition-all duration-200 ${currentSelection === type
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
            <div className="">
                <h3 className="text-2xl font-bold text-slate-900">UDDANNELSESBÅND</h3>
            </div>

            {/* Hatband Color Selection */}
            <ColorSelector
                label="Huebånd"
                currentSelection={selectedHatbandColor}
                onSelectionChange={setSelectedHatbandColor}
                colorOptions={hatbandColorOptions}
            />

            {/* Material Type Selection */}
            <TypeSelector
                label="Materiale"
                currentSelection={selectedMaterialType}
                onSelectionChange={setSelectedMaterialType}
                options={['HTX', 'HHX', 'STX', 'HF'].includes(selectedHatbandColor)
                    ? materialEUXTypes
                    : materialSORTTypes}
            />

            {/* Chin Strap Color Selection */}
            <ColorSelector
                label="Hagerem"
                currentSelection={selectedChinStrapColor}
                onSelectionChange={setSelectedChinStrapColor}
                colorOptions={chinStrapColorOptions}
            />

            {/* Button Material Color Selection */}
            <TypeSelector
                label="Materiale"
                currentSelection={selectedButtonMaterialColor}
                onSelectionChange={setSelectedButtonMaterialColor}
                options={selectedChinStrapColor === 'Mat' ? buttonMaterialMATTypes : selectedChinStrapColor === 'Blank' ? buttonMaterialBLANKTypes : selectedChinStrapColor === 'Sort/Sort' ? buttonMaterialSortSortTypes : selectedChinStrapColor === 'Sort/Guld' ? buttonMaterialSortGuldTypes : selectedChinStrapColor === 'Sølv' ? buttonMaterialSolvTypes : selectedChinStrapColor === 'Guld' ? buttonMaterialGuldTypes : selectedChinStrapColor === 'Sølv/Sort' ? buttonMaterialSolveSortTypes : buttonMaterialSortGuldTypes}
            />

            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Broderi foran</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                                Inkluderet i pakken
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={embroideryText}
                            onChange={(e) => setEmbroideryText(e.target.value)}
                            placeholder="Fri tekst"
                            className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                             maxLength={20}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embroidery Color Selection */}
            <ColorSelector
                label="Broderi farve"
                currentSelection={selectedEmbroideryColor}
                onSelectionChange={setSelectedEmbroideryColor}
                colorOptions={embroideryColorOptions}
            />

            {/* Button Color Selection */}
            <ColorSelector
                label="Knap farve"
                currentSelection={selectedButtonColor}
                onSelectionChange={setSelectedButtonColor}
                colorOptions={buttonColorOptions}
            />

            {/* Material Type Selection */}
            <TypeSelector
                label="år"
                currentSelection={selectedYear}
                onSelectionChange={setSelectedYear}
                options={year}
            />
        </>
    );
}

export default EducationalTape;