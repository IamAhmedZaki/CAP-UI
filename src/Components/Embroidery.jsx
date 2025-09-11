import React, { useState, useEffect } from 'react';

const Embroidery = ({ selectedOptions = {}, onOptionChange }) => {
    // State variables with descriptive names
    const [selectedNameEmbroideryColor, setSelectedNameEmbroideryColor] = useState('Gold');
    const [nameEmbroideryText, setNameEmbroideryText] = useState('');
    const [selectedSchoolEmbroideryColor, setSelectedSchoolEmbroideryColor] = useState('WHITE');
    const [schoolEmbroideryText, setSchoolEmbroideryText] = useState('');
    
    // Color options with descriptive names
    const nameEmbroideryColorOptions = [
        { name: 'Gold', value: '#ba9200' },
        { name: 'Silver', value: '#757575' },
        { name: 'STX', value: '#782834' },   
        { name: 'WHITE', value: '#E5E7EB' },
        { name: 'BLACK', value: '#2e2e2e' },
    ];
    
    const schoolEmbroideryColorOptions = [
        { name: 'WHITE', value: '#E5E7EB' },
        { name: 'BLACK', value: '#2e2e2e' },
        { name: 'Gold', value: '#ba9200' },
        { name: 'Silver', value: '#757575' },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('nameEmbroideryColor', selectedNameEmbroideryColor);
    }, [selectedNameEmbroideryColor]);

    useEffect(() => {
        onOptionChange('nameEmbroideryText', nameEmbroideryText);
    }, [nameEmbroideryText]);

    useEffect(() => {
        onOptionChange('schoolEmbroideryColor', selectedSchoolEmbroideryColor);
    }, [selectedSchoolEmbroideryColor]);

    useEffect(() => {
        onOptionChange('schoolEmbroideryText', schoolEmbroideryText);
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
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                            currentSelection === colorOption.name
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
                        style={{ backgroundColor: colorOption.value }}
                        title={colorOption.name}
                    />
                ))}
            </div>
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
                        Included in the package
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
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Embroidery</h3>
            </div>

            {/* Name Embroidery Section */}
            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Embroidery on the front</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                                Included in the package
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
                            placeholder="Free Text"
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
                label="Embroidery color"
                currentSelection={selectedNameEmbroideryColor}
                onSelectionChange={setSelectedNameEmbroideryColor}
                colorOptions={nameEmbroideryColorOptions}
            />
            
            {/* School Embroidery Section */}
            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Embroidery on the front</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                                Included in the package
                            </span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={schoolEmbroideryText}
                            onChange={(e) => setSchoolEmbroideryText(e.target.value)}
                            placeholder="Free Text"
                            className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* School Embroidery Color Selection */}
            <ColorSelector
                label="Embroidery color"
                currentSelection={selectedSchoolEmbroideryColor}
                onSelectionChange={setSelectedSchoolEmbroideryColor}
                colorOptions={schoolEmbroideryColorOptions}
            />
        </>
    );
}

export default Embroidery;