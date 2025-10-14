import React, { useState, useEffect } from 'react';

const Accessories = ({ selectedOptions = {}, onOptionChange,errors,setErrors }) => {
   const [hatBoxColor, setHatBoxColor] = useState('#DC2626');
   const [selectedHatBoxType, setSelectedHatBoxType] = useState(selectedOptions.Hueæske || 'Standard');
   const [selectedPremiumæske, setSelectedPremiumæske] = useState(selectedOptions['Premium æske'] || '');
   
   // Individual accessory selections
   const [ballpointPenSelection, setBallpointPenSelection] = useState(selectedOptions.Huekuglepen || 'No');
   const [silkPillowSelection, setSilkPillowSelection] = useState(selectedOptions.Silkepude || 'No');
   const [badgesSelection, setBadgesSelection] = useState(selectedOptions['Ekstra korkarde'] || 'No');
   const [lilFlagSelection, setLilFlagSelection] = useState(selectedOptions['Lille Flag'] || 'No');
   const [glovesSelection, setGlovesSelection] = useState(selectedOptions.Handsker || 'No');
   const [largeBallpointPenSelection, setLargeBallpointPenSelection] = useState(selectedOptions['Store kuglepen'] || 'No');
   const [smartTagSelection, setSmartTagSelection] = useState(selectedOptions['Smart Tag'] || 'No');
   const [lightBallSelection, setLightBallSelection] = useState(selectedOptions.Lyskugle || 'No');
   const [champagneGlassSelection, setChampagneGlassSelection] = useState(selectedOptions['Luksus champagneglas'] || 'No');
   const [whistleSelection, setWhistleSelection] = useState(selectedOptions.Fløjte || 'No');
   const [trumpetSelection, setTrumpetSelection] = useState(selectedOptions.Trompet || 'No');
   const [bucketpinsSelection, setBucketpinsSelection] = useState(selectedOptions.Bucketpins || 'No');
   const [extraKokardeText, setExtraKokardeText] = useState(selectedOptions['Ekstra korkarde Text'] || '');
   const [lilFlagText, setLilFlagText] = useState(selectedOptions['Lille Flag Text'] || '');
   
   // Validation states
   

   const colorOptions = [
       { name: 'Burgundy', value: '#7F1D1D' },
       { name: 'Navy', value: '#1E3A8A' },
       { name: 'Red', value: '#DC2626' }
   ];

   const accessoryOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
   ];

   const hatBoxTypes = ['Standard', 'Luksus æske','Premium æske'];
   const premiumaske = [ 'Grøn velour', 'Sort velour', 'Kunstlæderæske' ];

   // Validation function
   const validateFields = () => {
  const newErrors = {};

  if (badgesSelection === 'Yes' && !extraKokardeText.trim()) {
    newErrors.extraKokardeText = 'Ekstra korkarde tekst er påkrævet';
  }

  if (lilFlagSelection === 'Yes' && !lilFlagText.trim()) {
    newErrors.lilFlagText = 'Lille flag tekst er påkrævet';
  }

  setErrors(newErrors);
  return newErrors; // ✅ Return the actual object, not a boolean
};

// =====================
// === EFFECT HOOKS ===
// =====================

// ✅ Hueæske
useEffect(() => {
  onOptionChange('Hueæske', selectedHatBoxType);
}, [selectedHatBoxType]);

useEffect(() => {
  if (selectedHatBoxType !== 'Premium æske') {
    setSelectedPremiumæske('');
  } else if (selectedHatBoxType === 'Premium æske' && !selectedPremiumæske) {
    setSelectedPremiumæske('Grøn velour');
  }
}, [selectedHatBoxType]);

useEffect(() => {
  onOptionChange('Premium æske', selectedPremiumæske);
}, [selectedPremiumæske]);

useEffect(() => {
  onOptionChange('Huekuglepen', ballpointPenSelection);
}, [ballpointPenSelection]);

useEffect(() => {
  onOptionChange('Silkepude', silkPillowSelection);
}, [silkPillowSelection]);

// ✅ Ekstra korkarde (badges)
useEffect(() => {
  onOptionChange('Ekstra korkarde', badgesSelection);

  if (badgesSelection === 'Yes') {
    const errs = validateFields();
    setErrors(errs);
  } else {
    // Clear only this field's error when turned off
    setErrors(prev => {
      const { extraKokardeText, ...rest } = prev;
      return rest;
    });
  }
}, [badgesSelection, extraKokardeText]);

// ✅ Lille Flag
useEffect(() => {
  onOptionChange('Lille Flag', lilFlagSelection);

  if (lilFlagSelection === 'Yes') {
    const errs = validateFields();
    setErrors(errs);
  } else {
    setErrors(prev => {
      const { lilFlagText, ...rest } = prev;
      return rest;
    });
  }
}, [lilFlagSelection, lilFlagText]);

// ✅ Text fields (update parent and validate)
useEffect(() => {
  onOptionChange('Ekstra korkarde Text', extraKokardeText);
  if (badgesSelection === 'Yes') validateFields();
}, [extraKokardeText]);

useEffect(() => {
  onOptionChange('Lille Flag Text', lilFlagText);
  if (lilFlagSelection === 'Yes') validateFields();
}, [lilFlagText]);

// ✅ Other simple fields
useEffect(() => {
  onOptionChange('Handsker', glovesSelection);
}, [glovesSelection]);

useEffect(() => {
  onOptionChange('Store kuglepen', largeBallpointPenSelection);
}, [largeBallpointPenSelection]);

useEffect(() => {
  onOptionChange('Smart Tag', smartTagSelection);
}, [smartTagSelection]);

useEffect(() => {
  onOptionChange('Lyskugle', lightBallSelection);
}, [lightBallSelection]);

useEffect(() => {
  onOptionChange('Luksus champagneglas', champagneGlassSelection);
}, [champagneGlassSelection]);

useEffect(() => {
  onOptionChange('Fløjte', whistleSelection);
}, [whistleSelection]);

useEffect(() => {
  onOptionChange('Trompet', trumpetSelection);
}, [trumpetSelection]);

useEffect(() => {
  onOptionChange('Bucketpins', bucketpinsSelection);
}, [bucketpinsSelection]);

   // Helper component for accessory selection
   const AccessorySelector = ({ 
        label, 
        currentSelection, 
        onSelectionChange 
    }) => (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-semibold text-slate-700">{label}</label>
            </div>
            <div className="flex space-x-3">
                {accessoryOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelectionChange(option.value)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                            currentSelection === option.value
                                ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
                                : 'border-slate-200 hover:border-slate-400'
                        }`}
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
               <h3 className="text-2xl font-bold text-slate-900">TILBEHØR</h3>
           </div>

           {/* Hat Box Type Selection */}
           <div className="space-y-4">
               <div>
                   <label className="text-sm font-semibold text-slate-700">Hueæske</label>
                   
                   <div className="flex items-center gap-2 mt-1">
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                           {selectedHatBoxType}
                       </span>
                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                           {selectedHatBoxType === 'Premium Box' ? 'Inkluderet i pakken 0' : selectedHatBoxType === 'Luxury Box' ? '+ 249 DKK' : ''}
                       </span>
                   </div>
               </div>
               <div className="flex space-x-3 flex-wrap ">
                   {hatBoxTypes.map((type) => (
                       <button
                           key={type}
                           onClick={() => setSelectedHatBoxType(type)}
                           className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 m-1 ${
                               selectedHatBoxType === type
                                   ? 'bg-blue-600 text-white shadow-md'
                                   : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                           }`}
                       >
                           {type}
                       </button>
                   ))}
               </div>
           </div>

            {selectedHatBoxType === 'Premium æske' && 
             <div className="space-y-4">
               <div>
                   <label className="text-sm font-semibold text-slate-700">Premium æske</label>
                   
                   <div className="flex items-center gap-2 mt-1">
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                           {selectedPremiumæske}
                       </span>
                   </div>
               </div>
               <div className="flex space-x-3 flex-wrap">
                   {premiumaske.map((type) => (
                       <button
                           key={type}
                           onClick={() => setSelectedPremiumæske(type)}
                           className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 m-1 ${
                               selectedPremiumæske === type
                                   ? 'bg-blue-600 text-white shadow-md'
                                   : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                           }`}
                       >
                           {type}
                       </button>
                   ))}
               </div>
           </div>
            }
           {/* Individual Accessory Selectors */}
           <AccessorySelector
               label="Huekuglepen"
               currentSelection={ballpointPenSelection}
               onSelectionChange={setBallpointPenSelection}
           />

           <AccessorySelector
               label="Silkepude"
               currentSelection={silkPillowSelection}
               onSelectionChange={setSilkPillowSelection}
           />

           <AccessorySelector
               label="Ekstra korkarde"
               currentSelection={badgesSelection}
               onSelectionChange={setBadgesSelection}
           />

           {badgesSelection === 'Yes' && (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-slate-700">Ekstra korkarde tekst</label>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            value={extraKokardeText}
                            onChange={(e) => setExtraKokardeText(e.target.value)}
                            placeholder="Fri tekst"
                            maxLength={26}
                            className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 ${
                                errors.extraKokardeText 
                                    ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                                    : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                            }`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${
                                errors.extraKokardeText ? 'bg-red-500' : 'bg-blue-500'
                            }`}></div>
                        </div>
                    </div>
                    {errors.extraKokardeText && (
                        <p className="text-sm text-red-600 font-medium">{errors.extraKokardeText}</p>
                    )}
                    <p className="text-sm text-slate-600">Valgt tekst: {extraKokardeText || 'Ingen tekst'}</p>
                </div>
            )}
           
           <AccessorySelector
               label="Lille flag"
               currentSelection={lilFlagSelection}
               onSelectionChange={setLilFlagSelection}
           />

           {lilFlagSelection === 'Yes' && (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-slate-700">Lille Flag tekst</label>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            value={lilFlagText}
                            onChange={(e) => setLilFlagText(e.target.value)}
                            placeholder="Skriv navnet på det, land som du ønsker"
                            maxLength={26}
                            className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 ${
                                errors.lilFlagText 
                                    ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                                    : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                            }`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${
                                errors.lilFlagText ? 'bg-red-500' : 'bg-blue-500'
                            }`}></div>
                        </div>
                    </div>
                    {errors.lilFlagText && (
                        <p className="text-sm text-red-600 font-medium">{errors.lilFlagText}</p>
                    )}
                    <p className="text-sm text-slate-600">Valgt tekst: {lilFlagText || 'Ingen tekst'}</p>
                </div>
            )}

           <AccessorySelector
               label="Handsker"
               currentSelection={glovesSelection}
               onSelectionChange={setGlovesSelection}
           />

           <AccessorySelector
               label="Store kuglepen"
               currentSelection={largeBallpointPenSelection}
               onSelectionChange={setLargeBallpointPenSelection}
           />

           <AccessorySelector
               label="Smart Tag"
               currentSelection={smartTagSelection}
               onSelectionChange={setSmartTagSelection}
           />

           <AccessorySelector
               label="Lyskugle"
               currentSelection={lightBallSelection}
               onSelectionChange={setLightBallSelection}
           />

           <AccessorySelector
               label="Luksus champagneglas"
               currentSelection={champagneGlassSelection}
               onSelectionChange={setChampagneGlassSelection}
           />

           <AccessorySelector
               label="Fløjte"
               currentSelection={whistleSelection}
               onSelectionChange={setWhistleSelection}
           />

           <AccessorySelector
               label="Trompet"
               currentSelection={trumpetSelection}
               onSelectionChange={setTrumpetSelection}
           />

           <AccessorySelector
               label="Bucketpins"
               currentSelection={bucketpinsSelection}
               onSelectionChange={setBucketpinsSelection}
           />
       </>
   );
}

export default Accessories;