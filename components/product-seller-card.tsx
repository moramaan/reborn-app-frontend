import { useState } from "react";
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import { HeartIcon } from "@/components/icons";
import UserContactData from "@/components/user-contact-data";
import { User } from "@/types";
import { useUser } from "@auth0/nextjs-auth0/client";

interface ProductSellerCardProps {
  owner: User | null;
}

export default function ProductSellerCard({ owner }: ProductSellerCardProps) {
  const [liked, setLiked] = useState(false);
  const { user } = useUser();

  console.log(`Owner: ${JSON.stringify(owner)}`);

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
            {owner
              ? `${owner.name} ${owner.lastName.substring(0, 1) + "."}`
              : ""}
          </h4>
          {owner && user && (
            <UserContactData
              name={`${owner.name} ${owner.lastName}`}
              email={owner.email}
              phone={owner.phone}
              showPhone={owner.showPhone}
            />
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
