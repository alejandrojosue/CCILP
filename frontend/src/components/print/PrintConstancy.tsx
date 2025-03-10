import { useConfig } from "../../hooks/useConfig";
import type { Empresa } from "../../types/types";
import Loading from "../Loading";
import "./style.css"
import { useEffect, useState } from "react";

const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function PrintConstancy() {
    const { config, loading, error, get } = useConfig();
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [title, setTitle] = useState('');
    const [params, setParams] = useState(null);

    const handlePrint = () => {
        window.print()
    }

    useEffect(() => {
        get()
        // Obtener los parámetros de la URL
        const data = JSON.parse(localStorage.getItem('constancy') ?? '{}');
        setEmpresas(data.companies);
        setTitle(data.title);
        const urlParams = new URLSearchParams(window.location.search);
        const constancyID = urlParams.get('constancyID')?.toUpperCase();
        //@ts-ignore
        setParams({ constancyID });
    }, []);
    if (error?.message) {
        return <p style={{ fontWeight: 'bold', color: 'red' }}>{error.message}</p>
    }
    if (loading) return <h1>Loading...</h1>
    return (
        <>
            {
                empresas.length && empresas.map((empresa, index) => (
                    <div className="document">
                        <header>
                            <div className="logo">
                                <img src="/assets/CCILP.jpg" alt="Logo Cámara de Comercio" />
                            </div>
                            <div className="title">
                                <h2>CÁMARA DE COMERCIO E INDUSTRIAS DE LA PAZ</h2>
                                <h3>"Fortaleciendo, Gestionando y Fomentando la Libre Empresa"</h3>
                                <p>Afiliados a la:<br />Federación de Cámaras de Comercio e Industrias de Honduras (FEDECAMARA)</p>
                            </div>
                        </header>
                        <aside>
                            <section className="content">
                                {/* @ts-ignore */}
                                <h2>CONSTANCIA DE {title}</h2>
                                <p>El Suscrito Director Ejecutivo de la Cámara de Comercio e Industrias de La Paz (CCILP), por medio de la presente
                                    {/* @ts-ignore */}
                                    <b> HACE CONSTAR QUE:</b> La Empresa o Negocio: <b><u>**{empresa.NombreEmpresa?.trim()?.toLocaleUpperCase()}**</u> </b>
                                    {/* @ts-ignore */}
                                    y Nombre Comercial: <b><u>**{empresa.NombreComercial?.trim()?.toLocaleUpperCase()}**</u> </b>
                                    {/* {params?.title === 'REGISTRO' ? <> </> : ' '} */}
                                    {/* @ts-ignore */}
                                    {params?.title === 'RENOVACIÓN DE REGISTRO' ? ' hizo Renovación de Registro según Artículo 31 de la Ley de Cámaras de Comercio, ' : ''}
                                    {/* @ts-ignore */}
                                    se encuentra Registrada {title === 'SOLVENCIA' ? ' y Afiliada ' : ''} en esta Cámara de Comercio, Bajo el Registro {(empresa.denominacion + '').substring(1, 3)}-{empresa.NumeroRegistro ?? ''}, Folio {empresa.FOLIO ?? ''}, Tomo {empresa.TOMO ?? ''}.
                                    {/* @ts-ignore */}
                                    <br />Razón Social o Denominación:<br /><b>{empresa.denominacion ?? ''}</b>
                                    {/* {params?.title === 'REGISTRO' ? <> 
                             </> : ''} */}
                                    <br />
                                    {/* @ts-ignore */}
                                    Con RTN No. {empresa.RTN} {title === 'SOLVENCIA' ? 'está Solvente en el Pago de sus Obligaciones,' : ''} siendo su Gerente, Propietario o Representante Legal <b><u>{(empresa.NombreRepresentante.trim()?.toLocaleUpperCase())}</u></b>.</p>
                                <br />
                                <p>Y, para los fines que al interesado (a) estime conveniente se le extiende la presente en la ciudad de La Paz, departamento de La Paz, a los {(new Date()).getDate()} días del mes de {months[new Date().getMonth()]} del {new Date().getFullYear()}.</p>
                            </section>
                        </aside>
                        <footer>
                            <section className="signature">
                                <p>&nbsp;</p>
                                <p></p>
                                <p><h3>{config?.Director.trim()}</h3>Director Ejecutivo</p>
                            </section>
                            <p className="law"><strong>Ley de Cámaras de Comercio e Industrias de Honduras, Artículo #31: </strong>Los Registros se renovarán obligatoriamente todos los años terminados en cero (0) y en cinco (5).</p>
                            <p className="validity">**VALIDA HASTA EL 31 DE DICIEMBRE DEL {(new Date()).getFullYear()}**</p>
                            {/* @ts-ignore */}
                            <p className="constancia">CONSTANCIA No. {params?.constancyID}</p>
                            <section>
                                <div className="social">
                                    Síguenos en:
                                    <div className="social-images">
                                        <img src="/assets/WhatsApp.png" alt="whatsapp ccilp" />
                                        <img src="/assets/facebook.png" alt="facebook ccilp" />
                                        <img src="/assets/instagram.png" alt="instagram ccilp" />
                                    </div>
                                </div>
                                <p className="contact">{config?.Direccion.trim()}
                                    <br />Teléfono: {config?.Telefonos.trim()} &nbsp;&nbsp;Correo Electrónico: {config?.CorreosElectronicos.trim()}
                                    <br />Bolsa de Empleo: bolsaempleoccilp@gmail.com &nbsp;&nbsp;Página Web: {config?.Website.trim()}
                                </p>
                            </section>
                        </footer>
                    </div>
                ))
            }
            <button id="btnPrint" onClick={handlePrint}>Imprimir</button>
        </>
    )
}