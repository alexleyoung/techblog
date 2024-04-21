"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import logout from "@/actions/logout";

const signoutbtn = () => {
  return <Button onClick={() => logout}>sign out</Button>;
};

export default signoutbtn;
