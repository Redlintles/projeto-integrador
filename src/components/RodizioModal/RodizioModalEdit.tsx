import { useState } from "react";
import { BsPencil } from "react-icons/bs";

export default function RodizioModalEdit({ rodizio }: RodizioModalProps) {
  const [editTitle, setEditTitle] = useState(false);

  return (
    <form>
      <form className="modal__form">
        <div>
          <h2>{rodizio.title}</h2>
          <button
            type="button"
            onClick={() =>
              setEditTitle((prev) => {
                return !prev;
              })
            }
          >
            <BsPencil />
          </button>
        </div>

        {editTitle && (
          <label>
            <span>Nome Do Rodízio</span>
            <input
              type="text"
              placeholder="Digite o nome do rodízio"
              name="name"
            />
          </label>
        )}
        <label>
          <span>Descrição</span>
          <textarea
            name="desc"
            placeholder="Digite as informações deste rodízio"
          ></textarea>
        </label>
        <label>
          <span>Tipo de Ciclo</span>
          <select name="cycle">
            <option value="monthly">Mensal(atualização a cada 30 dias)</option>
            <option value="weekly">Semanal(atualização a cada 7 dias)</option>
            <option value="yearly">Anual(atualização a cada 365 dias)</option>
          </select>
        </label>
        <label>
          <span>Data De Início</span>
          <input type="date" />
        </label>
      </form>
    </form>
  );
}
