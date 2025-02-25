import styled from "styled-components";
import { Subtitle } from "../../Global/Subtitle";
import { SectionContainer } from "../SectionContainer";

const PaymentsTableContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
`

const PaymentsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: var(--color-white);
    font-size: 14px;

    & th {
        text-align: left;
        padding: 12px;
        font-weight: bold;
    }

    & tr {
        border-bottom: 1px solid #333;
    }

    & td {
        padding: 12px;
    }
`

const TableProfessionalData = styled.td`

    & div {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    
    & div div {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 10px;
    }

    & div div img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const TableTitleData = styled.td`

    & div {
        cursor: pointer;
        min-width: 150px;
    }
`

const TablePayBtnData = styled.td`

    & div {
        cursor: pointer;
        color: var(--color-sky-1);
        text-decoration: underline;
    }
`

const TableStatusData = styled.td`
    min-width: max-content;

    & div {
        border-radius: 10px;
        width: 100px;
        text-align: center;
        padding: 10px 20px;
    }
`

const TableActionData = styled.td`

    & div {
        cursor: pointer;
    }

    &  div img {
        width: 18px;
        filter: invert(1)
    }
`

const PaymentsHistoric = () => {
    return (
        <main>
            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Histórico de Pagamentos
                </Subtitle>
                <br />

                <PaymentsTableContainer>

                    <PaymentsTable>
                        <thead>
                            <tr>
                                <th>Profissional</th>
                                <th>Projeto</th>
                                <th>Valor</th>
                                <th>Forma de pagto.</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableProfessionalData>
                                    <div>
                                        <div>
                                            <img src="/img/user.jpg" alt="Foto do profissional" />
                                        </div>
                                        Rafael Pequino
                                    </div>
                                </TableProfessionalData>

                                <TableTitleData>
                                    <div>
                                        Título do projeto
                                    </div>
                                </TableTitleData>

                                <td>R$2000</td>

                                <TablePayBtnData>
                                    <div>
                                        Pagar
                                    </div>
                                </TablePayBtnData>

                                <td>-</td>

                                <TableStatusData>
                                    <div style={{ backgroundColor: '#D99619' }}>
                                        Pendente
                                    </div>
                                </TableStatusData>


                                <TableActionData title="Realizar pagamento">
                                    <div>
                                        <img src="/img/icons/cifra.svg" alt="Ícone de sifrão" />
                                    </div>
                                </TableActionData>

                            </tr>

                            <tr>
                                <TableProfessionalData>
                                    <div>
                                        <div>
                                            <img src="/img/project.jpg" alt="Foto do profissional" />
                                        </div>
                                        Fulano da Silva
                                    </div>
                                </TableProfessionalData>

                                <TableTitleData>
                                    <div>
                                        Projeto muito legal 2
                                    </div>
                                </TableTitleData>

                                <td>R$1500</td>
                                <td>Pix</td>
                                <td>10/02/2025</td>

                                <TableStatusData>
                                    <div style={{ backgroundColor: '#2BB011' }}>
                                        Pago
                                    </div>
                                </TableStatusData>

                                <TableActionData title="Baixar recibo">
                                    <div>
                                        <img src="/img/icons/paper.svg" alt="Ícone de documento" />
                                    </div>
                                </TableActionData>
                            </tr>
                        </tbody>
                    </PaymentsTable>
                </PaymentsTableContainer>
            </SectionContainer>
            <br />
        </main>
    )
}

export default PaymentsHistoric;