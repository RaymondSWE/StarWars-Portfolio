"use client";
import React from "react";
import { CertificationCard } from "../ui/CertificationCard";
import SectionHeader from "../ui/SectionHeader";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { CertificationData } from "@/data/Certification";

export const Certification = () => {
  return (
    <section id="certifications">
      <SectionHeader
        title="Intergalactic Qualifications"
        subtitle="A constellation of certifications spanning the tech universe"
        Icon={<AcademicCapIcon />}
      />
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto mt-12">
        {CertificationData.map((certification, index) => (
          <CertificationCard
            key={index}
            id={certification.id}
            name={certification.name}
            date={certification.date}
            description={certification.description}
            CertificationLink={certification.CertificationLink}
            borderBackground={certification.borderBackground}
            backgroundImg={certification.backgroundImg}
          />
        ))}
      </div>
    </section>
  );
};
