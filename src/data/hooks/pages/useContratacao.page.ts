import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchemaService } from "data/services/FormSchemaService";
import { 
    CadastroClienteFormDataInterface, 
    LoginFormDataInterface, 
    NovaDiariaFormDataInterface, 
    PagamentoFormDataInterface
} from "data/@types/FormInterface";
import { ServicoInterface } from "data/@types/ServicoInterface";
import useSWR from "swr";
import useApi from "../useApi.hook";

export default function useContratacao() {
    useSWR('')


    const [step, setStep] = useState(1),
        [hasLogin, setHasLogin] = useState(false),
        [loginError, setLoginError] = useState(''),

        breadcrumbItems = ['Detalhes da diária', 'identificação', 'Pagamento'],
        
        serviceForm = useForm<NovaDiariaFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.address().concat(
                    FormSchemaService.detalhesServico()
                )
            ),
        }),

        clientForm = useForm<CadastroClienteFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.userData().concat(
                    FormSchemaService.newContact()
                )
            ),
        }),

        paymentForm = useForm<PagamentoFormDataInterface>({
            resolver: yupResolver(FormSchemaService.payment()),            
        }),

        loginForm = useForm<LoginFormDataInterface>({
            resolver: yupResolver(FormSchemaService.login()),
        }),

        servicos = useApi<ServicoInterface[]>('/api/servicos').data;

        function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
            console.log(data);
        }

        function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
            console.log(data);
        }

        function onLoginFormSubmit(data: LoginFormDataInterface) {
            console.log(data);
        }

        function onPaymentFormSubmit(data: PagamentoFormDataInterface) {
            console.log(data);
        }

    return {
        step, 
        setStep,    
        breadcrumbItems, 
        serviceForm, 
        clientForm,
        paymentForm,
        loginForm,
        onServiceFormSubmit,
        onClientFormSubmit,
        onPaymentFormSubmit,
        onLoginFormSubmit,
        servicos,
        hasLogin, 
        setHasLogin,
        loginError,
    };
}