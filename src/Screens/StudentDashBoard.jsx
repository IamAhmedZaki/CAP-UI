import React, { useState, useCallback, useRef, useEffect } from 'react';
import img1 from '../assets/menuCapPics/1.png';
import img2 from '../assets/menuCapPics/2.png';
import img3 from '../assets/menuCapPics/3.png';
import img4 from '../assets/menuCapPics/4.png';
import img5 from '../assets/menuCapPics/5.png';
import img6 from '../assets/menuCapPics/6.png';
import img7 from '../assets/menuCapPics/7.png';
import img8 from '../assets/menuCapPics/8.png';
import img9 from '../assets/menuCapPics/9.png';
import img10 from '../assets/logo.jpeg';
import EducationalTape from '../Components/EducationalTape';
import Embroidery from '../Components/Embroidery';
import Cover from '../Components/Cover';
import Shade from '../Components/Shade';
import Foer from '../Components/Foer';
import ExtraCover from '../Components/ExtraCover';
import Accessories from '../Components/Accessories';
import Size from '../Components/Size';
import Bows from '../Components/Bows';
import QuoteModal from '../Components/Modal';
import { useParams, useSearchParams } from 'react-router-dom';
import { GraduationCap, ChevronUp, ChevronDown } from 'lucide-react';

import HHX from '../Default/HHX';
import HTX from '../Default/HTX';
import STX from '../Default/STX';
import HF from '../Default/HF';
import EUX from '../Default/EUX';
import EUD from '../Default/EUD';
import sosuassistent from '../Default/sosuassistent';
import sosuhjælper from '../Default/sosuhjælper';
import frisør from '../Default/frisør';
import kosmetolog from '../Default/kosmetolog';
import pædagog from '../Default/pædagog';
import pau from '../Default/pau';
import ernæringsassisten from '../Default/ernæringsassisten';

const StudentDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('KOKARDE');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get("package");  // "standard"
  const program = searchParams.get("program");
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [globalEmblem, setGlobalEmblem] = useState({ name: 'Guld', value: 'Guld', color: '#FCD34D' });
  const [isAppReady, setIsAppReady] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [extraCoverReset, setExtraCoverReset] = useState(false)
  const [sizeFlag, setSizeFlag] = useState(false)
  const [errors, setErrors] = useState({});



  // Complete state for all components
  const initialoption = () => {
    switch (program?.toLowerCase()) {
        case 'hhx':
            return HHX;
        case 'htx':
            return HTX;
        case 'stx':
            return STX;
        case 'hf':
            return HF;
        case 'eux':
            return EUX;
        case 'eud':
            return EUD;
        case 'sosuassistent':
            return sosuassistent;
        case 'sosuhjælper':
            return sosuhjælper;
        case 'frisør':
            return frisør;
        case 'kosmetolog':
            return kosmetolog;
        case 'pau':
            return pau;
        case 'ernæringsassisten':
            return ernæringsassisten;
        case 'pædagog':
            return pædagog;
        default:
            return {};
    }
};

const [selectedOptions, setSelectedOptions] = useState(initialoption());



  const standardPrices = {
    KOKARDE: {
      'Roset farve': {
        '#7F1D1D': 0,
        '#1E3A8A': 39,
        '#DC2626': 39,
        'PSort': 0,
        'SosuSort': 0,
        'EuxRed': 0,
      },
      Kokarde: {
        Signature: 0,
        Prestige: 0,
        Stjernetegn: 0,
      },
      'Emblem': {
        Guld: 0,
        Sølv: 0,
      },
      Type: {
        Kurdistan: 0,
        Irak: 0,
        Iran: 0,
        Somalia: 0,
        Somaliland: 0,
        Palæstina: 0,
        Libanon: 0,
        Afghanistan: 0,
        Albanien: 0,
        Serbien: 0,
        Bosnien: 0,
        Danmark: 0,
        Marokko: 0,
        Pakistan: 0,
        Tyrkiet: 0,

        // Gold Signature emblems
        'Ahornblad Guld': 0,
        'Anker Guld': 0,
        'Atom Guld': 0,
        'DNA Guld': 0,
        'Globus Guld': 0,
        'Hjerte Guld': 0,
        'Halvmåne Guld Simli': 69,
        'Halvmåne Guld': 0,
        'IT Guld': 0,
        'Lotus Guld': 0,
        'Merkurstav Guld Simli': 69,
        'Merkurstav Guld': 0,
        'Node Guld': 0,
        'Pi Guld': 0,
        'Sport Guld': 0,
        'Teater Guld': 0,
        'Twin Guld': 0,

        // Gold program-specific emblems
        'HHX Guld Simli': 69,
        'HHX Guld': 0,
        'Atom HTX Guld': 0,
        'HTX Guld Simli': 69,
        'HTX Guld': 0,
        'STX Guld Simli': 69,
        'STX Guld': 0,
        'EUD Guld': 0,
        'EUX Guld Simli': 69,
        'EUX Guld': 0,
        'HF Guld Simli': 69,
        'HF Guld': 0,

        // Silver Signature emblems
        'Ahornblad Sølv': 0,
        'Anker Sølv': 0,
        'Atom Sølv': 0,
        'DNA Sølv': 0,
        'Globus Sølv': 0,
        'Hjerte Sølv': 0,
        'Halvmåne Sølv Simli': 69,
        'Halvmåne Sølv': 0,
        'IT Sølv': 0,
        'Lotus Sølv': 0,
        'Merkurstav Sølv Simli': 69,
        'Merkurstav Sølv': 0,
        'Node Sølv': 0,
        'Pi Sølv': 0,
        'Sport Sølv': 0,
        'Teater Sølv': 0,
        'Twin Sølv': 0,

        // Silver program-specific emblems
        'HHX Sølv Simli': 69,
        'HHX Sølv': 0,
        'Atom HTX Sølv': 0,
        'HTX Sølv Simli': 69,
        'HTX Sølv': 0,
        'STX Sølv': 0,
        'STX Sølv Simli': 69,
        'EUD Sølv': 0,
        'EUX Sølv Simli': 69,
        'EUX Sølv': 0,
        'HF Sølv Simli': 69,
        'HF Sølv': 0,

        // Prestige Gold - set to 89
        'Diamant': 89,
        'Onyx': 89,
        'Perle': 89,
        'Nova': 89,
        'Safir': 89,

        // Prestige Silver - set to 89
        'Jupiter Simli': 89,
        'Onyx': 89,
        'Perle': 89,
        'Nova': 89,
        'Safir': 89,

        // Stjernetegn Gold - set to 89
        'Tyr Guld': 89,
        'IB Guld': 0,
        'F Key Guld': 0,
        'Fisk Guld': 89,
        'Jomfru Guld': 89,
        'Krebs Guld': 89,
        'Løve Guld': 89,
        'Skorpion Guld': 89,
        'Skytte Guld': 89,
        'Vandmand Guld': 89,
        'Vædder Guld': 89,
        'Vægt Guld': 89,
        'Stenbuk Guld': 89,
        'Tvilling Guld': 89,

        // Stjernetegn Silver - set to 89
        'Tyr Sølv': 89,
        'IB Sølv': 0,
        'F Key Sølv': 0,
        'Fisk Sølv': 89,
        'Jomfru Sølv': 89,
        'Krebs Sølv': 89,
        'Løve Sølv': 89,
        'Skorpion Sølv': 89,
        'Skytte Sølv': 89,
        'Vandmand Sølv': 89,
        'Vædder Sølv': 89,
        'Vægt Sølv': 89,
        'Stenbuk Sølv': 89,
        'Tvilling Sølv': 89,
      }
    },

    UDDANNELSESBÅND: {
      Huebånd: {
        EUX: 0,
        Sort: 0
      },
      Materiale: {
        BOMULD: 0,
        SATIN: 0,
        VELOUR: 239,
        GLIMMER: 239,
        SHIMMER: 0,
      },
      Hagerem: {
        Mat: 0,
        Blank: 0,
        'Sort med sorteknuder': 69,
        'Guld hagerem med guld knuder': 69,
        'Sort hagerem med guld knuder': 69,
        'Sølv hagerem med sølvknuder': 69,
        'Sølv hagerem med sort knuder': 69,
      },

      'Broderi farve': {
        Guld: 0,
        Sølv: 0,
        EUX: 0,
        Hvid: 0,
        Sort: 0
      },
      'Knap farve': {
        Guld: 0,
        Sølv: 0,
      },
      'Broderi foran': {
        base: 99,
        perChar: 0
      },
    },

    BRODERI: {
      'Broderifarve': {
        Guld: 0,
        Sølv: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      'Navne broderi': {
        base: 99,
        perChar: 0
      },
      'Skolebroderi farve': {
        Hvid: 0,
        Sort: 0,
        Guld: 0,
        Sølv: 0
      },
      Skolebroderi: {
        base: 99,
        perChar: 0
      },
    },

    BETRÆK: {
      Farve: {
        'Hvid': 0,           // WHITE - WATER REPELLENT
        'Sort': 0,           // BLACK - WATER REPELLENT
        'Hvid med glimmer': 79,           // WHITE GLITTER
        'Sort med glimmer': 79,           // Sort GLIMMER
      },
      Kantbånd: {
        NONE: 0,
        HTX: 29,
        STX: 29,
        HHX: 29,
        HF: 29,
        EUD: 29,
        EUX: 29,
        Sort: 29,
        Hvid: 29,
      },
      Topkant: {
        NONE: 0,
        Guld: 29,
        Sølv: 29,

      },
      Flagbånd: {
        International: 59,
        'Frankrig-Spanien-Tyskland-UK-Danmark': 59,
        'Usa-Kina-Danmark': 59,

      },
      Stjerner: {
        NONE: 0,
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
        '6': 39,  // Five Stars
      },
    },

    SKYGGE: {
      Type: {
        Blank: 0,    // default short/Blank shade
        Shiny: 39,      // matte type
        Glimmer: 39,  // glimmer type
      },
      Materiale: {
        'Uden kant': 0, // without edge
        'Med kant': 0,  // with edge
      },
      Skyggebånd: {
        INGEN: 0,   // no tape
        Guld: 29,    // Guld tape
        Glitter: 0, // glitter tape
        Sølv: 29, // Sølv tape
      },
      'Skyggegravering Line 1': {
        base: 99,    // base cost for line 1
        perChar: 0, // per character cost for line 1
      },
      'Skyggegravering Line 2': {
        base: 0,    // base cost for line 2
        perChar: 0, // per character cost for line 2
      },
      'Skyggegravering Line 3': {
        base: 0,    // base cost for line 3
        perChar: 0, // per character cost for line 3
      },
    },

    FOER: {
      Svederem: {
        Læder: 0,
        'Kunstlæder': 29,
        Ruskin: 29,
        Alcantra: 29,
      },
      Farve: {
        Hvid: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      Sløjfe: {
        Hvid: 0,
        Sort: 0,
        Guld: 29,
        Sølv: 29,
      },
      Foer: {
        Viskose: 29,
        Polyester: 0,
        Satin: 0,
        Silke: 0,
      },
      Type: {
        Hvid: 29,
        Brown: 29,
        Bordeaux: 0,
        Champagne: 29,
        Rosa: 29,
      },
    },

    EKSTRABETRÆK: {
      Tilvælg: {
        Yes: 0,
        No: 0,
      },
      Farve: {
        'Hvid': 69,           // WHITE - WATER REPELLENT
        'Sort': 69,           // BLACK - WATER REPELLENT
        'Hvid med glimmer': 79,           // WHITE GLITTER
        'Sort med glimmer': 79,           // Sort GLIMMER
      },
      Kantbånd: {
        NONE: 0,
        HTX: 29,
        STX: 29,
        HHX: 29,
        HF: 29,
        EUD: 29,
        EUX: 29,
        Sort: 29,
        Hvid: 29,

      },
      Topkant: {
        NONE: 0,
        Guld: 29,
        Sølv: 29,

      },
      Flagbånd: {
      International: 59,
      'Frankrig-Spanien-Tyskland-UK-Danmark': 59,
      'Usa-Kina-Danmark': 59,

      },
      Stjerner: {
        NONE: 0,
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
        '6': 39,  // Five Stars
      },
    },

    TILBEHØR: {
      Hueæske: {
        Standard: 0,
        'Premium æske': 299,
        'Luksus æske': 199
      },

      Huekuglepen: {
        Yes: 29,
        No: 0
      },
      Silkepude: {
        Yes: 39,
        No: 0
      },
      'Ekstra korkarde': {
        Yes: 99,
        No: 0
      },
       'Lille Flag': {
        Yes: 49,
        No: 0
      },
      Handsker: {
        Yes: 39,
        No: 0
      },
      'Store kuglepen': {
        Yes: 39,
        No: 0
      },
      'Smart Tag': {
        Yes: 99,
        No: 0
      },
      Lyskugle: {
        Yes: 25,
        No: 0
      },
      'Luksus champagneglas': {
        Yes: 100,
        No: 0
      },
      Fløjte: {
        Yes: 29,
        No: 0
      },
      Trompet: {
        Yes: 29,
        No: 0
      },
      Bucketpins: {
        Yes: 99,
        No: 0
      },
    },

    STØRRELSE: {
      'Vælg størrelse': {
        base: 0,
        perMM: 0
      },
      'Millimeter tilpasningssæt': {
        Yes: 39,
        No: 0
      },
    },
  };


  // ---------------- LUKSUS ----------------
  const luksusPrices = {
    KOKARDE: {
      'Roset farve': {
       '#7F1D1D': 0,
       '#7F1D1DD': 39,
       '#7F1D1DX': 39,
        '#1E3A8A': 39,
        '#DC2626': 39,
        'PSort': 0,
        'SosuSort': 0,
        'EuxRed': 0,
      },
      Kokarde: {
        Signature: 0,
        Prestige: 0,
        Stjernetegn: 0,
      },
      'Emblem': {
        Guld: 0,
        Sølv: 0,
      },
      Type: {
        Kurdistan: 0,
        Irak: 0,
        Iran: 0,
        Somalia: 0,
        Somaliland: 0,
        Palæstina: 0,
        Libanon: 0,
        Afghanistan: 0,
        Albanien: 0,
        Serbien: 0,
        Bosnien: 0,
        Danmark: 0,
        Marokko: 0,
        Pakistan: 0,
        Tyrkiet: 0,

        // Gold Signature emblems
        'Ahornblad Guld': 0,
        'Anker Guld': 0,
        'Atom Guld': 0,
        'DNA Guld': 0,
        'Globus Guld': 0,
        'Hjerte Guld': 0,
        'Halvmåne Guld Simli': 69,
        'Halvmåne Guld': 0,
        'IT Guld': 0,
        'Lotus Guld': 0,
        'Merkurstav Guld Simli': 69,
        'Merkurstav Guld': 0,
        'Node Guld': 0,
        'Pi Guld': 0,
        'Sport Guld': 0,
        'Teater Guld': 0,
        'Twin Guld': 0,

        // Gold program-specific emblems
        'HHX Guld Simli': 69,
        'HHX Guld': 0,
        'Atom HTX Guld': 0,
        'HTX Guld Simli': 69,
        'HTX Guld': 0,
        'STX Guld Simli': 69,
        'STX Guld': 0,
        'EUD Guld': 0,
        'EUX Guld Simli': 69,
        'EUX Guld': 0,
        'HF Guld Simli': 69,
        'HF Guld': 0,

        // Silver Signature emblems
        'Ahornblad Sølv': 0,
        'Anker Sølv': 0,
        'Atom Sølv': 0,
        'DNA Sølv': 0,
        'Globus Sølv': 0,
        'Hjerte Sølv': 0,
        'Halvmåne Sølv Simli': 69,
        'Halvmåne Sølv': 0,
        'IT Sølv': 0,
        'Lotus Sølv': 0,
        'Merkurstav Sølv Simli': 69,
        'Merkurstav Sølv': 0,
        'Node Sølv': 0,
        'Pi Sølv': 0,
        'Sport Sølv': 0,
        'Teater Sølv': 0,
        'Twin Sølv': 0,

        // Silver program-specific emblems
        'HHX Sølv Simli': 69,
        'HHX Sølv': 0,
        'Atom HTX Sølv': 69,
        'HTX Sølv Simli': 69,
        'HTX Sølv': 0,
        'STX Sølv': 0,
        'STX Sølv Simli': 69,
        'EUD Sølv': 0,
        'EUX Sølv Simli': 69,
        'EUX Sølv': 0,
        'HF Sølv Simli': 69,
        'HF Sølv': 0,

        // Prestige Gold - set to 89
        'Diamant': 89,
        'Onyx': 89,
        'Perle': 89,
        'Nova': 89,
        'Safir': 89,

        // Prestige Silver - set to 89
        'Diamant': 89,
        'Onyx': 89,
        'Perle': 89,
        'Nova': 89,
        'Safir': 89,

        // Stjernetegn Gold - set to 89
        'Tyr Guld': 89,
        'IB Guld': 0,
        'F Key Guld': 0,
        'Fisk Guld': 89,
        'Jomfru Guld': 89,
        'Krebs Guld': 89,
        'Løve Guld': 89,
        'Skorpion Guld': 89,
        'Skytte Guld': 89,
        'Vandmand Guld': 89,
        'Vædder Guld': 89,
        'Vægt Guld': 89,
        'Stenbuk Guld': 89,
        'Tvilling Guld': 89,

        // Stjernetegn Silver - set to 89
        'Tyr Sølv': 89,
        'IB Sølv': 0,
        'F Key Sølv': 0,
        'Fisk Sølv': 89,
        'Jomfru Sølv': 89,
        'Krebs Sølv': 89,
        'Løve Sølv': 89,
        'Skorpion Sølv': 89,
        'Skytte Sølv': 89,
        'Vandmand Sølv': 89,
        'Vædder Sølv': 89,
        'Vægt Sølv': 89,
        'Stenbuk Sølv': 89,
        'Tvilling Sølv': 89,
      },
    },

    UDDANNELSESBÅND: {
      Huebånd: {
        EUX: 0,
        Sort: 0
      },
      Materiale: {
        BOMULD: 0,
        VELOUR: 0,
        SATIN: 0,
        GLIMMER: 99,
        SHIMMER: 99,
      },
      Hagerem: {
        Mat: 0,
        Blank: 0,
        'Sort med sorteknuder': 0,
        'Guld hagerem med guld knuder': 0,
        'Sort hagerem med guld knuder': 0,
        'Sølv hagerem med sølvknuder': 0,
        'Sølv hagerem med sort knuder': 0,
      },

      'Broderi farve': {
        Guld: 0,
        Sølv: 0,
        EUX: 0,
        Hvid: 0,
        Sort: 0
      },
      'Knap farve': {
        Guld: 0,
        Sølv: 0,
      },
      'Broderi foran': {
        base: 0,
        perChar: 0
      },
    },

    BRODERI: {
      'Broderifarve': {
        Guld: 0,
        Sølv: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      'Navne broderi': {
        base: 0,
        perChar: 0
      },
      'Skolebroderi farve': {
        Hvid: 0,
        Sort: 0,
        Guld: 0,
        Sølv: 0
      },
      Skolebroderi: {
        base: 0,
        perChar: 0
      },
    },

    BETRÆK: {
      Farve: {
        'Hvid': 0,           // WHITE - WATER REPELLENT
        'Sort': 0,           // BLACK - WATER REPELLENT
        'Hvid med glimmer': 79,           // WHITE GLITTER
        'Sort med glimmer': 79,           // Sort GLIMMER
      },
      Kantbånd: {
        NONE: 0,
        HTX: 29,
        STX: 29,
        HHX: 29,
        HF: 29,
        EUD: 29,
        EUX: 29,
        Sort: 29,
        Hvid: 29,

      },
      Topkant: {
        NONE: 0,
        Guld: 29,
        Sølv: 29,

      },
      Flagbånd: {
      International: 59,
      'Frankrig-Spanien-Tyskland-UK-Danmark': 59,
      'Usa-Kina-Danmark': 59,

      },
      Stjerner: {
        NONE: 0,
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
        '6': 39,  // Five Stars
      },
    },

    SKYGGE: {
      Type: {
        Blank: 0,    // default short/Blank shade
        Shiny: 0,      // matte type
        Glimmer: 0,  // glimmer type
      },
      Materiale: {
        'Uden kant': 0, // without edge
        'Med kant': 0,  // with edge
      },
      Skyggebånd: {
        INGEN: 0,   // no tape
        Guld: 0,    // Guld tape
        Glitter: 0, // glitter tape
        Sølv: 0, // Sølv tape
      },
      'Skyggegravering Line 1': {
        base: 99,    // base cost for line 1
        perChar: 0, // per character cost for line 1
      },
      'Skyggegravering Line 2': {
        base: 0,    // base cost for line 2
        perChar: 0, // per character cost for line 2
      },
      'Skyggegravering Line 3': {
        base: 0,    // base cost for line 3
        perChar: 0, // per character cost for line 3
      },
    },

    FOER: {
      Svederem: {
        Læder: 0,
        'Kunstlæder': 29,
        Ruskin: 29,
        Alcantra: 29,
      },
      Farve: {
        Hvid: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      Sløjfe: {
        Hvid: 0,
        Sort: 0,
        Guld: 0,
        Sølv: 0,
      },
      Foer: {
        Viskose: 29,
        Polyester: 0,
        Satin: 0,
        Silke: 0,
      },
      Type: {
        Hvid: 0,
        Brown: 0,
        Bordeaux: 0,
        Champagne: 0,
        Rosa: 29,
      },
    },

    EKSTRABETRÆK: {
      Tilvælg: {
        Yes: 0,
        No: 0,
      },
      Farve: {
        'Hvid': 69,           // WHITE - WATER REPELLENT
        'Sort': 69,           // BLACK - WATER REPELLENT
        'Hvid med glimmer': 79,           // WHITE GLITTER
        'Sort med glimmer': 79,           // Sort GLIMMER
      },
      Kantbånd: {
        NONE: 0,
        HTX: 29,
        STX: 29,
        HHX: 29,
        HF: 29,
        EUD: 29,
        EUX: 29,
        Sort: 29,
        Hvid: 29,

      },
      Topkant: {
        NONE: 0,
        Guld: 29,
        Sølv: 29,

      },
      Flagbånd: {
      International: 59,
      'Frankrig-Spanien-Tyskland-UK-Danmark': 59,
      'Usa-Kina-Danmark': 59,

      },
      Stjerner: {
        NONE: 0,
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
        '6': 39,  // Five Stars
      },
    },

    TILBEHØR: {
      Hueæske: {
        Standard: 0,
        'Premium æske': 100,
        'Luksus æske': 0
      },

      Huekuglepen: {
        Yes: 0,
        No: 0
      },
      Silkepude: {
        Yes: 0,
        No: 0
      },
      'Ekstra korkarde': {
        Yes: 0,
        No: 0
      },
      'Lille Flag': {
        Yes: 49,
        No: 0
      },
      Handsker: {
        Yes: 0,
        No: 0
      },
      'Stor kuglepen': {
        Yes: 39,
        No: 0
      },
      'Smart Tag': {
        Yes: 99,
        No: 0
      },
      Lyskugle: {
        Yes: 25,
        No: 0
      },
      'Luksus champagneglas': {
        Yes: 0,
        No: 0
      },
      Fløjte: {
        Yes: 0,
        No: 0
      },
      Trrompet: {
        Yes: 29,
        No: 0
      },

      Bucketpins: {
        Yes: 99,
        No: 0
      },
    },

    STØRRELSE: {
      'Vælg størrelse': {
        base: 0,
        perMM: 0
      },
      'Millimeter tilpasningssæt': {
        Yes: 39,
        No: 0
      },
    },
  };

  // ---------------- PREMIUM ----------------
  const premiumPrices = {
    KOKARDE: {
      'Roset farve': {
        '#7F1D1D': 0,
        '#1E3A8A': 0,
        '#DC2626': 0,
        'PSort': 0,
        'SosuSort': 0,
        'EuxRed': 0,
      },
      Kokarde: {
        Signature: 0,
        Prestige: 0,
        Stjernetegn: 0,
      },
      'Emblem': {
        Guld: 0,
        Sølv: 0,
      },
      Type: {
        Kurdistan: 0,
        Irak: 0,
        Iran: 0,
        Somalia: 0,
        Somaliland: 0,
        Palæstina: 0,
        Libanon: 0,
        Afghanistan: 0,
        Albanien: 0,
        Serbien: 0,
        Bosnien: 0,
        Danmark: 0,
        Marokko: 0,
        Pakistan: 0,
        Tyrkiet: 0,

        // Guld Signature emblems
        'Ahornblad Guld': 0,
        'Anker Guld': 0,
        'Atom Guld': 0,
        'DNA Guld': 0,
        'Globus Guld': 0,
        'Hjerte Guld': 0,
        'Halvmåne Guld Simli': 0,
        'Halvmåne Guld': 0,
        'IT Guld': 0,
        'Lotus Guld': 0,
        'Merkurstav Guld Simli': 0,
        'Merkurstav Guld': 0,
        'Node Guld': 0,
        'Pi Guld': 0,
        'Sport Guld': 0,
        'Teater Guld': 0,
        'Twin Guld': 0,

        // Guld program-specific emblems
        'HHX Guld Simli': 0,
        'HHX Guld': 0,
        'Atom HTX Guld': 0,
        'HTX Guld Simli': 0,
        'HTX Guld': 0,
        'STX Guld Simli': 0,
        'STX Guld': 0,
        'EUD Guld': 0,
        'EUX Guld Simli': 0,
        'EUX Guld': 0,

        // Sølv Signature emblems
        'Ahornblad Sølv': 0,
        'Anker Sølv': 0,
        'Atom Sølv': 0,
        'DNA Sølv': 0,
        'Globus Sølv': 0,
        'Hjerte Sølv': 0,
        'Halvmåne Sølv Simli': 0,
        'Halvmåne Sølv': 0,
        'IT Sølv': 0,
        'Lotus Sølv': 0,
        'Merkurstav Sølv Simli': 0,
        'Merkurstav Sølv': 0,
        'Node Sølv': 0,
        'Pi Sølv': 0,
        'Sport Sølv': 0,
        'Teater Sølv': 0,
        'Twin Sølv': 0,

        // Sølv program-specific emblems
        'HHX Sølv Simli': 0,
        'HHX Sølv': 0,
        'Atom HTX Sølv': 0,
        'HTX Sølv Simli': 0,
        'HTX Sølv': 0,
        'STX Sølv': 0,
        'STX Sølv Simli': 0,
        'EUD Sølv': 0,
        'EUX Sølv Simli': 0,
        'EUX Sølv': 0,

        // Prestige Guld
        'Jupiter Guld': 0,
        'Saturn Guld': 0,
        'Venus Guld': 0,
        'Merkur Guld': 0,
        'Neptun Guld': 0,

        // Prestige Sølv
        'Jupiter Sølv': 0,
        'Saturn Sølv': 0,
        'Venus Sølv': 0,
        'Merkur Sølv': 0,
        'Neptun Sølv': 0,

        // Stjernetegn Guld
        'Tyr Guld': 0,
        'IB Guld': 0,
        'F Key Guld': 0,
        'Fisk Guld': 0,
        'Jomfru Guld': 0,
        'Krebs Guld': 0,
        'Løve Guld': 0,
        'Skorpion Guld': 0,
        'Skytte Guld': 0,
        'Vandmand Guld': 0,
        'Vædder Guld': 0,
        'Vægt Guld': 0,
        'Stenbuk Guld': 0,
        'Tvilling Guld': 0,

        // Stjernetegn Sølv
        'Tyr Sølv': 0,
        'IB Sølv': 0,
        'F Key Sølv': 0,
        'Fisk Sølv': 0,
        'Jomfru Sølv': 0,
        'Krebs Sølv': 0,
        'Løve Sølv': 0,
        'Skorpion Sølv': 0,
        'Skytte Sølv': 0,
        'Vandmand Sølv': 0,
        'Vædder Sølv': 0,
        'Vægt Sølv': 0,
        'Stenbuk Sølv': 0,
        'Tvilling Sølv': 0,
      },
    },

    UDDANNELSESBÅND: {
      Huebånd: {
        EUX: 0,
        Sort: 0
      },
      Materiale: {
        BOMULD: 0,
        VELOUR: 0,
        SATIN: 0,
        GLIMMER: 0,
        SHIMMER: 0,
      },
      Hagerem: {
        Mat: 0,
        Blank: 0,
        'Sort med sorteknuder': 0,
        'Guld hagerem med guld knuder': 0,
        'Sort hagerem med guld knuder': 0,
        'Sølv hagerem med sølvknuder': 0,
        'Sølv hagerem med sort knuder': 0,
      },

      'Broderi farve': {
        Guld: 0,
        Sølv: 0,
        EUX: 0,
        Hvid: 0,
        Sort: 0
      },
      'Knap farve': {
        Guld: 0,
        Sølv: 0,
      },
      'Broderi foran': {
        base: 0,
        perChar: 0
      },
    },

    BRODERI: {
      'Broderifarve': {
        Guld: 0,
        Sølv: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      'Navne broderi': {
        base: 0,
        perChar: 0
      },
      'Skolebroderi farve': {
        WHITE: 0,
        BLACK: 0,
        Guld: 0,
        Sølv: 0
      },
      Skolebroderi: {
        base: 0,
        perChar: 0
      },
    },

    BETRÆK: {
      Farve: {
        'Hvid': 0,
        'Sort': 0,
        'Hvid med glimmer': 0,
        'Sort med glimmer': 0,
      },
      Kantbånd: {
        NONE: 0,
        HTX: 0,
        STX: 0,
        HHX: 0,
        HF: 0,
        EUD: 0,
        EUX: 0,
        Sort: 0,
        Hvid: 0,
      },
      Topkant: {
        NONE: 0,
        Guld: 0,
        Sølv: 0,
      },
      Stjerner: {
        NONE: 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
      },
    },

    SKYGGE: {
      Type: {
        Blank: 0,
        Shiny: 0,
        Glimmer: 0,
      },
      Materiale: {
        'Uden kant': 0,
        'Med kant': 0,
      },
      Skyggebånd: {
        INGEN: 0,
        Guld: 0,
        Glitter: 0,
        Sølv: 0,
      },
      'Skyggegravering Line 1': {
        base: 0,
        perChar: 0,
      },
      'Skyggegravering Line 2': {
        base: 0,
        perChar: 0,
      },
      'Skyggegravering Line 3': {
        base: 0,
        perChar: 0,
      },
    },

    FOER: {
      Svederem: {
        Læder: 0,
        'Kunstlæder': 0,
        Ruskin: 0,
        Alcantra: 0,
      },
      Farve: {
        Hvid: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      Sløjfe: {
        Hvid: 0,
        Sort: 0,
        Guld: 0,
      },
      Foer: {
        Viskose: 0,
        Polyester: 0,
        Satin: 0,
        Silke: 0,
      },
      Type: {
        Hvid: 0,
        BRUN: 0,
        STX: 0,
        CHAMPAGNE: 0,
      },
    },

    EKSTRABETRÆK: {
      Tilvælg: {
        Yes: 0,
        No: 0,
      },
      Farve: {
        'Hvid': 0,
        'Sort': 0,
        'Hvid med glimmer': 0,
        'Sort med glimmer': 0,
      },
      Kantbånd: {
        NONE: 0,
        HTX: 0,
        STX: 0,
        HHX: 0,
        HF: 0,
        EUD: 0,
        EUX: 0,
        Sort: 0,
        Hvid: 0,
      },
      Topkant: {
        NONE: 0,
        Guld: 0,
        Sølv: 0,
      },
      Stjerner: {
        NONE: 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
      },
    },

    TILBEHØR: {
      Hueæske: {
        Standard: 0,
        'Premium æske': 0,
        'Luksus æske': 0
      },

      Huekuglepen: {
        Yes: 0,
        No: 0
      },
      Silkepude: {
        Yes: 0,
        No: 0
      },
      'Ekstra korkarde': {
        Yes: 0,
        No: 0
      },
      Handsker: {
        Yes: 0,
        No: 0
      },
      'Stor kuglepen': {
        Yes: 0,
        No: 0
      },
      'Smart Tag': {
        Yes: 0,
        No: 0
      },
      Lyskugle: {
        Yes: 0,
        No: 0
      },
      'Luksus champagneglas': {
        Yes: 0,
        No: 0
      },
      Fløjte: {
        Yes: 0,
        No: 0
      },
      Trrompet: {
        Yes: 0,
        No: 0
      },
    },

    STØRRELSE: {
      'Vælg størrelse': {
        base: 0,
        perMM: 0
      },
      'Millimeter tilpasningssæt': {
        Yes: 0,
        No: 0
      },
    },
  };


  let prices;
  if (packageName === "standard") prices = standardPrices;
  else if (packageName === "premium") prices = premiumPrices;
  else if (packageName === "luksus") prices = luksusPrices;


  const calculateTotalPrice = () => {
    let total = 0;

    // Helper: calculate price for text-based fields
    const calcTextPrice = (text, pricing) => {
      if (!text || !pricing) return 0;
      const base = pricing.base || 0;
      const perChar = pricing.perChar || 0;
      return base + perChar * text.length;
    };

    const isExtraOptionsSelected =
      selectedOptions.EKSTRABETRÆK?.Tilvælg == "Yes";

    // Track special case for SKYGGE lines
    let skyggeLinesSelected = false;
    let blackBow = false;

    for (const category in selectedOptions) {
      const categoryOptions = selectedOptions[category];
      const categoryPrices = prices[category];

      if (!categoryPrices) continue;

      for (const optionKey in categoryOptions) {
        const value = categoryOptions[optionKey];
        let optionPrices = categoryPrices[optionKey];
        if (!optionPrices) continue;

        if (category == "EKSTRABETRÆK" && !isExtraOptionsSelected) {
          continue;
        }

        // Special case: SKYGGE lines (1–3)
        if (
          category === "SKYGGE" &&
          ["Skyggegravering Line 1", "Skyggegravering Line 2", "Skyggegravering Line 3"].includes(optionKey)
        ) {
          if (typeof value === "string" && value.trim() !== "") {
            skyggeLinesSelected = true;
          }
          continue; // Skip normal pricing, we'll handle later
        }

        // Do NOT continue for other colors, let normal pricing handle them


        // Case 1: text-based pricing (base + perChar)
        if (typeof value === "string" && optionPrices.base !== undefined) {
          total += calcTextPrice(value, optionPrices);
        }

        // Case 2: direct match
        else if (typeof value === "string" && optionPrices[value] !== undefined) {
          total += optionPrices[value];
        }

        // Case 3: object with .value
        else if (value?.value && optionPrices[value.value] !== undefined) {
          total += optionPrices[value.value];
        }

        // Case 4: number-based (like size)
        else if (typeof value === "number" && optionPrices.base !== undefined) {
          const base = optionPrices.base || 0;
          const perMM = optionPrices.perMM || 0;
          total += base + value * perMM;
        }
      }
    }

    // ✅ Apply only once if any line is selected
    if (skyggeLinesSelected && packageName !== "premium") {
      total += 99;
    }


    // Package base price
    let iniialPrice = 0;
    if (packageName === "standard") iniialPrice = 449;
    else if (packageName === "luksus") iniialPrice = 995;
    else if (packageName === "premium") iniialPrice = 1850;

    return total + iniialPrice + 59;
  };



  const menuItems = [
    { name: 'KOKARDE', icon: img1 },
    { name: 'UDDANNELSESBÅND', icon: img2 },
    { name: 'BRODERI', icon: img3 },
    { name: 'BETRÆK', icon: img4 },
    { name: 'SKYGGE', icon: img5 },
    { name: 'FOER', icon: img6 },
    { name: 'EKSTRABETRÆK', icon: img7 },
    { name: 'TILBEHØR', icon: img8 },
    { name: 'STØRRELSE', icon: img9 }
  ];


  // Generic handler for all option changes
  const handleOptionChange = useCallback((section, key, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  }, []);

  // Function to collect all selected options
  const collectSelectedOptions = useCallback(() => {
   
    setIsQuoteModalOpen(true);
  }, []);

  useEffect(() => {
    if (isIframeLoaded && isAppReady && program) {
      sendProgramToIframe();
    }
  }, [program, isIframeLoaded, isAppReady]);

  const sendProgramToIframe = () => {
    // Get iframe by ID
    const iframe = document.getElementById('preview-iframe');
    const iframe2 = document.getElementById('preview-iframe2');
    if (iframe && iframe.contentWindow) {
      const message = "program:" + program.toLowerCase();
      console.log("Sending message to iframe:", message);
      iframe.contentWindow.postMessage(message, "*");
      iframe2.contentWindow.postMessage(message, "*");
    } else {
      console.log("Iframe not ready or program not available");
    }
  };

  const handleIframeLoad = () => {
    console.log("Iframe loaded");
    setIsIframeLoaded(true);
  };

  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event) => {
      // For security, you might want to check event.origin
      if (event.data === "app:ready") {
        console.log("Received app:ready message from iframe");
        setIsAppReady(true);

        // Send program if we have one
        if (program) {
          sendProgramToIframe();
        }
      }

      // Handle other messages if needed
       if (typeof event.data === 'string' && event.data.startsWith('{')) {
        try {
          const parsedData = JSON.parse(event.data);
          console.log("Received JSON from iframe:", parsedData);
        } catch (e) {
          console.log("Received string from iframe:", event.data);
        }
      } 
      // else {
      //   console.log("Received from iframe:", event.data);
      // }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [program]);

  // Add this useEffect to debug
  useEffect(() => {
    console.log("Program changed:", program);
    console.log("Iframe loaded status:", isIframeLoaded);
    console.log("App ready status:", isAppReady);
  }, [program, isIframeLoaded, isAppReady]);
  
  useEffect(() => {
    console.log(selectedOptions);
    
  }, [activeMenu]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="bg-white/70 backdrop-blur-sm border-r border-slate-200 overflow-y-auto pb-[133px]">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-center text-slate-600 uppercase tracking-wider mb-4">
              Kasketter
            </h2>
            <nav className="">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                  if (errors && Object.keys(errors).length > 0) {
                return;
              }
                    setActiveMenu(item.name)


                  }}
                  className={`flex items-center px-2 py-3 rounded-xl transition-all duration-200 group ${activeMenu === item.name
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm'
                    : 'hover:bg-slate-50 hover:shadow-sm'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-transform duration-200 ${activeMenu === item.name ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                    <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                  </div>

                  {activeMenu === item.name && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Configuration Panel */}
          <div className="w-[40%] bg-white/50 backdrop-blur-sm">
            <div className="p-6 space-y-8 h-full overflow-y-auto pb-[133px]">
              {activeMenu === 'KOKARDE' && (
                <Bows
                  selectedOptions={selectedOptions.KOKARDE}
                  onOptionChange={(key, value) => handleOptionChange('KOKARDE', key, value)}
                  program={program}
                  changeCurrentEmblem={setGlobalEmblem}
                />
              )}
              {activeMenu === "UDDANNELSESBÅND" && (
                <EducationalTape
                  selectedOptions={selectedOptions.UDDANNELSESBÅND}
                  onOptionChange={(key, value) => handleOptionChange('UDDANNELSESBÅND', key, value)}
                  program={program}
                  currentEmblem={globalEmblem}
                  pakke={packageName}
                />
              )}
              {activeMenu === "BRODERI" && (
                <Embroidery
                  selectedOptions={selectedOptions.BRODERI}
                  onOptionChange={(key, value) => handleOptionChange('BRODERI', key, value)}
                  program={program}
                  pakke={packageName}

                />
              )}
              {activeMenu === "BETRÆK" && (
                <Cover
                  selectedOptions={selectedOptions.BETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('BETRÆK', key, value)}
                  program={program}
                  currentEmblem={globalEmblem}

                />
              )}
              {activeMenu === "SKYGGE" && (
                <Shade
                  selectedOptions={selectedOptions.SKYGGE}
                  onOptionChange={(key, value) => handleOptionChange('SKYGGE', key, value)}
                />
              )}
              {activeMenu === "FOER" && (
                <Foer
                  selectedOptions={selectedOptions.FOER}
                  onOptionChange={(key, value) => handleOptionChange('FOER', key, value)}
                  currentEmblem={globalEmblem}
                  program={program}

                />
              )}
              {activeMenu === 'EKSTRABETRÆK' && (
                <ExtraCover
                  selectedOptions={selectedOptions.EKSTRABETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('EKSTRABETRÆK', key, value)} currentEmblem={globalEmblem}
                  program={program}
                  priceReset={setExtraCoverReset}
                />
              )}
              {activeMenu === "TILBEHØR" && (
                <Accessories
                  selectedOptions={selectedOptions.TILBEHØR}
                  onOptionChange={(key, value) => handleOptionChange('TILBEHØR', key, value)}
                  errors={errors}
                  setErrors={setErrors}
                />
              )}
              {activeMenu === "STØRRELSE" && (
                <Size
                  selectedOptions={selectedOptions.STØRRELSE}
                  onOptionChange={(key, value) => handleOptionChange('STØRRELSE', key, value)}
                  size={setSizeFlag}
                />
              
                
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1 p-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl h-full flex flex-col border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Valgt hue</h4>
                    <p className="text-sm text-slate-600">{program.toUpperCase()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-600">LIVE FORSIDE</span>
                </div>
              </div>


              {/* Scrolling Message */}
              {/* Static Warning Message */}
              <div className="bg-yellow-100 border-y border-yellow-300 px-4 py-2">
                <p className="text-sm text-yellow-800 font-semibold text-center">
                  Ændringen vises ikke på huen, men bare rolig — det er ikke en fejl 😉 Din hue bliver præcis, som du designer den.
                  Er du i tvivl? Skriv til os på Instagram eller TikTok, så uploader vi en video af en hue, der ligner din 🎥✨
                </p>
              </div>




              {/* Iframe Preview */}
              <div className="flex-1 rounded-b-2xl overflow-hidden">
                <iframe id="preview-iframe" src="https://playcanv.as/e/p/QIG7fh8C/" className="w-full h-full" frameBorder="0" title="3D Student Card Preview" onLoad={handleIframeLoad}
                 /> 
              </div>
            </div>
          </div>

        </div>

        {/* Desktop Footer */}
        <div className=" border-slate-200 p-6 bg-white/50 backdrop-blur-sm w-[49.5%] absolute bottom-0 left-0 lg:w-[47%] 2xl:w-[43.5%] xl:w-[45%] ">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600">Samlet pris</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">
                {calculateTotalPrice().toFixed(2)} DKK
              </div>
              <div className="text-xs text-slate-500"> Servicegebyr på 59,00 kr. inkl.</div>
            </div>
          </div>
          <button
            onClick={collectSelectedOptions}
            disabled={!sizeFlag}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 shadow-md
            
        ${sizeFlag
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            >
              Godkend og Betal
            </button>
        </div>
      </div>

      <div className="md:hidden flex flex-col ">

        {/* Mobile Preview Panel - Top */}
        <div className="flex flex-col h-screen">
          {/* Main content area that will scroll */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Preview section */}
            <div
              className={`transition-all duration-300 ${isConfigOpen ? 'h-[35vh]' : 'h-[70vh]'
                }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 h-full">
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Valgt hue</h4>
                      <p className="text-xs text-slate-600 capitalize" >{program.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-600">LIVE</span>
                  </div>
                </div>

                {/* Scrolling Message */}
                <div className="bg-yellow-100 border-y border-yellow-300 px-4 py-2">
                  <p className="text-[10px] text-yellow-800 font-semibold text-center">
                    Ændringen vises ikke på huen, men bare rolig — det er ikke en fejl 😉 Din hue bliver præcis, som du designer den.
                    Er du i tvivl? Skriv til os på Instagram eller TikTok, så uploader vi en video af en hue, der ligner din 🎥✨
                  </p>
                </div>
                <div
  className="h-[calc(100%-130px)] rounded-b-2xl overflow-hidden"
  style={{
    pointerEvents: isConfigOpen ? 'none' : 'auto',
  }}
>
                  <iframe id="preview-iframe2"  src="https://playcanv.as/e/p/QIG7fh8C/"  className="w-full h-full"  frameBorder="0"  title="3D Student Card Preview"  onLoad={handleIframeLoad}
                   /> 
                </div>
              </div>
            </div>

            {/* Config Toggle Button */}
            <div className="px-4 py-2 bg-white/80 border-t border-slate-200 flex justify-center flex-shrink-0">
              <button
                onClick={() => setIsConfigOpen(!isConfigOpen)}
                className="flex items-center justify-center w-full py-2 bg-slate-100 rounded-lg text-slate-700 font-medium"
              >
                {isConfigOpen ? (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Skjul konfiguration
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Vis konfiguration
                  </>
                )}
              </button>
            </div>

            {/* Config Panel (collapsible + scrollable) */}
            {/* Config Panel (collapsible + scrollable) */}
            <div
              className={`transition-all duration-300 overflow-y-auto ${isConfigOpen ? '' : 'flex-none h-0'
                }`}
            >
              {isConfigOpen && (
                <div className="p-4 space-y-6">
                  {/* Keep all components mounted but conditionally show based on activeMenu */}
                  {activeMenu === 'KOKARDE' && (
                <Bows
                  selectedOptions={selectedOptions.KOKARDE}
                  onOptionChange={(key, value) => handleOptionChange('KOKARDE', key, value)}
                  program={program}
                  changeCurrentEmblem={setGlobalEmblem}
                />
              )}
              {activeMenu === "UDDANNELSESBÅND" && (
                <EducationalTape
                  selectedOptions={selectedOptions.UDDANNELSESBÅND}
                  onOptionChange={(key, value) => handleOptionChange('UDDANNELSESBÅND', key, value)}
                  program={program}
                  currentEmblem={globalEmblem}
                  pakke={packageName}
                />
              )}
              {activeMenu === "BRODERI" && (
                <Embroidery
                  selectedOptions={selectedOptions.BRODERI}
                  onOptionChange={(key, value) => handleOptionChange('BRODERI', key, value)}
                  program={program}
                  pakke={packageName}

                />
              )}
              {activeMenu === "BETRÆK" && (
                <Cover
                  selectedOptions={selectedOptions.BETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('BETRÆK', key, value)}
                  program={program}
                  currentEmblem={globalEmblem}

                />
              )}
              {activeMenu === "SKYGGE" && (
                <Shade
                  selectedOptions={selectedOptions.SKYGGE}
                  onOptionChange={(key, value) => handleOptionChange('SKYGGE', key, value)}
                />
              )}
              {activeMenu === "FOER" && (
                <Foer
                  selectedOptions={selectedOptions.FOER}
                  onOptionChange={(key, value) => handleOptionChange('FOER', key, value)}
                  currentEmblem={globalEmblem}
                  program={program}

                />
              )}
              {activeMenu === 'EKSTRABETRÆK' && (
                <ExtraCover
                  selectedOptions={selectedOptions.EKSTRABETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('EKSTRABETRÆK', key, value)} currentEmblem={globalEmblem}
                  program={program}
                  priceReset={setExtraCoverReset}
                />
              )}
              {activeMenu === "TILBEHØR" && (
                <Accessories
                  selectedOptions={selectedOptions.TILBEHØR}
                  onOptionChange={(key, value) => handleOptionChange('TILBEHØR', key, value)}
                  errors={errors}
                  setErrors={setErrors}
                />
              )}
              {activeMenu === "STØRRELSE" && (
                <Size
                  selectedOptions={selectedOptions.STØRRELSE}
                  onOptionChange={(key, value) => handleOptionChange('STØRRELSE', key, value)}
                  size={setSizeFlag}
                />
              
                
              )}
                </div>
              )}
            </div>

            {/* Sidebar - Now inside the scrollable area but above footer */}
            <div className="bg-white/70 backdrop-blur-sm border-t border-slate-200 flex-shrink-0">
              <div className="px-4 pt-2">
                <h3 className="text-xs font-semibold text-center text-slate-600 uppercase tracking-wider mb-3">
                  Kasketter
                </h3>
                <div className="flex overflow-x-auto space-x-3 pb-2">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMenu(item.name)}
                      className={`flex-shrink-0 flex flex-col items-center px-3 rounded-xl transition-all duration-200 min-w-[80px] ${activeMenu === item.name
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm'
                          : 'hover:bg-slate-50 hover:shadow-sm'
                        }`}
                    >
                      <div
                        className={`w-8 rounded-lg flex items-center justify-center mb-2 transition-transform duration-200 ${activeMenu === item.name ? 'scale-110' : 'hover:scale-105'
                          }`}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                        {item.name.replace(' ', '\n')}
                      </span>
                      {activeMenu === item.name && (
                        <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Footer - Always visible at bottom */}
          <div className="border-t border-slate-200 p-4 bg-white/90 backdrop-blur-sm flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-slate-600">Samlet pris</span>
              <div className="text-right">
                <div className="text-xl font-bold text-slate-900">
                  {calculateTotalPrice().toFixed(2)} DKK
                </div>
                <div className="text-xs text-slate-500">Servicegebyr på 59,00 kr. inkl.</div>
              </div>
            </div>
            <button
              onClick={collectSelectedOptions 
                
              }
              disabled={!sizeFlag}
              // disabled={!sizeFlag}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 shadow-md
        ${sizeFlag
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            >
              Godkend og Betal
            </button>
          </div>
        </div>

        {/* Quote Modal */}
      </div>
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedOptions={selectedOptions}
        price={calculateTotalPrice().toFixed(2)}
        packageName={packageName}
        program={program}
        
      />
    </div>
  );
};

export default StudentDashboard;