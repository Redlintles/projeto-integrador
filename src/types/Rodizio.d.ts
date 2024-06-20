interface sectorManager {
  color: string;
  name: string;
}

interface rodizioSector {
  sectorTitle: string;
  sectorManager: sectorManager;
}

interface rodizioObj {
  title: string;
  cycle: string;
  desc: string;
  sectors: rodizioSector[];
}

interface RodizioMainProps {
  rodizio: rodizioObj;
}

interface RodizioModalProps {
  rodizio: rodizioObj;
}

type modalType = "" | "add" | "edit";
interface modalContext {
  modal: modalType;
  setModal: React.Dispatch<React.SetStateAction<modalType>>;
}
