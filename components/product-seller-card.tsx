import React from "react";
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import { HeartIcon } from "@/components/icons";
import UserContactData from "@/components/user-contact-data";
import { User } from "@/types";

//for testing
const defaultVendor: User = {
  id: 1,
  name: "Zoey",
  lastName: "Lang",
  email: "example@gmail.com",
  phone: "666333555",
  showPhone: false,
  profileDescription: "",
  state: "Cataluña",
  city: "Barcelona",
};

export default function ProductSellerCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <div className="flex items-center gap-4">
          <Button
            isIconOnly
            className="text-default-900/60 bg-foreground/10 rounded-full"
            onPress={() => setLiked((v) => !v)}
          >
            <HeartIcon
              className={liked ? "text-red-500" : ""}
              fill={liked ? "currentColor" : "none"}
            />
          </Button>
        </div>
        <div className="flex gap-3 md:gap-5 items-center">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <h4 className="text-small font-semibold leading-none text-default-600">
            {defaultVendor.name} {defaultVendor.lastName.substring(0, 1) + "."}
          </h4>
          <UserContactData /> {/* Can receive props: userName, u */}
        </div>
      </CardHeader>
    </Card>
  );
}
