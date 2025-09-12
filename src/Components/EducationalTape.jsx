import React, { useState ,useEffect} from 'react';

const EducationalTape = ({ selectedOptions = {}, onOptionChange }) => {
    // State variables with descriptive names
    const [selectedHatbandColor, setSelectedHatbandColor] = useState('EUX');
    const [selectedMaterialType, setSelectedMaterialType] = useState('VELOUR');
    const [selectedChinStrapColor, setSelectedChinStrapColor] = useState('Mat');
    const [selectedButtonMaterialColor, setSelectedButtonMaterialColor] = useState('FOOD GRADE');
    const [selectedEmbroideryColor, setSelectedEmbroideryColor] = useState('gold');
    const [selectedButtonColor, setSelectedButtonColor] = useState('gold');
    const [embroideryText, setEmbroideryText] = useState('');




    useEffect(()=>{
        onOptionChange('hatbandColor',selectedHatbandColor)
    },[selectedHatbandColor])
    useEffect(()=>{
        onOptionChange('materialType',selectedMaterialType)
    },[selectedMaterialType])
    useEffect(()=>{
        onOptionChange('chinStrapColor',selectedChinStrapColor)
    },[selectedChinStrapColor])
    useEffect(()=>{
        onOptionChange('buttonMaterial',selectedButtonMaterialColor)
    },[selectedButtonMaterialColor])
    useEffect(()=>{
        onOptionChange('embroideryColor',selectedEmbroideryColor)
    },[selectedEmbroideryColor])
    useEffect(()=>{
        onOptionChange('buttonColor',selectedButtonColor)
    },[selectedButtonColor])
    useEffect(()=>{
        onOptionChange('embroideryText',embroideryText)
    },[embroideryText])
    
    // Color options with descriptive names
    const hatbandColorOptions = [
        { name: 'EUX', value: '#000000' },
        { name: 'SORT', value: '#000001' }, // Consider using different colors or removing duplicate
    ];

    const chinStrapColorOptions = [
        { name: 'Mat', value: '#2e2e2e' },
        { name: 'Blank', value: '#757575' },
        { name: 'Sort/Sort', value: '#000000' },
        { name: 'Sort/Gold', value: '#e0cd89' },
    ];

   

    const embroideryColorOptions = [
        { name: 'Gold', value: 'Gold', color: '#ba9200' },
        { name: 'Silver', value: 'Silver', color: '#757575' },
        { name: 'EUX', value: 'EUX', color: '#2e2e2e' },
        { name: 'HVID', value: 'HVID', color: '#E5E7EB' },
        { name: 'SORT', value: 'SORT', color: '#2e2e2e' },
    ];

    const buttonColorOptions = [
        { name: 'Gold', value: 'Gold', color: '#ba9200' },
    ];

    const materialEUXTypes = ['COTTON', 'VELOUR', 'SATIN', 'Glimmer'];
    const materialSORTTypes = [ 'VELOUR', 'SATIN', 'Glimmer'];
    
    const buttonMaterialMATTypes = [ 'FOOD GRADE'];
    const buttonMaterialBLANKTypes = [ 'BLANK CHAIN ​​STRAP','SHINY LEATHER CHIN STRAP'];
    const buttonMaterialSortSortTypes = [ 'BLACK CHIN STRAP WITH BLACK KNOTS'];
    const buttonMaterialSortGoldTypes = [ 'BLACK CHIN STRAP WITH GOLD KNOTS'];

    function getMaterialOptions(){
        switch (selectedHatbandColor) {
            case 'EUX':
                
                return materialEUXTypes;
            case 'SORT':
                
                return materialSORTTypes;
        
            default:
                return[];
        }
    }
    useEffect(()=>{
        let materialType=getMaterialOptions()
        if (materialType.length>0 && !materialType.includes(selectedMaterialType)) {
            console.log(materialType);
            
            setSelectedMaterialType(materialType[0])
        }
    },[selectedHatbandColor])
    
    
    function getMaterialOptions2(){
        switch (selectedChinStrapColor) {
            case 'Mat':
                
                return buttonMaterialMATTypes;
            case 'Blank':
                
                return buttonMaterialBLANKTypes;
            case 'Sort/Sort':
                
                return buttonMaterialSortSortTypes;
            case 'Sort/Gold':
                
                return buttonMaterialSortGoldTypes;
        
            default:
                return [];
        }
    }
    useEffect(()=>{
        let materialType=getMaterialOptions2()
        if (materialType.length>0) {
            console.log(materialType);
            
            setSelectedButtonMaterialColor(materialType[0])
        }
    },[selectedChinStrapColor])

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
                        style={{ backgroundColor: colorOption.color || colorOption.value }}
                        title={colorOption.name}
                    />
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
            <div className="flex space-x-3">
                {options.map((type) => (
                    <button
                        key={type}
                        onClick={() => onSelectionChange(type)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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
                <h3 className="text-2xl font-bold text-slate-900">Educational Tape</h3>
            </div>

            {/* Hatband Color Selection */}
            <ColorSelector
                label="Hatband"
                currentSelection={selectedHatbandColor}
                onSelectionChange={setSelectedHatbandColor}
                colorOptions={hatbandColorOptions}
            />

            {/* Material Type Selection */}
            <TypeSelector
                label="Materials"
                currentSelection={selectedMaterialType}
                onSelectionChange={setSelectedMaterialType}
                options={selectedHatbandColor==='EUX'?materialEUXTypes:materialSORTTypes}
            />

            {/* Chin Strap Color Selection */}
            <ColorSelector
                label="Chin strap"
                currentSelection={selectedChinStrapColor}
                onSelectionChange={setSelectedChinStrapColor}
                colorOptions={chinStrapColorOptions}
            />

            {/* Button Material Color Selection */}
            <TypeSelector
                label="Material"
                currentSelection={selectedButtonMaterialColor}
                onSelectionChange={setSelectedButtonMaterialColor}
                options={selectedChinStrapColor==='Mat'?buttonMaterialMATTypes:selectedChinStrapColor==='Blank'?buttonMaterialBLANKTypes:selectedChinStrapColor==='Sort/Sort'?buttonMaterialSortSortTypes:buttonMaterialSortGoldTypes}
            />

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
                            value={embroideryText}
                            onChange={(e) => setEmbroideryText(e.target.value)}
                            placeholder="Free Text"
                            className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embroidery Color Selection */}
            <ColorSelector
                label="Embroidery color"
                currentSelection={selectedEmbroideryColor}
                onSelectionChange={setSelectedEmbroideryColor}
                colorOptions={embroideryColorOptions}
            />

            {/* Button Color Selection */}
            <ColorSelector
                label="Button color"
                currentSelection={selectedButtonColor}
                onSelectionChange={setSelectedButtonColor}
                colorOptions={buttonColorOptions}
            />
        </>
    );
}

export default EducationalTape;