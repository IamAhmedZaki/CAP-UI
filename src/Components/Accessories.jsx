import React, { useState, useEffect } from 'react';

const Accessories = ({ selectedOptions = {}, onOptionChange }) => {
   const [hatBoxColor, setHatBoxColor] = useState('#DC2626');
   const [selectedHatBoxType, setSelectedHatBoxType] = useState('Standard');
   const [selectedPremiumæske, setSelectedPremiumæske] = useState('');
   
   // Individual accessory selections
   const [ballpointPenSelection, setBallpointPenSelection] = useState('No');
   const [silkPillowSelection, setSilkPillowSelection] = useState('No');
   const [badgesSelection, setBadgesSelection] = useState('No');
   const [glovesSelection, setGlovesSelection] = useState('No');
   const [largeBallpointPenSelection, setLargeBallpointPenSelection] = useState('No');
   const [smartTagSelection, setSmartTagSelection] = useState('No');
   const [lightBallSelection, setLightBallSelection] = useState('No');
   const [champagneGlassSelection, setChampagneGlassSelection] = useState('No');
   const [whistleSelection, setWhistleSelection] = useState('No');
   const [trumpetSelection, setTrumpetSelection] = useState('No');
   const [bucketpinsSelection, setBucketpinsSelection] = useState('No');
   const [embroideryText, setEmbroideryText] = useState('');

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
   const premiumaske = [ 'Grøn velouræske', 'Sort velouræske', 'Læderlook æske' ];

   // Effect hooks to propagate changes to parent component
   

   useEffect(() => {
        onOptionChange('Hueæske', selectedHatBoxType);
   }, [selectedHatBoxType]);
   useEffect(() => {
        if (selectedHatBoxType!='Premium æske') {
            setSelectedPremiumæske('')
        }else if (selectedHatBoxType=='Premium æske') {
             setSelectedPremiumæske('Grøn velouræske')
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
   useEffect(() => {
        onOptionChange('Emblem', embroideryText);
   }, [embroideryText]);

   useEffect(() => {
        onOptionChange('Badges', badgesSelection);
   }, [badgesSelection]);

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
        onOptionChange('champagneGlass', champagneGlassSelection);
   }, [champagneGlassSelection]);

   useEffect(() => {
        onOptionChange('Fløjte', whistleSelection);
   }, [whistleSelection]);

   useEffect(() => {
        onOptionChange('Trrompet', trumpetSelection);
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
                           {selectedHatBoxType==='Premium Box'?'Inkluderet i pakken 0':selectedHatBoxType==='Luxury Box'?'+ 249 DKK':''}
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

            {selectedHatBoxType=='Premium æske' && 
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

            {/* Embroidery Card */}
            <div className="bg-white/70 border border-white/50 rounded-2xl ">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="font-semibold text-slate-800">Emblem</h4>
                        
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
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>


           <AccessorySelector
               label="Badges"
               currentSelection={badgesSelection}
               onSelectionChange={setBadgesSelection}
           />

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
               label="Trrompet
"
               currentSelection={trumpetSelection}
               onSelectionChange={setTrumpetSelection}
           />
           <AccessorySelector
               label="Bucketpins
"
               currentSelection={bucketpinsSelection}
               onSelectionChange={setBucketpinsSelection}
           />
       </>
   );
}

export default Accessories;