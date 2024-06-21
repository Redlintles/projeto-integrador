import { FaX } from "react-icons/fa6";
import RodizioModalAdd from "./RodizioModalAdd";
import RodizioModalEdit from "./RodizioModalEdit";
import { modalContext } from "../../context/RodizioContext";
import { useContext } from "react";
import "./RodizioModal.css";
export default function RodizioModal({ rodizio }: RodizioModalProps) {
  const { modal, setModal } = useContext(modalContext);
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <button className="modal__close-btn" onClick={() => setModal("")}>
                <FaX />
              </button>
            </div>
            <div className="modal__body">
              {modal === "add" ? (
                <RodizioModalAdd />
              ) : (
                <RodizioModalEdit rodizio={rodizio} />
              )}
            </div>

            <div className="modal__footer">
              <button
                className="modal__btn"
                onClick={() => {
                  setModal("");
                }}
              >
                {modal === "add" ? "Criar" : "Salvar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
