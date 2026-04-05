import { metadata as studioMetadata } from "next-sanity/studio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...studioMetadata,
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
