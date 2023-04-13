import React, { useState } from "react";

const TimestampConverter: React.FC = () => {
  const [input, setInput] = useState("");
  const [timestamp, setTimestamp] = useState<Date | null>(null);

  const convertTimestamp = (input: string) => {
    const parsedInput = parseInt(input);
    if (!isNaN(parsedInput)) {
      setTimestamp(new Date(parsedInput * 1000));
    } else {
      const date = new Date(input);
      if (!isNaN(date.getTime())) {
        setTimestamp(date);
      } else {
        setTimestamp(null);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    convertTimestamp(e.target.value);
  };

  const humanReadable = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days === 0) {
      if (hours === 0) {
        if (minutes === 0) {
          return "now";
        }
        return `${minutes} minute(s) ago`;
      }
      return `${hours} hour(s) ago`;
    } else if (days === 1) {
      return "yesterday";
    }
    return `${days} day(s) ago`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-7xl mx-auto px-4 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-center">
          Unix Timestamp Converter
        </h1>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter timestamp or date"
          value={input}
          onChange={handleInputChange}
        />
        {timestamp && (
          <div className="mt-4">
            <p>
              <strong>Unix Timestamp:</strong>{" "}
              {Math.floor(timestamp.getTime() / 1000)}
            </p>
            <p>
              <strong>UTC Time:</strong> {timestamp.toUTCString()}
            </p>
            <p>
              <strong>Local Time:</strong> {timestamp.toLocaleString()}
            </p>
            <p>
              <strong>Human Readable:</strong> {humanReadable(timestamp)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimestampConverter;
