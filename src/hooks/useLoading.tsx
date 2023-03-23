import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        router.isReady && setIsLoading(false);
    }, [router.isReady]);

    return isLoading;
}
