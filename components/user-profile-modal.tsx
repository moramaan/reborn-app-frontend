import React, { useState, useEffect } from "react";
import {
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Switch,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { Option } from "@/types";
import { states, cities } from "@/data/locations";
import { User as UserType } from "@/types/index";
import fetchWithAuth from "@/utils/fetchAuth";
import { useUser } from "@auth0/nextjs-auth0/client";

interface UserProfileModalProps {
  userProps: UserType | null;
  updateUser: (userProps: UserType) => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  userProps,
  updateUser,
}) => {
  const { user } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const [formData, setFormData] = useState({
    email: userProps?.email || "",
    name: userProps?.name || "",
    lastName: userProps?.lastName || "",
    phone: userProps?.phone || "",
    showPhone: userProps?.showPhone || false,
    state: userProps?.state || "",
    city: userProps?.city || "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    lastName: false,
    phone: false,
  });

  // useEffect(() => {
  //   if (user) {
  //     setFormData({
  //       email: user.email,
  //       name: user.name,
  //       lastName: user.lastName,
  //       phone: user.phone,
  //       showPhone: user.showPhone,
  //       state: user.state,
  //       city: user.city,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (userProps) {
      setFormData({
        email: userProps.email,
        name: userProps.name,
        lastName: userProps.lastName,
        phone: userProps.phone,
        showPhone: userProps.showPhone,
        state: userProps.state,
        city: userProps.city,
      });
      setSelectedState(
        states.find((state) => state.value === userProps.state) || null
      );
      setSelectedCity(
        cities[userProps.state]?.find(
          (city) => city.value === userProps.city
        ) || null
      );
    }
  }, [userProps]);

  const handleStateChange = (key: React.Key) => {
    const state = states.find((state: Option) => state.value === key);
    setSelectedState(state || null);
    setSelectedCity(null); // Reset city selection when state changes
    setFormData({
      ...formData,
      state: state?.value || "",
      city: "",
    });
  };

  const handleCityChange = (key: React.Key) => {
    if (selectedState) {
      const city = cities[selectedState.value].find(
        (city: Option) => city.value === key
      );
      setSelectedCity(city || null);
      setFormData({
        ...formData,
        city: city?.value || "",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSwitchChange = (name: string, value: boolean) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInput = (name: string, value: string) => {
    const numPattern = /^[0-9]{9}$/;
    const pattern =
      /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+(?: [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+)*$/;
    return name === "phone" ? numPattern.test(value) : pattern.test(value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const isNameValid = validateInput("name", formData.name);
    const isLastNameValid = validateInput("name", formData.lastName);
    const isPhoneValid = validateInput("phone", formData.phone);

    setFormErrors({
      name: !isNameValid,
      lastName: !isLastNameValid,
      phone: !isPhoneValid,
    });

    if (isNameValid && isLastNameValid && isPhoneValid) {
      const updatedUser = {
        ...userProps!,
        name: formData.name,
        lastName: formData.lastName,
        phone: formData.phone,
        showPhone: formData.showPhone,
        state: formData.state,
        city: formData.city,
      };
      updateUser(updatedUser);
      setIsEditing(false);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      try {
        //TODO: fix fetch with multiple data
        // const response = await fetchWithAuth(
        //   `${apiUrl}/users/${userProps?.id}`,
        //   {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify([
        //       JSON.stringify(user),
        //       JSON.stringify(updatedUser),
        //     ]),
        //   }
        // );
        const response = await fetchWithAuth(
          `${apiUrl}/users/${userProps?.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("User data saved", data);
        } else {
          //TODO: show error message
          console.error("Failed to save user data");
          handleCancelClick();
        }
      } catch (error) {
        console.error("Error saving user data", error);
        handleCancelClick();
      }
    }
  };

  const handleCancelClick = () => {
    setFormData({
      email: userProps?.email || "",
      name: userProps?.name || "",
      lastName: userProps?.lastName || "",
      phone: userProps?.phone || "",
      showPhone: userProps?.showPhone || false,
      state: userProps?.state || "",
      city: userProps?.city || "",
    });
    setIsEditing(false);
    setFormErrors({
      name: false,
      lastName: false,
      phone: false,
    });
  };

  const handleModalClose = (onClose: () => void) => {
    if (isEditing) handleCancelClick();
    onClose();
  };

  return (
    <>
      <Button isIconOnly onPress={onOpen} size="lg" radius="full">
        <Avatar
          showFallback
          name={userProps?.name || "None"}
          isBordered
          src={user?.picture || ""}
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        isDismissable={false}
        isKeyboardDismissDisabled
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mi Perfil
              </ModalHeader>
              <ModalBody>
                <Input
                  disabled
                  readOnly
                  label="Email"
                  value={formData.email}
                  variant="bordered"
                />
                <Input
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  isInvalid={formErrors.name}
                  errorMessage={formErrors.name ? "Invalid name" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                />
                <Input
                  label="Apellidos"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  isInvalid={formErrors.lastName}
                  errorMessage={formErrors.lastName ? "Invalid last name" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                />
                <Input
                  label="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  isInvalid={formErrors.phone}
                  errorMessage={formErrors.phone ? "Invalid phone number" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                  isRequired={isEditing}
                  isDisabled={!isEditing}
                />
                <Autocomplete
                  label="State"
                  defaultItems={states}
                  placeholder="Search State"
                  selectedKey={selectedState?.value}
                  onSelectionChange={handleStateChange}
                  variant="bordered"
                  isRequired={isEditing}
                  isDisabled={!isEditing}
                >
                  {(item: Option) => (
                    <AutocompleteItem key={item.value}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
                <Autocomplete
                  label="City"
                  defaultItems={
                    selectedState ? cities[selectedState.value] : []
                  }
                  placeholder="Search City"
                  selectedKey={selectedCity?.value}
                  onSelectionChange={handleCityChange}
                  isDisabled={!selectedState}
                  variant="bordered"
                  isRequired={isEditing}
                >
                  {(item: Option) => (
                    <AutocompleteItem key={item.value}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex justify-between items-center">
                    <span>Show Phone</span>
                    <Switch
                      isDisabled={!isEditing}
                      isSelected={formData.showPhone}
                      onValueChange={(value) =>
                        handleSwitchChange("showPhone", value)
                      }
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                {isEditing ? (
                  <>
                    <Button color="success" onPress={handleSaveClick}>
                      Save
                    </Button>
                    <Button color="warning" onPress={handleCancelClick}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button color="primary" onPress={handleEditClick}>
                    Edit
                  </Button>
                )}
                <Button
                  color="danger"
                  onPress={() => handleModalClose(onClose)}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserProfileModal;
