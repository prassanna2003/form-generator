import React, { useState } from 'react';

const JSONEditor: React.FC<{ onChange: (json: string) => void }> = ({ onChange }) => {
  const [json, setJson] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJson(value);
    try {
      JSON.parse(value);
      setError(null);
      onChange(value);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <textarea
        value={json}
        onChange={handleInputChange}
        className="w-full h-64 border p-2"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
