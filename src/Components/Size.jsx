import React, { useState, useEffect } from 'react';

const Size = ({ selectedOptions = {}, onOptionChange }) => {
    const [selectedSize, setSelectedSize] = useState(49.5);
    const [selectedMillimeterAdjustment, setSelectedMillimeterAdjustment] = useState('No');
    
    const sizeOptions = [
        49.5, 50, 50.5, 51, 51.5,
        52, 52.5, 53, 53.5, 54, 54.5,
        55, 55.5, 56, 56.5, 57, 57.5,
        58, 58.5, 59, 59.5, 60, 60.5,
        61, 61.5, 62, 62.5, 63, 63.5,
        64, 64.5, 65
    ];
    
    const millimeterAdjustmentOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
    ];

    // Effect hooks to propagate changes to parent component
    useEffect(() => {
        onOptionChange('size', selectedSize);
    }, [selectedSize]);

    useEffect(() => {
        onOptionChange('millimeterAdjustment', selectedMillimeterAdjustment);
    }, [selectedMillimeterAdjustment]);

    // Reusable size selector component
    const SizeSelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange, 
        sizeOptions 
    }) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <label className="text-sm font-semibold text-slate-700">{label}</label>
                    <p className="text-xs text-slate-500">{currentSelection}</p>
                </div>
            </div>
            <div className="flex space-x-3 flex-wrap">
                {sizeOptions.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSelectionChange(size)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 my-3 flex items-center justify-center ${
                            currentSelection === size
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2 bg-blue-100'
                                : 'border-slate-200 hover:border-slate-400 bg-white'
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );

    // Reusable option selector component
    const OptionSelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange, 
        options 
    }) => (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
            </div>
            <div className="flex space-x-3">
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

    return (
        <>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Size</h3>
            </div>

            {/* Size Selection */}
            <SizeSelector
                label="Choose size"
                currentSelection={selectedSize}
                onSelectionChange={setSelectedSize}
                sizeOptions={sizeOptions}
            />

            {/* Millimeter Adjustment Selection */}
            <OptionSelector
                label="Millimeter adjustment set"
                currentSelection={selectedMillimeterAdjustment}
                onSelectionChange={setSelectedMillimeterAdjustment}
                options={millimeterAdjustmentOptions}
            />
        </>
    );
}

export default Size;

