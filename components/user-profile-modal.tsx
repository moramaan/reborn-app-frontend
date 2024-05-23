import React, { useState } from "react";
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
} from "@nextui-org/react";

interface UserProfileModalProps {
  user: {
    email: string;
    name: string;
    lastName: string;
    phone: string;
    showPhone: boolean;
  };
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    phone: user.phone,
    showPhone: user.showPhone,
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    lastName: false,
    phone: false,
  });

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
    const numPattern = /^[0-9]{6}$/;
    const pattern =
      /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+(?: [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+)*$/;
    return name === "phone" ? numPattern.test(value) : pattern.test(value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const isNameValid = validateInput("name", formData.name);
    const isLastNameValid = validateInput("name", formData.lastName);
    const isPhoneValid = validateInput("phone", formData.phone);

    setFormErrors({
      name: !isNameValid,
      lastName: !isLastNameValid,
      phone: !isPhoneValid,
    });

    if (isNameValid && isLastNameValid && isPhoneValid) {
      // TODO: Implement save logic here || => Save to context and/or API
      setIsEditing(false);
      user = {
        ...user,
        name: formData.name,
        lastName: formData.lastName,
        phone: formData.phone,
        showPhone: formData.showPhone,
      };
    }
  };

  const handleCancelClick = () => {
    setFormData({
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      showPhone: user.showPhone,
    });
    setIsEditing(false);
    setFormErrors({
      name: false,
      lastName: false,
      phone: false,
    });
  };

  const handleModalClose = (onClose: () => void) => {
    isEditing && handleCancelClick();
    // Close the modal
    onClose();
  };

  return (
    <>
      <Button isIconOnly onPress={onOpen} size="lg" radius="full">
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
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
                  onValueChange={(value) => {
                    handleInputChange({
                      target: { name: "name", value, type: "text" },
                    } as React.ChangeEvent<HTMLInputElement>);
                    setFormErrors({
                      ...formErrors,
                      name: !validateInput("name", value),
                    });
                  }}
                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //     setFormErrors({
                  //       ...formErrors,
                  //       name: !validateInput("name", e.target.value),
                  //     });
                  //   }}
                  isInvalid={formErrors.name}
                  errorMessage={formErrors.name ? "Invalid name" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                />
                <Input
                  label="Apellidos"
                  name="lastName"
                  value={formData.lastName}
                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //     setFormErrors({
                  //       ...formErrors,
                  //       name: !validateInput("lastName", e.target.value),
                  //     });
                  //   }}
                  onValueChange={(value) => {
                    handleInputChange({
                      target: { name: "lastName", value, type: "text" },
                    } as React.ChangeEvent<HTMLInputElement>);
                    setFormErrors({
                      ...formErrors,
                      lastName: !validateInput("lastName", value),
                    });
                  }}
                  isInvalid={formErrors.lastName}
                  errorMessage={formErrors.lastName ? "Invalid last name" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                />
                <Input
                  label="Teléfono"
                  name="phone"
                  value={formData.phone}
                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //     setFormErrors({
                  //       ...formErrors,
                  //       phone: !validateInput("phone", e.target.value),
                  //     });
                  //   }}
                  onValueChange={(value) => {
                    handleInputChange({
                      target: { name: "phone", value, type: "text" },
                    } as React.ChangeEvent<HTMLInputElement>);
                    setFormErrors({
                      ...formErrors,
                      phone: !validateInput("phone", value),
                    });
                  }}
                  isInvalid={formErrors.phone}
                  errorMessage={formErrors.phone ? "Invalid phone number" : ""}
                  variant="bordered"
                  readOnly={!isEditing}
                />
                {isEditing && (
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span>Show Phone</span>
                      <Switch
                        isSelected={formData.showPhone}
                        onValueChange={(value) =>
                          handleSwitchChange("showPhone", value)
                        }
                      />
                    </div>
                  </div>
                )}
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
