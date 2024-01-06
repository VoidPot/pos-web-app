import React from "react";
import { Input as InputUI } from "@/components/ui/input";
import { Label as LabelUI } from "@/components/ui/label";

function Input() {
  return (
    <div className="grid gap-2 relative">
      <LabelUI htmlFor="password">Password</LabelUI>
      <InputUI id="password" type="password" />
      <p className="">Hello</p>
    </div>
  );
}

export default Input;
