import { useEffect } from "react";

export default function useWebTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}