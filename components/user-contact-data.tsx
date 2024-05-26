import { useEffect, useState } from "react";
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
  name: string;
  phone: string;
  email: string;
  showPhone: boolean;
}
//TODO: format incoming phone number (add +34 and spaces)
export default function UserContactData({
  name,
  phone,
  email,
  showPhone,
}: UserContactDataProps) {
  const [formattedPhone, setFormattedPhone] = useState<string>("");

  //format phone number
  useEffect(() => {
    if (!phone.includes("+") && phone.length === 9) {
      const formattedPhone =
        "+34 " + phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
      setFormattedPhone(formattedPhone);
    } else {
      setFormattedPhone(phone);
    }
  }, [phone]);

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
                  <span className="ml-3 truncate">{name}</span>
                </div>
                <Divider />
                {showPhone && (
                  <div className="flex items-center my-2">
                    <MessageIcon />
                    <a
                      href={`tel:${formattedPhone}`}
                      className="ml-3 truncate text-blue-500 hover:underline"
                    >
                      {formattedPhone}
                    </a>
                  </div>
                )}
                {showPhone && <Divider />}
                <div className="flex items-center mt-2">
                  <MailIcon />
                  <a
                    href={`mailto:${email}`}
                    className="ml-3 truncate text-blue-500 hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
