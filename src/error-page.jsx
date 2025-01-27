import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
        };
  
    return (
      <div id="error-page" className="space-y-5 text-center">
        <h1>Oops! 404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="font-bold">
          <i>Status: {error.statusText || error.message}</i>
        </p>
        <button onClick={handleBack} className="btn bg-black text-white">Go Back</button>
      </div>
    );
  }