import { createContext, PropsWithChildren, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const modalContext = createContext<modalContext>({
  modal: "",
  setModal: () => {},
});

export function ModalContextProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<modalType>("");
  const { Provider } = modalContext;
  return <Provider value={{ modal, setModal }}>{children}</Provider>;
}
