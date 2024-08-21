import type { Metadata } from "next";
import DLayout from "@/components/dashLayout/DashLayout"; 

export const metadata: Metadata = {
  title: "Online Learning Platform",
  description: "Online Learning Platform",
};

import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="bg-bgColor">
        <DLayout >
        {children}
        </DLayout >
    </div>
  )
}
