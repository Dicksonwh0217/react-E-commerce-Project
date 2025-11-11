import { Header } from "../../components/Header";
import './NotFound.css';

export function NotFound({ cart }){
    return(
        <div className="not-found-page">
            <Header cart={ cart } />
            <h1>404 Not Found :{'('}</h1>
        </div>
    )
}