import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserBadge({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="flex gap-2 justify-end align-middle items-center px-4">
      <div className="flex flex-col text-secondary-foreground justify-center align-middle items-end">
        <p className="text-base font-semibold ">{name}</p>
        <span className="text-sm text-slate-600">{role}</span>
      </div>
      <Avatar className="cursor-pointer select-none bg-secondary-foreground">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-secondary-foreground text-secondary">
          {name.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserBadge;
