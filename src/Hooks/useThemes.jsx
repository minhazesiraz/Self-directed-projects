import { useContext } from "react";
import { Donors } from "../Providers/Themes/Themes";

const useThemes = () => {
   const themes = useContext(Donors);
   return themes;
};

export default useThemes;