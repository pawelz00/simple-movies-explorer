import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type FilterSelectProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  genres: string[];
};

export default function FilterSelect({
  filter,
  setFilter,
  genres,
}: FilterSelectProps) {
  return (
    <Select value={filter} onValueChange={setFilter}>
      <SelectTrigger className="min-w-[100px]">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {genres.map((genre) => (
            <SelectItem value={genre} key={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
