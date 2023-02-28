import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";


export function Noteitem({ isNew, value, onClick, ...rest }) { //isNew -> para sabermos quando é para adicionar um novo item.
    return (     /* É possível passar uma propriedade dentro do componente no styled component, então diremos que o Container é uma nova propriedade*/
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}   //se o componente não for novo, será apenas leitura.
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-remove'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}                   