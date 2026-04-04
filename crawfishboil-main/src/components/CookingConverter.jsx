import React, { useState, useEffect } from 'react';

export default function CookingConverter() {
  const [fromValue, setFromValue] = useState('1');
  const [fromUnit, setFromUnit] = useState('cup');
  const [toUnit, setToUnit] = useState('ml');
  const [result, setResult] = useState('240.00');
  const [category, setCategory] = useState('volume');

  const units = {
    weight: {
      label: 'Weight',
      units: [
        { value: 'g', label: 'Grams (g)' },
        { value: 'kg', label: 'Kilograms (kg)' },
        { value: 'oz', label: 'Ounces (oz)' },
        { value: 'lb', label: 'Pounds (lb)' }
      ]
    },
    volume: {
      label: 'Volume',
      units: [
        { value: 'ml', label: 'Milliliters (ml)' },
        { value: 'l', label: 'Liters (l)' },
        { value: 'tsp', label: 'Teaspoons (tsp)' },
        { value: 'tbsp', label: 'Tablespoons (tbsp)' },
        { value: 'cup', label: 'Cups (cup)' },
        { value: 'pt', label: 'Pints (pt)' },
        { value: 'qt', label: 'Quarts (qt)' },
        { value: 'gal', label: 'Gallons (gal)' }
      ]
    }
  };

  // Conversion factors to base unit (grams for weight, ml for volume)
  const conversionFactors = {
    weight: {
      g: 1,
      kg: 1000,
      oz: 28.35,
      lb: 453.592
    },
    volume: {
      ml: 1,
      l: 1000,
      tsp: 4.92892,
      tbsp: 14.7868,
      cup: 240,
      pt: 473.176,
      qt: 946.353,
      gal: 3785.41
    }
  };

  const convert = () => {
    const value = parseFloat(fromValue);

    if (isNaN(value) || value < 0) {
      setResult('0.00');
      return;
    }

    // Get the correct category's conversion factors
    const factors = conversionFactors[category];

    // Convert from source unit to base unit
    const baseValue = value * factors[fromUnit];

    // Convert from base unit to target unit
    const convertedValue = baseValue / factors[toUnit];

    setResult(convertedValue.toFixed(2));
  };

  // Auto-convert when inputs change
  useEffect(() => {
    convert();
  }, [fromValue, fromUnit, toUnit, category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    // Set default units for the new category
    if (newCategory === 'weight') {
      setFromUnit('oz');
      setToUnit('g');
    } else {
      setFromUnit('cup');
      setToUnit('ml');
    }
  };

  const getCurrentUnits = () => units[category].units;

  return (
    <div className="bg-green-50 p-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">⚖️</span>
        <h3 className="text-2xl font-bold text-gray-900">Cooking Conversion Calculator</h3>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Perfect for scaling recipes and measuring Spice Krewe seasonings. Convert between weight and volume measurements with ease.
      </p>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Measurement Type
        </label>
        <div className="flex gap-3">
          <button
            onClick={() => handleCategoryChange('volume')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              category === 'volume'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Volume
          </button>
          <button
            onClick={() => handleCategoryChange('weight')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              category === 'weight'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Weight
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* From Input */}
        <div>
          <label htmlFor="from-value" className="block text-sm font-semibold text-gray-700 mb-2">
            From
          </label>
          <div className="flex gap-3">
            <input
              id="from-value"
              type="number"
              min="0"
              step="0.01"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter amount"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              {getCurrentUnits().map(unit => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Conversion Arrow */}
        <div className="flex justify-center">
          <div className="text-2xl text-gray-400">↓</div>
        </div>

        {/* To Output */}
        <div>
          <label htmlFor="to-unit" className="block text-sm font-semibold text-gray-700 mb-2">
            To
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={result}
              readOnly
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-semibold"
              placeholder="Result"
            />
            <select
              id="to-unit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              {getCurrentUnits().map(unit => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-6 pt-6 border-t border-gray-300">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Reference</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            {category === 'volume' ? (
              <>
                <div>• 1 tbsp = 3 tsp</div>
                <div>• 1 cup = 16 tbsp</div>
                <div>• 1 cup = 240 ml</div>
                <div>• 1 gal = 128 oz</div>
              </>
            ) : (
              <>
                <div>• 1 oz = 28.35 g</div>
                <div>• 1 lb = 16 oz</div>
                <div>• 1 kg = 1000 g</div>
                <div>• 1 lb = 453.6 g</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
