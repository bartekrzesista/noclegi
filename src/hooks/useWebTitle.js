import { useEffect } from "react";

export default function useWebTitle(title) {
    const setTitle = newTitle => {
        document.title = newTitle;
    };

    useEffect(() => {
        if(title) {
            document.title = title;
        }
    }, [title]);

    return setTitle;
}