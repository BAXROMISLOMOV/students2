import { create } from "zustand";
import { GlobalStoreType } from "./store.type";
import { GetRandomId } from "../Math/math";

export const useGlobalStore = create<GlobalStoreType>(() => {
  return {
    students: [
      {
        id: GetRandomId(),
        firstName: "Bxarom",
        lastName: "islomov",
        age: 18,
        gender: "male",
        active: true,
         
      },
    ],
    groups: [
      {
        id: GetRandomId(),
        name: "Guruh 1",
        students_count: 0,
        active: true,
      },
      {
        id: GetRandomId(),
        name: "Guruh 2",
        students_count: 0,
        active: false,
      },
    ],
  };
});
