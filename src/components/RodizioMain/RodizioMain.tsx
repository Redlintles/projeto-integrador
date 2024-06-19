import { LuMoreVertical } from "react-icons/lu";
import { MdOutlineWatchLater, MdOutlineCalendarMonth } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { modalContext } from "../../context/RodizioContext";

export default function RodizioMain({ rodizio }: RodizioMainProps) {
  const { setModal } = useContext(modalContext);
  return (
    <>
      <section className="rodizio">
        <div className="rodizio__header">
          <div className="rodizio-header__left">
            <h2 className="rodizio__title">{rodizio.title}</h2>
            <button onClick={() => setModal("edit")}>
              <LuMoreVertical />
            </button>
          </div>
          <div className="rodizio-header__right">
            <button>
              <div className="circle">AL</div>
            </button>
          </div>
        </div>
        <div className="rodizio__cycle">
          <h3 className="cycle">
            <MdOutlineWatchLater /> Ciclo {rodizio.cycle}
          </h3>
          <p className="rodizio__desc">{rodizio.desc}</p>
        </div>
        <div>
          <table>
            <tr>
              <th>
                <TbListCheck /> Tarefa
              </th>
              <th>
                <AiOutlineUser /> Responsável
              </th>
              <th>
                <MdOutlineCalendarMonth /> 01 | 02 | 2024
              </th>
            </tr>
            {rodizio.sectors &&
              rodizio.sectors.map((item) => (
                <tr>
                  <td>{item.sectorTitle}</td>
                  <td>
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
