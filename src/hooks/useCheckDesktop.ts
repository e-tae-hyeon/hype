import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function useCheckDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  return isDesktop;
}

export default useCheckDesktop;
