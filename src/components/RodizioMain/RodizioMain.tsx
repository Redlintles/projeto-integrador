import { LuMoreVertical } from "react-icons/lu";
import { MdWatchLater, MdOutlineCalendarMonth } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { modalContext } from "../../context/RodizioContext";

export default function RodizioMain({ rodizio }: RodizioMainProps) {
  const { setModal } = useContext(modalContext);
  return (
    <>
      <section className="rodizio__main">
        <div className="main__header">
          <div className="main-header__left">
            <h2 className="main__title">{rodizio.title}</h2>
            <button
              onClick={() => setModal("edit")}
              className="main-header__btn"
            >
              <LuMoreVertical />
            </button>
          </div>
          <div className="main-header__right">
            <button>
              <div
                className="circle main-header__user-icon"
                style={{ backgroundColor: "deepskyblue" }}
              >
                AL
              </div>
            </button>
          </div>
        </div>
        <div className="main__cycle">
          <span className="cycle__icon">
            <MdWatchLater />
          </span>
          <div className="cycle__text">
            <h4>Ciclo {rodizio.cycle}</h4>
            <p className="main__desc">{rodizio.desc}</p>
          </div>
        </div>
        <div>
          <table className="main__table">
            <tr className="main-table__head">
              <th className="main-table__heading">
                <TbListCheck /> <span>Tarefa</span>
              </th>
              <th className="main-table__heading">
                <AiOutlineUser /> <span>Responsável</span>
              </th>
              <th className="main-table__heading">
                <MdOutlineCalendarMonth /> <span>01 | 02 | 2024</span>
              </th>
            </tr>
            {rodizio.sectors &&
              rodizio.sectors.map((item) => (
                <tr className="main-table__row">
                  <td className="main-table__data main-table__sector-title">
                    {item.sectorTitle}
                  </td>
                  <td className="main-table__data main-table__manager">
                    <div
                      className="circle"
                      style={{ backgroundColor: item.sectorManager.color }}
                    ></div>
                    <span>{item.sectorManager.name}</span>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </section>
    </>
  );
}
