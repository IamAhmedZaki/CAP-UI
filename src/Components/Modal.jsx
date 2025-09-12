import React, { useState } from 'react';
import { X, Printer, Download, Mail, CheckCircle, Package, Star, User, CreditCard, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose, selectedOptions,price }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Denmark',
    notes: ''
  });

  if (!isOpen) return null;

  const steps = ['Quote Review', 'Customer Details', 'Order Confirmation'];

  // Price definitions for each option
  const priceConfig = {
    basePrice: 299,
    bows: {
      color: {
        "Standard": 0,
        "Premium": 50,
        "Luxury": 100
      },
      bowType: {
        "Standard": 0,
        "Premium": 75,
        "Luxury": 150
      },
      emblem: {
        "Standard": 0,
        "Premium": 60,
        "Luxury": 120
      },
      country: {
        "Denmark": 0,
        "Sweden": 25,
        "Norway": 25,
        "Germany": 25,
        "Other": 30
      }
    },
    educationalTape: {
      hatbandColor: {
        "Standard": 0,
        "Premium": 40,
        "Luxury": 80
      },
      materialType: {
        "Standard": 0,
        "Premium": 55,
        "Luxury": 110
      },
      chinStrapColor: {
        "Standard": 0,
        "Premium": 30,
        "Luxury": 60
      },
      buttonMaterial: {
        "Standard": 0,
        "Premium": 20,
        "Luxury": 40
      },
      embroideryColor: {
        "Standard": 0,
        "Premium": 35,
        "Luxury": 70
      },
      buttonColor: {
        "Standard": 0,
        "Premium": 15,
        "Luxury": 30
      },
      embroideryText: {
        "Standard": 0,
        "Premium": 25,
        "Luxury": 50
      }
    },
    embroidery: {
      nameEmbroideryColor: {
        "Standard": 0,
        "Premium": 45,
        "Luxury": 90
      },
      nameEmbroideryText: {
        "Standard": 0,
        "Premium": 25,
        "Luxury": 50
      },
      schoolEmbroideryColor: {
        "Standard": 0,
        "Premium": 45,
        "Luxury": 90
      },
      schoolEmbroideryText: {
        "Standard": 0,
        "Premium": 25,
        "Luxury": 50
      }
    },
    cover: {
      coverColor: {
        "Standard": 0,
        "Premium": 70,
        "Luxury": 140
      },
      edgebandColor: {
        "Standard": 0,
        "Premium": 40,
        "Luxury": 80
      },
      starsStyle: {
        "Standard": 0,
        "Premium": 50,
        "Luxury": 100
      }
    },
    shade: {
      shadeType: {
        "Standard": 0,
        "Premium": 85,
        "Luxury": 170
      },
      materialType: {
        "Standard": 0,
        "Premium": 60,
        "Luxury": 120
      },
      shadowTapeColor: {
        "Standard": 0,
        "Premium": 35,
        "Luxury": 70
      },
      engravingLine1: {
        "Standard": 0,
        "Premium": 15,
        "Luxury": 30
      },
      engravingLine2: {
        "Standard": 0,
        "Premium": 15,
        "Luxury": 30
      },
      engravingLine3: {
        "Standard": 0,
        "Premium": 15,
        "Luxury": 30
      }
    },
    foer: {
      kokardeMaterial: {
        "Standard": 0,
        "Premium": 50,
        "Luxury": 100
      },
      kokardeColor: {
        "Standard": 0,
        "Premium": 30,
        "Luxury": 60
      },
      bowColor: {
        "Standard": 0,
        "Premium": 40,
        "Luxury": 80
      },
      foerMaterial: {
        "Standard": 0,
        "Premium": 65,
        "Luxury": 130
      },
      bowMaterialType: {
        "Standard": 0,
        "Premium": 45,
        "Luxury": 90
      }
    },
    extraCover: {
      extraCoverOption: {
        "None": 0,
        "Standard": 50,
        "Premium": 100,
        "Luxury": 200
      }
    },
    accessories: {
      hatBoxColor: {
        "Standard": 0,
        "Premium": 25,
        "Luxury": 50
      },
      hatBoxType: {
        "None": 0,
        "Standard": 50,
        "Premium": 100,
        "Luxury": 200
      },
      ballpointPenSelection: {
        "None": 0,
        "Standard": 20,
        "Premium": 40
      },
      silkPillowSelection: {
        "None": 0,
        "Standard": 30,
        "Premium": 60
      },
      badgesSelection: {
        "None": 0,
        "Standard": 25,
        "Premium": 50
      },
      glovesSelection: {
        "None": 0,
        "Standard": 35,
        "Premium": 70
      },
      largeBallpointPenSelection: {
        "None": 0,
        "Standard": 30,
        "Premium": 60
      },
      smartTagSelection: {
        "None": 0,
        "Standard": 15,
        "Premium": 30
      },
      lightBallSelection: {
        "None": 0,
        "Standard": 40,
        "Premium": 80
      },
      champagneGlassSelection: {
        "None": 0,
        "Standard": 25,
        "Premium": 50
      },
      whistleSelection: {
        "None": 0,
        "Standard": 20,
        "Premium": 40
      },
      trumpetSelection: {
        "None": 0,
        "Standard": 80,
        "Premium": 160
      }
    },
    size: {
      selectedSize: {
        "49.5": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0
      },
      millimeterAdjustment: {
        "0": 0,
        "5": 10,
        "10": 20,
        "15": 30
      }
    }
  };

  // Function to calculate total price
  const calculateTotal = () => {
    let total = priceConfig.basePrice;
    
    // Calculate price for each section
    Object.entries(selectedOptions).forEach(([section, options]) => {
      if (priceConfig[section]) {
        Object.entries(options).forEach(([option, value]) => {
          if (priceConfig[section][option]) {
            // Handle different value types (string, object, etc.)
            if (typeof value === 'object' && value.name) {
              // For objects like {name: '', value: '', price: 0}
              if (value.name && priceConfig[section][option][value.name] !== undefined) {
                total += priceConfig[section][option][value.name];
              }
            } else if (typeof value === 'string') {
              // For simple string values
              if (priceConfig[section][option][value] !== undefined) {
                total += priceConfig[section][option][value];
              }
            } else if (typeof value === 'number') {
              // For number values like size
              if (priceConfig[section][option][value.toString()] !== undefined) {
                total += priceConfig[section][option][value.toString()];
              }
            }
          }
        });
      }
    });
    
    return total.toFixed(2);
  };

  // Function to format values for display
  const formatValue = (value, section, key) => {
    let displayValue = '';
    let price = 0;
    
    if (typeof value === 'object' && value.name) {
      displayValue = value.name;
      if (priceConfig[section] && priceConfig[section][key] && priceConfig[section][key][value.name] !== undefined) {
        price = priceConfig[section][key][value.name];
      }
    } else if (typeof value === 'string') {
      displayValue = value;
      if (priceConfig[section] && priceConfig[section][key] && priceConfig[section][key][value] !== undefined) {
        price = priceConfig[section][key][value];
      }
    } else if (typeof value === 'number') {
      displayValue = value.toString();
      if (priceConfig[section] && priceConfig[section][key] && priceConfig[section][key][value.toString()] !== undefined) {
        price = priceConfig[section][key][value.toString()];
      }
    }
    
    if (displayValue === '' || displayValue === 'Not specified') {
      return 'Not specified';
    }
    
    if (price > 0) {
      return `${displayValue} (+${price} DKK)`;
    }
    
    return displayValue;
  };

  // Filter out empty or default values for cleaner display
  const filterOptions = (options) => {
    return Object.fromEntries(
      Object.entries(options).filter(([key, value]) => {
        if (value === '' || value === null || value === undefined) return false;
        if (typeof value === 'object' && (!value.name || value.name === '')) return false;
        return true;
      })
    );
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Validate customer details
  const validateCustomerDetails = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode'];
    return required.every(field => customerDetails[field].trim() !== '');
  };

  // Handle order submission
  const handleConfirmOrder = async () => {
    setIsLoading(true);
    
    const orderData = {
      customerDetails,
      selectedOptions,
      totalPrice: price,
      currency: 'DKK',
      orderDate: new Date().toISOString(),
      orderNumber: `CAP-${Date.now()}`,
      email: customerDetails.email
    };

    console.log(orderData)

    try {
      // Placeholder API call - replace with your actual endpoint
      const response = await fetch('https://printmanager-api.onrender.com/api/sendEmail/capconfigurator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      if (response.ok) {
        // Success - you can add success handling here
        console.log('Order submitted successfully:', orderData);
        setTimeout(() => {
          setIsLoading(false);
          onClose();
          // You can add a success message or redirect here
        }, 2000);
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setIsLoading(false);
      // You can add error handling here
    }
  };

  // Step 1: Quote Review (Original content)
  const renderQuoteReview = () => (
    <div className="overflow-y-auto px-6 py-4">
      <div className="space-y-6">
        {Object.entries(selectedOptions).map(([category, options], categoryIndex) => {
          const filteredOptions = filterOptions(options);
          if (Object.keys(filteredOptions).length === 0) return null;

          return (
            <div 
              key={category} 
              className="group hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-green-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-green-100 to-green-50 rounded-lg mr-3">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent ml-3"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {Object.entries(filteredOptions).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="text-sm text-gray-600 capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm text-gray-900 font-semibold text-right ml-3 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      {formatValue(value, category, key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Step 2: Customer Details Form
  const renderCustomerDetails = () => (
    <div className="overflow-y-auto px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                value={customerDetails.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                value={customerDetails.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company (Optional)</label>
              <input
                type="text"
                value={customerDetails.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">City *</label>
              <input
                type="text"
                value={customerDetails.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your city"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
              <select
                value={customerDetails.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              >
                <option value="Denmark">Denmark</option>
                <option value="Sweden">Sweden</option>
                <option value="Norway">Norway</option>
                <option value="Germany">Germany</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                value={customerDetails.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your last name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={customerDetails.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Address *</label>
              <input
                type="text"
                value={customerDetails.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter your street address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Postal Code *</label>
              <input
                type="text"
                value={customerDetails.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Enter postal code"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Special Notes (Optional)</label>
          <textarea
            value={customerDetails.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
            placeholder="Any special instructions or notes for your order..."
          />
        </div>
      </div>
    </div>
  );

  // Step 3: Order Confirmation
  const renderOrderConfirmation = () => (
    <div className="overflow-y-auto px-6 py-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Customer Details Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center mb-3">
            <User className="w-4 h-4 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Customer Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <p className="text-sm"><span className="font-medium text-gray-700">Name:</span> {customerDetails.firstName} {customerDetails.lastName}</p>
              <p className="text-sm"><span className="font-medium text-gray-700">Email:</span> {customerDetails.email}</p>
              <p className="text-sm"><span className="font-medium text-gray-700">Phone:</span> {customerDetails.phone}</p>
              {customerDetails.company && <p className="text-sm"><span className="font-medium text-gray-700">Company:</span> {customerDetails.company}</p>}
            </div>
            <div className="space-y-1">
              <p className="text-sm"><span className="font-medium text-gray-700">Address:</span> {customerDetails.address}</p>
              <p className="text-sm"><span className="font-medium text-gray-700">City:</span> {customerDetails.city}, {customerDetails.postalCode}</p>
              <p className="text-sm"><span className="font-medium text-gray-700">Country:</span> {customerDetails.country}</p>
            </div>
          </div>
          {customerDetails.notes && (
            <div className="mt-3 pt-3 border-t border-blue-200">
              <p className="text-sm"><span className="font-medium text-gray-700">Notes:</span> {customerDetails.notes}</p>
            </div>
          )}
        </div>

        {/* Product Configuration Summary */}
        <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center mb-3">
            <Package className="w-4 h-4 text-green-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Cap Configuration Summary</h3>
          </div>
          <div className="space-y-3">
            {Object.entries(selectedOptions).map(([category, options]) => {
              const filteredOptions = filterOptions(options);
              if (Object.keys(filteredOptions).length === 0) return null;

              return (
                <div key={category} className="bg-white rounded-lg p-3 border border-green-100">
                  <h4 className="font-bold text-gray-800 text-sm capitalize mb-1">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {Object.entries(filteredOptions).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-medium text-gray-900">{formatValue(value, category, key)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  // Get step content
  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderQuoteReview();
      case 1:
        return renderCustomerDetails();
      case 2:
        return renderOrderConfirmation();
      default:
        return renderQuoteReview();
    }
  };

  // Get step icon
  const getStepIcon = (step) => {
    switch (step) {
      case 0:
        return Package;
      case 1:
        return User;
      case 2:
        return CreditCard;
      default:
        return Package;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 animate-in slide-in-from-bottom duration-500">
        {/* Modal Header with Step Indicator */}
        <div className="relative bg-gradient-to-r from-green-50 via-white to-green-50 border-b border-green-100">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-700/5"></div>
          <div className="relative p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg">
                  {React.createElement(getStepIcon(currentStep), { className: "w-5 h-5 text-white" })}
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {steps[currentStep]}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
              >
                <X className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>

            {/* Step Progress Indicator */}
            <div className="flex items-center space-x-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    index <= currentStep 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>
                  <span className={`ml-1 text-xs font-medium ${
                    index <= currentStep ? 'text-green-700' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-6 h-0.5 mx-2 ${
                      index < currentStep ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Content - Now with flexible height */}
        <div className="flex-1 overflow-auto">
          {getStepContent()}
        </div>

        {/* Enhanced Footer with Step Navigation */}
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-100 p-6">
          {/* Price Section - Show on all steps */}
          <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl p-4 mb-4 border border-green-200">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-base font-bold text-gray-900">Total Price</span>
                <p className="text-gray-600 text-xs mt-1">Including VAT and shipping</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {price}
                </span>
                <span className="text-base font-semibold text-green-600 ml-1">DKK</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-3 flex-1">
              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </button>
              )}
              
              {currentStep === 0 && (
                <button 
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  Continue Editing
                </button>
              )}
            </div>

            {currentStep < steps.length - 1 ? (
              <button 
                onClick={() => {
                  if (currentStep === 1 && !validateCustomerDetails()) {
                    alert('Please fill in all required fields.');
                    return;
                  }
                  setCurrentStep(prev => prev + 1);
                }}
                className="flex-1 bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Continue
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ) : (
              <button 
                onClick={handleConfirmOrder}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Confirm Order
                    </>
                  )}
                </span>
                {!isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            )}
          </div>

          {/* Trust Indicators */}
         
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;