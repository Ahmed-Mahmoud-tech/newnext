"use client";
import React from "react";
import { useRouter } from "next/navigation";
const ClientRedirect = ({ path }) => {
  const router = useRouter();
  router.push(path);
  return <></>;
};

export default ClientRedirect;
