import React, { memo } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Searchbar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full max-w-md flex rounded-md px-2 py-1  bg-white items-center ">
      <Search className="text-primary" />
      <Input
        placeholder="Search"
        className="placeholder:text-dark-200 text-black !ring-transparent !focus:ring-transparent  !outline-transparent !border-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default memo(Searchbar);
