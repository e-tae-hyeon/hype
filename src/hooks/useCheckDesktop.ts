import { useMediaQuery } from "react-responsive";

function useCheckDesktop() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return isDesktop;
}

export default useCheckDesktop;
