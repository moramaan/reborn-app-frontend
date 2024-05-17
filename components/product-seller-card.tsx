import React from "react";
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import { HeartIcon } from "@/components/icons";

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
            @zoeylang
          </h4>
          <Button
            className="font-semibold"
            color="primary"
            radius="full"
            size="sm"
          >
            Contactar
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
