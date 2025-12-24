import React, { useState, useEffect } from 'react';

const Foer = ({ selectedOptions = {}, onOptionChange, currentEmblem, program }) => {
    // ====================== Default Values ======================
    const getDefaultKokardeMaterial = () => 'Læder';
    const getDefaultKokardeColor = () => 'Hvid';
    const getDefaultBowColor = () => 'Hvid';
    const getDefaultFoerMaterial = () => 'Polyester';

    const getDefaultSatinType = () => {
        switch (program?.toLowerCase()) {
            case 'hhx': return 'Royal blå';
            case 'htx': return 'Navy blå';
            case 'stx': return 'Bordeaux';
            case 'hf':  return 'Light blå';
            case 'eux': return 'Grå';
            case 'eud': return 'Purple';
            default:    return 'Bordeaux';
        }
    };

    const getDefaultSilkeType = () => 'Hvid';

    // ====================== State ======================
    const [selectedKokardeMaterial, setSelectedKokardeMaterial] = useState(
        selectedOptions.Svederem || getDefaultKokardeMaterial()
    );
    const [selectedKokardeColor, setSelectedKokardeColor] = useState(
        selectedOptions.Farve || getDefaultKokardeColor()
    );
    const [selectedBowColor, setSelectedBowColor] = useState(
        selectedOptions.Sløjfe || getDefaultBowColor()
    );
    const [selectedFoerMaterial, setSelectedFoerMaterial] = useState(
        selectedOptions.Foer || getDefaultFoerMaterial()
    );
    const [selectedbowMaterialType, setBowMaterialTypes] = useState(
        selectedOptions['Satin Type'] || ''
    );
    const [selectedsilkeTypes, setSilkeTypes] = useState(
        selectedOptions['Silk Type'] || ''
    );

    // ====================== Restricted Programs ======================
    const restrictedPrograms = [
        'Sosuassistent', 'Sosuhjælper', 'Frisør', 'Kosmetolog',
        'Pædagog', 'PAU', 'Ernæringsassisten'
    ];
    const isRestricted = restrictedPrograms.some(
        p => p.toLowerCase() === program?.toLowerCase()
    );

    const kokardeMaterialTypes = isRestricted
        ? ['Læder']
        : ['Læder', 'Kunstlæder', 'Ruskin', 'Alcantra'];

    // ====================== Emblem & Colors ======================
    const getCurrentEmblem = () => {
        return currentEmblem.name === 'Guld'
            ? { name: 'Guld', value: 'Guld', color: '#FFD700' }
            : { name: 'Sølv', value: 'Sølv', color: '#C0C0C0' };
    };

    const getSatinColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx': return { name: 'Royal blå', value: 'Royal blå', color: '#4169e1' };
            case 'htx': return { name: 'Navy blå',  value: 'Navy blå',  color: '#000080' };
            case 'stx': return { name: 'Bordeaux',  value: 'Bordeaux',  color: '#800020' };
            case 'hf':  return { name: 'Light blå', value: 'Light blå', color: '#ADD8E6' };
            case 'eux': return { name: 'Grå',       value: 'Grå',       color: '#5d5d66' };
            case 'eud': return { name: 'Purple',    value: 'Purple',    color: '#522854' };
            default:    return { name: 'Bordeaux',  value: 'Bordeaux',  color: '#800020' };
        }
    };

    const bowColorOptions = [
        { name: 'Hvid',  value: 'Hvid',  color: '#FFFFFF' },
        { name: 'Sort',  value: 'Sort',  color: '#000000' },
        getCurrentEmblem()
    ];

    const bowMaterialTypes = [
        { name: 'Hvid',       value: 'Hvid',       color: '#fafcfd' },
        { name: 'Brun',       value: 'Brun',       color: '#a66f5a' },
        getSatinColor(),
        { name: 'Champagne',  value: 'Champagne',  color: '#F7E7CE' },
    ];

    const silkeTypes = [
        { name: 'Hvid', value: 'Hvid', color: '#ffffff' },
        { name: 'Sort', value: 'Sort', color: '#000000' },
        { name: 'Rosa', value: 'Rosa', color: '#FFC0CB' },
    ];

    const foerMaterialTypes = ['Viskose', 'Polyester', 'Satin', 'Silk'];

    // ====================== Helper: Always send message ======================
    const sendMessage = (message) => {
        ['preview-iframe', 'preview-iframe2'].forEach(id => {
            const iframe = document.getElementById(id);
            if (iframe?.contentWindow) {
                iframe.contentWindow.postMessage(message, "*");
            }
        });
    };

    // ====================== postMessage Effects (सभी हमेशा भेजेंगे) ======================

    // Svederem
    useEffect(() => {
        onOptionChange('Svederem', selectedKokardeMaterial);
        sendMessage(`Foer Svederem:${selectedKokardeMaterial.toLowerCase()}`);
    }, [selectedKokardeMaterial]);

    // Farve
    useEffect(() => {
        onOptionChange('Farve', selectedKokardeColor);
        sendMessage(`Foer Farve:${selectedKokardeColor.toLowerCase()}`);
    }, [selectedKokardeColor]);

    // Sløjfe
    useEffect(() => {
        onOptionChange('Sløjfe', selectedBowColor);
        sendMessage(`Foer Slojfe:${selectedBowColor.toLowerCase()}`);
    }, [selectedBowColor]);

    // Foring (Foer Material)
    useEffect(() => {
        onOptionChange('Foer', selectedFoerMaterial);
        sendMessage(`Foer Foring:${selectedFoerMaterial.toLowerCase()}`);
    }, [selectedFoerMaterial]);

    // Satin Type
    useEffect(() => {
        onOptionChange('Satin Type', selectedbowMaterialType);
        if (selectedbowMaterialType) {
            setSilkeTypes('');
            onOptionChange('Silk Type', '');
            sendMessage(`Foer SatinType:${selectedbowMaterialType.toLowerCase()}`);
        } else {
            sendMessage(`Foer SatinType:`);
        }
    }, [selectedbowMaterialType]);

    // Silk Type
    useEffect(() => {
        onOptionChange('Silk Type', selectedsilkeTypes);
        if (selectedsilkeTypes) {
            setBowMaterialTypes('');
            onOptionChange('Satin Type', '');
            sendMessage(`Foer SilkType:${selectedsilkeTypes.toLowerCase()}`);
        } else {
            sendMessage(`Foer SilkType:`);
        }
    }, [selectedsilkeTypes]);

    // जब Foer Material बदलता है → Satin/Silk को हैंडल करें + मैसेज भेजें
    useEffect(() => {
        if (selectedFoerMaterial === 'Satin') {
            if (!selectedbowMaterialType && bowMaterialTypes.length > 0) {
                setBowMaterialTypes(bowMaterialTypes[0].value);
            }
            setSilkeTypes('');
            onOptionChange('Silk Type', '');
        } else if (selectedFoerMaterial === 'Silk') {
            if (!selectedsilkeTypes && silkeTypes.length > 0) {
                setSilkeTypes(silkeTypes[0].value);
            }
            setBowMaterialTypes('');
            onOptionChange('Satin Type', '');
        } else if (selectedFoerMaterial === 'Viskose' || selectedFoerMaterial === 'Polyester') {
            setBowMaterialTypes('');
            setSilkeTypes('');
            onOptionChange('Satin Type', '');
            onOptionChange('Silk Type', '');
            sendMessage(`Foer SatinType:`);
            sendMessage(`Foer SilkType:`);
        }
    }, [selectedFoerMaterial]);

    // Kokarde Color options according to material
    const getKokardeColorOptions = (material) => {
        switch (material) {
            case 'Læder':      return [{ name: 'Hvid', value: 'Hvid', color: '#ffffff' }, { name: 'Sort', value: 'Sort', color: '#000000' }];
            case 'Kunstlæder': return [{ name: 'Vegansk', value: 'Vegansk', color: '#006644' }];
            case 'Ruskin':     return [{ name: 'Cognac', value: 'Cognac', color: '#a66f5a' }];
            case 'Alcantra':   return [{ name: 'Sort', value: 'Sort', color: '#000000' }];
            default:           return [{ name: 'Hvid', value: 'Hvid', color: '#ffffff' }];
        }
    };

    const kokardeColorOptions = getKokardeColorOptions(selectedKokardeMaterial);

    // अगर material बदलने से color invalid हो जाए तो पहला valid color चुन लें
    useEffect(() => {
        if (kokardeColorOptions.length > 0 && 
            !kokardeColorOptions.some(opt => opt.value === selectedKokardeColor)) {
            setSelectedKokardeColor(kokardeColorOptions[0].value);
        }
    }, [selectedKokardeMaterial]);

    // ====================== Reusable Components ======================
    const ColorSelector = ({ label, currentSelection, onSelectionChange, colorOptions }) => (
        <div className="space-y-4 mt-6">
            <label className="text-sm font-semibold text-slate-700">{label}</label>
            <div className="flex space-x-3">
                {colorOptions.map(opt => (
                    <button
                        key={opt.value}
                        onClick={() => onSelectionChange(opt.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all hover:scale-110 flex items-center justify-center ${
                            currentSelection === opt.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
                        style={{ backgroundColor: opt.color }}
                        title={opt.name}
                    />
                ))}
            </div>
            <p className="text-sm mt-2 text-slate-600">Valgt: {currentSelection || 'Ingen'}</p>
        </div>
    );

    const TypeSelector = ({ label, currentSelection, onSelectionChange, options }) => (
        <div className="space-y-4 mt-6">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
                <div className="mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {currentSelection || 'Ingen'}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {options.map(type => (
                    <button
                        key={type}
                        onClick={() => onSelectionChange(type)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                            currentSelection === type
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {currentSelection === 'Satin' && (
                <ColorSelector
                    label="Satin Type"
                    currentSelection={selectedbowMaterialType}
                    onSelectionChange={setBowMaterialTypes}
                    colorOptions={bowMaterialTypes}
                />
            )}

            {currentSelection === 'Silk' && (
                <ColorSelector
                    label="Silk Type"
                    currentSelection={selectedsilkeTypes}
                    onSelectionChange={setSilkeTypes}
                    colorOptions={silkeTypes}
                />
            )}
        </div>
    );

    // ====================== Render ======================
    return (
        <>
            <div className="space-y-8 mt-8">
                <h3 className="text-2xl font-bold text-slate-900">FOER</h3>

                <TypeSelector
                    label="Svederem"
                    currentSelection={selectedKokardeMaterial}
                    onSelectionChange={setSelectedKokardeMaterial}
                    options={kokardeMaterialTypes}
                />

                <ColorSelector
                    label="Farve"
                    currentSelection={selectedKokardeColor}
                    onSelectionChange={setSelectedKokardeColor}
                    colorOptions={kokardeColorOptions}
                />

                <TypeSelector
                    label="Foring"
                    currentSelection={selectedFoerMaterial}
                    onSelectionChange={setSelectedFoerMaterial}
                    options={foerMaterialTypes}
                />

                <ColorSelector
                    label="Sløjfe"
                    currentSelection={selectedBowColor}
                    onSelectionChange={setSelectedBowColor}
                    colorOptions={bowColorOptions}
                />
            </div>
        </>
    );
};

export default Foer;