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
import Sweden from '../assets/Countries/sweden.png';
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

import sosuassistentGold from '../assets/images/sosuassistent gold.png';
import sosuassistentSilver from '../assets/images/sosuassistent silver.png';
import sosuhjælperGold from '../assets/images/sosuhjalper gold.png';
import sosuhjælperSilver from '../assets/images/sosuhjalper silver.png';
import frisørGold from '../assets/images/frisor gold.png';
import frisørSilver from '../assets/images/frisor silver.png';
// import kosmetologGold from '../assets/images/kosmetolog gold.png';
// import kosmetologSilver from '../assets/images/kosmetolog silver.png';
import pædagogGold from '../assets/images/padagog gold.png';
import pædagogSilver from '../assets/images/padagog silver.png';
import pauGold from '../assets/images/pau gold.png';
import pauSilver from '../assets/images/pau silver.png';
import ernæringsassistenGold from '../assets/images/ernaringsassisten gold.png';
import ernæringsassistenSilver from '../assets/images/ernaringsassisten silver.png';


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



// rosent
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
import lightbluesilver from '../assets/rosent/lightbluesilver.png';
import lightbluegold from '../assets/rosent/lightbluegold.png';
import purplegold from '../assets/rosent/purplegold.png';
import purplesilver from '../assets/rosent/purplesilver.png';





const Bows = ({ selectedOptions = {}, onOptionChange, program, changeCurrentEmblem }) => {
     const getInitialColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'Royal blå', value: '#7F1D1D', img: blueGold };
            case 'htx':
                return { name: 'Navy blå', value: '#7F1D1D', img: blackGold };
            case 'stx':
                return { name: 'Bordeaux', value: '#7F1D1D', img: redSilve };
            case 'hf':
                return { name: 'Light blå', value: '#7F1D1D', img: lightbluegold };
            case 'eux':
                return { name: 'Rød', value: 'EudRed', img: laalsilver };
            case 'eud':
                return { name: 'Purple', value: '#DC26266', img: purplegold };
            case 'sosuassistent':
            case 'sosuhjælper':
            case 'frisør':
            case 'kosmetolog':
            case 'pau':
            case 'ernæringsassisten':
                return { name: 'Sort', value: 'SosuSort', img: kaalagold };
            case 'pædagog':
                return { name: 'Sort', value: 'PSort', img: kaalagold };
            default:
                return { name: 'Rød', value: '#DC2626', img: laalgold };
        }
    };

    const getInitialEmblem = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'htx':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'stx':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'hf':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'eud':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'eux':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'sosuassistent':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'sosuhjælper':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'frisør':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'pædagog':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'pau':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            case 'ernæringsassisten':
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
            default:
                return { name: 'Guld', value: 'Guld', color: '#FCD34D' };
        }
    };

    const getInitialType = () => {
    switch (program?.toLowerCase()) {
        case 'hhx':
            return 'Hjerte Guld';

        case 'htx':
            return 'Hjerte Guld';

        case 'stx':
            return 'Hjerte Guld';

        case 'hf':
            return 'Hjerte Guld';

        case 'eud':
            return 'Hjerte Guld';

        case 'eux':
            return 'Hjerte Guld';

        case 'sosuassistent':
            return 'Hjerte Guld';

        case 'sosuhjælper':
            return 'Hjerte Guld';

        case 'frisør':
            return 'Hjerte Guld';

        case 'pædagog':
            return 'Hjerte Guld';

        case 'pau':
            return 'Hjerte Guld';

        case 'ernæringsassisten':
            return 'Hjerte Guld';

        default:
            return 'Hjerte Guld';
    }
};


    // FIXED: Proper default values
    const [selectedColor, setSelectedColor] = useState(
        selectedOptions['Roset farve'] || getInitialColor()
    );
    const [selectedPrestige, setSelectedPrestige] = useState(
        selectedOptions.Kokarde || 'Signature'
    );
    const [selectedEmblem, setSelectedEmblem] = useState(
        selectedOptions.Emblem || getInitialEmblem()
    );
    const [selectedType, setSelectedType] = useState(
        selectedOptions.Type || getInitialType()
    );

    const [isAppReady, setIsAppReady] = useState(false);


    // Define dynamic first options based on program
    const getFirstGoldColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return [{ name: 'Royal blå', value: '#7F1D1D', img: blueGold },
                { name: 'Rød', value: '#DC2626', img: laalgold },
                { name: 'Sort', value: '#1E3A8A', img: kaalagold },
                ];
            case 'htx':
                return [{ name: 'Navy blå', value: '#7F1D1D', img: blackGold },
                { name: 'Rød', value: '#DC2626', img: laalgold },
                { name: 'Sort', value: '#1E3A8A', img: kaalagold },
                ];
                case 'hf':
                    return [{ name: 'Light blå', value: '#7F1D1D', img: lightbluegold },
                        { name: 'Rød', value: '#DC2626', img: laalgold },
                        { name: 'Sort', value: '#1E3A8A', img: kaalagold },
                    ];
            case 'stx':
                return [{ name: 'Bordeaux', value: '#7F1D1D', img: redSilve },
                { name: 'Rød', value: '#DC2626', img: laalgold },
                { name: 'Sort', value: '#1E3A8A', img: kaalagold },
                ];
            case 'eux':
                return [
                    { name: 'Rød', value: 'EudRed', img: laalgold },
                    { name: 'Bordeaux', value: '#7F1D1DX', img: redGold },
                    { name: 'Royal blå', value: '#7F1D1DD', img: blueGold }


                ];
            case 'eud':
                return [
                    { name: 'Purple', value: '#DC26266', img: purplegold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },

                ];
            case 'sosuassistent':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'sosuhjælper':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'frisør':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'kosmetolog':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'pædagog':
                return [
                    { name: 'Sort', value: 'PSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'pau':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];
            case 'ernæringsassisten':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalagold },
                    { name: 'Rød', value: '#DC2626', img: laalgold },
                ];


            default:
                return { name: 'Rød', value: '#DC2626', img: laalgold }
        }
    };

    const getFirstSilverColor = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return [{ name: 'Royal blå', value: '#7F1D1D', img: blueSilv },
                { name: 'Rød', value: '#DC2626', img: laalsilver },
                { name: 'Sort', value: '#1E3A8A', img: kaalasilver },
                ];
            case 'htx':
                return [{ name: 'Navy blå', value: '#7F1D1D', img: blackSilv },
                { name: 'Rød', value: '#DC2626', img: laalsilver },
                { name: 'Sort', value: '#1E3A8A', img: kaalasilver },
                ];
            case 'stx':
                return [{ name: 'Bordeaux', value: '#7F1D1D', img: redSilve },
                { name: 'Rød', value: '#DC2626', img: laalsilver },
                { name: 'Sort', value: '#1E3A8A', img: kaalasilver },
                ];
            case 'hf':
                return [{ name: 'Light blå', value: '#7F1D1D', img: lightbluesilver },
                { name: 'Rød', value: '#DC2626', img: laalsilver },
                { name: 'Sort', value: '#1E3A8A', img: kaalasilver },
                ];
            case 'eux':
                return [
                    { name: 'Rød', value: 'EudRed', img: laalsilver },
                    { name: 'Bordeaux', value: '#7F1D1DX', img: redSilve },
                    { name: 'Royal blå', value: '#7F1D1DD', img: blueSilv }

                ];
            case 'eud':
                return [
                    { name: 'Purple', value: '#DC26266', img: purplesilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },

                ];
            case 'sosuassistent':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            case 'sosuhjælper':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            case 'frisør':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            case 'kosmetolog':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            case 'pædagog':
                return [
                    { name: 'Sort', value: 'PSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            case 'pau':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ]
            case 'ernæringsassisten':
                return [
                    { name: 'Sort', value: 'SosuSort', img: kaalasilver },
                    { name: 'Rød', value: '#DC2626', img: laalsilver },
                ];
            default:
                return { name: 'Rød', value: '#DC2626', img: laalgold }

        }
    };
    const guldcolors =
        getFirstGoldColor();

    const sulvcolors =
        getFirstSilverColor();


    const emblemOptions = [
        { name: 'Guld', value: 'Guld', color: '#FCD34D' },
        { name: 'Sølv', value: 'Sølv', color: '#E5E7EB' }
    ];


    const getGoldEmblem = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return [
                    { name: 'HHX Guld Simli', icon: HhxGoldDiamant },
                    { name: 'HHX Guld', icon: HhxGold }
                ];
            case 'htx':
                return [
                    { name: 'HTX Guld Simli', icon: HtxGoldDiam },
                    { name: 'HTX Guld', icon: HtxGold },
                    { name: 'Atom HTX Guld', icon: AtomHtxGold },
                ];
            case 'stx':
                return [
                    { name: 'STX Guld Simli', icon: StxGoldDiamant },
                    { name: 'STX Guld', icon: StxGold }
                ];
            case 'hf':
                return [
                    { name: 'HF Guld Simli', icon: HfGoldDiamant },
                    { name: 'HF Guld', icon: HfGold }
                ];
            case 'eud':
                return [
                    { name: 'EUD Guld', icon: EudGold }
                ];
            case 'eux':
                return [
                    { name: 'EUX Guld Simli', icon: EuxGoldDiamant },
                    { name: 'EUX Guld', icon: EuxGold }
                ];
            case 'sosuassistent':
                return [
                   
                    { name: 'sosuassistent Guld', icon:sosuassistentGold  }
                ];
            case 'sosuhjælper':
                return [
                    { name: 'sosuhjælper Guld', icon:sosuhjælperGold  }
                ];
            case 'frisør':
                return [
                    { name: 'frisør Guld', icon:frisørGold  }
                ];
            // case 'kosmetolog':
            //     return [
            //         { name: 'kosmetolog Guld', icon:kosmetologGold  }
            //     ];
            case 'pædagog':
                return [
                    { name: 'pædagog Guld', icon:pædagogGold  }
                ];
            case 'pau':
                return [
                    { name: 'pau Guld', icon:pauGold  }
                ]
            case 'ernæringsassisten':
                return [
                    { name: 'ernæringsassisten Guld', icon:ernæringsassistenGold  }
                ];
            default:
                return null;
        }
    };

    const getSilverEmblem = () => {
        switch (program?.toLowerCase()) {
            case 'hhx':
                return [
                    { name: 'HHX Sølv Simli', icon: HhxSilverDiamant },
                    { name: 'HHX Sølv', icon: HhxSilver }
                ];
            case 'htx':
                return [
                    { name: 'HTX Sølv Simli', icon: HtxSilverDiamant },
                    { name: 'HTX Sølv', icon: HtxSilver },
                    { name: 'Atom HTX Sølv', icon: AtomHtxSilver },
                ];
            case 'stx':
                return [
                    { name: 'STX Sølv Simli', icon: StxSilverDiamant },
                    { name: 'STX Sølv', icon: StxSilver },
                ];
            case 'hf':
                return [
                    { name: 'HF Sølv Simli', icon: HfSilverDiamant },
                    { name: 'HF Sølv', icon: HfSilver }
                ];
            case 'eud':
                return [
                    { name: 'EUD Sølv', icon: EudSilver }
                ];
            case 'eux':
                return [
                    { name: 'EUX Sølv Simli', icon: EuxSilverDiamant },
                    { name: 'EUX Sølv', icon: EuxSilver }
                ];
            case 'sosuassistent':
                return [
                   
                    { name: 'sosuassistent Sølv', icon:sosuassistentSilver  }
                ];
            case 'sosuhjælper':
                return [
                    { name: 'sosuhjælper Sølv', icon:sosuhjælperSilver  }
                ];
            case 'frisør':
                return [
                    { name: 'frisør Sølv', icon:frisørSilver  }
                ];
            // case 'kosmetolog':
                // return [
                //     { name: 'kosmetolog Sølv', icon:kosmetologSilver  }
                // ];
            case 'pædagog':
                return [
                    { name: 'pædagog Sølv', icon:pædagogSilver  }
                ];
            case 'pau':
                return [
                    { name: 'pau Sølv', icon:pauSilver  }
                ]
            case 'ernæringsassisten':
                return [
                    { name: 'ernæringsassisten Sølv', icon:ernæringsassistenSilver  }
                ];
            default:
                return null;
        }
    };


    // Build full arrays with dynamic first option



    // Define all options categorized by type and emblem
    const allTypeOptions = {
        Signature: {
            Guld: [
                { name: 'Danmark', icon: Denmark },          // 1
                { name: 'Sweden', icon: Sweden },            // 2
                { name: 'Palæstina', icon: Palestine },      // 3
                { name: 'Tyrkiet', icon: Turkey },           // 4
                { name: 'Pakistan', icon: Pakistan },        // 5
                { name: 'Kurdistan', icon: Kurdistan },      // 6
                { name: 'Irak', icon: Iraq },                // 7
                { name: 'Iran', icon: Iran },                // 8
                { name: 'Somalia', icon: Somalia },          // 9
                { name: 'Somaliland', icon: Somaliland },    // 10
                { name: 'Libanon', icon: Lebanon },          // 11
                { name: 'Afghanistan', icon: Afghanistan },  // 12
                { name: 'Albanien', icon: Albania },         // 13
                { name: 'Serbien', icon: Serbia },           // 14
                { name: 'Bosnien', icon: Bosnia },           // 15
                { name: 'Marokko', icon: Morocco },           // 15
                ...(getGoldEmblem() || []),
                { name: 'F Key Guld', icon: FKeyGold },
                { name: 'DNA Guld', icon: DnaGold },
                { name: 'Pi Guld', icon: PilGold },
                { name: 'IT Guld', icon: ItGold },
                { name: 'IB Guld', icon: IbGold },
                { name: 'Halvmåne Guld', icon: HalvmoneGold },
                { name: 'Halvmåne Guld Simli', icon: HalvmoneGoldSimli },
                { name: 'Merkurstav Guld', icon: MerkurstavGold },
                { name: 'Merkurstav Guld Simli', icon: MerkurstavGoldDiamant },
                { name: 'Hjerte Guld', icon: HjerteGuld },
                //   { name: 'Hjerte Guld Simli', icon: HjerteGoldSimli },   
                { name: 'Atom Guld', icon: AtomGold },
                { name: 'Ahornblad Guld', icon: AhornbladGold },
                { name: 'Anker Guld', icon: AnkerGold },
                { name: 'Globus Guld', icon: GlobusGold },
                { name: 'Lotus Guld', icon: LotusGold },
                { name: 'Node Guld', icon: NodeGold },
                { name: 'Sport Guld', icon: SportGold },
                { name: 'Teater Guld', icon: TeaterGold },




            ].filter(Boolean),

            Sølv: [
                { name: 'Danmark', icon: Denmark },
                { name: 'Sweden', icon: Sweden },
                { name: 'Palæstina', icon: Palestine },
                { name: 'Tyrkiet', icon: Turkey },
                { name: 'Pakistan', icon: Pakistan },
                { name: 'Kurdistan', icon: Kurdistan },
                { name: 'Irak', icon: Iraq },
                { name: 'Iran', icon: Iran },
                { name: 'Somalia', icon: Somalia },
                { name: 'Somaliland', icon: Somaliland },
                { name: 'Libanon', icon: Lebanon },
                { name: 'Afghanistan', icon: Afghanistan },
                { name: 'Albanien', icon: Albania },
                { name: 'Serbien', icon: Serbia },
                { name: 'Bosnien', icon: Bosnia },
                { name: 'Marokko', icon: Morocco },
                ...(getSilverEmblem() || []),
                { name: 'F Key Sølv', icon: FKeySilver },
                { name: 'DNA Sølv', icon: DnaSilver },
                { name: 'Pi Sølv', icon: PiSilver },
                { name: 'IT Sølv', icon: ItSilver },
                { name: 'IB Sølv', icon: IbSilver },
                { name: 'Halvmåne Sølv', icon: HalvmoneSilver },
                { name: 'Halvmåne Sølv Simli', icon: HalvmoneSilverSimli },
                { name: 'Merkurstav Sølv', icon: MerkurstavSilver },
                { name: 'Merkurstav Sølv Simli', icon: MerkurstavSilverDiamant },
                { name: 'Hjerte Sølv', icon: HjerteSilv },
                //   { name: 'Hjerte Sølv Simli', icon: HjerteSilverSimli },    
                { name: 'Atom Sølv', icon: AtomSilver },
                { name: 'Ahornblad Sølv', icon: AhornbladSilver },
                { name: 'Anker Sølv', icon: AnkerSilver },
                { name: 'Globus Sølv', icon: GlobusSilver },
                { name: 'Lotus Sølv', icon: LotusSilver },
                { name: 'Node Sølv', icon: NodeSilver },
                { name: 'Sport Sølv', icon: SportSilver },
                { name: 'Teater Sølv', icon: TeaterSilver },


            ].filter(Boolean)
        },

        Prestige: {
            Guld: [
                { name: 'Diamant', icon: JupiterGold },
                { name: 'Onyx', icon: SaturnGold },
                { name: 'Perle', icon: VenusGold },
                { name: 'Nova', icon: MerkurGold },
                //   { name: 'Mars Rubin', icon: MarsGold },         
                { name: 'Safir', icon: NeptunGold },
            ].filter(Boolean),
            Sølv: [
                { name: 'Diamant', icon: JupiterSilver },
                { name: 'Onyx', icon: SaturnSilver },
                { name: 'Perle', icon: VenusSilver },
                { name: 'Nova', icon: MerkurSilver },
                //   { name: 'Mars Rubin', icon: MarsSilver },         
                { name: 'Safir', icon: NeptunSilver },
            ].filter(Boolean),
        },

        Stjernetegn: {
            Guld: [
                { name: 'Tyr Guld', icon: BullGold },
                { name: 'Fisk Guld', icon: FiskenGold },
                { name: 'Jomfru Guld', icon: JomfruenGold },
                { name: 'Krebs Guld', icon: KrebsenGuld },
                { name: 'Løve Guld', icon: LionGold },
                { name: 'Skorpion Guld', icon: ScorpioGold },
                { name: 'Skytte Guld', icon: SkyttenGold },
                { name: 'Stenbuk Guld', icon: StenbukGold },
                { name: 'Tvilling Guld', icon: TwinGold },
                { name: 'Vandmand Guld', icon: VandmandGold },
                { name: 'Vædder Guld', icon: VadderenGold },
                { name: 'Vægt Guld', icon: VagtenGold },
            ].filter(Boolean),
            Sølv: [
                { name: 'Tyr Sølv', icon: BullSilver },
                { name: 'Fisk Sølv', icon: FiskenSilver },
                { name: 'Jomfru Sølv', icon: JomfruenSilver },
                { name: 'Krebs Sølv', icon: KrebsenSilver },
                { name: 'Løve Sølv', icon: LionSilver },
                { name: 'Skorpion Sølv', icon: ScorpioSilver },
                { name: 'Skytte Sølv', icon: SkyttenSilver },
                { name: 'Stenbuk Sølv', icon: StenbukSilver },
                { name: 'Tvilling Sølv', icon: TwinSilver },
                { name: 'Vandmand Sølv', icon: VandmandSilv },
                { name: 'Vædder Sølv', icon: VadderenSilv },
                { name: 'Vægt Sølv', icon: VagtenSilver },
            ].filter(Boolean),
        }
    };


    // Get the current options based on selected prestige and emblem
    const currentTypeOptions = allTypeOptions[selectedPrestige]?.[selectedEmblem.name] || [];

    // Update parent when local state changes
   useEffect(() => {
    const handleMessage = (event) => {
      // For security, you might want to check event.origin
      if (event.data === "app:ready") {
        console.log("Received app:ready message from iframe");
        setIsAppReady(true);

        // Send program if we have one
      
      }

      // Handle other messages if needed
      if (typeof event.data === 'object') {
        console.log("Received object from iframe:", event.data);
      } else if (typeof event.data === 'string' && event.data.startsWith('{')) {
        try {
          const parsedData = JSON.parse(event.data);
          console.log("Received JSON from iframe:", parsedData);
        } catch (e) {
          console.log("Received string from iframe:", event.data);
        }
      } else {
        console.log("Received from iframe:", event.data);
      }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [program]);

    
  
  
  
  
  useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Roset farve', selectedColor);
        }
    }, [selectedColor, onOptionChange]);
    
    
    useEffect(() => {
  if (!selectedColor?.name || !isAppReady) return;

  const colorMap = {
    'Royal blå': 'flowerRoyalBlue',
    'Navy blå': 'flowerNavyBlue',
    'Bordeaux': 'flowerMaroon',
    'Light blå': 'flowerSkyBlue',
    'Rød': 'flowerRed',
    'Purple': 'flowerPurple',
    'Sort': 'flowerBlack',
  };

  const message = colorMap[selectedColor.name];
  if (!message) return;

  const sendMessageToIframes = (msg) => {
    ['preview-iframe', 'preview-iframe2'].forEach((id) => {
      const iframe = document.getElementById(id);
      if (iframe?.contentWindow) {
        console.log("Sending message to iframe:", msg);
        iframe.contentWindow.postMessage(msg, "*");
      } else {
        console.log("Iframe not ready or program not available");
      }
    });
  };

  sendMessageToIframes(message);
}, [selectedColor, isAppReady]);
    


    










useEffect(() => {
            if (onOptionChange) {
                onOptionChange('Kokarde', selectedPrestige);
            }
        }, [selectedPrestige, onOptionChange]);


useEffect(() => {
           const colorMap = {
    'Standard': 'StandardEmblem',
    'Prestige': 'PrestigeEmblem',
    'Stjernetegn': 'StjernetegnEmblem',
    
  };

  const message = colorMap[selectedPrestige];
  if (!message) return;

  const sendMessageToIframes = (msg) => {
    ['preview-iframe', 'preview-iframe2'].forEach((id) => {
      const iframe = document.getElementById(id);
      if (iframe?.contentWindow) {
        console.log("Sending message to iframe:", msg);
        iframe.contentWindow.postMessage(msg, "*");
      } else {
        console.log("Iframe not ready or program not available");
      }
    });
  };

  sendMessageToIframes(message);


        }, [selectedPrestige]);

    
    
    
    
    
    
    
    
        useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Emblem', selectedEmblem);
        }
    }, [selectedEmblem, onOptionChange]);
    
    useEffect(() => {

        const colorMap={
            "Guld":"rosetfarveGold",
            "Sølv":"rosetfarveSilver"
        }
        
        const message=colorMap[selectedEmblem.value]

        const sendMessageToIframes=(msg)=>{
            ['preview-iframe', 'preview-iframe2'].forEach((id)=>{
             const iframe=document.getElementById(id)
             if (iframe?.contentWindow) {
                 iframe.contentWindow.postMessage(msg,'*')
             }
            })

        }
         sendMessageToIframes(message);
    }, [selectedEmblem]);

    useEffect(() => {
        if (onOptionChange) {
            onOptionChange('Type', selectedType);
        }
    }, [selectedType, onOptionChange]);
    
    
    useEffect(() => {
       let message=null
       

        message=selectedType;

        const sendMessageToIframes = (msg) => {
    ['preview-iframe', 'preview-iframe2'].forEach((id) => {
      const iframe = document.getElementById(id);
      if (iframe?.contentWindow) {
        console.log("Sending message to iframe:", msg+" "+selectedEmblem.value);
        iframe.contentWindow.postMessage(msg+" "+selectedEmblem.value , "*");
      } else {
        console.log("Iframe not ready or program not available");
      }
    });
  };
         sendMessageToIframes(message);
    }, [selectedType]);

    // Update local state when props change
    useEffect(() => {
        if (selectedOptions.color) {
            setSelectedColor(selectedOptions.color);
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
            changeCurrentEmblem(selectedOptions.emblem)

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

     const getBaseName = (name) => {
        return name.replace(/\s*(Guld|Sølv|Solv)\s*$/i, '').trim();
    };

    // Helper function to apply emblem suffix to base name
    const applyEmblemSuffix = (baseName, emblem) => {
        const suffix = emblem.name === 'Guld' ? 'Guld' : 'Sølv';
        return `${baseName} ${suffix}`;
    };
     const handlePrestigeChange = (type) => {
        const currentBaseName = getBaseName(selectedType);
        setSelectedPrestige(type);
        const newOptions = allTypeOptions[type]?.[selectedEmblem.name] || [];
        
        if (newOptions.length > 0) {
            // Try to find the same base name in new options, otherwise use first option
            const matchingOption = newOptions.find(option => 
                getBaseName(option.name) === currentBaseName
            );
            setSelectedType(matchingOption ? matchingOption.name : newOptions[0].name);
        }
    };

    const handleEmblemChange = (emblem) => {
        const currentBaseName = getBaseName(selectedType);
        setSelectedEmblem(emblem);
        changeCurrentEmblem(emblem);
        
        const newOptions = allTypeOptions[selectedPrestige]?.[emblem.name] || [];
        if (newOptions.length > 0) {
            // Try to find the same base name in new options
            const matchingOption = newOptions.find(option => 
                getBaseName(option.name) === currentBaseName
            );
            
            if (matchingOption) {
                setSelectedType(matchingOption.name);
            } else {
                // If exact match not found, use first option
                setSelectedType(newOptions[0].name);
            }
        }
    };

    // Helper function to extract base name (remove "Guld" and "Sølv" variants)
   
    const handleTypeChange = (typeName) => {
        setSelectedType(typeName);
    };

    return (
        <>
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-slate-900">KOKARDE</h3>
            </div>
            <div className='text-sm font-semibold text-slate-700 mt-8   ' >Roset farve</div>

            {/* Color Selection */}
            {selectedEmblem.name === 'Guld' ? (
                <>
                    <div className="flex space-x-3 mt-6">
                        {guldcolors.map((color) => (
                            <button
                                key={`${color.name}-${color.value}`}
                                onClick={() => handleColorChange(color)}
                                className={`w-12 h-12  rounded-xl border-2 flex justify-center items-center transition-all duration-200 hover:scale-110 ${selectedColor.value === color.value
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
                    <p className="text-sm mt-2 text-slate-700">Valgt: {selectedColor.name}</p>
                </>
            ) : (
                <>
                    <div className="flex space-x-3 mt-6">
                        {sulvcolors.map((color) => (
                            <button
                                key={color.value}
                                onClick={() => handleColorChange(color)}
                                className={`w-12 h-12 rounded-xl border-2 flex justify-center items-center transition-all duration-200 hover:scale-110 ${selectedColor.value === color.value
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
                    <p className="text-sm mt-2 text-slate-700">Valgt: {selectedColor.name}</p>
                </>
            )}

            {/* Emblem Selection */}
            <div className="mt-4">
                <span className="text-sm font-semibold text-slate-700">Kokarde Type</span>
                <div className="flex space-x-3 mt-6">
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
                <p className="text-sm mt-2 text-slate-700">Valgt: {selectedEmblem.name}</p>
            </div>

            {/* Prestige Type */}
            <div className="space-y-4 mt-4">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Emblem</label>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {selectedPrestige}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-3 flex-wrap">
                    {['Signature', 'Prestige', 'Stjernetegn'].map((type) => (
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

            {/* Type Selection */}
            <div className="space-y-4 mt-4">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Type</label>
                    <p className="text-sm mt-1 text-slate-700">Valgt: {selectedType}</p>
                </div>

                <div className="flex flex-wrap gap-3 ">
                    {currentTypeOptions.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => handleTypeChange(type.name)}
                            className={`w-15 h-15 border-2 rounded overflow-hidden hover:shadow-md 
                                transition-all duration-200 flex items-center justify-center
                                hover:from-red-100 hover:to-red-200 ${selectedType === type.name
                                    ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2'
                                    : 'border-slate-200 hover:border-blue-300'
                                }`}
                        >
                            <img src={type.icon} className='h-13 w-20 ' alt={type.name} />
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Bows;