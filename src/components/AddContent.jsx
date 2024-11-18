"use client";
import { IoMdAddCircle } from "react-icons/io";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import addNew from "@/action/addnew";
import { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";

const AddContent = () => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (formData) => {
    startTransition(async () => {
      const result = await addNew(formData);

      if (result.success) {
        setIsOpen(false);
        toast({
          title: "SUCCESS",
          description: result.message,
        });
      }
    });
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DialogTrigger
        className={`bg-white flex gap-2 justify-center items-center ${buttonVariants()}`}
      >
        <IoMdAddCircle /> Add New
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new record</DialogTitle>
          <DialogDescription>Add new record to your balance</DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" name="title" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-2">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <RadioGroup
                defaultValue="income"
                className="flex items-center gap-4"
                name="type"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="income" id="r1" />
                  <Label htmlFor="r1">Income</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="expend" id="r2" />
                  <Label htmlFor="r2">Expend</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              className="col-span-3"
              required
              name="amount"
              min={0}
            />
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContent;
