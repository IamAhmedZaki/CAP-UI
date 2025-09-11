import React, { useState, useEffect } from 'react';

const Accessories = ({ selectedOptions = {}, onOptionChange }) => {
   const [hatBoxColor, setHatBoxColor] = useState('#DC2626');
   const [selectedHatBoxType, setSelectedHatBoxType] = useState('Standard');
   
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

   const colorOptions = [
       { name: 'Burgundy', value: '#7F1D1D' },
       { name: 'Navy', value: '#1E3A8A' },
       { name: 'Red', value: '#DC2626' }
   ];

   const accessoryOptions = [
        { name: 'Yes', value: 'Yes', icon: '✔️' },
        { name: 'No', value: 'No', icon: '❌' },
   ];

   const hatBoxTypes = ['Standard', 'Premium Box', 'Luxury Box'];

   // Effect hooks to propagate changes to parent component
   useEffect(() => {
        onOptionChange('hatBoxColor', hatBoxColor);
   }, [hatBoxColor]);

   useEffect(() => {
        onOptionChange('hatBoxType', selectedHatBoxType);
   }, [selectedHatBoxType]);

   useEffect(() => {
        onOptionChange('ballpointPen', ballpointPenSelection);
   }, [ballpointPenSelection]);

   useEffect(() => {
        onOptionChange('silkPillow', silkPillowSelection);
   }, [silkPillowSelection]);

   useEffect(() => {
        onOptionChange('badges', badgesSelection);
   }, [badgesSelection]);

   useEffect(() => {
        onOptionChange('gloves', glovesSelection);
   }, [glovesSelection]);

   useEffect(() => {
        onOptionChange('largeBallpointPen', largeBallpointPenSelection);
   }, [largeBallpointPenSelection]);

   useEffect(() => {
        onOptionChange('smartTag', smartTagSelection);
   }, [smartTagSelection]);

   useEffect(() => {
        onOptionChange('lightBall', lightBallSelection);
   }, [lightBallSelection]);

   useEffect(() => {
        onOptionChange('champagneGlass', champagneGlassSelection);
   }, [champagneGlassSelection]);

   useEffect(() => {
        onOptionChange('whistle', whistleSelection);
   }, [whistleSelection]);

   useEffect(() => {
        onOptionChange('trumpet', trumpetSelection);
   }, [trumpetSelection]);

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
               <h3 className="text-2xl font-bold text-slate-900">Accessories</h3>
           </div>

           {/* Hat Box Type Selection */}
           <div className="space-y-4">
               <div>
                   <label className="text-sm font-semibold text-slate-700">Hat box</label>
                   
                   <div className="flex items-center gap-2 mt-1">
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                           {selectedHatBoxType}
                       </span>
                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800">
                           {selectedHatBoxType==='Premium Box'?'Inkluderet i pakken 0':selectedHatBoxType==='Luxury Box'?'+ 249 DKK':''}
                       </span>
                   </div>
               </div>
               <div className="flex space-x-3">
                   {hatBoxTypes.map((type) => (
                       <button
                           key={type}
                           onClick={() => setSelectedHatBoxType(type)}
                           className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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

           {/* Individual Accessory Selectors */}
           <AccessorySelector
               label="Ballpoint pen"
               currentSelection={ballpointPenSelection}
               onSelectionChange={setBallpointPenSelection}
           />

           <AccessorySelector
               label="Silk pillow"
               currentSelection={silkPillowSelection}
               onSelectionChange={setSilkPillowSelection}
           />

           <AccessorySelector
               label="Badges"
               currentSelection={badgesSelection}
               onSelectionChange={setBadgesSelection}
           />

           <AccessorySelector
               label="Gloves"
               currentSelection={glovesSelection}
               onSelectionChange={setGlovesSelection}
           />

           <AccessorySelector
               label="Large ballpoint pen"
               currentSelection={largeBallpointPenSelection}
               onSelectionChange={setLargeBallpointPenSelection}
           />

           <AccessorySelector
               label="Smart Tag"
               currentSelection={smartTagSelection}
               onSelectionChange={setSmartTagSelection}
           />

           <AccessorySelector
               label="Light ball"
               currentSelection={lightBallSelection}
               onSelectionChange={setLightBallSelection}
           />

           <AccessorySelector
               label="Luxury champagne glass"
               currentSelection={champagneGlassSelection}
               onSelectionChange={setChampagneGlassSelection}
           />

           <AccessorySelector
               label="Whistle"
               currentSelection={whistleSelection}
               onSelectionChange={setWhistleSelection}
           />

           <AccessorySelector
               label="Trumpet"
               currentSelection={trumpetSelection}
               onSelectionChange={setTrumpetSelection}
           />
       </>
   );
}

export default Accessories;