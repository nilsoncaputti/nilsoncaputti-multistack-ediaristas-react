import { DiariaStatus, TextColor } from 'data/@types/DiariaInterface';

export const DiariaService = {
    getStatus(status: DiariaStatus): { label: string; color: TextColor } {
        let label = '',     color: TextColor = 'success';

        switch (status) {
            case DiariaStatus.SEM_PAGAMENTO:
                label = 'Pagamento recusado';
                color = 'error';
                break;

            case DiariaStatus.PAGO:
                label = 'Diária paga';
                break;

            case DiariaStatus.CONFIRMADO:
                label = 'Diária confirmada';
                break;

            case DiariaStatus.CONCLUIDO:
                label = 'Aguardando avaliação';
                color = 'warning';
                break;

            case DiariaStatus.CANCELADO:
                label = 'Diária cancelada';
                color = 'error';
                break;

            case DiariaStatus.AVALIADO:
                label = 'Diária avaliada';
                break;

            case DiariaStatus.TRANSFERIDO:
                label = 'Diária finalizada';
                break;
        }

        return { label, color };
    },
};