import React from "react";

interface Brand_altProps {}

const Brand_alt: React.FC<Brand_altProps> = () => {
  return (
    <div className="flex select-none">
      <span className="text-4xl my-auto mr-2">😏</span>
      <div>
        <p className="uppercase text-sm text-gray-500 dark:text-gray-300 tracking-wide -mb-1 mt-1">
          runzel environment
        </p>
        <p className="text-xl font-bold my-2">
          Emoji
          <span
            style={{ padding: "2px 3px 2px 3px", marginLeft: "3px" }}
            className="bg-orange-500 text-white dark:text-black py-1 rounded"
          >
            ramble
          </span>
        </p>
      </div>
    </div>
  );
};

export default Brand_alt;
