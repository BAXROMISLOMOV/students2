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
    products: [
      {
        id: GetRandomId(),
        nomi: "ROG Phone",
      
      },
      {
        id: GetRandomId(),
        name: "ROG Phone 7 Ultimate",
        
        price: 1299,
      },
      {
        id: GetRandomId(),
        name: "ROG Phone 6 Pro",
      
        price: 999,
      },
      {
        id: GetRandomId(),
        name: "ROG Kunai 3 Gamepad",
        price: 149,
      },
      {
        id: GetRandomId(),
        name: "ROG Cetra II Core",
        price: 79,
      },
      {
        id: GetRandomId(),
        name: "ROG AeroActive Cooler 7",
        price: 99,
      },
      {
        id: GetRandomId(),
        name: "ROG Strix Go 2.4",
        price: 199,
      },
      {
        id: GetRandomId(),
        name: "ROG Lighting Armor Case",
        price: 59,
      },
    ],

    catigoria: [
      {
        id: GetRandomId(),
        nomi: "ROG Phone",
      },
      {
        id: GetRandomId(),
        name: "ROG Phone 7 Ultimate",

        price: 1299,
      },
      {
        id: GetRandomId(),
        name: "ROG Phone 6 Pro",

        price: 999,
      },
      {
        id: GetRandomId(),
        name: "ROG Kunai 3 Gamepad",

        price: 149,
      },
      {
        id: GetRandomId(),
        name: "ROG Cetra II Core",

        price: 79,
      },
      {
        id: GetRandomId(),
        name: "ROG AeroActive Cooler 7",
        price: 99,
      },
      {
        id: GetRandomId(),
        name: "ROG Strix Go 2.4",

        price: 199,
      },
      {
        id: GetRandomId(),
        name: "ROG Lighting Armor Case",

        price: 59,
      },
    ],
  };
});
