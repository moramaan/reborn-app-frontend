// "use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Textarea,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  Input,
} from "@nextui-org/react";

import { Option } from "@/types";
import router from "next/router";

interface FormData {
  title: string;
  description: string;
  price: string;
  category: string;
  condition: number;
  publishDate: string;
  images: FileList | null;
  userId: number;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//mapping of condition from number to its string value
const conditions = ["Estado", "Nuevo", "Como nuevo", "Bueno"];

const categories: Option[] = [
  { value: "Cascos", label: "Cascos" },
  { value: "Monos", label: "Monos" },
  { value: "Guantes", label: "Guantes" },
  { value: "Botas", label: "Botas" },
  { value: "Chaquetas", label: "Chaquetas" },
  { value: "Pantalones", label: "Pantalones" },
  { value: "Accessorios", label: "Accessorios" },
  { value: "Ropa interior", label: "Ropa interior" },
  { value: "Recambios", label: "Recambios" },
];

export default function UploadForm() {
  const { user } = useUser();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: "",
    category: "",
    condition: 0,
    publishDate: new Date().toISOString().slice(0, 19).replace("T", " "),
    images: null,
    userId: 1, // Set a default value for userId for testing purposes
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maxFileSize = 2 * 1024 * 1024; // 2MB
    if (e.target.files) {
      if (e.target.files.length > 5) {
        setError("You can only upload up to 5 images.");
        return;
      }
      for (let i = 0; i < e.target.files.length; i++) {
        if (e.target.files[i].size > maxFileSize) {
          setError("One or more files exceed the 2MB size limit.");
          return;
        }
      }
      setError(null);
      setFormData({
        ...formData,
        images: e.target.files,
      });
    }
  };

  const handleConditionChange = (condition: number) => {
    setFormData({
      ...formData,
      condition: condition,
    });
  };

  const handleCategoryChange = (key: React.Key) => {
    const catSelected = categories.find((cat: Option) => cat.value === key);
    setSelectedCategory(catSelected || null);
    console.log("Selected cat const:", catSelected?.value);
    console.log("Selected category value state:", selectedCategory?.value);
    setFormData({
      ...formData,
      category: catSelected?.value || "",
    });
    console.log("Selected category value formdata:", formData.category);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.push("/api/auth/login?returnTo=/upload-product");
      return;
    }
    console.log("Form data during submit:", JSON.stringify(formData));
    const data = new FormData();

    for (const key in formData) {
      if (key === "images") {
        if (formData.images !== null && formData.images.length > 0) {
          for (let i = 0; i < formData.images.length; i++) {
            data.append("images[]", formData.images[i]);
          }
        }
      } else {
        data.append(key, formData[key as keyof FormData] as string);
      }
    }

    try {
      const response = await fetch(`${apiUrl}/items`, {
        method: "POST",
        headers: {
          //cors
          "Access-Control-Allow-Origin": "*",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Show a success message and reset the form and error state
      setSuccessMessage("Product uploaded successfully.");
      setError(null);
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        condition: 0,
        publishDate: new Date().toISOString().slice(0, 19).replace("T", " "),
        images: null,
        userId: 1,
      });
      //redirect with timeout to let user see the success message
      setTimeout(() => {
        router.push(`/`);
      }, 3000);
    } catch (error) {
      setSuccessMessage(null);
      // show error message on the screen
      setError("Error creating product. Please try again.");
    }
  };

  if (!user) {
    router.push("/api/auth/login?returnTo=/upload-product-form");
  }
  return (
    user && (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6">
        <Card>
          <CardBody>
            {successMessage && (
              <div className="text-green-500 mb-4">{successMessage}</div>
            )}
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <Input
              isClearable
              onClear={() => setFormData({ ...formData, title: "" })}
              variant="bordered"
              fullWidth
              color="primary"
              size="lg"
              placeholder="Título"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="mb-4"
            />
            <Textarea
              variant="bordered"
              fullWidth
              color="primary"
              size="lg"
              placeholder="Descripción"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="mb-2"
            />
            <Input
              isClearable
              onClear={() => setFormData({ ...formData, price: "" })}
              variant="bordered"
              fullWidth
              color="primary"
              size="lg"
              placeholder="Precio"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              required
              className="mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
              <Autocomplete
                isClearable
                onClear={() => {
                  setSelectedCategory(null);
                  setFormData({ ...formData, category: "" });
                }}
                defaultItems={categories}
                placeholder="Categoría"
                selectedKey={selectedCategory?.value}
                onSelectionChange={handleCategoryChange}
                className="mb-4" // Add md:h-full class
                size={"sm" as any}
              >
                {(item: Option) => (
                  <AutocompleteItem key={item.value}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </Autocomplete>
              <Dropdown className="py-2">
                <DropdownTrigger>
                  <Button variant="bordered" className="mb-4 md:mb-0" size="lg">
                    {formData.condition
                      ? conditions[formData.condition]
                      : "Estado"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Condition">
                  <DropdownItem
                    onClick={() => handleConditionChange(0)}
                    key="not_set"
                  >
                    Sin especificar
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleConditionChange(1)}
                    key="new"
                  >
                    Nuevo
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleConditionChange(2)}
                    key="as_new"
                  >
                    Como Nuevo
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleConditionChange(3)}
                    key="good"
                  >
                    Bueno
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <Input
              isClearable
              onClear={() => setFormData({ ...formData, images: null })}
              variant="bordered"
              fullWidth
              color="primary"
              size="lg"
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mb-4"
            />
            <Button type="submit" color="primary" size="lg" className="w-full">
              Publicar Producto
            </Button>
          </CardBody>
        </Card>
      </form>
    )
  );
}
