type Dimention = {
  width: string
  height: string
}

export const IconBuilding = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-building-community"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5"
    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
    <path d="M13 7l0 .01" />
    <path d="M17 7l0 .01" />
    <path d="M17 11l0 .01" />
    <path d="M17 15l0 .01" />
  </svg>
)

export const IconStripe = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-stripe"
    width={width} height={height} viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807z" />
  </svg>
)

export const IconReceipt = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-receipt"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
  </svg>
)

export const IconCircleMinus = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-minus"
    width={width} height={height} viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l6 0" />
  </svg>
)

export const IconCheck = ({ width, height }: Dimention) => (
  <svg className="" aria-hidden="true"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
  </svg>
)

export const IconDownload = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-download"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <path d="M7 11l5 5l5 -5" />
    <path d="M12 4l0 12" />
  </svg>
)

export const IconCreditCardPay = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-credit-card-pay"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
    <path d="M3 10h18" />
    <path d="M16 19h6" />
    <path d="M19 16l3 3l-3 3" />
    <path d="M7.005 15h.005" />
    <path d="M11 15h2" />
  </svg>
)

export const IconShoppingCartCheck = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-shopping-cart-check"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M11.5 17h-5.5v-14h-2" />
    <path d="M6 5l14 1l-1 7h-13" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
)

export const IconSettings = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-settings"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>
)

export const IconShoppingCartOff = ({ width, height }: Dimention) =>
(
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-off" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 17a2 2 0 1 0 2 2" />
    <path d="M17 17h-11v-11" />
    <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
    <path d="M3 3l18 18" />
  </svg>
)

export const IconShoppingCart = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-shopping-cart"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 17h-11v-14h-2" />
    <path d="M6 5l14 1l-1 7h-13" />
  </svg>
)

export const IconLinkedin = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-linkedin"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
)

export const IconInstagram = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-instagram"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M16.5 7.5l0 .01" />
  </svg>
)

export const IconGithub = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
)

export const IconArrowRightFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-right-filled"
    width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" strokeWidth="0" fill="currentColor" />
  </svg>
)

export const IconArrowLeftFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-left-filled"
    width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor" />
  </svg>
)

export const IconURL = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circles-relation mr-2"
    width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
    <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
  </svg>
)

export const IconRoundedPlus = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-square-rounded-plus"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
    <path d="M15 12h-6"></path>
    <path d="M12 9v6"></path>
  </svg>
)

export const IconPlus = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    // strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </svg>
)

export const IconX = ({ width, height }: Dimention) => (
  <svg
    aria-hidden="true"
    className="btn-close"
    fill="currentColor"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  ><path
    fill-rule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clip-rule="evenodd"></path></svg>
)
export const IconUserEdit = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-user-edit"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
    fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
    <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
  </svg>
)

export const IconHome = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-home-2"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
    <path d="M10 12h4v4h-4z"></path>
  </svg>
)
export const IconCertificate = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-certificate-2"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M10 7h4"></path>
    <path d="M10 18v4l2 -1l2 1v-4"></path>
    <path
      d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2"
    ></path>
  </svg>
)
export const IconInfoCircle = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-info-circle"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 9h.01"></path>
    <path d="M11 12h1v4h1"></path>
  </svg>
)
export const IconUserCircle = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-user-circle"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
    ></path>
  </svg>
)

export const IconTrash = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-trash"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5"
    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
)

export const IconBrandTelegram = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-telegram"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
  </svg>
)

export const IconCoin = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-coin mr-2"
    width={width} height={height} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
    fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
    <path d="M12 7v10"></path>
  </svg>
)

export const IconEyeFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye-filled stroke-current"
    width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth="0" fill="currentColor" />
  </svg>
)

export const IconEye = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path
      d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
    ></path>
  </svg>
)

export const IconEmailFilled = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-mail-filled"
    width={width} height={height}
    viewBox="0 0 24 24" strokeWidth="1.5" stroke="" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" strokeWidth="0" fill="currentColor" />
    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" strokeWidth="0" fill="currentColor" />
  </svg>
)

export const IconSearch = () => (
  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
  </svg>
)

export const IconLogout = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-logout"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
    <path d="M9 12h12l-3 -3" />
    <path d="M18 15l3 -3" />
  </svg>
)

export const IconCirclePlus = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-plus"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
)

export const IconExpand = () => (
  <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"></path>
  </svg>
)

export const IconImageAlt = () => (
  <svg
    className="w-10 h-10 text-gray-200 dark:text-gray-600"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
  >
    <path
      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
    ></path>
  </svg>
)

export const IconGoBack = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
</svg>
)

export const IconAirBallon = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-air-balloon rounded-full"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M10 19m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
    ></path>
    <path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8z"
    ></path>
    <path d="M12 9m-2 0a2 7 0 1 0 4 0a2 7 0 1 0 -4 0"></path>
  </svg>
)

export const IconTemplate = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-template mb-3 mx-auto rounded-full border-slate-700 dark:border-white border-2 p-3"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"
    ></path>
    <path
      d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
    ></path>
    <path d="M14 12l6 0"></path>
    <path d="M14 16l6 0"></path>
    <path d="M14 20l6 0"></path>
  </svg>
)

export const IconArrowUpFilled = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-up-filled"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
      strokeWidth="0"
      fill="currentColor"></path>
  </svg>
)

export const IconArrowLeft = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-left"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24V24H0z" fill="none"></path>
    <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
    <path d="M8 12l4 4"></path>
    <path d="M8 12h8"></path>
    <path d="M12 8l-4 4"></path>
  </svg>
)

export const IconArrowUp = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-up stroke-current"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 8l-4 4"></path>
    <path d="M12 8v8"></path>
    <path d="M16 12l-4 -4"></path>
  </svg>
)

export const IconArrowDown = ({ width, height }: Dimention) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-down stroke-current"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M8 12l4 4"></path>
    <path d="M12 8v8"></path>
    <path d="M16 12l-4 4"></path>
  </svg>
)

export const IconClose = () => (
  <svg
    width="12"
    height="12"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
  </svg>
);


export const IconFilterAdd = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-filter-plus stroke-current"
    width={width} height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5" fill="none"
    strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
)

export const IconFilterClear = ({ width, height }: Dimention) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-filter-cancel stroke-current"
    width={width} height={height} viewBox="0 0 24 24"
    strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
    <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M17 21l4 -4" />
  </svg>
)

