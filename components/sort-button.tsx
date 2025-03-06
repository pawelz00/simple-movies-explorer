import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type SortButtonProps = {
  sort: "asc" | "desc" | null;
  setSort: Dispatch<SetStateAction<"asc" | "desc" | null>>;
};

export default function SortButton({ sort, setSort }: SortButtonProps) {
  return (
    <Button
      variant={"outline"}
      onClick={() =>
        setSort((prev) => {
          if (!prev) return "asc";
          return prev === "asc" ? "desc" : "asc";
        })
      }
    >
      <span className={"text-sm font-normal"}>Sort</span>
      {sort === "asc" && (
        <ArrowUp className={"h-4 w-4 text-muted-foreground opacity-50"} />
      )}
      {sort === "desc" && (
        <ArrowDown className={"h-4 w-4 text-muted-foreground opacity-50"} />
      )}
      {!sort && (
        <ArrowUpDown className={"h-4 w-4 text-muted-foreground opacity-50"} />
      )}
    </Button>
  );
}
