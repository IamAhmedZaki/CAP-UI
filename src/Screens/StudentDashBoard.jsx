import React, { useState, useCallback } from 'react';
import { GraduationCap } from 'lucide-react';
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
import { useParams } from 'react-router-dom';

const StudentDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Bows');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
   const { packageType } = useParams(); 


  
  // Complete state for all components
  const [selectedOptions, setSelectedOptions] = useState({
    bows: {
      color: { name: '', value: '' },
      bowType: '',
      emblem: { name: '', value: '', color: '' },
      country: ''
    },
    educationalTape: {
      hatbandColor: '',
      materialType: '',
      chinStrapColor: '',
      buttonMaterial: '',
      embroideryColor: '',
      buttonColor: '',
      embroideryText: '',
    },
    embroidery: {
      nameEmbroideryColor: '',
      nameEmbroideryText: '',
      schoolEmbroideryColor: '',
      schoolEmbroideryText: ''
    },
    cover: {
      coverColor: '',
      edgebandColor: '',
      starsStyle: ''
    },
    shade: {
      shadeType: '',
      materialType: ' ',
      shadowTapeColor: '',
      engravingLine1: '',
      engravingLine2: '',
      engravingLine3: ''
    },
    foer: {
      kokardeMaterial: '',
      kokardeColor: '',
      bowColor: '',
      foerMaterial: '',
      bowMaterialType: ''
    },
    extraCover: {
      extraCoverOption: ''
    },
    accessories: {
      hatBoxColor: '',
      hatBoxType: '',
      ballpointPenSelection: '',
      silkPillowSelection: '',
      badgesSelection: '',
      glovesSelection: '',
      largeBallpointPenSelection: '',
      smartTagSelection: '',
      lightBallSelection: '',
      champagneGlassSelection: '',
      whistleSelection: '',
      trumpetSelection: ''
    },
    size: {
      selectedSize: 49.5,
      millimeterAdjustment: ''
    }
  });



  // ---------------- STANDARD ----------------
const standardPrices = {
  bows: {
    color: {
      '#7F1D1D': 0,
      '#1E3A8A': 0,
      '#DC2626': 39,
    },
    bowType: {
      Signature: 200,
      Prestige: 300,
    },
    emblem: {
      gold: 150,
      silver: 100,
    },
    country: {
      Denmark: 50,
      Sweden: 60,
      Norway: 70,
      Germany: 80,
      France: 90,
      Italy: 100,
    },
  },

  educationalTape: {
    hatbandColor: { black: 50, white: 60 },
    materialType: { cotton: 100, leather: 150 },
    chinStrapColor: { black: 20, brown: 25 },
    buttonMaterial: { metal: 40, plastic: 20 },
    embroideryColor: { gold: 30, silver: 25 },
    buttonColor: { black: 15, white: 15 },
    embroideryText: { base: 50, perChar: 5 },
  },

  embroidery: {
    nameEmbroideryColor: { gold: 30, silver: 25 },
    nameEmbroideryText: { base: 60, perChar: 5 },
    schoolEmbroideryColor: { gold: 30, silver: 25 },
    schoolEmbroideryText: { base: 60, perChar: 5 },
  },

  cover: {
    coverColor: { black: 80, white: 70 },
    edgebandColor: { red: 25, blue: 25 },
    starsStyle: { classic: 40, modern: 60 },
  },

  shade: {
    shadeType: { short: 100, long: 120 },
    materialType: { leather: 150, plastic: 100 },
    shadowTapeColor: { black: 20, white: 20 },
    engravingLine1: { base: 40, perChar: 3 },
    engravingLine2: { base: 40, perChar: 3 },
    engravingLine3: { base: 40, perChar: 3 },
  },

  foer: {
    kokardeMaterial: { metal: 50, fabric: 30 },
    kokardeColor: { red: 20, blue: 20 },
    bowColor: { black: 25, white: 25 },
    foerMaterial: { silk: 80, cotton: 60 },
    bowMaterialType: { satin: 40, velvet: 50 },
  },

  extraCover: {
    extraCoverOption: { rainproof: 100, leather: 200 },
  },

  accessories: {
    hatBoxColor: { black: 50, brown: 60 },
    hatBoxType: { round: 100, square: 120 },
    ballpointPenSelection: { standard: 30, premium: 60 },
    silkPillowSelection: { yes: 80, no: 0 },
    badgesSelection: { basic: 40, deluxe: 70 },
    glovesSelection: { cotton: 30, leather: 60 },
    largeBallpointPenSelection: { yes: 90, no: 0 },
    smartTagSelection: { yes: 40, no: 0 },
    lightBallSelection: { yes: 25, no: 0 },
    champagneGlassSelection: { single: 50, set: 90 },
    whistleSelection: { metal: 20, plastic: 10 },
    trumpetSelection: { small: 150, large: 250 },
  },

  size: {
    selectedSize: { base: 0, perMM: 2 },
    millimeterAdjustment: { base: 10 },
  },
};

// ---------------- PREMIUM ----------------
const premiumPrices = {
  bows: {
    color: {
      '#7F1D1D': 30,
      '#1E3A8A': 30,
      '#DC2626': 50,
    },
    bowType: {
      Signature: 2000,
      Prestige: 3000,
    },
    emblem: {
      gold: 1200,
      silver: 900,
    },
    country: {
      Denmark: 70,
      Sweden: 90,
      Norway: 100,
      Germany: 110,
      France: 120,
      Italy: 130,
    },
  },

  educationalTape: {
    hatbandColor: { black: 80, white: 100 },
    materialType: { cotton: 150, leather: 200 },
    chinStrapColor: { black: 40, brown: 50 },
    buttonMaterial: { metal: 60, plastic: 40 },
    embroideryColor: { gold: 60, silver: 50 },
    buttonColor: { black: 30, white: 30 },
    embroideryText: { base: 100, perChar: 8 },
  },

  embroidery: {
    nameEmbroideryColor: { gold: 60, silver: 50 },
    nameEmbroideryText: { base: 120, perChar: 8 },
    schoolEmbroideryColor: { gold: 60, silver: 50 },
    schoolEmbroideryText: { base: 120, perChar: 8 },
  },

  cover: {
    coverColor: { black: 150, white: 120 },
    edgebandColor: { red: 50, blue: 50 },
    starsStyle: { classic: 80, modern: 100 },
  },

  shade: {
    shadeType: { short: 200, long: 250 },
    materialType: { leather: 250, plastic: 180 },
    shadowTapeColor: { black: 40, white: 40 },
    engravingLine1: { base: 80, perChar: 5 },
    engravingLine2: { base: 80, perChar: 5 },
    engravingLine3: { base: 80, perChar: 5 },
  },

  foer: {
    kokardeMaterial: { metal: 100, fabric: 60 },
    kokardeColor: { red: 40, blue: 40 },
    bowColor: { black: 50, white: 50 },
    foerMaterial: { silk: 120, cotton: 100 },
    bowMaterialType: { satin: 80, velvet: 100 },
  },

  extraCover: {
    extraCoverOption: { rainproof: 200, leather: 300 },
  },

  accessories: {
    hatBoxColor: { black: 80, brown: 100 },
    hatBoxType: { round: 180, square: 200 },
    ballpointPenSelection: { standard: 60, premium: 120 },
    silkPillowSelection: { yes: 150, no: 0 },
    badgesSelection: { basic: 70, deluxe: 120 },
    glovesSelection: { cotton: 50, leather: 100 },
    largeBallpointPenSelection: { yes: 150, no: 0 },
    smartTagSelection: { yes: 80, no: 0 },
    lightBallSelection: { yes: 50, no: 0 },
    champagneGlassSelection: { single: 100, set: 160 },
    whistleSelection: { metal: 40, plastic: 20 },
    trumpetSelection: { small: 250, large: 400 },
  },

  size: {
    selectedSize: { base: 0, perMM: 4 },
    millimeterAdjustment: { base: 20 },
  },
};

// ---------------- LUKSUS ----------------
const luksusPrices = {
  bows: {
    color: {
      '#7F1D1D': 100,
      '#1E3A8A': 100,
      '#DC2626': 120,
    },
    bowType: {
      Signature: 5000,
      Prestige: 7000,
    },
    emblem: {
      gold: 2000,
      silver: 1500,
    },
    country: {
      Denmark: 150,
      Sweden: 180,
      Norway: 200,
      Germany: 220,
      France: 250,
      Italy: 300,
    },
  },

  educationalTape: {
    hatbandColor: { black: 150, white: 180 },
    materialType: { cotton: 250, leather: 400 },
    chinStrapColor: { black: 80, brown: 100 },
    buttonMaterial: { metal: 120, plastic: 80 },
    embroideryColor: { gold: 100, silver: 80 },
    buttonColor: { black: 60, white: 60 },
    embroideryText: { base: 200, perChar: 12 },
  },

  embroidery: {
    nameEmbroideryColor: { gold: 100, silver: 80 },
    nameEmbroideryText: { base: 200, perChar: 12 },
    schoolEmbroideryColor: { gold: 100, silver: 80 },
    schoolEmbroideryText: { base: 200, perChar: 12 },
  },

  cover: {
    coverColor: { black: 250, white: 220 },
    edgebandColor: { red: 100, blue: 100 },
    starsStyle: { classic: 150, modern: 200 },
  },

  shade: {
    shadeType: { short: 400, long: 500 },
    materialType: { leather: 500, plastic: 300 },
    shadowTapeColor: { black: 80, white: 80 },
    engravingLine1: { base: 150, perChar: 8 },
    engravingLine2: { base: 150, perChar: 8 },
    engravingLine3: { base: 150, perChar: 8 },
  },

  foer: {
    kokardeMaterial: { metal: 200, fabric: 120 },
    kokardeColor: { red: 80, blue: 80 },
    bowColor: { black: 100, white: 100 },
    foerMaterial: { silk: 200, cotton: 150 },
    bowMaterialType: { satin: 120, velvet: 150 },
  },

  extraCover: {
    extraCoverOption: { rainproof: 400, leather: 600 },
  },

  accessories: {
    hatBoxColor: { black: 150, brown: 180 },
    hatBoxType: { round: 300, square: 350 },
    ballpointPenSelection: { standard: 120, premium: 200 },
    silkPillowSelection: { yes: 250, no: 0 },
    badgesSelection: { basic: 120, deluxe: 200 },
    glovesSelection: { cotton: 100, leather: 180 },
    largeBallpointPenSelection: { yes: 250, no: 0 },
    smartTagSelection: { yes: 150, no: 0 },
    lightBallSelection: { yes: 100, no: 0 },
    champagneGlassSelection: { single: 200, set: 350 },
    whistleSelection: { metal: 80, plastic: 40 },
    trumpetSelection: { small: 400, large: 700 },
  },

  size: {
    selectedSize: { base: 0, perMM: 6 },
    millimeterAdjustment: { base: 30 },
  },
};

let prices;
if (packageType === "standard") prices = standardPrices;
else if (packageType === "premium") prices = premiumPrices;
else if (packageType === "luksus") prices = luksusPrices;


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

  return total;
};


  const menuItems = [
    { name: 'Bows', icon: img1 },
    { name: 'Educational tape', icon: img2 },
    { name: 'Embroidery', icon: img3 },
    { name: 'Cover', icon: img4 },
    { name: 'Shade', icon: img5 },
    { name: 'Foer', icon: img6 },
    { name: 'Extra cover', icon: img7 },
    { name: 'Accessories', icon: img8 },
    { name: 'Size', icon: img9 }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      

      <div className="flex h-[calc(100vh-80px)] ">
        {/* Sidebar remains the same */}
        <aside className="w-80 bg-white/70 backdrop-blur-sm border-r border-slate-200 overflow-y-auto pb-[133px]">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
              Cap Configuration
            </h2>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${activeMenu === item.name
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm'
                    : 'hover:bg-slate-50 hover:shadow-sm'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-transform duration-200 ${activeMenu === item.name ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                    <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className={`text-sm font-medium ${activeMenu === item.name ? 'text-blue-900' : 'text-slate-700'
                    }`}>
                    {item.name.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
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
              {activeMenu === 'Bows' && (
                <Bows 
                  selectedOptions={selectedOptions.bows}
                  onOptionChange={(key, value) => handleOptionChange('bows', key, value)}
                />
              )}
              {activeMenu === "Educational tape" && (
                <EducationalTape 
                  selectedOptions={selectedOptions.educationalTape}
                  onOptionChange={(key, value) => handleOptionChange('educationalTape', key, value)}
                />
              )}
              {activeMenu === "Embroidery" && (
                <Embroidery 
                  selectedOptions={selectedOptions.embroidery}
                  onOptionChange={(key, value) => handleOptionChange('embroidery', key, value)}
                />
              )}
              {activeMenu === "Cover" && (
                <Cover 
                  selectedOptions={selectedOptions.cover}
                  onOptionChange={(key, value) => handleOptionChange('cover', key, value)}
                />
              )}
              {activeMenu === "Shade" && (
                <Shade 
                  selectedOptions={selectedOptions.shade}
                  onOptionChange={(key, value) => handleOptionChange('shade', key, value)}
                />
              )}
              {activeMenu === "Foer" && (
                <Foer 
                  selectedOptions={selectedOptions.foer}
                  onOptionChange={(key, value) => handleOptionChange('foer', key, value)}
                />
              )}
              {activeMenu === "Extra cover" && (
                <ExtraCover 
                  selectedOptions={selectedOptions.extraCover}
                  onOptionChange={(key, value) => handleOptionChange('extraCover', key, value)}
                />
              )}
              {activeMenu === "Accessories" && (
                <Accessories 
                  selectedOptions={selectedOptions.accessories}
                  onOptionChange={(key, value) => handleOptionChange('accessories', key, value)}
                />
              )}
              {activeMenu === "Size" && (
                <Size 
                  selectedOptions={selectedOptions.size}
                  onOptionChange={(key, value) => handleOptionChange('size', key, value)}
                />
              )}
            </div>
          </div>

          {/* Preview Panel remains the same */}
          <div className="flex-1 p-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl h-full flex flex-col border border-slate-200">
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Current School</h4>
                    <p className="text-sm text-slate-600">EUX Program</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-600">LIVE PREVIEW</span>
                </div>
              </div>
              <div className="flex-1 rounded-b-2xl overflow-hidden">
                <iframe
                  src="https://playcanv.as/e/p/c754fbb9/"
                  className="w-full h-full"
                  frameBorder="0"
                  title="3D Student Card Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains the same */}
      <div className="border-t border-slate-200 p-6 bg-white/80 backdrop-blur-sm w-[50%] absolute bottom-0 left-0">
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