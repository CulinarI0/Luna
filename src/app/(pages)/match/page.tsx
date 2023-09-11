"use client"
import { useState } from "react";
import FilterComponent from "../../../components/FilterPage";

export default function MatchPage(){
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };
return (
    <div>
      <FilterComponent selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
    </div>
  );
}
