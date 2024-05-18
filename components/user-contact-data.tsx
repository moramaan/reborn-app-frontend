import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Card,
  Divider,
  CardBody,
} from "@nextui-org/react";

import { MailIcon, PersonIcon, MessageIcon } from "@/components/icons";

interface UserContactDataProps {
  userName?: string;
  userPhone?: string;
  userEmail?: string;
}

const UserContactData: React.FC<UserContactDataProps> = ({
  userName = "Zoey Lang",
  userPhone = "+34 666 70 60 70",
  userEmail = "zoey@gmail.es",
}) => {
  return (
    <Popover backdrop="blur" placement="bottom-end" showArrow offset={10}>
      <PopoverTrigger>
        <Button
          className="font-semibold"
          color="primary"
          radius="full"
          size="sm"
        >
          Contactar
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Datos de contacto
            </p>
            <Card className="max-w-[400px] my-3">
              <CardBody>
                <div className="flex items-center mb-2">
                  <PersonIcon />
                  <span className="ml-3 truncate">{userName}</span>
                </div>
                <Divider />
                <div className="flex items-center my-2">
                  <MessageIcon />
                  <a
                    href={`tel:${userPhone}`}
                    className="ml-3 truncate text-blue-500 hover:underline"
                  >
                    {userPhone}
                  </a>
                </div>
                <Divider />
                <div className="flex items-center mt-2">
                  <MailIcon />
                  <a
                    href={`mailto:${userEmail}`}
                    className="ml-3 truncate text-blue-500 hover:underline"
                  >
                    {userEmail}
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default UserContactData;
