"use client";

import { bookmarkUser, removeBookmark } from "@/redux/feature/bookmarkSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { User } from "@/types";
import { Bookmark, BookmarkMinus, ExternalLink } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const UserResult = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();
  const bookmarkedUsers = useAppSelector(
    (state) => state.bookmarkReducer.bookmarkedUsers
  );

  const handleBookmark = () => {
    if (user.isBookmark) {
      dispatch(removeBookmark(user.ggId));
      toast("You have removed " + user.name + " from your bookmarks");
    } else {
      const isAlreadyBookmarked = bookmarkedUsers.some(
        (bookmarkedUser) => bookmarkedUser.ggId === user.ggId
      );
      if (isAlreadyBookmarked) {
        toast("You have already bookmarked " + user.name);
      } else {
        const updatedUser = { ...user, isBookmark: true };
        dispatch(bookmarkUser(updatedUser));
        toast.success("You have bookmarked " + user.name);
      }
      // dispatch(clearBookmarks());
    }
  };

  return (
    <div className="w-full flex items-center justify-between p-5 dark:bg-[#000313] border border-slate-200 dark:border-slate-900 rounded-lg mb-1">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="font-bold">{user.name}</p>
          <p className="text-xs">{user.professionalHeadline}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <Button size="icon" variant="ghost" onClick={handleBookmark}>
          {user.isBookmark ? (
            <BookmarkMinus className="cursor-pointer" />
          ) : (
            <Bookmark className="cursor-pointer" />
          )}
        </Button>
        <Link href={`http://torre.ai/${user.username}`} target="_blank">
          <ExternalLink />
        </Link>
      </div>
    </div>
  );
};

export default UserResult;
