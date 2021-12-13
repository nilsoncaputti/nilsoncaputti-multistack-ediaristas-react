import { DiariaInterface } from "data/@types/DiariaInterface";
import { DiariaContext } from "data/contexts/DiariasContext";
import useIsMobile from "data/hooks/useIsMobile";
import usePagination from "data/hooks/usePaginations.hook"; 
import { linksResolver } from "data/services/ApiService";
import { useContext } from "react";

export default function useMinhasDiarias() {
    const isMobile = useIsMobile(),
        {diariaState} = useContext(DiariaContext),
        {diarias} = diariaState,
        filterdData = diarias,
        {
            currentPage,
            setCurrentPage,
            totalPages,
            itemsPerPage
        } = usePagination(diarias, 5);

    function podeVisualizar(diaria: DiariaInterface): boolean {
        return linksResolver(diaria.links, 'self') !== undefined;
    }

    return {
        filterdData,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
        isMobile,
        podeVisualizar,
    };
}