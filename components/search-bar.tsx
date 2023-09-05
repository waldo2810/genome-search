"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { Input } from "./ui/input";
import UserResult from "./user-result";
import { User } from "@/types";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${origin}/api/users?query=${query}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data); // Set users state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type a name to search"
        className="mb-5"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-y-scroll w-full h-[300px] md:h-[500px]">
          {users.map((user) => (
            <UserResult user={user} key={user.ggId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
