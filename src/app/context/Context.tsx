"use client";
import React, { createContext, useEffect, useState } from "react";
import datajson from "../data/data.json";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/config'


export type GlobalStateType = {
  data: DataType[];
  addToCart: (value: DataType) => void;
  shoppingCartItems: DataType[];
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  removeCartItem: (value: number) => void;
  setShoppingCartItems: React.Dispatch<React.SetStateAction<DataType[]>>;
  getFavorites: (value: DataType) => void;
  favorites: DataType[];
  categoryArray: String[];
  checked: number | null;
  handleFilter: (num: number, str: string) => void;
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  getInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
  length: number;

  setButtonInnerText: React.Dispatch<React.SetStateAction<string>>;
  setOverlay: React.Dispatch<React.SetStateAction<string>>;
  overlay: string;
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>;

 
  loggedInUser: string;
  handleChange: (value: string) => void;
  isChecked: string;
  setIsChecked: React.Dispatch<React.SetStateAction<string>>;
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
  const [shoppingCartItems, setShoppingCartItems] = useState<DataType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [favorites, setFavorites] = useState<DataType[]>([]);
  const [categoryArray, setCategoryArray] = useState<string[]>([]);
  const [checked, setChecked] = useState<number | null>(null);
  const [value, setValue] = useState<number[]>([0, 20]);
  const [search, setSearch] = useState("");
  const [buttonInnerText, setButtonInnerText] = useState("");
  const [overlay, setOverlay] = useState('')

  const [length, setLength] = useState(data.length)
  const [loggedInUser, setLoggedInUser] = useState('');

  const [isChecked, setIsChecked] = useState('')





const handleChange = (path: string) => {

  if(isChecked === path) {
    setIsChecked('')
  } else  {
    setIsChecked(path)
  }
  
}




  useEffect(() => {
    const categorySet = new Set(data.map((product) => product.category));
    setCategoryArray(Array.from(categorySet));
  }, []);

  const handleFilter = (index: number, categoryitem: string) => {
    if (checked === index) {
      setChecked(null);
      setData(typedDataJson);
    } else {
      setChecked(index);
      setData(
        typedDataJson.filter(
          (item) => item.category.toLowerCase() === categoryitem
        )
      );
    }
  };

  const getInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search && buttonInnerText.toLowerCase() === "search") {
      setData(
        typedDataJson.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
      setSearch("");
    } else {
      setData(typedDataJson);
    }
  };



  useEffect(() => {
    if (shoppingCartItems.length > 0) {
      const totalCount = shoppingCartItems.reduce(
        (acc, item) => acc + (item.count || 0),
        0
      );
      const totalPrice = shoppingCartItems.reduce(
        (acc, item) => acc + (item.count || 0) * item.price,
        0
      );
      setTotalCount(totalCount);
      setTotalPrice(totalPrice);
    } else {
      setTotalCount(0);
      setTotalPrice(0);
    }
  }, [shoppingCartItems]);

  const getFavorites = (item: DataType) => {
    setFavorites((prev) => {
      if (prev.includes(item)) {
        return prev.filter((el) => el.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

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
          ? { ...item, count: Math.max(0, (item.count || 0) - 1) }
          : item
      )
    );
  };

  const removeCartItem = (removeId: number) => {
    const updatedShoppingCart = shoppingCartItems.filter(
      (item) => item.id !== removeId
    );
    return setShoppingCartItems(updatedShoppingCart);
  };




























  return (
    <ClobalContext.Provider
      value={{
        data,
        addToCart,
        shoppingCartItems,
        totalPrice,
        setTotalPrice,
        increment,
        decrement,
        setTotalCount,
        totalCount,
        removeCartItem,
        setShoppingCartItems,
        getFavorites,
        favorites,
        categoryArray,
        checked,
        handleFilter,
        value,
        setValue,
        getInputSearch,
        handleSearch,
        search,
        setButtonInnerText,
        length,
        setOverlay, 
        overlay,
        setLoggedInUser,
        loggedInUser,
        handleChange,
        isChecked,
        setIsChecked
      }}
    >
      {children}
    </ClobalContext.Provider>
  );
};

export default Context;
