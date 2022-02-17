import { useEffect } from "react";

export default function useInputFocus(
  prevState: string[] | undefined,
  state: string[],
  container: React.RefObject<HTMLElement>,
) {
  useEffect(() => {
    if (prevState && prevState.length < state.length) {
      if (container.current && (container.current.firstChild as HTMLElement)) {
        (container.current.firstChild as HTMLElement).focus();
      }
    }
  }, [prevState, state, container]);
}
