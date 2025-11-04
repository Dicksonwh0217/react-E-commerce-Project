import { Header } from "../components/Header";
import './NotFound.css';

export function NotFound(){
    return(
        <div className="not-found-page">
            <Header />
            <h1>404 Not Found :{'('}</h1>
        </div>
    )
}