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

const StudentDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Bows');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
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
      <div className="text-2xl font-bold text-slate-900">299.00 DKK</div>
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
      />
    </div>
  );
};

export default StudentDashboard;