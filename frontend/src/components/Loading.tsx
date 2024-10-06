export default function Loading({isLoading}:{isLoading: boolean}) {
 return <div className={`min-vh-100 min-vw-100 position-absolute d-flex top-0 start-0 bg-dark bg-opacity-75 ${isLoading === false && 'd-none'}`}>
  <div className="spinner-border m-auto text-primary" role="status">
   <span className="visually-hidden">Loading...</span>
  </div>
 </div>
}