import { Suspense } from "react";

export default function AddPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<></>}>{children}</Suspense>;
}
