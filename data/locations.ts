export type Option = {
  value: string;
  label: string;
};

export const states: Option[] = [
  { value: "andalucia", label: "Andalucía" },
  { value: "cataluna", label: "Cataluña" },
  { value: "madrid", label: "Madrid" },
  // Add more states as needed
];

export const cities: Record<string, Option[]> = {
  andalucia: [
    { value: "sevilla", label: "Sevilla" },
    { value: "malaga", label: "Málaga" },
    { value: "granada", label: "Granada" },
    // Add more cities in Andalucía as needed
  ],
  cataluna: [
    { value: "barcelona", label: "Barcelona" },
    { value: "girona", label: "Girona" },
    { value: "tarragona", label: "Tarragona" },
    // Add more cities in Cataluña as needed
  ],
  madrid: [
    { value: "madrid-city", label: "Madrid" },
    { value: "alcala-de-henares", label: "Alcalá de Henares" },
    { value: "mostoles", label: "Móstoles" },
    // Add more cities in Madrid as needed
  ],
  // Add more states and their cities as needed
};
