import React, { useState } from "react";
import mockData from "../mock/mockData";
import mockResults from "../mock/mockResults";

interface FilterProps {
  selectedFilters: string[];
  // eslint-disable-next-line no-unused-vars
  onFilterChange: (selectedFilters: string[]) => void;
}

const FilterComponent: React.FC<FilterProps> = ({
  selectedFilters,
  onFilterChange,
}) => {
  const handleFilterChange = (filter: string) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selected) => selected !== filter)
      : [...selectedFilters, filter];

    onFilterChange(updatedFilters);
  };

  const [selectedMeat, setSelectedMeat] = useState("");

  const handleMeatChange = (event: any) => {
    setSelectedMeat(event.target.value);
  };

  // Filter the mock results based on selected filters
  const filteredResults =
    mockResults.filter((item) => selectedFilters.includes(item.name)).length ==
    0
      ? mockResults
      : mockResults.filter((item) => selectedFilters.includes(item.name));

  return (
    <div>
      <h1>Meat Selection</h1>
      <select value={selectedMeat} onChange={handleMeatChange}>
        <option value="">Select Meat</option>
        <option value="cow">Cow Meat</option>
        <option value="fish">Fish Meat</option>
        <option value="lamb">Lamb Meat</option>
      </select>
      <h2>Filters</h2>
      {mockData.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            value={item.name}
            checked={selectedFilters.includes(item.name)}
            onChange={() => handleFilterChange(item.name)}
          />
          {item.name}
        </label>
      ))}

      {selectedMeat !== undefined && selectedMeat !== "" && (
        <div>
          <h2>All Results</h2>
          <ul>
            {filteredResults.map((item) => (
              <li key={item.id}>
                <div>
                  {item.name}:{item.score}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
