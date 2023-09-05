"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hooks";
import UserResult from "./user-result";

const Bookmarked = () => {
  const bookmarkedUsers = useAppSelector(
    (state) => state.bookmarkReducer.bookmarkedUsers
  );
  console.log(bookmarkedUsers);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full my-5">
          Bookmarked users
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-[70%] overflow-y-scroll border-lg"
      >
        <SheetHeader className="mb-10 top-0">
          <SheetTitle>Bookmarked</SheetTitle>
          <SheetDescription>
            {bookmarkedUsers.length === 0
              ? "You have not saved any individuals"
              : "These are your saved individuals."}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-start">
          {bookmarkedUsers.length > 0 &&
            bookmarkedUsers.map((user) => (
              <UserResult user={user} key={user.ggId} />
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Bookmarked;
