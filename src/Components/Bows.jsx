import React, { useState, useEffect } from 'react'

// signature
import Kurdistan from '../assets/Countries/kurdistan.png';
import Iraq from '../assets/Countries/iraq.png';
import Iran from '../assets/Countries/iran.png';
import Somalia from '../assets/Countries/somalia.png';
import Somaliland from '../assets/Countries/somaliland.png';
import Palestine from '../assets/Countries/palestine.png';
import Lebanon from '../assets/Countries/lebanon.png';
import Afghanistan from '../assets/Countries/afghanistan.png';
import Albania from '../assets/Countries/albania.png';
import Serbia from '../assets/Countries/serbia.png';
import Bosnia from '../assets/Countries/bosnia.png';
import Denmark from '../assets/Countries/denmark.png';
import Morocco from '../assets/Countries/morocco.png';
import Pakistan from '../assets/Countries/pakistan.png';
import Turkey from '../assets/Countries/turkey.png';
import StxSilver from '../assets/images/stx silv.jpg';
import StxSilverDiamant from '../assets/images/stx silver diamant.jpg';
import StxGoldDiamant from '../assets/images/Stx gold diamant.jpg';
import StxGold from '../assets/images/stx gold.jpg';
import AtomHtxGold from '../assets/images/Atom htx gold.jpg';
import HtxGoldDiam from '../assets/images/Htx gold diam.jpg';
import HtxGold from '../assets/images/Htx gold.jpg';
import AtomHtxSilver from '../assets/images/atom htx silver.jpg';
import HtxSilverDiamant from '../assets/images/Htx silver diament.jpg';
import HtxSilver from '../assets/images/htx silver.jpg';
import HfGoldDiamant from '../assets/images/hf gold diamant.jpg';
import HfGold from '../assets/images/hf gold.jpg';
import HhxGoldDiamant from '../assets/images/hhx gold diamant.jpg';
import HhxGold from '../assets/images/hhx gold.jpg';
import HhxSilverDiamant from '../assets/images/hhx silver diamant.jpg';
import HhxSilver from '../assets/images/hhx silver.jpg';
import HfSilverDiamant from '../assets/images/hf silver diamant.jpg';
import HfSilver from '../assets/images/hf silver.jpg';
import EuxSilverDiamant from '../assets/images/Eux silver diamant.jpg';
import EuxSilver from '../assets/images/EUX silver.jpg';
import EuxGoldDiamant from '../assets/images/Eux gold diamant.jpg';
import EuxGold from '../assets/images/EUX gold.jpg';
import EudSilver from '../assets/images/Eud silver.jpg';
import EudGold from '../assets/images/eud gold.jpg';
import HalvmoneSilver from '../assets/images/halvmane silv.jpg';
import HalvmoneSilverSimli from '../assets/images/halvmane silver simli.png';
import HalvmoneGoldSimli from '../assets/images/Halvmane gold simli.png';
import HalvmoneGold from '../assets/images/Halvmane gold.jpg';
import MerkurstavSilverDiamant from '../assets/images/merkurstav silv diamant.jpg';
import MerkurstavSilver from '../assets/images/merkurstav silver.jpg';
import MerkurstavGoldDiamant from '../assets/images/merkurstav gold diamant.jpg';
import MerkurstavGold from '../assets/images/merkurstav gold.jpg';
import HjerteGuld from '../assets/images/hjerte guld.jpg';
import HjerteSilv from '../assets/images/hjerte silv.jpg';
import AhornbladGold from '../assets/images/Ahornblad gold.jpg';
import AhornbladSilver from '../assets/images/ahornblad silver.jpg';
import AnkerGold from '../assets/images/anker gold.jpg';
import AnkerSilver from '../assets/images/anker silver.jpg';
import AtomGold from '../assets/images/atom gold.jpg';
import AtomSilver from '../assets/images/atom silver.jpg';
import DnaGold from '../assets/images/dna gold.jpg';
import DnaSilver from '../assets/images/dna silver.jpg';
import ItSilver from '../assets/images/It silver.jpg';
import ItGold from '../assets/images/It gold.jpg';
import TeaterSilver from '../assets/images/teater silver.jpg';
import TeaterGold from '../assets/images/Teater gold.jpg';
import TwinSilver from '../assets/images/twin silver.jpg';
import TwinGold from '../assets/images/twin gold.jpg';
import NodeSilver from '../assets/images/Node silv.jpg';
import NodeGold from '../assets/images/Node gold.jpg';
import SportGold from '../assets/images/sport gold.jpg';
import SportSilver from '../assets/images/sport silver.jpg';
import PiSilver from '../assets/images/pi silver.jpg';
import PilGold from '../assets/images/pil gold.jpg';
import GlobusGold from '../assets/images/globus gold.jpg';
import GlobusSilver from '../assets/images/globus silver.jpg';
import LotusGold from '../assets/images/lotus gold.jpg';
import LotusSilver from '../assets/images/lotus silver.jpg';

// prestige

import JupiterGold from '../assets/images/Jupiter gold.png';
import JupiterSilver from '../assets/images/Jupiter silv.png';
import SaturnGold from '../assets/images/Saturn gold.png';
import SaturnSilver from '../assets/images/saturn solv.png';
import VenusGold from '../assets/images/venus gold.png';
import VenusSilver from '../assets/images/venus silv.png';
import MerkurGold from '../assets/images/merkur gold.png';
import MerkurSilver from '../assets/images/merkur silv.png';
import NeptunGold from '../assets/images/neptun gold.png';
import NeptunSilver from '../assets/images/neptun silv.png';
// no mars


// Stjernetegn
import BullGold from '../assets/images/bull gold.jpg';
import BullSilver from '../assets/images/bull silver.jpg';
import IbSilver from '../assets/images/ib silver.jpg';
import IbGold from '../assets/images/Ib gold.jpg';
import FKeyGold from '../assets/images/f key gold.jpg';
import FKeySilver from '../assets/images/f key silver.jpg';
import FiskenGold from '../assets/images/fisken gold.jpg';
import FiskenSilver from '../assets/images/fisken silver.jpg';
import JomfruenGold from '../assets/images/jomfruen gold.jpg';
import JomfruenSilver from '../assets/images/jomfruen silver.jpg';
import KrebsenGuld from '../assets/images/krebsen guld.jpg';
import KrebsenSilver from '../assets/images/krebsen silver.jpg';
import LionSilver from '../assets/images/lion silver.jpg';
import LionGold from '../assets/images/lion gold.jpg';
import ScorpioGold from '../assets/images/scorpio gold.jpg';
import ScorpioSilver from '../assets/images/scorpio silver.jpg';
import SkyttenSilver from '../assets/images/skytten silver.jpg';
import SkyttenGold from '../assets/images/skytten gold.jpg';
import VandmandGold from '../assets/images/vandmand gold.jpg';
import VandmandSilv from '../assets/images/vandmand silv.jpg';
import VadderenGold from '../assets/images/vadderen gold.jpg';
import VagtenGold from '../assets/images/vagten gold.jpg';
import StenbukGold from '../assets/images/stenbuk gold.jpg';
import StenbukSilver from '../assets/images/stenbuk silver.jpg';
import VadderenSilv from '../assets/images/vadderen silv.jpg';
import VagtenSilver from '../assets/images/vagten silver.jpg';




import blackGold from '../assets/rosent/black gold.png';
import blueGold from '../assets/rosent/gold blue.png';
import redGold from '../assets/rosent/red gold.png';
import blackSilv from '../assets/rosent/black silv.png';
import blueSilv from '../assets/rosent/blue silv.png';
import redSilve from '../assets/rosent/red silv.png';
import kaalagold from '../assets/rosent/kaalagold.png';
import laalgold from '../assets/rosent/laalgold.png';
import kaalasilver from '../assets/rosent/kaalasilver.png';
import laalsilver from '../assets/rosent/laalsilver.png';

const Bows = ({ selectedOptions = {}, onOptionChange, program }) => {
    const getInitialColor = (program) => {
    switch (program?.toLowerCase()) {
        case 'hhx':
            return { name: 'Royal blue', value: '#7F1D1D' };
        case 'htx':
            return { name: 'Navy blue', value: '#7F1D1D' };
        case 'stx':
        default:
            return { name: 'Bordeaux', value: '#7F1D1D' };
    }
};
    
    const [selectedColor, setSelectedColor] = useState(selectedOptions.color || getInitialColor(program));
    const [selectedPrestige, setSelectedPrestige] = useState(selectedOptions.bowType || 'Prestige');
    const [selectedEmblem, setSelectedEmblem] = useState(selectedOptions.emblem || { name: 'Guld', value: 'Guld', color: '#FCD34D' });
    const [selectedType, setSelectedType] = useState(selectedOptions.country || 'Kurdistan');

    // Define dynamic first options based on program
    const getFirstGoldColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'Royal blue', value: '#7F1D1D', img: blueGold };
            case 'htx':
                return { name: 'Navy blue', value: '#7F1D1D', img: blackGold };
            case 'stx':
            default:
                return { name: 'Bordeaux', value: '#7F1D1D', img: redGold };
        }
    };

    const getFirstSilverColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'Royal blue', value: '#7F1D1D', img: blueSilv };
            case 'htx':
                return { name: 'Navy blue', value: '#7F1D1D', img: blackSilv };
            case 'stx':
            default:
                return { name: 'Bordeaux', value: '#7F1D1D', img: redSilve };
        }
    };

    // Build full arrays with dynamic first option
    const guldcolors = [
        getFirstGoldColor(),
        { name: 'RED', value: '#DC2626', img: laalgold },
        { name: 'SORT', value: '#1E3A8A', img: kaalagold },
    ];

    const sulvcolors = [
        getFirstSilverColor(),
        { name: 'RED', value: '#DC2626', img: laalsilver },
        { name: 'SORT', value: '#1E3A8A', img: kaalasilver },
    ];

//  Bordeaux is the basic color for  STX cap, and then Red and black
// Navy blue is the basic color for HTX cap, and then red and black
// Royal blue is the basic color for HHX cap, and then red and black
// Light blue is the basic color for HF cap, and then red and black.

    


    const emblemOptions = [
        { name: 'Guld', value: 'Guld', color: '#FCD34D' },
        { name: 'Sølv', value: 'Sølv', color: '#E5E7EB' }
    ];

    const silvetypeOptions = [
        { name: 'Kurdistan', icon: Kurdistan },
    { name: 'Iraq', icon: Iraq },
    { name: 'Iran', icon: Iran },
    { name: 'Somalia', icon: Somalia },
    { name: 'Somaliland', icon: Somaliland },
    { name: 'Palestine', icon: Palestine },
    { name: 'Lebanon', icon: Lebanon },
    { name: 'Afghanistan', icon: Afghanistan },
    { name: 'Albania', icon: Albania },
    { name: 'Serbia', icon: Serbia },
    { name: 'Bosnia', icon: Bosnia },
    { name: 'Denmark', icon: Denmark },
    { name: 'Morocco', icon: Morocco },
    { name: 'Pakistan', icon: Pakistan },
    { name: 'Turkey', icon: Turkey },
    
    
    // Silver items
    { name: 'Ahornblad Silver', icon: AhornbladSilver },
    { name: 'Anker Silver', icon: AnkerSilver },
    { name: 'Atom Silver', icon: AtomSilver },
    { name: 'Atom HTX Silver', icon: AtomHtxSilver },
    { name: 'Bull Silver', icon: BullSilver },
    { name: 'DNA Silver', icon: DnaSilver },
    { name: 'EUD Silver', icon: EudSilver },
    { name: 'EUX Silver Diamant', icon: EuxSilverDiamant },
    { name: 'EUX Silver', icon: EuxSilver },
    { name: 'F Key Silver', icon: FKeySilver },
    { name: 'Fisken Silver', icon: FiskenSilver },
    { name: 'Globus Silver', icon: GlobusSilver },
    { name: 'HF Silver Diamant', icon: HfSilverDiamant },
    { name: 'HF Silver', icon: HfSilver },
    { name: 'HHX Silver Diamant', icon: HhxSilverDiamant },
    { name: 'HHX Silver', icon: HhxSilver },
    { name: 'Hjerte Silv', icon: HjerteSilv },
    { name: 'HTX Silver Diamant', icon: HtxSilverDiamant },
    { name: 'HTX Silver', icon: HtxSilver },
    { name: 'IB Silver', icon: IbSilver },
    { name: 'IT Silver', icon: ItSilver },
    { name: 'Jomfruen Silver', icon: JomfruenSilver },
    { name: 'Jupiter Silver', icon: JupiterSilver },
    { name: 'Krebsen Silver', icon: KrebsenSilver },
    { name: 'Lion Silver', icon: LionSilver },
    { name: 'Lotus Silver', icon: LotusSilver },
    { name: 'Merkur Silver', icon: MerkurSilver },
    { name: 'Merkurstav Silver Diamant', icon: MerkurstavSilverDiamant },
    { name: 'Merkurstav Silver', icon: MerkurstavSilver },
    { name: 'Neptun Silver', icon: NeptunSilver },
    { name: 'Node Silver', icon: NodeSilver },
    { name: 'Pi Silver', icon: PiSilver },
    { name: 'Scorpio Silver', icon: ScorpioSilver },
    { name: 'Skytten Silver', icon: SkyttenSilver },
    { name: 'Sport Silver', icon: SportSilver },
    { name: 'Stenbuk Silver', icon: StenbukSilver },
    { name: 'STX Silver', icon: StxSilver },
    { name: 'STX Silver Diamant', icon: StxSilverDiamant },
    { name: 'Teater Silver', icon: TeaterSilver },
    { name: 'Twin Silver', icon: TwinSilver },
    { name: 'Vandmand Silv', icon: VandmandSilv },
    { name: 'Venus Silver', icon: VenusSilver }
        
        
    ];
    const goldtypeOptions = [
        { name: 'Kurdistan', icon: Kurdistan },
    { name: 'Iraq', icon: Iraq },
    { name: 'Iran', icon: Iran },
    { name: 'Somalia', icon: Somalia },
    { name: 'Somaliland', icon: Somaliland },
    { name: 'Palestine', icon: Palestine },
    { name: 'Lebanon', icon: Lebanon },
    { name: 'Afghanistan', icon: Afghanistan },
    { name: 'Albania', icon: Albania },
    { name: 'Serbia', icon: Serbia },
    { name: 'Bosnia', icon: Bosnia },
    { name: 'Denmark', icon: Denmark },
    { name: 'Morocco', icon: Morocco },
    { name: 'Pakistan', icon: Pakistan },
    { name: 'Turkey', icon: Turkey },
    
    // Gold items
    { name: 'Ahornblad Gold', icon: AhornbladGold },
    { name: 'Anker Gold', icon: AnkerGold },
    { name: 'Atom Gold', icon: AtomGold },
    { name: 'Atom HTX Gold', icon: AtomHtxGold },
    { name: 'Bull Gold', icon: BullGold },
    { name: 'DNA Gold', icon: DnaGold },
    { name: 'EUD Gold', icon: EudGold },
    { name: 'EUX Gold Diamant', icon: EuxGoldDiamant },
    { name: 'EUX Gold', icon: EuxGold },
    { name: 'F Key Gold', icon: FKeyGold },
    { name: 'Fisken Gold', icon: FiskenGold },
    { name: 'Globus Gold', icon: GlobusGold },
    { name: 'HF Gold Diamant', icon: HfGoldDiamant },
    { name: 'HF Gold', icon: HfGold },
    { name: 'HHX Gold Diamant', icon: HhxGoldDiamant },
    { name: 'HHX Gold', icon: HhxGold },
    { name: 'Hjerte Guld', icon: HjerteGuld },
    { name: 'HTX Gold Diam', icon: HtxGoldDiam },
    { name: 'HTX Gold', icon: HtxGold },
    { name: 'IB Gold', icon: IbGold },
    { name: 'IT Gold', icon: ItGold },
    { name: 'Jomfruen Gold', icon: JomfruenGold },
    { name: 'Jupiter Gold', icon: JupiterGold },
    { name: 'Krebsen Guld', icon: KrebsenGuld },
    { name: 'Lion Gold', icon: LionGold },
    { name: 'Lotus Gold', icon: LotusGold },
    { name: 'Merkur Gold', icon: MerkurGold },
    { name: 'Merkurstav Gold Diamant', icon: MerkurstavGoldDiamant },
    { name: 'Merkurstav Gold', icon: MerkurstavGold },
    { name: 'Neptun Gold', icon: NeptunGold },
    { name: 'Node Gold', icon: NodeGold },
    { name: 'Pil Gold', icon: PilGold },
    { name: 'Saturn Gold', icon: SaturnGold },
    { name: 'Scorpio Gold', icon: ScorpioGold },
    { name: 'Skytten Gold', icon: SkyttenGold },
    { name: 'Sport Gold', icon: SportGold },
    { name: 'Stenbuk Gold', icon: StenbukGold },
    { name: 'STX Gold Diamant', icon: StxGoldDiamant },
    { name: 'STX Gold', icon: StxGold },
    { name: 'Teater Gold', icon: TeaterGold },
    { name: 'Twin Gold', icon: TwinGold },
    { name: 'Vandmand Gold', icon: VandmandGold },
    { name: 'Venus Gold', icon: VenusGold },
    
    
        
    ];

    // Update parent when local state changes
    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Roset farve', selectedColor);
        }
    }, [selectedColor, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Kokarde', selectedPrestige);
        }
    }, [selectedPrestige, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Emblem', selectedEmblem);
        }
    }, [selectedEmblem, onOptionChange]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Type', selectedType);
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
            <div className="">
                <h3 className="text-2xl font-bold text-slate-900">KOKARDE</h3>
            </div>
            <div className='text-sm font-semibold text-slate-700' >Roset farve</div>
            {/* Color Selection */}

           {selectedEmblem.name === 'Guld' ? (
  <>
    <div className="flex space-x-3">
      {guldcolors.map((color) => (
        <button
          key={color.value}
          onClick={() => handleColorChange(color)}
          className={`w-12 h-12 rounded-xl border-2 flex justify-center items-center transition-all duration-200 hover:scale-110 ${
            selectedColor.value === color.value
              ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
              : 'border-slate-200 hover:border-slate-400'
          }`}
        >
          {color.img && (
            <img
              src={color.img}
              alt={color.name}
              className="w-8 h-8 flex flex-justify object-contain"
            />
          )}
        </button>
      ))}
    </div>
    <p className="text-sm mt-2 text-slate-700">Selected: {selectedColor.name}</p>
  </>
) : (
  <>
    <div className="flex space-x-3">
      {sulvcolors.map((color) => (
        <button
          key={color.value}
          onClick={() => handleColorChange(color)}
          className={`w-12 h-12 rounded-xl border-2 flex justify-center items-center transition-all duration-200 hover:scale-110 ${
            selectedColor.value === color.value
              ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-2'
              : 'border-slate-200 hover:border-slate-400'
          }`}
        >
          {color.img && (
            <img
              src={color.img}
              alt={color.name}
              className="w-8 h-8 flex flex-justify object-contain"
            />
          )}
        </button>
      ))}
    </div>
    <p className="text-sm mt-2 text-slate-700">Selected: {selectedColor.name}</p>
  </>
)}



            {/* Prestige Type */}
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-semibold text-slate-700">kokarde</label>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {selectedPrestige}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-3">
                    {['Signature', 'Prestige','Stjernetegn'].map((type) => (
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

                {selectedEmblem.name=='Guld'?<>
                 <div className="flex flex-wrap gap-3">
                    {goldtypeOptions.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => handleTypeChange(type.name)}
                            className={`w-12 h-12 border-2 rounded overflow-hidden hover:shadow-md 
                                transition-all duration-200 flex items-center justify-center
                                   hover:from-red-100 hover:to-red-200 ${selectedType === type.name
                                ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2'
                                : 'border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            
                            <img src={type.icon} className='h-20 w-40'  alt="" />
                        </button>
                    ))}
                </div>
                <p className="text-sm mt-2 text-slate-700">Selected: {selectedType}</p>
                
                </>:<>
                 <div className="flex flex-wrap gap-3">
                    {silvetypeOptions.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => handleTypeChange(type.name)}
                            className={`w-12 h-12 border-2 rounded overflow-hidden hover:shadow-md 
                                transition-all duration-200 flex items-center justify-center
                                   hover:from-red-100 hover:to-red-200 ${selectedType === type.name
                                ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2'
                                : 'border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            
                            <img src={type.icon} className='h-20 w-40'  alt="" />
                        </button>
                    ))}
                </div>
                <p className="text-sm mt-2 text-slate-700">Selected: {selectedType}</p>
                
                </>}
               
            </div>
        </>
    )
}

export default Bows;