// import React, { useState, useEffect } from "react";
// import {
//   Autocomplete,
//   AutocompleteItem,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CheckboxGroup,
//   Slider,
// } from "@nextui-org/react";
// import { useFilterContext } from "@/context/FilterContext";
// import { states, cities } from "@/data/locations";
// import CustomCheckbox from "@/components/custom-checkbox";
// import CustomRadioGroup from "@/components/custom-radio-group";

// type Option = {
//   value: string;
//   label: string;
// };

// const categories = [
//   "Cascos",
//   "Monos",
//   "Guantes",
//   "Botas",
//   "Chaquetas",
//   "Pantalones",
//   "Accessorios",
//   "Ropa interior",
//   "Recambios",
// ];

// const conditions: Option[] = [
//   { value: "new", label: "Nuevo" },
//   { value: "like new", label: "Como nuevo" },
//   { value: "good", label: "Bueno" },
// ];

// const dateRanges: Option[] = [
//   { value: "1", label: "1 día" },
//   { value: "7", label: "7 días" },
//   { value: "30", label: "30 días" },
// ];

// interface FilterCardProps {
//   maxValue: number;
//   isModal: boolean;
//   setIsFilterOpen: (isOpen: boolean) => void;
// }

// const FilterCard: React.FC<FilterCardProps> = ({
//   maxValue,
//   isModal,
//   setIsFilterOpen,
// }) => {
//   const { filters, setFilters } = useFilterContext();
//   const [minPrice, setMinPrice] = useState<number>(0);
//   const [maxPrice, setMaxPrice] = useState<number>(maxValue);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedCondition, setSelectedCondition] = useState<string>("");
//   const [selectedState, setSelectedState] = useState<Option | null>(null);
//   const [selectedCity, setSelectedCity] = useState<Option | null>(null);
//   const [publishedSince, setPublishedSince] = useState<string>("");

//   const handleStateChange = (key: React.Key) => {
//     const state = states.find((state: Option) => state.value === key);
//     setSelectedState(state || null);
//     setSelectedCity(null); // Reset city selection when state changes
//   };

//   const handleCityChange = (key: React.Key) => {
//     if (selectedState) {
//       const city = cities[selectedState.value].find(
//         (city: Option) => city.value === key
//       );
//       setSelectedCity(city || null);
//     }
//   };

//   const handleApplyFilters = () => {
//     const localFilters = {
//       minPrice,
//       maxPrice,
//       categories: selectedCategories,
//       condition: selectedCondition,
//       state: selectedState?.value || "",
//       city: selectedCity?.value || "",
//       publishedSince,
//     };

//     setFilters(localFilters);

//     // Close the filter card after applying filters only if isModal is true
//     isModal && setIsFilterOpen(false);

//     // Optionally make an API call here if you want to fetch filtered data immediately
//   };

//   const handleSliderChange = (value: number | number[]) => {
//     if (Array.isArray(value)) {
//       setMinPrice(value[0]);
//       setMaxPrice(value[1]);
//     }
//   };

//   useEffect(() => {
//     setMinPrice(filters.minPrice || 0);
//     setMaxPrice(
//       filters.maxPrice !== null
//         ? maxValue < filters.maxPrice
//           ? maxValue
//           : filters.maxPrice
//         : maxValue
//     );
//     setSelectedCategories(filters.categories);
//     setSelectedCondition(filters.condition);
//     //TODO: Fix this (state and city selection not working properly)
//     let filterState: Option | null = null;
//     if (filters.state) {
//       const foundState = states.find((state) => state.value === filters.state);
//       filterState = foundState ? foundState : null;
//     }
//     setSelectedState(filterState);
//     let filterCity: Option | null = null;
//     if (filters.city) {
//       const foundCity = cities[filters.state].find(
//         (city) => city.value === filters.city
//       );
//       filterCity = foundCity ? foundCity : null;
//     }
//     setSelectedCity(filterCity);
//     setPublishedSince(filters.publishedSince);
//   }, [filters]);

//   return (
//     <Card className="p-4 max-w-sm" shadow="sm">
//       <CardHeader>
//         <h4 className="text-lg font-semibold">Filtros</h4>
//       </CardHeader>
//       <CardBody>
//         {/* Price Range Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-default-700 mb-2">
//             Rango de precio
//           </label>
//           <div className="flex justify-between mb-2">
//             <span className="text-sm font-medium text-gray-700">
//               {minPrice} €
//             </span>
//             <span className="text-sm font-medium text-gray-700">
//               {maxPrice} €
//             </span>
//           </div>
//           <Slider
//             step={100}
//             maxValue={maxValue}
//             minValue={0}
//             value={[minPrice, maxPrice]}
//             onChange={handleSliderChange}
//             showTooltip={true}
//             showOutline={true}
//             disableThumbScale={true}
//             tooltipValueFormatOptions={{
//               style: "currency",
//               currency: "EUR",
//               maximumFractionDigits: 0,
//             }}
//             classNames={{
//               base: "max-w-md",
//               filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
//               labelWrapper: "mb-2",
//               label: "font-medium text-default-700 text-medium",
//               value: "font-medium text-default-500 text-small",
//               thumb: [
//                 "transition-size",
//                 "bg-gradient-to-r from-secondary-400 to-primary-500",
//                 "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
//                 "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
//               ],
//               step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
//             }}
//             tooltipProps={{
//               offset: 10,
//               placement: "bottom",
//               classNames: {
//                 base: [
//                   // arrow color
//                   "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
//                 ],
//                 content: [
//                   "py-2 shadow-xl",
//                   "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
//                 ],
//               },
//             }}
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-default-700 mb-2">
//             Categoría
//           </label>
//           <div className="flex flex-col gap-1 w-full">
//             <CheckboxGroup
//               className="gap-1"
//               orientation="horizontal"
//               value={selectedCategories}
//               onValueChange={setSelectedCategories}
//             >
//               {categories.map((category) => (
//                 <CustomCheckbox key={category} value={category}>
//                   {category}
//                 </CustomCheckbox>
//               ))}
//             </CheckboxGroup>
//           </div>
//         </div>

//         {/* Condition Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-default-700 mb-1">
//             Estado
//           </label>
//           <div className="flex items-center space-x-2">
//             <CustomRadioGroup
//               className="flex flex-wrap gap-2 w-full"
//               options={conditions}
//               selectedValue={selectedCondition}
//               onChange={setSelectedCondition}
//             />
//           </div>
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-default-700 mb-1">
//             Ubicación
//           </label>
//           <Autocomplete
//             label="State"
//             defaultItems={states}
//             placeholder="Search State"
//             selectedKey={selectedState?.value}
//             onSelectionChange={handleStateChange}
//             className="mb-2"
//           >
//             {(item: Option) => (
//               <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
//             )}
//           </Autocomplete>
//           <Autocomplete
//             label="City"
//             defaultItems={selectedState ? cities[selectedState.value] : []}
//             placeholder="Search City"
//             selectedKey={selectedCity?.value}
//             onSelectionChange={handleCityChange}
//             isDisabled={!selectedState}
//           >
//             {(item: Option) => (
//               <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
//             )}
//           </Autocomplete>
//         </div>

//         {/* Published Since Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-default-700 mb-1">
//             Publicado hace
//           </label>
//           <div className="flex items-center space-x-2">
//             <CustomRadioGroup
//               className="flex flex-wrap gap-2 w-full"
//               options={dateRanges}
//               selectedValue={publishedSince}
//               onChange={setPublishedSince}
//             />
//           </div>
//         </div>

//         {/* Apply Filters Button */}
//         <Button
//           onClick={handleApplyFilters}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//           // className="w-full bg-gradient-to-r from-primary-500 to-secondary-400 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Aplicar filtros
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default FilterCard;

//v3
import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  CheckboxGroup,
  Slider,
} from "@nextui-org/react";
import { useFilterContext, Filter } from "@/context/FilterContext";
import { states, cities } from "@/data/locations";
import CustomCheckbox from "@/components/custom-checkbox";
import CustomRadioGroup from "@/components/custom-radio-group";

type Option = {
  value: string;
  label: string;
};

const categories = [
  "Cascos",
  "Monos",
  "Guantes",
  "Botas",
  "Chaquetas",
  "Pantalones",
  "Accessorios",
  "Ropa interior",
  "Recambios",
];

const conditions: Option[] = [
  { value: "new", label: "Nuevo" },
  { value: "like new", label: "Como nuevo" },
  { value: "good", label: "Bueno" },
];

const dateRanges: Option[] = [
  { value: "1", label: "1 día" },
  { value: "7", label: "7 días" },
  { value: "30", label: "30 días" },
];

interface FilterCardProps {
  maxValue: number;
  isModal: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

const FilterCard: React.FC<FilterCardProps> = ({
  maxValue,
  isModal,
  setIsFilterOpen,
}) => {
  const { filters, setFilters } = useFilterContext();
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(maxValue);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>("");
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const [publishedSince, setPublishedSince] = useState<string>("");

  const handleStateChange = (key: React.Key) => {
    const state = states.find((state: Option) => state.value === key);
    setSelectedState(state || null);
    setSelectedCity(null); // Reset city selection when state changes
  };

  const handleCityChange = (key: React.Key) => {
    if (selectedState) {
      const city = cities[selectedState.value].find(
        (city: Option) => city.value === key
      );
      setSelectedCity(city || null);
    }
  };

  const handleApplyFilters = () => {
    const localFilters: Filter[] = [];

    // Price Range Filter
    if (minPrice !== 0 || maxPrice !== maxValue) {
      localFilters.push({
        column: "price",
        min: minPrice,
        max: maxPrice,
        value: "",
      });
    }

    // Category Filter
    selectedCategories.forEach((category) => {
      localFilters.push({ column: "category", value: category });
    });

    // Condition Filter
    if (selectedCondition) {
      localFilters.push({ column: "condition", value: selectedCondition });
    }

    // State Filter
    if (selectedState) {
      localFilters.push({ column: "state", value: selectedState.value });
    }

    // City Filter
    if (selectedCity) {
      localFilters.push({ column: "city", value: selectedCity.value });
    }

    // Published Since Filter
    if (publishedSince) {
      localFilters.push({ column: "publishedSince", value: publishedSince });
    }

    setFilters(localFilters);

    // Close the filter card after applying filters only if isModal is true
    isModal && setIsFilterOpen(false);
  };

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setMinPrice(value[0]);
      setMaxPrice(value[1]);
    }
  };

  useEffect(() => {
    setMinPrice(filters.find((filter) => filter.column === "price")?.min || 0);
    setMaxPrice(
      filters.find((filter) => filter.column === "price")?.max || maxValue
    );
    setSelectedCategories(
      filters
        .filter((filter) => filter.column === "category")
        .map((filter) => filter.value)
    );
    setSelectedCondition(
      filters.find((filter) => filter.column === "condition")?.value || ""
    );

    let filterState: Option | null = null;
    if (filters.find((filter) => filter.column === "state")) {
      const foundState = states.find(
        (state) =>
          state.value ===
          filters.find((filter) => filter.column === "state")?.value
      );
      filterState = foundState ? foundState : null;
    }
    setSelectedState(filterState);

    let filterCity: Option | null = null;
    if (filters.find((filter) => filter.column === "city")) {
      const stateFilter = filters.find((filter) => filter.column === "state");
      if (stateFilter && stateFilter.value) {
        const foundCity = cities[stateFilter.value]?.find(
          (city: Option) =>
            city.value ===
            filters.find((filter) => filter.column === "city")?.value
        );
        filterCity = foundCity || null;
      }
    }

    setSelectedCity(filterCity);
    setPublishedSince(
      filters.find((filter) => filter.column === "publishedSince")?.value || ""
    );
  }, [filters, maxValue]);
  return (
    <Card className="p-4 max-w-sm" shadow="sm">
      {/* <CardHeader>
        <h4 className="text-lg font-semibold">Filtros</h4>
      </CardHeader> */}
      <CardHeader className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Filtros</h4>
        <Button
          onClick={() => setFilters([])}
          className="text-sm bg-gray-400 text-white py-1 px-3 rounded-md"
        >
          Restablecer
        </Button>
      </CardHeader>
      <CardBody>
        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-default-700 mb-2">
            Rango de precio
          </label>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {minPrice} €
            </span>
            <span className="text-sm font-medium text-gray-700">
              {maxPrice} €
            </span>
          </div>
          <Slider
            step={100}
            maxValue={maxValue}
            minValue={0}
            value={[minPrice, maxPrice]}
            onChange={handleSliderChange}
            showTooltip={true}
            showOutline={true}
            disableThumbScale={true}
            tooltipValueFormatOptions={{
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }}
            classNames={{
              base: "max-w-md",
              filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
              labelWrapper: "mb-2",
              label: "font-medium text-default-700 text-medium",
              value: "font-medium text-default-500 text-small",
              thumb: [
                "transition-size",
                "bg-gradient-to-r from-secondary-400 to-primary-500",
                "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
              ],
              step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
            }}
            tooltipProps={{
              offset: 10,
              placement: "bottom",
              classNames: {
                base: [
                  // arrow color
                  "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
                ],
                content: [
                  "py-2 shadow-xl",
                  "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
                ],
              },
            }}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-default-700 mb-2">
            Categoría
          </label>
          <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
              className="gap-1"
              orientation="horizontal"
              value={selectedCategories}
              onValueChange={setSelectedCategories}
            >
              {categories.map((category) => (
                <CustomCheckbox key={category} value={category}>
                  {category}
                </CustomCheckbox>
              ))}
            </CheckboxGroup>
          </div>
        </div>

        {/* Condition Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-default-700 mb-1">
            Estado
          </label>
          <div className="flex items-center space-x-2">
            <CustomRadioGroup
              className="flex flex-wrap gap-2 w-full"
              options={conditions}
              selectedValue={selectedCondition}
              onChange={setSelectedCondition}
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-default-700 mb-1">
            Ubicación
          </label>
          <Autocomplete
            label="State"
            defaultItems={states}
            placeholder="Search State"
            selectedKey={selectedState?.value}
            onSelectionChange={handleStateChange}
            className="mb-2"
          >
            {(item: Option) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            label="City"
            defaultItems={selectedState ? cities[selectedState.value] : []}
            placeholder="Search City"
            selectedKey={selectedCity?.value}
            onSelectionChange={handleCityChange}
            isDisabled={!selectedState}
          >
            {(item: Option) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        {/* Published Since Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-default-700 mb-1">
            Publicado hace
          </label>
          <div className="flex items-center space-x-2">
            <CustomRadioGroup
              className="flex flex-wrap gap-2 w-full"
              options={dateRanges}
              selectedValue={publishedSince}
              onChange={setPublishedSince}
            />
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button
          onClick={handleApplyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Aplicar filtros
        </Button>
      </CardBody>
    </Card>
  );
};

export default FilterCard;
