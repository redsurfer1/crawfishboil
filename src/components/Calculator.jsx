import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [calcMode, setCalcMode] = useState('people');
  const [people, setPeople] = useState('10');
  const [crawfishPounds, setCrawfishPounds] = useState('22');
  const [results, setResults] = useState(null);

  const calculateFromPeople = (numPeople) => {
    const crawfish = numPeople * 2.2;
    const seasoning = (crawfish / 9) * 4;
    const onions = numPeople * 0.1;
    const sausage = numPeople * 0.13;
    const potatoes = numPeople * 0.25;
    const corn = Math.ceil(numPeople * 0.75);
    const brusselsSprouts = numPeople * 0.13;

    return {
      crawfish,
      seasoning,
      onions,
      sausage,
      potatoes,
      corn,
      brusselsSprouts,
      people: numPeople
    };
  };

  const calculateFromCrawfish = (pounds) => {
    const numPeople = pounds / 2.2;
    const seasoning = (pounds / 9) * 4;
    const onions = numPeople * 0.1;
    const sausage = numPeople * 0.13;
    const potatoes = numPeople * 0.25;
    const corn = Math.ceil(numPeople * 0.75);
    const brusselsSprouts = numPeople * 0.13;

    return {
      crawfish: pounds,
      seasoning,
      onions,
      sausage,
      potatoes,
      corn,
      brusselsSprouts,
      people: numPeople
    };
  };

  useEffect(() => {
    if (calcMode === 'people' && people) {
      setResults(calculateFromPeople(parseFloat(people)));
    } else if (calcMode === 'crawfish' && crawfishPounds) {
      setResults(calculateFromCrawfish(parseFloat(crawfishPounds)));
    }
  }, [calcMode, people, crawfishPounds]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    if (!results) return;

    const text = `Crawfish Boil Shopping List
${calcMode === 'people' ? `For ${people} people` : `For ${crawfishPounds} lbs of crawfish (serves ${results.people.toFixed(1)} people)`}

□ Crawfish: ${results.crawfish.toFixed(1)} lbs
□ Seasoning: ${results.seasoning.toFixed(1)} oz
□ Onions: ${results.onions.toFixed(2)} lbs
□ Sausage: ${results.sausage.toFixed(2)} lbs
□ Potatoes: ${results.potatoes.toFixed(2)} lbs
□ Corn: ${results.corn} ears
□ Brussels Sprouts: ${results.brusselsSprouts.toFixed(2)} lbs`;

    navigator.clipboard.writeText(text);
    alert('Shopping list copied to clipboard!');
  };

  return (
    <div className="bg-green-50 rounded-2xl p-8 shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Crawfish Boil Calculator
        </h3>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCalcMode('people')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              calcMode === 'people'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Calculate by People
          </button>
          <button
            onClick={() => setCalcMode('crawfish')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              calcMode === 'crawfish'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Calculate by Crawfish Pounds
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8">
          {calcMode === 'people' ? (
            <div>
              <label htmlFor="people" className="block text-lg font-semibold text-gray-700 mb-3">
                Number of People
              </label>
              <input
                type="number"
                id="people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                min="1"
                step="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Enter number of guests"
              />
            </div>
          ) : (
            <div>
              <label htmlFor="crawfish" className="block text-lg font-semibold text-gray-700 mb-3">
                Pounds of Crawfish
              </label>
              <input
                type="number"
                id="crawfish"
                value={crawfishPounds}
                onChange={(e) => setCrawfishPounds(e.target.value)}
                min="1"
                step="0.1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Enter pounds of crawfish"
              />
            </div>
          )}
        </div>

        {results && (
          <div className="bg-white rounded-xl p-8 print:shadow-none">
            <div className="flex justify-between items-center mb-6 print:mb-4">
              <h4 className="text-2xl font-bold text-gray-900">Shopping List</h4>
              <div className="flex gap-3 print:hidden">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                >
                  Copy List
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                >
                  Print List
                </button>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-gray-600 text-lg">
                {calcMode === 'people' ? (
                  <>For <span className="font-bold text-gray-900">{people} people</span></>
                ) : (
                  <>
                    For <span className="font-bold text-gray-900">{crawfishPounds} lbs</span> of crawfish
                    <span className="text-gray-500"> (serves ~{results.people.toFixed(1)} people)</span>
                  </>
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🦞</span>
                  <span className="font-semibold text-gray-900">Crawfish</span>
                </div>
                <span className="text-lg font-bold text-red-600">
                  {results.crawfish.toFixed(1)} lbs
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🧂</span>
                  <span className="font-semibold text-gray-900">Seasoning</span>
                </div>
                <span className="text-lg font-bold text-orange-600">
                  {results.seasoning.toFixed(1)} oz
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🧅</span>
                  <span className="font-semibold text-gray-900">Onions</span>
                </div>
                <span className="text-lg font-bold text-purple-600">
                  {results.onions.toFixed(2)} lbs
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <img src="/sausage_link_1_4.5.26.jpeg" alt="Sausage" className="w-8 h-8 mr-3 object-contain" />
                  <span className="font-semibold text-gray-900">Sausage</span>
                </div>
                <span className="text-lg font-bold text-red-600">
                  {results.sausage.toFixed(2)} lbs
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🥔</span>
                  <span className="font-semibold text-gray-900">Potatoes</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">
                  {results.potatoes.toFixed(2)} lbs
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌽</span>
                  <span className="font-semibold text-gray-900">Corn</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">
                  {results.corn} ears
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg md:col-span-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🥬</span>
                  <span className="font-semibold text-gray-900">Brussels Sprouts</span>
                </div>
                <span className="text-lg font-bold text-green-600">
                  {results.brusselsSprouts.toFixed(2)} lbs
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#E8E0F5' }}>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Pro Tip:</span> These ratios are based on traditional Louisiana crawfish boil proportions. The 4 oz seasoning per 9 lbs crawfish ratio is specifically optimized for <span className="font-semibold" style={{ color: '#5B3F95' }}>Spice Krewe Crawfish Boil Seasoning</span>. Adjust to taste and consider buying extra crawfish for hungry crowds!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
