// src/App.tsx

import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormGenerator from './components/FormGenerator';

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);

  const handleJSONChange = (json: string) => {
    try {
      setSchema(JSON.parse(json));
    } catch {
      setSchema(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left Column: JSON Editor */}
        <div className="flex-1 p-4 bg-gray-50 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">JSON Editor</h2>
          <JSONEditor onChange={handleJSONChange} />
        </div>

        {/* Right Column: Form Preview */}
        <div className="flex-1 p-4 bg-gray-50 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Form Preview</h2>
          <FormGenerator schema={schema} />
        </div>
      </div>
    </div>
  );
};

export default App;
