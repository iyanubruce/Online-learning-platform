import StudentLayout from "@/components/Student/studentLayout";
import type { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Student DashBoard",
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
      <StudentLayout >
          {children}
      </StudentLayout>
    </div>
  )
}
