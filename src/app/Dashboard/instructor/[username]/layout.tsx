import InSidebar from "@/components/InstructorDashboardSidebar/InSidebar";
import type { Metadata } from "next"; 

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
      <InSidebar >
          {children}
      </InSidebar>
    </div>
  )
}
