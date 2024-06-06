"use client";
import React, { createContext, useState } from "react";
import datajson from "../data/data.json";

export type GlobalStateType = {
    data: DataType[];
};

export type RatingType = {
  rate: number;
  count: number;
};

export type DataType = {
  name: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

export const typedDataJson = datajson as DataType[];

export const ClobalContext = createContext<GlobalStateType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataType[]>(typedDataJson);

  return <ClobalContext.Provider value={{
    data,

  }}
  >{children}</ClobalContext.Provider>;
};

export default Context;
