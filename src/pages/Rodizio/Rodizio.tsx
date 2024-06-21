import { FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import "./Rodizio.css";
import { GrPowerCycle } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import RodizioModal from "../../components/RodizioModal/RodizioModal";
import { modalContext } from "../../context/RodizioContext";
import RodizioMain from "../../components/RodizioMain/RodizioMain";

export default function Rodizio() {
  const { setModal } = useContext(modalContext);

  const rodizios: rodizioObj[] = [
    {
      title: "Banana",
      cycle: "Weekly",
      desc: "Banana Dois",
      sectors: [
        {
          sectorManager: {
            name: "Jota",
            color: "#ff0000",
          },
          sectorTitle: "Logística",
        },
      ],
    },
    {
      title: "Banana",
      cycle: "Weekly",
      desc: "Banana Dois",
      sectors: [
        {
          sectorManager: {
            name: "Jota",
            color: "#ff0000",
          },
          sectorTitle: "Logística",
        },
      ],
    },
    {
      title: "Banana",
      cycle: "Weekly",
      desc: "Banana Dois",
      sectors: [
        {
          sectorManager: {
            name: "Jota",
            color: "#ff0000",
          },
          sectorTitle: "Logística",
        },
      ],
    },
    {
      title: "Banana",
      cycle: "Weekly",
      desc: "Banana Dois",
      sectors: [
        {
          sectorManager: {
            name: "Jota",
            color: "#ff0000",
          },
          sectorTitle: "Logística",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <section className="rodizio">
        <aside className="rodizio__sidebar">
          <article className="sidebar__team-info">
            <div className="team-info__photo"></div>
            <h5 className="team-info__name">Banana</h5>
          </article>
          <div className="sidebar__list">
            <div className="list-header">
              <h5 className="list-header__title">
                <GrPowerCycle />
                <span>Rodízios</span>
              </h5>
              <button
                className="list-header__add"
                onClick={() => setModal("add")}
              >
                <FaPlus />
              </button>
            </div>
            <div className="sidebar__list-body">
              <ul>
                {rodizios &&
                  rodizios.map((rodizio: rodizioObj, index: number) => (
                    <p
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={
                        activeIndex === index
                          ? "rodizio__name rodizio__name--active"
                          : "rodizio__name"
                      }
                    >
                      {rodizio.title}
                    </p>
                  ))}
              </ul>
            </div>
          </div>
          <div className="sidebar__footer">
            <button className="sidebar-footer__btn">
              <IoLogOutOutline />
              <span>Sair Da Equipe</span>
            </button>
            <button className="sidebar-footer__btn">
              <FaTrash />
              <span>Excluir Equipe</span>
            </button>
            <button className="sidebar-footer__btn bold">
              <FaArrowLeft />
              <span>Voltar</span>
            </button>
          </div>
        </aside>

        <section className="rodizio__main">
          <RodizioMain rodizio={rodizios[activeIndex]} />
        </section>
      </section>
      <RodizioModal rodizio={rodizios[activeIndex]} />
    </>
  );
}
