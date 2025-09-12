import React, { useState, useEffect } from 'react'
import img1 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUD/eud gold.jpg';
import img2 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUD/Eud silver.jpg';
import img3 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUX/Eux gold.jpg';
import img4 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUX/eux silver diamant.jpg';
import img5 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUX/EUX gold diamant.jpg';
import img6 from '../assets/images/wetransfer_eud_2025-09-09_1455/EUX/EUX silver.jpg';
import img8 from '../assets/images/wetransfer_eud_2025-09-09_1455/HF/hf gold diamant.jpg';
import img7 from '../assets/images/wetransfer_eud_2025-09-09_1455/HF/hf gold.jpg';
import img9 from '../assets/images/wetransfer_eud_2025-09-09_1455/HF/hf silver.jpg';
// import img10 from '../assets/images/wetransfer_eud_2025-09-09_1455/HF/hf silver.jpg';
import img11 from '../assets/images/wetransfer_eud_2025-09-09_1455/HHX/hhx gold diamant.jpg';
import img12 from '../assets/images/wetransfer_eud_2025-09-09_1455/HHX/hhx gold.jpg';
import img13 from '../assets/images/wetransfer_eud_2025-09-09_1455/HHX/hhx silver diamant.jpg';
import img14 from '../assets/images/wetransfer_eud_2025-09-09_1455/HHX/hhx silver.jpg';
import img15 from '../assets/images/wetransfer_eud_2025-09-09_1455/HTX/Atom htx gold.jpg';
import img16 from '../assets/images/wetransfer_eud_2025-09-09_1455/HTX/atom htx silver.jpg';
import img17 from '../assets/images/wetransfer_eud_2025-09-09_1455/HTX/Htx gold diam.jpg';
import img18 from '../assets/images/wetransfer_eud_2025-09-09_1455/HTX/Htx gold.jpg';
import kunst1 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/ahornblad gold.jpg';
import kunst2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/ahornblad silver.jpg';
import kunst3 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/anker gold.jpg';
import kunst4 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/anker silver.jpg';
import kunst5 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/atom gold.jpg';
import kunst6 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/atom silver.jpg';
import kunst7 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/dna gold.jpg';
import kunst8 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/dna silver.jpg';
import kunst9 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/f key gold.jpg';
import kunst10 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/f key silver.jpg';
import kunst11 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/globus gold.jpg';
// import kunst12 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/globus silver.jpg';
// import kunst13 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/hjerte guld.jpg';
// import kunst14 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/hjerte sølv.jpg';
// import kunst15 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lb guld.jpg';
// import kunst16 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lb silver.jpg';
// import kunst17 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lt guld.jpg';
// import kunst18 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lt silver.jpg';
// import kunst19 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lotus guld.jpg';
// import kunst20 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/lotus silver.jpg';
// import kunst21 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/node gold.jpg';
// import kunst22 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/node silver.jpg';
// import kunst23 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/pi gold.jpg';
// import kunst24 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/pi silver.jpg';
// import kunst25 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/sport gold.jpg';
// import kunst26 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/sport silver.jpg';
// import kunst27 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/teater gold.jpg';
// import kunst28 from '../assets/images/wetransfer_eud_2025-09-09_1455/Kunst/teater silver.jpg';
// import royal1 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/jupiter gold.png';
// import royal2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/jupiter silv.png';
// import royal3 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/merkur gold.png';
// import royal4 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/merkur silv.png';
// import royal5 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/neptun gold.png';
// import royal6 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/neptun silv.png';
// import royal7 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/pluto gold.png';
// import royal8 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/pluto silv.png';
// import royal9 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/saturn gold.png';
// import royal10 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/saturn silv.png';
// import royal11 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/venus gold.png';
// import royal12 from '../assets/images/wetransfer_eud_2025-09-09_1455/Royal kokarde/venus silv.png';
// import religios1 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/halvmåne gold simli.png';
// import religios2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/halvmåne gold.jpg';
// import religios3 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/halvmåne silver simli.png';
// import religios4 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/halvmåne silver.jpg';
// import religios5 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/merkurtav gold.jpg';
// import religios6 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/merkurtav gold simli.png';
// import religios7 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/merkurtav sølv diamant.jpg';
// import religios8 from '../assets/images/wetransfer_eud_2025-09-09_1455/Religios/merkurtav silver.jpg';
// import stx1 from '../assets/images/wetransfer_eud_2025-09-09_1455/STX/1.png';
// import stx2 from '../assets/images/wetransfer_eud_2025-09-09_1455/STX/2.png';
// import stx3 from '../assets/images/wetransfer_eud_2025-09-09_1455/STX/3.png';
// import stx4 from '../assets/images/wetransfer_eud_2025-09-09_1455/STX/4.png';
// import stx5 from '../assets/images/wetransfer_eud_2025-09-09_1455/STX/5.png';
// import stj1 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/bull gold.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/bull siver.jpg';
// import stj3 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/fisken gold.jpg';
// import stj4 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj5 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj6 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj7 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj8 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj9 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj10 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj11 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj12 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj13 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj14 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj15 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj16 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj17 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj18 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj19 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj21 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj22 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj23 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj24 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj2 from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';
// import stj from '../assets/images/wetransfer_eud_2025-09-09_1455/Stjernetegn/.jpg';


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
        { name: 'eud gold', icon: img1 },
        // { name: 'Sweden', icon: '🇸🇪' },
        // { name: 'Norway', icon: '🇳🇴' },
        // { name: 'Germany', icon: '🇩🇪' },
        // { name: 'France', icon: '🇫🇷' },
        { name: 'Eud silver', icon: img2 },
        { name: 'EUX gold', icon: img3 },
        { name: 'EUX silver', icon: img4 },
        { name: 'hf gold diamant', icon: img5 },
        { name: 'hf gold', icon: img6 },
        { name: 'hf silver', icon: img7 },
        { name: 'hhx gold diamant', icon: img8 },
        { name: 'hhx gold', icon: img9 },
        // { name: 'Italy9', icon: img10 },
        { name: 'hhx silver diamant', icon: img11 },
        { name: 'hhx silver', icon: img12 },
        { name: 'Atom htx gold', icon: img13 },
        { name: 'atom htx silver', icon: img14 },
        { name: 'Htx gold diam', icon: img15 },
        { name: 'Htx gold', icon: img16 },
        { name: 'ahornblad gold', icon: img17 },
        { name: 'ahornblad silver', icon: img18 },
        { name: 'anker gold', icon: kunst1 },
        { name: 'anker silver', icon: kunst2 },
        { name: 'atom gold', icon: kunst3 },
        { name: 'atom silver', icon: kunst4 },
        { name: 'dna gold', icon: kunst5 },
        { name: 'dna silver', icon: kunst6 },
        { name: 'f key gold', icon: kunst7 },
        { name: 'f key silver', icon: kunst8 },
        { name: 'globus gold', icon: kunst9 },
        { name: 'globus silver', icon: kunst10 },
        { name: 'hjerte guld', icon: kunst11 },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        // { name: 'Italy16', icon: kunst },
        
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
                    <span className="text-sm pb-5
                     font-semibold text-slate-700">Emblem</span>
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
                            className={`w-12 h-12 border-2 rounded hover:shadow-md 
                                transition-all duration-200 flex items-center justify-center
                                   hover:from-red-100 hover:to-red-200 ${selectedType === type.name
                                ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2'
                                : 'border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            
                            <img src={type.icon} className='h-10' alt="" />
                        </button>
                    ))}
                </div>
                <p className="text-sm mt-2 text-slate-700">Selected: {selectedType}</p>
            </div>
        </>
    )
}

export default Bows;