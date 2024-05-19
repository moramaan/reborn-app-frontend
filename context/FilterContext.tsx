import React, { createContext, useState, useContext, ReactNode } from "react";

interface Filters {
  minPrice: number | null;
  maxPrice: number | null;
  categories: string[];
  condition: string;
  state: string;
  city: string;
  publishedSince: string;
}

interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const defaultFilters: Filters = {
  minPrice: null,
  maxPrice: null,
  categories: [],
  condition: "",
  state: "",
  city: "",
  publishedSince: "",
};

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
