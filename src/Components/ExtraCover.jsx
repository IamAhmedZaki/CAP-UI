import React, { useState, useEffect } from 'react';

const ExtraCover = ({ selectedOptions = {}, onOptionChange }) => {
    const [selectedExtraCoverOption, setSelectedExtraCoverOption] = useState('Yes');
           
    const extraCoverOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
    ];

    // Effect hook to propagate changes to parent component
    useEffect(() => {
        onOptionChange('extraCoverOption', selectedExtraCoverOption);
    }, [selectedExtraCoverOption]);
    
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
                <h3 className="text-2xl font-bold text-slate-900">Extra Cover</h3>
            </div>

            {/* Extra Cover Selection */}
            <OptionSelector
                label="Tilvælg"
                currentSelection={selectedExtraCoverOption}
                onSelectionChange={setSelectedExtraCoverOption}
                options={extraCoverOptions}
            />
        </>
    );
}

export default ExtraCover;