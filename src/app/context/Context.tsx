"use client";
import React, { createContext, useEffect, useState } from "react";
import datajson from "../data/data.json";
import { CartItem } from "../components";

export type GlobalStateType = {
  data: DataType[];
  length: number;
  addToCart: (value: DataType) => void;
  shoppingCartItems: DataType[];
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
  increment: (value: number) => void;
  decrement: (value: number) => void;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  removeCartItem: (value: number) => void;
  setShoppingCartItems: React.Dispatch<React.SetStateAction<DataType[]>>;
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
  count?: number;
};

export const typedDataJson = datajson as DataType[];

export const ClobalContext = createContext<GlobalStateType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataType[]>(typedDataJson);
  const [length, setLength] = useState(0);
  const [shoppingCartItems, setShoppingCartItems] = useState<DataType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  // const [favorites, setFavorites] = useState([])


    

  useEffect(() => {
    setLength(data.length);
 
  }, []);

  useEffect(() => {
    if (shoppingCartItems.length > 0) {
      const totalCount = shoppingCartItems.reduce((acc, item) => acc + (item.count || 0), 0);
      const totalPrice = shoppingCartItems.reduce((acc, item) => acc + ((item.count || 0) * item.price), 0);
      setTotalCount(totalCount);
      setTotalPrice(totalPrice);
    } else {
      setTotalCount(0);
      setTotalPrice(0);
    }
  }, [shoppingCartItems]);













 
  const addToCart = (productItem: DataType) => {
    if (!productItem) return;
  
    const isInCart = shoppingCartItems?.some(
      (item) => item.id === productItem.id
    );
  
    if (isInCart) {
      setShoppingCartItems((prev) => {
        return prev;
      });
    } else {
      setShoppingCartItems((prev) => {
        const newItem = { ...productItem, count: 1 };
        if (!prev) return [newItem];
        return [...prev, newItem];
      });
    }
  };
  

  const increment = (countPlusId: number) => {
    setShoppingCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === countPlusId
          ? { ...item, count: (item.count || 0) + 1 }
          : item
      )
    );
  };



  const decrement = (countMinusId: number) => {
    setShoppingCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === countMinusId
        ? {...item, count: Math.max(0, (item.count || 0) - 1) }
        : item
      )
    );
  };
  

  const removeCartItem = (removeId: number) => {
    const updatedShoppingCart = shoppingCartItems.filter((item) => item.id !== removeId)
    console.log(updatedShoppingCart)

     return setShoppingCartItems(updatedShoppingCart)

  }
 












  return (
    <ClobalContext.Provider
      value={{
        data,
        length,
        addToCart,
        shoppingCartItems,
        totalPrice,
        setTotalPrice,
        increment,
        decrement,
        setTotalCount,
        totalCount,
        removeCartItem,
        setShoppingCartItems
      }}
    >
      {children}
    </ClobalContext.Provider>
  );
};

export default Context;
