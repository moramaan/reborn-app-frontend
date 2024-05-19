// import React, { useState, useContext } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Autocomplete,
//   AutocompleteItem,
//   Button,
// } from "@nextui-org/react";
// import { FilterContext } from "../context/FilterContext";
// import { states, cities } from "../data/locations";

// type Option = {
//   value: string;
//   label: string;
// };

// const FilterCard: React.FC = () => {
//   const { setFilters } = useContext(FilterContext);
//   const [minPrice, setMinPrice] = useState<string>("");
//   const [maxPrice, setMaxPrice] = useState<string>("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedCondition, setSelectedCondition] = useState<string>("");
//   const [selectedState, setSelectedState] = useState<Option | null>(null);
//   const [selectedCity, setSelectedCity] = useState<Option | null>(null);
//   const [publishedSince, setPublishedSince] = useState<string>("");

//   const handleStateChange = (state: Option) => {
//     setSelectedState(state);
//     setSelectedCity(null); // Reset city selection when state changes
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((cat) => cat !== category)
//         : [...prevCategories, category]
//     );
//   };

//   const handleApplyFilters = () => {
//     const filters = {
//       minPrice,
//       maxPrice,
//       categories: selectedCategories,
//       condition: selectedCondition,
//       state: selectedState?.value || "",
//       city: selectedCity?.value || "",
//       publishedSince,
//     };

//     setFilters(filters);

//     // Optionally make an API call here if you want to fetch filtered data immediately
//   };

//   return (
//     <Card className="p-6 bg-white rounded-lg shadow-md max-w-sm">
//       <CardHeader>
//         <h4 className="text-lg font-semibold mb-4">Filter Products</h4>
//       </CardHeader>
//       <CardBody>
//         {/* Price Range Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Price Range
//           </label>
//           <input
//             placeholder="Min Price"
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md mb-2"
//           />
//           <input
//             placeholder="Max Price"
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           {[
//             "Helmets",
//             "Leather Suits",
//             "Gloves",
//             "Boots",
//             "Jackets",
//             "Trousers",
//             "Underwear",
//             "Accessories",
//             "Spare Parts",
//           ].map((category) => (
//             <div key={category} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               <label htmlFor={category}>{category}</label>
//             </div>
//           ))}
//         </div>

//         {/* Condition Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Condition
//           </label>
//           <div className="flex items-center space-x-2">
//             {["New", "Like New", "Good Condition"].map((condition) => (
//               <div key={condition}>
//                 <input
//                   type="radio"
//                   id={condition}
//                   value={condition}
//                   checked={selectedCondition === condition}
//                   onChange={(e) => setSelectedCondition(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={condition}>{condition}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Location
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
//             onSelectionChange={setSelectedCity}
//             isDisabled={!selectedState}
//           >
//             {(item: Option) => (
//               <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
//             )}
//           </Autocomplete>
//         </div>

//         {/* Published Since Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Published Since
//           </label>
//           <div className="flex items-center space-x-2">
//             {["24h", "7 days", "30 days"].map((time) => (
//               <div key={time}>
//                 <input
//                   type="radio"
//                   id={time}
//                   value={time}
//                   checked={publishedSince === time}
//                   onChange={(e) => setPublishedSince(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={time}>{time}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Apply Filters Button */}
//         <Button
//           onClick={handleApplyFilters}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Apply Filters
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default FilterCard;

// //v2
// import React, { useState, useContext } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Autocomplete,
//   AutocompleteItem,
//   Button,
// } from "@nextui-org/react";
// import { FilterContext } from "../context/FilterContext";
// import { states, cities } from "../data/locations";

// type Option = {
//   value: string;
//   label: string;
// };

// const FilterCard: React.FC = () => {
//   const { setFilters } = useContext(FilterContext);
//   const [minPrice, setMinPrice] = useState<string>("");
//   const [maxPrice, setMaxPrice] = useState<string>("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedCondition, setSelectedCondition] = useState<string>("");
//   const [selectedState, setSelectedState] = useState<Option | null>(null);
//   const [selectedCity, setSelectedCity] = useState<Option | null>(null);
//   const [publishedSince, setPublishedSince] = useState<string>("");

//   const handleStateChange = (key: React.Key) => {
//     const state = states.find((state) => state.value === key);
//     setSelectedState(state || null);
//     setSelectedCity(null); // Reset city selection when state changes
//   };

//   const handleCityChange = (key: React.Key) => {
//     if (selectedState) {
//       const city = cities[selectedState.value].find(
//         (city) => city.value === key
//       );
//       setSelectedCity(city || null);
//     }
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((cat) => cat !== category)
//         : [...prevCategories, category]
//     );
//   };

//   const handleApplyFilters = () => {
//     const filters = {
//       minPrice,
//       maxPrice,
//       categories: selectedCategories,
//       condition: selectedCondition,
//       state: selectedState?.value || "",
//       city: selectedCity?.value || "",
//       publishedSince,
//     };

//     setFilters(filters);

//     // Optionally make an API call here if you want to fetch filtered data immediately
//   };

//   return (
//     <Card className="p-6 bg-white rounded-lg shadow-md max-w-sm">
//       <CardHeader>
//         <h4 className="text-lg font-semibold mb-4">Filter Products</h4>
//       </CardHeader>
//       <CardBody>
//         {/* Price Range Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Price Range
//           </label>
//           <input
//             placeholder="Min Price"
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md mb-2"
//           />
//           <input
//             placeholder="Max Price"
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           {[
//             "Helmets",
//             "Leather Suits",
//             "Gloves",
//             "Boots",
//             "Jackets",
//             "Trousers",
//             "Underwear",
//             "Accessories",
//             "Spare Parts",
//           ].map((category) => (
//             <div key={category} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               <label htmlFor={category}>{category}</label>
//             </div>
//           ))}
//         </div>

//         {/* Condition Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Condition
//           </label>
//           <div className="flex items-center space-x-2">
//             {["New", "Like New", "Good Condition"].map((condition) => (
//               <div key={condition}>
//                 <input
//                   type="radio"
//                   id={condition}
//                   value={condition}
//                   checked={selectedCondition === condition}
//                   onChange={(e) => setSelectedCondition(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={condition}>{condition}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Location
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
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Published Since
//           </label>
//           <div className="flex items-center space-x-2">
//             {["24h", "7 days", "30 days"].map((time) => (
//               <div key={time}>
//                 <input
//                   type="radio"
//                   id={time}
//                   value={time}
//                   checked={publishedSince === time}
//                   onChange={(e) => setPublishedSince(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={time}>{time}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Apply Filters Button */}
//         <Button
//           onClick={handleApplyFilters}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Apply Filters
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default FilterCard;

// //v3
// import React, { useState, useContext } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Autocomplete,
//   AutocompleteItem,
//   Button,
// } from "@nextui-org/react";
// import FilterContext from "@/context/FilterContext";
// import { states, cities } from "../data/locations";

// type Option = {
//   value: string;
//   label: string;
// };

// const FilterCard: React.FC = () => {
//   const { setFilters } = useContext(FilterContext);
//   const [minPrice, setMinPrice] = useState<string>("");
//   const [maxPrice, setMaxPrice] = useState<string>("");
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

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((cat) => cat !== category)
//         : [...prevCategories, category]
//     );
//   };

//   const handleApplyFilters = () => {
//     const filters = {
//       minPrice,
//       maxPrice,
//       categories: selectedCategories,
//       condition: selectedCondition,
//       state: selectedState?.value || "",
//       city: selectedCity?.value || "",
//       publishedSince,
//     };

//     setFilters(filters);

//     // Optionally make an API call here if you want to fetch filtered data immediately
//   };

//   return (
//     <Card className="p-6 bg-white rounded-lg shadow-md max-w-sm">
//       <CardHeader>
//         <h4 className="text-lg font-semibold mb-4">Filter Products</h4>
//       </CardHeader>
//       <CardBody>
//         {/* Price Range Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Price Range
//           </label>
//           <input
//             placeholder="Min Price"
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md mb-2"
//           />
//           <input
//             placeholder="Max Price"
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             className="block w-full border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           {[
//             "Helmets",
//             "Leather Suits",
//             "Gloves",
//             "Boots",
//             "Jackets",
//             "Trousers",
//             "Underwear",
//             "Accessories",
//             "Spare Parts",
//           ].map((category) => (
//             <div key={category} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               <label htmlFor={category}>{category}</label>
//             </div>
//           ))}
//         </div>

//         {/* Condition Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Condition
//           </label>
//           <div className="flex items-center space-x-2">
//             {["New", "Like New", "Good Condition"].map((condition) => (
//               <div key={condition}>
//                 <input
//                   type="radio"
//                   id={condition}
//                   value={condition}
//                   checked={selectedCondition === condition}
//                   onChange={(e) => setSelectedCondition(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={condition}>{condition}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Location
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
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Published Since
//           </label>
//           <div className="flex items-center space-x-2">
//             {["24h", "7 days", "30 days"].map((time) => (
//               <div key={time}>
//                 <input
//                   type="radio"
//                   id={time}
//                   value={time}
//                   checked={publishedSince === time}
//                   onChange={(e) => setPublishedSince(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={time}>{time}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Apply Filters Button */}
//         <Button
//           onClick={handleApplyFilters}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Apply Filters
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default FilterCard;

//v4 - should work ok
// import React, { useState, useContext } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Autocomplete,
//   AutocompleteItem,
//   Button,
// } from "@nextui-org/react";
// import { useFilterContext } from "@/context/FilterContext";
// import { states, cities } from "../data/locations";

// type Option = {
//   value: string;
//   label: string;
// };

// const FilterCard: React.FC = () => {
//   const { setFilters } = useFilterContext();
//   const [minPrice, setMinPrice] = useState<number | null>(null);
//   const [maxPrice, setMaxPrice] = useState<number | null>(null);
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

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((cat) => cat !== category)
//         : [...prevCategories, category]
//     );
//   };

//   const handleApplyFilters = () => {
//     const filters = {
//       minPrice,
//       maxPrice,
//       categories: selectedCategories,
//       condition: selectedCondition,
//       state: selectedState?.value || "",
//       city: selectedCity?.value || "",
//       publishedSince,
//     };

//     setFilters(filters);

//     // Optionally make an API call here if you want to fetch filtered data immediately
//   };

//   return (
//     <Card className="p-6 bg-white rounded-lg shadow-md max-w-sm">
//       <CardHeader>
//         <h4 className="text-lg font-semibold mb-4">Filter Products</h4>
//       </CardHeader>
//       <CardBody>
//         {/* Price Range Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Price Range
//           </label>
//           <input
//             placeholder="Min Price"
//             type="number"
//             value={minPrice !== null ? minPrice : ""}
//             onChange={(e) =>
//               setMinPrice(e.target.value ? parseFloat(e.target.value) : null)
//             }
//             className="block w-full border-gray-300 rounded-md mb-2"
//           />
//           <input
//             placeholder="Max Price"
//             type="number"
//             value={maxPrice !== null ? maxPrice : ""}
//             onChange={(e) =>
//               setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)
//             }
//             className="block w-full border-gray-300 rounded-md"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           {[
//             "Helmets",
//             "Leather Suits",
//             "Gloves",
//             "Boots",
//             "Jackets",
//             "Trousers",
//             "Underwear",
//             "Accessories",
//             "Spare Parts",
//           ].map((category) => (
//             <div key={category} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2"
//               />
//               <label htmlFor={category}>{category}</label>
//             </div>
//           ))}
//         </div>

//         {/* Condition Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Condition
//           </label>
//           <div className="flex items-center space-x-2">
//             {["New", "Like New", "Good Condition"].map((condition) => (
//               <div key={condition}>
//                 <input
//                   type="radio"
//                   id={condition}
//                   value={condition}
//                   checked={selectedCondition === condition}
//                   onChange={(e) => setSelectedCondition(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={condition}>{condition}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Location
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
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Published Since
//           </label>
//           <div className="flex items-center space-x-2">
//             {["24h", "7 days", "30 days"].map((time) => (
//               <div key={time}>
//                 <input
//                   type="radio"
//                   id={time}
//                   value={time}
//                   checked={publishedSince === time}
//                   onChange={(e) => setPublishedSince(e.target.value)}
//                   className="mr-2"
//                 />
//                 <label htmlFor={time}>{time}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Apply Filters Button */}
//         <Button
//           onClick={handleApplyFilters}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Apply Filters
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default FilterCard;

//v4 plus | v5 - updated adfter wrap _app with filter provider
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Autocomplete,
  AutocompleteItem,
  Button,
} from "@nextui-org/react";
import { useFilterContext } from "@/context/FilterContext";
import { states, cities } from "@/data/locations";

type Option = {
  value: string;
  label: string;
};

const FilterCard: React.FC = () => {
  const { setFilters } = useFilterContext();
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleApplyFilters = () => {
    const filters = {
      minPrice,
      maxPrice,
      categories: selectedCategories,
      condition: selectedCondition,
      state: selectedState?.value || "",
      city: selectedCity?.value || "",
      publishedSince,
    };

    setFilters(filters);

    // Optionally make an API call here if you want to fetch filtered data immediately
  };

  return (
    <Card
      isBlurred
      className="p-6 max-w-sm"
      shadow="sm"
    >
      {/* <Card className="p-6 max-w-sm" isBlurred> */}
      {/* <Card className="p-6 bg-white rounded-lg shadow-md max-w-sm"> */}
      <CardHeader>
        <h4 className="text-lg font-semibold">Filter Products</h4>
      </CardHeader>
      <CardBody>
        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <input
            placeholder="Min Price"
            type="number"
            value={minPrice !== null ? minPrice : ""}
            onChange={(e) =>
              setMinPrice(e.target.value ? parseFloat(e.target.value) : null)
            }
            className="block w-full border-gray-300 rounded-md mb-2"
          />
          <input
            placeholder="Max Price"
            type="number"
            value={maxPrice !== null ? maxPrice : ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)
            }
            className="block w-full border-gray-300 rounded-md"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          {[
            "Helmets",
            "Leather Suits",
            "Gloves",
            "Boots",
            "Jackets",
            "Trousers",
            "Underwear",
            "Accessories",
            "Spare Parts",
          ].map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        {/* Condition Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Condition
          </label>
          <div className="flex items-center space-x-2">
            {["New", "Like New", "Good Condition"].map((condition) => (
              <div key={condition}>
                <input
                  type="radio"
                  id={condition}
                  value={condition}
                  checked={selectedCondition === condition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor={condition}>{condition}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Published Since
          </label>
          <div className="flex items-center space-x-2">
            {["24h", "7 days", "30 days"].map((time) => (
              <div key={time}>
                <input
                  type="radio"
                  id={time}
                  value={time}
                  checked={publishedSince === time}
                  onChange={(e) => setPublishedSince(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor={time}>{time}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button
          onClick={handleApplyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </Button>
      </CardBody>
    </Card>
  );
};

export default FilterCard;
