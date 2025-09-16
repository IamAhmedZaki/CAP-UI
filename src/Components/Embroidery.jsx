import React, { useState, useEffect } from 'react';

const Embroidery = ({ selectedOptions = {}, onOptionChange, program }) => {
    // State variables with descriptive names
    const [selectedNameEmbroideryColor, setSelectedNameEmbroideryColor] = useState('Guld');
    const [nameEmbroideryText, setNameEmbroideryText] = useState('');
    const [selectedSchoolEmbroideryColor, setSelectedSchoolEmbroideryColor] = useState('HVID');
    const [schoolEmbroideryText, setSchoolEmbroideryText] = useState('');
    const [ingenButton, setIngenButton] = useState(false);

    const getEmbroideryColor = () => {
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

    // Color options with descriptive names
    const nameEmbroideryColorOptions = [
        { name: 'Guld', value: '#ba9200' },
        { name: 'Sølv', value: '#757575' },
        getEmbroideryColor(),
        { name: 'HVID', value: '#E5E7EB' },
        { name: 'SORT', value: '#2e2e2e' },
    ];

    const schoolEmbroideryColorOptions = [
        { name: 'HVID', value: '#E5E7EB' },
        
        { name: 'Guld', value: '#ba9200' },
        { name: 'Sølv', value: '#757575' },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('Broderi farve', selectedNameEmbroideryColor);
    }, [selectedNameEmbroideryColor]);

    useEffect(() => {
        onOptionChange('Navne broder', nameEmbroideryText);
    }, [nameEmbroideryText]);

    useEffect(() => {
        onOptionChange('Skolebroderi farve', selectedSchoolEmbroideryColor);
    }, [selectedSchoolEmbroideryColor]);

    useEffect(() => {
        onOptionChange('Skolebroderi', schoolEmbroideryText);
    }, [schoolEmbroideryText]);

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
            <div className="flex space-x-3">
                {colorOptions.map((colorOption) => (
                    <button
                        key={colorOption.value}
                        onClick={() => onSelectionChange(colorOption.name)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${currentSelection === colorOption.name
                            ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                            : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={{ backgroundColor: colorOption.value }}
                        title={colorOption.name}
                    />
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Selected: {currentSelection}</p>
        </div>
    );

    // Reusable embroidery input component
    // Reusable embroidery input component
    const EmbroideryInput = ({
        title,
        textValue,
        onTextChange,
        placeholder
    }) => (
        <div className="bg-white/70 border border-white/50 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h4 className="font-semibold text-slate-800">{title}</h4>
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
                        value={textValue}
                        onChange={(e) => onTextChange(e.target.value)} // Extract value here
                        placeholder={placeholder}
                        className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <div className="">
                <h3 className="text-2xl font-bold text-slate-900">BRODERI</h3>
            </div>

            {/* Name Embroidery Section */}
            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">


                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Navne broder</h4>
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
                            value={nameEmbroideryText}
                            onChange={(e) => setNameEmbroideryText(e.target.value)}
                            placeholder="Fri tekst"
                            maxLength={26}
                            className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Name Embroidery Color Selection */}
            <ColorSelector
                label="Broderifarve"
                currentSelection={selectedNameEmbroideryColor}
                onSelectionChange={setSelectedNameEmbroideryColor}
                colorOptions={nameEmbroideryColorOptions}
            />

            {/* School Embroidery Section */}
            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Skolebroderi</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                                Inkluderet i pakken
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 flex-wrap">

                    <button
                        // key={type}
                        onClick={() => {
                            setIngenButton(!ingenButton)}}
                        className={`px-6 py-3 rounded-xl my-3 text-sm font-medium transition-all duration-200 ${ingenButton === true
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                            }`}>
                        Ingen
                    </button>


                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={ingenButton?'':schoolEmbroideryText}
                            onChange={(e) => setSchoolEmbroideryText(e.target.value)}
                            placeholder="Fri tekst"
                            maxLength={25}
                            disabled={ingenButton === true}   // 🔴 disables when 'Ingen'
                            className={`w-full px-4 py-4 rounded-2xl border-2 
              ${ingenButton === true ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white/80 backdrop-blur-sm text-slate-700'} 
              focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Embroidery Color Selection */}
            <ColorSelector
                label="Skolebroderi farve"
                currentSelection={selectedSchoolEmbroideryColor}
                onSelectionChange={setSelectedSchoolEmbroideryColor}
                colorOptions={schoolEmbroideryColorOptions}
            />
        </>
    );
}

export default Embroidery;