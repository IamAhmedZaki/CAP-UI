import React, { useState, useEffect } from 'react'

const Bows = ({ selectedOptions = {}, onOptionChange }) => {
    // Initialize state from props or use defaults
    const [selectedColor, setSelectedColor] = useState(selectedOptions.color || { name: 'STX', value: '#7F1D1D' });
    const [selectedPrestige, setSelectedPrestige] = useState(selectedOptions.bowType || 'Prestige');
    const [selectedEmblem, setSelectedEmblem] = useState(selectedOptions.emblem || { name: 'Gold', value: 'gold', color: '#FCD34D' });
    const [selectedType, setSelectedType] = useState(selectedOptions.country || 'Denmark');

    const colors = [
        { name: 'STX', value: '#7F1D1D' },
        { name: 'HHX', value: '#1E3A8A' },
        { name: 'RED', value: '#DC2626' }
    ];

    const emblemOptions = [
        { name: 'Gold', value: 'gold', color: '#FCD34D' },
        { name: 'Silver', value: 'silver', color: '#E5E7EB' }
    ];

    const typeOptions = [
        { name: 'Denmark', icon: '🇩🇰' },
        { name: 'Sweden', icon: '🇸🇪' },
        { name: 'Norway', icon: '🇳🇴' },
        { name: 'Germany', icon: '🇩🇪' },
        { name: 'France', icon: '🇫🇷' },
        { name: 'Italy', icon: '🇮🇹' }
    ];

    // Update parent when local state changes
    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('color', selectedColor);
        }
    }, [selectedColor, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('bowType', selectedPrestige);
        }
    }, [selectedPrestige, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('emblem', selectedEmblem);
        }
    }, [selectedEmblem, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('country', selectedType);
        }
    }, [selectedType, onOptionChange]);

    // Update local state when props change
    useEffect(() => {
        if (selectedOptions.color) {
            setSelectedColor(selectedOptions.color);
            console.log('selected option wala use effect')
        }
    }, [selectedOptions.color]);

    useEffect(() => {
        if (selectedOptions.bowType) {
            setSelectedPrestige(selectedOptions.bowType);
        }
    }, [selectedOptions.bowType]);

    useEffect(() => {
        if (selectedOptions.emblem) {
            setSelectedEmblem(selectedOptions.emblem);
        }
    }, [selectedOptions.emblem]);

    useEffect(() => {
        if (selectedOptions.country) {
            setSelectedType(selectedOptions.country);
        }
    }, [selectedOptions.country]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handlePrestigeChange = (type) => {
        setSelectedPrestige(type);
    };

    const handleEmblemChange = (emblem) => {
        setSelectedEmblem(emblem);
    };

    const handleTypeChange = (typeName) => {
        setSelectedType(typeName);
    };

    return (
        <>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Bows</h3>
            </div>

            {/* Color Selection */}
            <div className="flex space-x-3">
                {colors.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => handleColorChange(color)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${selectedColor.value === color.value
                            ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                            : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={{ backgroundColor: color.value }}
                    />
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Selected: {selectedColor.name}</p>

            {/* Prestige Type */}
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Bow</label>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {selectedPrestige}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-3">
                    {['Signature', 'Prestige'].map((type) => (
                        <button
                            key={type}
                            onClick={() => handlePrestigeChange(type)}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${selectedPrestige === type
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Emblem Selection */}
            <div className="flex space-x-3">
                {emblemOptions.map((emblem) => (
                    <button
                        key={emblem.value}
                        onClick={() => handleEmblemChange(emblem)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${selectedEmblem.value === emblem.value
                            ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                            : 'border-slate-200 hover:border-slate-400'
                            }`}
                        style={{ backgroundColor: emblem.color }}
                    />
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-700">Selected: {selectedEmblem.name}</p>

            {/* Type Selection */}
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Type</label>
                </div>
                <div className="flex flex-wrap gap-3">
                    {typeOptions.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => handleTypeChange(type.name)}
                            className={`w-12 h-12 border-2 rounded hover:shadow-md transition-all duration-200 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 ${selectedType === type.name
                                ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2'
                                : 'border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            <span className="text-base">{type.icon}</span>
                        </button>
                    ))}
                </div>
                <p className="text-sm mt-2 text-slate-700">Selected: {selectedType}</p>
            </div>
        </>
    )
}

export default Bows;