import { User } from "@/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserResult = ({ user }: { user: User }) => {
  return (
    <div className="w-full flex items-center justify-between p-5 dark:bg-[#000313] border border-slate-200 dark:border-slate-900 rounded-lg mb-1">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="font-bold">{user.name}</p>
          <p className="text-xs">{user.professionalHeadline}</p>
        </div>
      </div>
      <Link href={`http://torre.ai/${user.username}`} target="_blank">
        <ExternalLink />
      </Link>
    </div>
  );
};

export default UserResult;
