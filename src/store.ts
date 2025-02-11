import { create } from "zustand";
import {persist} from "zustand/middleware";

const useStore = create(
  persist(() => ({
      code: "",
      title: "CodeShots",
      darkMode: true,
      showBackground: true,
      language: "css",
      fontSize: 18,
      fontStyle: "Inconsolata",
      autoDetectLanguage: false,
      padding: 64,
    }),{
        name: "codeshots",
    }
))

export default useStore;