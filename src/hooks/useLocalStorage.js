import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(defaultValue);

    const storageValue = window.localStorage.getItem(key);
    let value = storageValue ? JSON.parse(storageValue) : state;

    const setValue = val => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return [value, setValue];
}