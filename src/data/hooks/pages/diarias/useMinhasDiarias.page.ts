import { mutate } from 'swr';
import { useContext, useState } from 'react';
import useIsMobile from 'data/hooks/useIsMobile';
import usePagination from 'data/hooks/usePaginations.hook';
import { DiariaContext } from 'data/contexts/DiariasContext';
import { DiariaInterface } from 'data/@types/DiariaInterface';
import { ApiServiceHateoas, linksResolver } from 'data/services/ApiService';

export default function useMinhasDiarias() {
    const isMobile = useIsMobile(),
        { diariaState } = useContext(DiariaContext),
        { diarias } = diariaState,
        filteredData = diarias,
        {
            currentPage,
            setCurrentPage,
            totalPages,
            itemsPerPage,
        } = usePagination(diarias, 5),
        [diariaConfirmar, setDiariaConfirmar] = useState({} as DiariaInterface),
        [diariaAvaliar, setDiariaAvaliar] = useState({} as DiariaInterface);

    function podeVisualizar(diaria: DiariaInterface): boolean {
        return linksResolver(diaria.links, 'self') !== undefined;
    }

    function podeConfirmar(diaria: DiariaInterface): boolean {
        return linksResolver(diaria.links, 'confirmar_diarista') !== undefined;
    }

    function podeAvaliar(diaria: DiariaInterface): boolean {
        return linksResolver(diaria.links, 'avaliar_diaria') !== undefined;
    }

    async function confirmarDiaria(diaria: DiariaInterface) {
        ApiServiceHateoas(
            diaria.links,
            'confirmar_diarista',
            async (request) => {
                try {
                    await request();
                    setDiariaConfirmar({} as DiariaInterface);
                    atualizarDiarias();
                } catch (error) { }
            }
        );
    }

    async function avaliarDiaria( diaria: DiariaInterface, avaliacao: { descricao: string; nota: number }) {
        ApiServiceHateoas(diaria.links, 'avaliar_diaria', async (request) => {
            try {
                await request({
                    data: avaliacao,
                });
                setDiariaAvaliar({} as DiariaInterface);
                atualizarDiarias();
            } catch (error) { }
        });
    }

    function atualizarDiarias() {
        mutate('lista_diarias');
    }

    return {
        filteredData,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
        isMobile,
        podeVisualizar,
        podeConfirmar,
        diariaConfirmar,
        setDiariaConfirmar,
        confirmarDiaria,
        diariaAvaliar,
        setDiariaAvaliar,
        podeAvaliar,
        avaliarDiaria,
    };
}