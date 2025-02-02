import { Suspense } from "react";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

export default IconWrapper;