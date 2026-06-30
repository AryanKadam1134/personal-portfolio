import React, { useEffect, useState } from "react";

import { CertificateCard } from "./CertificateCard";

import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { Certificate } from "../../types/types";

export const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await apiEndpoints.getCertificates({});
        const data = res.data?.data;

        setCertificates(data);
        console.log("Certificates: ", data);
      } catch (error) {
        console.error("Error fetching Certificates: ", error);
      }
    };

    fetchCertificates();
  }, []);

  if (!certificates?.length) return;

  return (
    <div id="certificates" className="py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Certificates" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates?.map((certificate, idx) => {
            return (
              <CertificateCard
                key={certificate._id || idx}
                certificateDetails={certificate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
