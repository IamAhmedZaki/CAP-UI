import React, { useState, useCallback, useRef,useEffect } from 'react';
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



  // Complete state for all components
  const [selectedOptions, setSelectedOptions] = useState({
  KOKARDE: {
    'Roset farve': { name: 'RED', value: 'RED' },
    Kokarde: 'Signature',
    Emblem: { name: 'Guld', value: 'Guld', color: 'Guld' },
    'Type': 'Kurdistan'
  },
  UDDANNELSESBÅND: {
    Huebånd: 'EUD',
    Materiale: 'VELOUR',
    Hagerem: 'Mat',
    'Hagerem Materiale': 'Mat hagerem',
    'Broderi foran': '',
    'Broderi farve': 'Guld',
    'Knap farve': 'Guld',
  },
  BRODERI: {
    'Broderifarve': 'Guld',
    'Navne broderi': '',
    'Skolebroderi farve': 'HVID',
    Skolebroderi: ''
  },
  BETRÆK: {
    Farve: 'Hvid',
    Kantbånd: 'NONE',
    Stjerner: '1',
    Topkant: 'NONE'
  },
  SKYGGE: {
    Type: 'Blank',
    Materiale: 'Uden kant',
    Skyggebånd: 'Guld',
    'Skyggegravering Line 1': '',
    'Skyggegravering Line 2': '',
    'Skyggegravering Line 3': ''
  },
  FOER: {
    Svederem: 'læder',
    Farve: 'HVID',
    Sløjfe: 'HVID',
    Foer: 'Viskose',
    Type: ''
  },
  EKSTRABETRÆK: {
    Tilvælg: 'Yes',
    Farve: 'Hvid',
    Type: '',
    Skolebroderi: '',
    Topkant: 'NONE',
    Kantbånd: 'NONE',
    Stjerner: '1'
  },
  TILBEHØR: {
    Hueæske: 'Standard',
    'Premium æske': '',
    Huekuglepen: 'No',
    Silkepude: 'No',
    Emblem: '',
    Badges: 'No',
    Handsker: 'No',
    'Store kuglepen': 'No',
    'Smart Tag': 'No',
    Lyskugle: 'No',
    'Luksus champagneglas': 'No',
    Fløjte: 'No',
    Trrompet: 'No',
    Bucketpins: 'No',
  },
  STØRRELSE: {
    'Vælg størrelse': 49.5,
    'Millimeter tilpasningssæt': 'No'
  }
});




 const standardPrices = {
  KOKARDE: {
    'Roset farve': {
      '#7F1D1D': 39,
      '#1E3A8A': 0,
      '#DC2626': 0,
    },
    Kokarde: {
      Signature: 69,
      Prestige: 89,
      Stjernetegn: 69,
    },
    'Emblem': {
      Guld: 89,
      Sølv: 89,
    },
    Type: {
     Kurdistan: 69,
  Iraq: 69,
  Iran: 69,
  Somalia: 69,
  Somaliland: 69,
  Palestine: 69,
  Lebanon: 69,
  Afghanistan: 69,
  Albania: 69,
  Serbia: 69,
  Bosnia: 69,
  Denmark: 69,
  Morocco: 69,
  Pakistan: 69,
  Turkey: 69,
    },
  },

  UDDANNELSESBÅND: {
    Huebånd: {
      EUX: 0,
      SORT: 0
    },
    Materiale: {
      BOMULD: 0,
      VELOUR: 239,
      SATIN: 239,
      GLIMMER: 239,
      SHIMMER:0,
    },
    Hagerem: {
      Mat: 0,
      Blank: 0,
      'Sort/Sort': 0,
      'Sort/Guld': 0
    },
    'Hagerem Materiale': {
      'Mat hagerem': 0,
      'Blank hagerem': 0,
      'Blank kunstlæder hagerem': 0,
      'Sort hagerem med sorte knuder': 0,
      'Sort hagerem med guld knuder': 69,
      'Guld hagerem med guld knuder': 69,
      'Sølv hagerem med Sølv knuder': 69,
      'Sølv hagerem med sorte knuder': 69,
    },
    'Broderi farve': {
      Guld: 0,
      Sølv: 0,
      EUX: 0,
      HVID: 0,
      SORT: 0
    },
    'Knap farve': {
      Guld: 0
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
      WHITE: 0,
      BLACK: 0,
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
      '#ffffff': 0,           // WHITE - WATER REPELLENT
      '#000000': 0,           // BLACK - WATER REPELLENT
      '#dedede': 79,           // WHITE GLITTER
      '#292929': 79,           // SORT GLIMMER
    },
    Kantbånd: {
      NONE: 29,
      WHITE: 29,
      BLACK: 29,
      STX: 0,
      HHX: 0,
      EUD: 0,
      GREEN: 0,
      GUL: 0,
      EUX: 0,
      PINK: 0,
    },
    Stjerner: {
      '1': 39,  // One Star
      '2': 39,  // Two Stars
      '3': 39,  // Three Stars
      '4': 39,  // Four Stars
      '5': 39,  // Five Stars
    },
  },

  SKYGGE: {
    Type: {
      Blank: 0,    // default short/Blank shade
      Mat: 39,      // matte type
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
      HVID: 0,
      Sort: 0,
      Cognac: 0,
      black: 0,
    },
    Sløjfe: {
      HVID: 0,
      Sort: 0,
      Guld: 29,
    },
    Foer: {
      Viskose: 29,
      Polyester: 0,
      Satin: 0,
      Silke: 0,
    },
    Type: {
      HVID: 29,
      BRUN: 29,
      STX: 0,
      CHAMPAGNE: 29,
    },
  },

  EKSTRABETRÆK: {
    Tilvælg: {
      Yes: 79,
      No: 0,
    },
     Favre:0,
      Type:0,
      Skolebroderi: 0
  },

  TILBEHØR: {
    Hueæske: {
      Standard: 0, 
      'Premium æske': 199,
      'Luksus æske': 299 
    },
    
    Huekuglepen: {
      Yes: 39, 
      No: 0 
    },
    Silkepude: {
      Yes: 99, 
      No: 0 
    },
    Badges: {
      Yes: 39, 
      No: 0 
    },
    Handsker: {
      Yes: 39, 
      No: 0 
    },
    'Store kuglepen': {
      Yes: 99, 
      No: 0 
    },
    'Smart Tag': {
      Yes: 25, 
      No: 0 
    },
    Lyskugle: {
      Yes: 99, 
      No: 0 
    },
    'Luksus champagneglas': {
      Yes: 29, 
      No: 0 
    },
    Fløjte: {
      Yes: 39, 
      No: 0 
    },
    Trrompet: {
      Yes: 39, 
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
      Denmark: 0,
      Sweden: 0,
      Norway: 0,
      Germany: 0,
      France: 0,
      Italy: 0,
    },
  },

  UDDANNELSESBÅND: {
    Huebånd: {
      EUX: 0,
      SORT: 0
    },
    Materiale: {
      BOMULD: 0,
      VELOUR: 0,
      SATIN: 0,
       GLIMMER: 0,
      SHIMMER:0,
    },
    Hagerem: {
      Mat: 0,
      Blank: 0,
      'Sort/Sort': 0,
      'Sort/Guld': 0
    },
    'Hagerem Materiale':  {
      'Mat hagerem': 0,
      'Blank hagerem': 0,
      'Blank kunstlæder hagerem': 0,
      'Sort hagerem med sorte knuder': 0,
      'Sort hagerem med guld knuder': 0,
      'Guld hagerem med guld knuder': 0,
      'Sølv hagerem med Sølv knuder': 0,
      'Sølv hagerem med sorte knuder': 0,
    },
    'Broderi farve': {
      Guld: 0,
      Sølv: 0,
      EUX: 0,
      HVID: 0,
      SORT: 0
    },
    'Knap farve': {
      Guld: 0
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
      '#ffffff': 0,           // WHITE - WATER REPELLENT
      '#000000': 0,           // BLACK - WATER REPELLENT
      '#dedede': 0,           // WHITE GLITTER
      '#292929': 0,           // SORT GLIMMER
    },
    Kantbånd: {
      NONE: 0,
      WHITE: 0,
      BLACK: 0,
      STX: 0,
      HHX: 0,
      EUD: 0,
      GREEN: 0,
      GUL: 0,
      EUX: 0,
      PINK: 0,
    },
    Stjerner: {
      '1': 0,  // One Star
      '2': 0,  // Two Stars
      '3': 0,  // Three Stars
      '4': 0,  // Four Stars
      '5': 0,  // Five Stars
    },
  },

  SKYGGE: {
    Type: {
      Blank: 0,    // default short/Blank shade
      Mat: 0,      // matte type
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
      Sølv: 29, // Sølv tape
    },
    'Skyggegravering Line 1': {
      base: 0,    // base cost for line 1
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
      'Kunstlæder': 0,
      Ruskin: 0,
      Alcantra: 0,
    },
    Farve: {
      HVID: 0,
      Sort: 0,
      Cognac: 0,
      black: 0,
    },
    Sløjfe: {
      HVID: 0,
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
      HVID: 0,
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
    Favre:0,
      Type:0,
      Skolebroderi: 0
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
    Badges: {
      Yes: 0, 
      No: 0 
    },
    Handsker: {
      Yes: 0, 
      No: 0 
    },
    'Store kuglepen': {
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

// ---------------- LUKSUS ----------------
const luksusPrices = {
  KOKARDE: {
    'Roset farve': {
      '#7F1D1D': 39,
      '#1E3A8A': 0,
      '#DC2626': 0,
    },
    Kokarde: {
      Signature: 69,
      Prestige: 89,
      Stjernetegn: 69,
    },
    'Emblem': {
      Guld: 89,
      Sølv: 89,
    },
    Type: {
      Denmark: 69,
      Sweden: 69,
      Norway: 69,
      Germany: 69,
      France: 69,
      Italy: 69,
    },
  },

  UDDANNELSESBÅND: {
    Huebånd: {
      EUX: 0,
      SORT: 0
    },
    Materiale: {
      BOMULD: 0,
      VELOUR: 0,
      SATIN: 0,
      GLIMMER: 99,
      SHIMMER:0,
    },
    Hagerem: {
      Mat: 0,
      Blank: 0,
      'Sort/Sort': 0,
      'Sort/Guld': 0
    },
    'Hagerem Materiale':  {
      'Mat hagerem': 0,
      'Blank hagerem': 0,
      'Blank kunstlæder hagerem': 0,
      'Sort hagerem med sorte knuder': 0,
      'Sort hagerem med guld knuder': 0,
      'Guld hagerem med guld knuder': 0,
      'Sølv hagerem med Sølv knuder': 0,
      'Sølv hagerem med sorte knuder': 0 ,
    },
    'Broderi farve': {
      Guld: 0,
      Sølv: 0,
      EUX: 0,
      HVID: 0,
      SORT: 0
    },
    'Knap farve': {
      Guld: 0
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
      '#ffffff': 0,           // WHITE - WATER REPELLENT
      '#000000': 0,           // BLACK - WATER REPELLENT
      '#dedede': 79,           // WHITE GLITTER
      '#292929': 79,           // SORT GLIMMER
    },
    Kantbånd: {
      NONE: 0,
      WHITE: 29,
      BLACK: 29,
      STX: 0,
      HHX: 0,
      EUD: 0,
      GREEN: 0,
      GUL: 0,
      EUX: 0,
      PINK: 0,
    },
    Stjerner: {
      '1': 39,  // One Star
      '2': 39,  // Two Stars
      '3': 39,  // Three Stars
      '4': 39,  // Four Stars
      '5': 39,  // Five Stars
    },
  },

  SKYGGE: {
    Type: {
      Blank: 0,    // default short/Blank shade
      Mat: 0,      // matte type
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
      HVID: 0,
      Sort: 0,
      Cognac: 0,
      black: 0,
    },
    Sløjfe: {
      HVID: 0,
      Sort: 0,
      Guld: 0,
    },
    Foer: {
      Viskose: 29,
      Polyester: 0,
      Satin: 0,
      Silke: 0,
    },
    Type: {
      HVID: 0,
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
    Favre:0,
      Type:0,
      Skolebroderi: 0
  },

  TILBEHØR: {
    Hueæske: {
      Standard: 0, 
      'Premium æske': 0,
      'Luksus æske': 100 
    },
    Huekuglepen: {
      Yes: 0, 
      No: 0 
    },
    Silkepude: {
      Yes: 0, 
      No: 0 
    },
    Badges: {
      Yes: 0, 
      No: 0 
    },
    Handsker: {
      Yes: 0, 
      No: 0 
    },
    'Store kuglepen': {
      Yes: 39, 
      No: 0 
    },
    'Smart Tag': {
      Yes: 39, 
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

    // Loop through categories in selectedOptions
    for (const category in selectedOptions) {
      const categoryOptions = selectedOptions[category];
      const categoryPrices = prices[category];

      if (!categoryPrices) continue;

      for (const optionKey in categoryOptions) {
        const value = categoryOptions[optionKey];
        const optionPrices = categoryPrices[optionKey];

        if (!optionPrices) continue;

        // Case 1: text-based pricing (has base + perChar)
        if (typeof value === "string" && optionPrices.base !== undefined) {
          total += calcTextPrice(value, optionPrices);
        }

        // Case 2: direct match in the price list
        else if (typeof value === "string" && optionPrices[value] !== undefined) {
          total += optionPrices[value];
        }

        // Case 3: value is object with .value (like color pickers)
        else if (value?.value && optionPrices[value.value] !== undefined) {
          total += optionPrices[value.value];
        }

        // Case 4: numbers (like size adjustments)
        else if (typeof value === "number" && optionPrices.base !== undefined) {
          const base = optionPrices.base || 0;
          const perMM = optionPrices.perMM || 0;
          total += base + value * perMM;
        }
      }
    }
    
    let iniialPrice=0
    
    if (packageName === "standard") iniialPrice = 449;
      // else if (packageType === "premium") iniialPrice = 1395;
      else if (packageName === "premium") iniialPrice = 2195;
       else if (packageName === "luksus") iniialPrice = 1395;
    return total+ iniialPrice +59;
  };


  const menuItems = [
    { name: 'KOKARDE', icon: img1 },
    { name: 'UDDANNELSESBÅND', icon: img2 },
    { name: 'BRODERI', icon: img3 },
    { name: 'BETRÆK', icon: img4 },
    { name: 'SKYGGE', icon: img5 },
    { name: 'FOER', icon: img6 },
    { name: 'EKSTRA BETRÆK', icon: img7 },
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
    
    if (iframe && iframe.contentWindow) {
      const message = "program:" + program.toLowerCase();
      console.log("Sending message to iframe:", message);
      iframe.contentWindow.postMessage(message, "*");
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

  // Add this useEffect to debug
  useEffect(() => {
    console.log("Program changed:", program);
    console.log("Iframe loaded status:", isIframeLoaded);
    console.log("App ready status:", isAppReady);
  }, [program, isIframeLoaded, isAppReady]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="bg-white/70 backdrop-blur-sm border-r border-slate-200 overflow-y-auto pb-[133px]">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-center text-slate-600 uppercase tracking-wider mb-4">
              Caps
            </h2>
            <nav className="">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {setActiveMenu(item.name)
                    
                    
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
          <div className="w-[40%] bg-white/50 backdrop-blur-sm border-r border-slate-200">
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
                />
              )}
              {activeMenu === "BRODERI" && (
                <Embroidery
                  selectedOptions={selectedOptions.BRODERI}
                  onOptionChange={(key, value) => handleOptionChange('BRODERI', key, value)}
                  program={program}
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
              {activeMenu === "EKSTRA BETRÆK" && (
                <ExtraCover
                  selectedOptions={selectedOptions.EKSTRABETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('EKSTRABETRÆK', key, value)}currentEmblem={globalEmblem}
                  program={program}
                />
              )}
              {activeMenu === "TILBEHØR" && (
                <Accessories
                  selectedOptions={selectedOptions.TILBEHØR}
                  onOptionChange={(key, value) => handleOptionChange('TILBEHØR', key, value)}
                />
              )}
              {activeMenu === "STØRRELSE" && (
                <Size
                  selectedOptions={selectedOptions.STØRRELSE}
                  onOptionChange={(key, value) => handleOptionChange('STØRRELSE', key, value)}
                />
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1 p-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl h-full flex flex-col border border-slate-200">
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Current Program</h4>
                    <p className="text-sm text-slate-600">{program}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-600">LIVE PREVIEW</span>
                </div>
              </div>
              <div className="flex-1 rounded-b-2xl overflow-hidden">
                 <iframe
              id="preview-iframe" // Add ID here
              src="https://playcanv.as/e/p/3b2251ad/"
              className="w-full h-full"
              frameBorder="0"
              title="3D Student Card Preview"
              onLoad={handleIframeLoad}
            />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="border-t border-slate-200 p-6 bg-white/80 backdrop-blur-sm w-[43.5%] absolute bottom-0 left-0">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600">Total Price</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">
                {calculateTotalPrice().toFixed(2)} DKK
              </div>
              <div className="text-xs text-slate-500">incl. taxes</div>
            </div>
          </div>
          <button
            onClick={collectSelectedOptions}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Quote
          </button>
        </div>
      </div>

      <div className="md:hidden flex flex-col ">

  {/* Mobile Preview Panel - Top */}
  <div
    className={`transition-all duration-300 ${
      isConfigOpen ? 'h-[30vh]' : 'h-[65vh]'
    }`}
  >
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 h-full">
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Current Program</h4>
            <p className="text-xs text-slate-600">{program}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-slate-600">LIVE</span>
        </div>
      </div>
      <div className="h-[calc(100%-60px)] rounded-b-2xl overflow-hidden">
        <iframe
          src="https://playcanv.as/e/p/3b2251ad/"
          className="w-full h-full"
          frameBorder="0"
          title="3D Student Card Preview"
        />
      </div>
    </div>
  </div>

  {/* Config Toggle Button */}
  <div className="px-4 py-2 bg-white/80 border-t border-slate-200 flex justify-center">
    <button
      onClick={() => setIsConfigOpen(!isConfigOpen)}
      className="flex items-center justify-center w-full py-2 bg-slate-100 rounded-lg text-slate-700 font-medium"
    >
      {isConfigOpen ? (
        <>
          <ChevronDown className="w-4 h-4 mr-1" />
          Hide Configuration
        </>
      ) : (
        <>
          <ChevronUp className="w-4 h-4 mr-1" />
          Show Configuration
        </>
      )}
    </button>
  </div>

  {/* Config Panel (collapsible + scrollable) */}
  <div
    className={`transition-all duration-300 overflow-y-auto flex-1 ${
      isConfigOpen ? 'max-h-[35vh] opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    {isConfigOpen && (
      <div className="p-4 space-y-6">
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
                />
              )}
              {activeMenu === "BRODERI" && (
                <Embroidery
                  selectedOptions={selectedOptions.BRODERI}
                  onOptionChange={(key, value) => handleOptionChange('BRODERI', key, value)}
                  program={program}
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
              {activeMenu === "EKSTRA BETRÆK" && (
                <ExtraCover
                  selectedOptions={selectedOptions.EKSTRABETRÆK}
                  onOptionChange={(key, value) => handleOptionChange('EKSTRABETRÆK', key, value)}currentEmblem={globalEmblem}
                  program={program}
                />
              )}
              {activeMenu === "TILBEHØR" && (
                <Accessories
                  selectedOptions={selectedOptions.TILBEHØR}
                  onOptionChange={(key, value) => handleOptionChange('TILBEHØR', key, value)}
                />
              )}
              {activeMenu === "STØRRELSE" && (
                <Size 
                  selectedOptions={selectedOptions.STØRRELSE}
                  onOptionChange={(key, value) => handleOptionChange('STØRRELSE', key, value)}
                />
              )}
        {/* ... other configuration components */}
      </div>
    )}
  </div>

  {/* Bottom fixed area: Sidebar + Footer */}
  <div className="bg-white/70 backdrop-blur-sm border-t border-slate-200">
    {/* Sidebar */}
    <div className="px-4 pt-2">
      <h3 className="text-xs font-semibold text-center text-slate-600 uppercase tracking-wider mb-3">
        Caps
      </h3>
      <div className="flex overflow-x-auto space-x-3 pb-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveMenu(item.name)}
            className={`flex-shrink-0 flex flex-col items-center px-3 rounded-xl transition-all duration-200 min-w-[80px] ${
              activeMenu === item.name
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm'
                : 'hover:bg-slate-50 hover:shadow-sm'
            }`}
          >
            <div
              className={`w-8 rounded-lg flex items-center justify-center mb-2 transition-transform duration-200 ${
                activeMenu === item.name ? 'scale-110' : 'hover:scale-105'
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

    {/* Footer */}
    <div className="border-t border-slate-200 p-4 bg-white/80 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-slate-600">Total Price</span>
        <div className="text-right">
          <div className="text-xl font-bold text-slate-900">
            {calculateTotalPrice().toFixed(2)} DKK
          </div>
          <div className="text-xs text-slate-500">incl. taxes</div>
        </div>
      </div>
      <button
        onClick={collectSelectedOptions}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Get Quote
      </button>
    </div>
  </div>
</div>
      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedOptions={selectedOptions}
        price={calculateTotalPrice().toFixed(2)}
      />
    </div>
  );
};

export default StudentDashboard;