"use client";

import { Button } from "@/components/ui/button";

type ErrorProps = {
  msg?: string;
};

export default function Error({ msg }: ErrorProps) {
  return (
    <main className={"container mx-auto px-4 py-6"}>
      <div
        className={
          "flex flex-col gap-4 border items-center justify-center p-8 w-fit mx-auto rounded-xl"
        }
      >
        <span className={"text-center text-destructive text-2xl font-normal"}>
          {msg || "An error occurred."}
        </span>
        <Button
          size={"lg"}
          variant={"outline"}
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </Button>
      </div>
    </main>
  );
}
