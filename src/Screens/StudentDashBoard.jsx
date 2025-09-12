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
        Signature: 0,
        Prestige: 0,
      },
      emblem: {
        gold: 0,
        silver: 0,
      },
      country: {
        Denmark: 0,
        Sweden: 0,
        Norway: 0,
        Germany: 0,
        France: 0,
        Italy: 0,
      },
    },

    educationalTape: {
      hatbandColor: {
        EUX: 0,
        SORT: 0
      },
      materialType: {
        COTTON: 0,
        VELOUR: 239,
        SATIN: 239,
        Glimmer: 239
      },
      chinStrapColor: {
        Mat: 0,
        Blank: 0,
        'Sort/Sort': 69,
        'Sort/Gold': 69
      },
      buttonMaterial: {
        'FOOD GRADE': 0,
        'BLANK CHAIN ​​STRAP': 0,
        'SHINY LEATHER CHIN STRAP': 0,
        'BLACK CHIN STRAP WITH BLACK KNOTS': 0,
        'BLACK CHIN STRAP WITH GOLD KNOTS': 0
      },
      embroideryColor: {
        Gold: 0,
        Silver: 0,
        EUX: 0,
        HVID: 0,
        SORT: 0
      },
      buttonColor: {
        Gold: 0
      },
      embroideryText: {
        base: 99,
        perChar: 0
      },
    },

    embroidery: {
      nameEmbroideryColor: {
        gold: 0,
        silver: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      nameEmbroideryText: {
        base: 99,
        perChar: 0
      },
      schoolEmbroideryColor: {
        WHITE: 0,
        BLACK: 0,
        Gold: 0,
        Silver: 0
      },
      schoolEmbroideryText: {
        base: 99,
        perChar: 0
      },
    },


    cover: {
      coverColor: {
        '#ffffff': 0,           // WHITE - WATER REPELLENT
        '#000000': 0,           // BLACK - WATER REPELLENT
        '#dedede': 79,           // WHITE GLITTER
        '#292929': 79,           // SORT GLIMMER
      },
      edgebandColor: {
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
      starsStyle: {
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
      },
    },


    shade: {
      shadeType: {
        Blank: 0,    // default short/Blank shade
        Mat: 39,      // matte type
        Glimmer: 39,  // glimmer type
      },
      materialType: {
        'Uden kant': 0, // without edge
        'Med kant': 0,  // with edge
      },
      shadowTapeColor: {
        INGEN: 0,   // no tape
        gold: 29,    // gold tape
        Glitter: 0, // glitter tape
        Silver: 29, // glitter tape
      },
      engravingLine0: {
        base: 99,    // base cost for line 0
        perChar: 0, // per character cost for line 0
      },
      engravingLine2: {
        base: 0,    // base cost for line 2
        perChar: 0, // per character cost for line 2
      },
      engravingLine3: {
        base: 0,    // base cost for line 3
        perChar: 0, // per character cost for line 3
      },
    }
    ,

    foer: {
      kokardeMaterial: {
        Leather: 0,
        'Artificial Leather': 29,
        Ruskin: 29,
        Alcantra: 29,
      },
      kokardeColor: {
        HVID: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      bowColor: {
        HVID: 0,
        Sort: 0,
        gold: 29,
      },
      foerMaterial: {
        Viscose: 29,
        Polyester: 0,
        Satin: 0,
        Silk: 0,
      },
      bowMaterialType: {
        HVID: 29,
        BRUN: 29,
        STX: 0,
        CHAMPAGNE: 29,
      },
    }
    ,

    extraCover: {
      extraCoverOption: {
        Yes: 79,
        No: 0,
      },
    }
    ,

    accessories: {
      
      hatBoxType: { Standard: 0, 'Premium Box': 199,'Luxury Box':299 },
      ballpointPen: { Yes: 29, No: 0 },
      silkPillow: { Yes: 39, No: 0  },
      badges: { Yes: 99, No: 0  },
      gloves: { Yes: 39, No: 0  },
      largeBallpointPen: {Yes: 39, No: 0  },
      smartTag: { Yes: 99, No: 0  },
      lightBall: { Yes: 25, No: 0  },
      champagneGlass: { Yes: 99, No: 0  },
      whistle: { Yes: 29, No: 0  },
      trumpet: { Yes: 39, No: 0  },
    },

    size: {
      selectedSize: { base: 0, perMM: 0 },
      millimeterAdjustment: { Yes: 39, No: 0  },
    }
    ,
  };

  // ---------------- PREMIUM ----------------
  const premiumPrices = {
    bows: {
      color: {
        '#7F1D1D': 0,
        '#1E3A8A': 0,
        '#DC2626': 0,
      },
      bowType: {
        Signature: 0,
        Prestige: 0,
      },
      emblem: {
        gold: 0,
        silver: 0,
      },
      country: {
        Denmark: 0,
        Sweden: 0,
        Norway: 0,
        Germany: 0,
        France: 0,
        Italy: 0,
      },
    },

    educationalTape: {
      hatbandColor: {
        EUX: 0,
        SORT: 0
      },
      materialType: {
        COTTON: 0,
        VELOUR: 0,
        SATIN: 0,
        Glimmer: 0
      },
      chinStrapColor: {
        Mat: 0,
        Blank: 0,
        'Sort/Sort': 0,
        'Sort/Gold': 0
      },
      buttonMaterial: {
        'FOOD GRADE': 0,
        'BLANK CHAIN ​​STRAP': 0,
        'SHINY LEATHER CHIN STRAP': 0,
        'BLACK CHIN STRAP WITH BLACK KNOTS': 0,
        'BLACK CHIN STRAP WITH GOLD KNOTS': 0
      },
      embroideryColor: {
        Gold: 0,
        Silver: 0,
        EUX: 0,
        HVID: 0,
        SORT: 0
      },
      buttonColor: {
        Gold: 0
      },
      embroideryText: {
        base: 0,
        perChar: 0
      },
    },

    embroidery: {
      nameEmbroideryColor: {
        gold: 0,
        silver: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      nameEmbroideryText: {
        base: 0,
        perChar: 0
      },
      schoolEmbroideryColor: {
        WHITE: 0,
        BLACK: 0,
        Gold: 0,
        Silver: 0
      },
      schoolEmbroideryText: {
        base: 0,
        perChar: 0
      },
    },


    cover: {
      coverColor: {
        '#ffffff': 0,           // WHITE - WATER REPELLENT
        '#000000': 0,           // BLACK - WATER REPELLENT
        '#dedede': 0,           // WHITE GLITTER
        '#292929': 0,           // SORT GLIMMER
      },
      edgebandColor: {
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
      starsStyle: {
        '1': 0,  // One Star
        '2': 0,  // Two Stars
        '3': 0,  // Three Stars
        '4': 0,  // Four Stars
        '5': 0,  // Five Stars
      },
    },


    shade: {
      shadeType: {
        Blank: 0,    // default short/Blank shade
        Mat: 0,      // matte type
        Glimmer: 0,  // glimmer type
      },
      materialType: {
        'Uden kant': 0, // without edge
        'Med kant': 0,  // with edge
      },
      shadowTapeColor: {
        INGEN: 0,   // no tape
        gold: 0,    // gold tape
        Glitter: 0, // glitter tape
        Silver: 29, // glitter tape
      },
      engravingLine0: {
        base: 0,    // base cost for line 0
        perChar: 0, // per character cost for line 0
      },
      engravingLine2: {
        base: 0,    // base cost for line 2
        perChar: 0,
         // per character cost for line 2
      },
      engravingLine3: {
        base: 0,    // base cost for line 3
        perChar: 0, // per character cost for line 3
      },
    }
    ,

    foer: {
      kokardeMaterial: {
        Leather: 0,
        'Artificial Leather': 0,
        Ruskin: 0,
        Alcantra: 0,
      },
      kokardeColor: {
        HVID: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      bowColor: {
        HVID: 0,
        Sort: 0,
        gold: 0,
      },
      foerMaterial: {
        Viscose: 0,
        Polyester: 0,
        Satin: 0,
        Silk: 0,
      },
      bowMaterialType: {
        HVID: 0,
        BRUN: 0,
        STX: 0,
        CHAMPAGNE: 0,
      },
    }
    ,

    extraCover: {
      extraCoverOption: {
        Yes: 0,
        No: 0,
      },
    }
    ,

    accessories: {
      
      hatBoxType: { Standard: 0, 'Premium Box': 0,'Luxury Box':0 },
      ballpointPen: { Yes: 0, No: 0 },
      silkPillow: { Yes: 0, No: 0  },
      badges: { Yes: 0, No: 0  },
      gloves: { Yes: 0, No: 0  },
      largeBallpointPen: {Yes: 0, No: 0  },
      smartTag: { Yes: 0, No: 0  },
      lightBall: { Yes: 0, No: 0  },
      champagneGlass: { Yes: 0, No: 0  },
      whistle: { Yes: 0, No: 0  },
      trumpet: { Yes: 0, No: 0  },
    },

    size: {
      selectedSize: { base: 0, perMM: 0 },
      millimeterAdjustment: { Yes: 0, No: 0  },
    }
    ,
  };

  // ---------------- LUKSUS ----------------
  const luksusPrices = {
    bows: {
      color: {
        '#7F1D1D': 0,
        '#1E3A8A': 0,
        '#DC2626': 39,
      },
      bowType: {
        Signature: 0,
        Prestige: 0,
      },
      emblem: {
        gold: 0,
        silver: 0,
      },
      country: {
        Denmark: 0,
        Sweden: 0,
        Norway: 0,
        Germany: 0,
        France: 0,
        Italy: 0,
      },
    },

    educationalTape: {
      hatbandColor: {
        EUX: 0,
        SORT: 0
      },
      materialType: {
        COTTON: 0,
        VELOUR: 0,
        SATIN: 0,
        Glimmer: 99
      },
      chinStrapColor: {
        Mat: 0,
        Blank: 0,
        'Sort/Sort': 0,
        'Sort/Gold': 0
      },
      buttonMaterial: {
        'FOOD GRADE': 0,
        'BLANK CHAIN ​​STRAP': 0,
        'SHINY LEATHER CHIN STRAP': 0,
        'BLACK CHIN STRAP WITH BLACK KNOTS': 0,
        'BLACK CHIN STRAP WITH GOLD KNOTS': 0
      },
      embroideryColor: {
        Gold: 0,
        Silver: 0,
        EUX: 0,
        HVID: 0,
        SORT: 0
      },
      buttonColor: {
        Gold: 0
      },
      embroideryText: {
        base: 0,
        perChar: 0
      },
    },

    embroidery: {
      nameEmbroideryColor: {
        gold: 0,
        silver: 0,
        STX: 0,
        WHITE: 0,
        BLACK: 0
      },
      nameEmbroideryText: {
        base: 0,
        perChar: 0
      },
      schoolEmbroideryColor: {
        WHITE: 0,
        BLACK: 0,
        Gold: 0,
        Silver: 0
      },
      schoolEmbroideryText: {
        base: 0,
        perChar: 0
      },
    },


    cover: {
      coverColor: {
        '#ffffff': 0,           // WHITE - WATER REPELLENT
        '#000000': 0,           // BLACK - WATER REPELLENT
        '#dedede': 79,           // WHITE GLITTER
        '#292929': 79,           // SORT GLIMMER
      },
      edgebandColor: {
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
      starsStyle: {
        '1': 39,  // One Star
        '2': 39,  // Two Stars
        '3': 39,  // Three Stars
        '4': 39,  // Four Stars
        '5': 39,  // Five Stars
      },
    },


    shade: {
      shadeType: {
        Blank: 0,    // default short/Blank shade
        Mat: 0,      // matte type
        Glimmer: 0,  // glimmer type
      },
      materialType: {
        'Uden kant': 0, // without edge
        'Med kant': 0,  // with edge
      },
      shadowTapeColor: {
        INGEN: 0,   // no tape
        gold: 0,    // gold tape
        Glitter: 0, // glitter tape
        Silver: 0, // glitter tape
      },
      engravingLine0: {
        base: 99,    // base cost for line 0
        perChar: 0, // per character cost for line 0
      },
      engravingLine2: {
        base: 0,    // base cost for line 2
        perChar: 0, // per character cost for line 2
      },
      engravingLine3: {
        base: 0,    // base cost for line 3
        perChar: 0, // per character cost for line 3
      },
    }
    ,

    foer: {
      kokardeMaterial: {
        Leather: 0,
        'Artificial Leather': 29,
        Ruskin: 29,
        Alcantra: 29,
      },
      kokardeColor: {
        HVID: 0,
        Sort: 0,
        Cognac: 0,
        black: 0,
      },
      bowColor: {
        HVID: 0,
        Sort: 0,
        gold: 0,
      },
      foerMaterial: {
        Viscose: 29,
        Polyester: 0,
        Satin: 0,
        Silk: 0,
      },
      bowMaterialType: {
        HVID: 0,
        BRUN: 0,
        STX: 0,
        CHAMPAGNE: 0,
      },
    }
    ,

    extraCover: {
      extraCoverOption: {
        Yes: 0,
        No: 0,
      },
    }
    ,

    accessories: {
      
      hatBoxType: { Standard: 0, 'Premium Box': 0,'Luxury Box':100 },
      ballpointPen: { Yes: 0, No: 0 },
      silkPillow: { Yes: 0, No: 0  },
      badges: { Yes: 0, No: 0  },
      gloves: { Yes: 0, No: 0  },
      largeBallpointPen: {Yes: 39, No: 0  },
      smartTag: { Yes: 39, No: 0  },
      lightBall: { Yes: 25, No: 0  },
      champagneGlass: { Yes: 0, No: 0  },
      whistle: { Yes: 0, No: 0  },
      trumpet: { Yes: 29, No: 0  },
    },

    size: {
      selectedSize: { base: 0, perMM: 0 },
      millimeterAdjustment: { Yes: 39, No: 0  },
    }
    ,
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
    
    let iniialPrice=0
    
    if (packageType === "standard") iniialPrice = 449;
      // else if (packageType === "premium") iniialPrice = 1395;
      else if (packageType === "premium") iniialPrice = 2195;
       else if (packageType === "luksus") iniialPrice = 1395;
    return total+ iniialPrice +59;
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
                  src="https://playcanv.as/e/p/aaaab65d/"
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