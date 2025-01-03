import { Children } from "react";

export default function Container({children}){
    return (
        <div>
            <h1>Pejuang Frontend Developer</h1>
            {children}
            <footer>
                <p>2024 Pejuang Frontend Developer</p>
            </footer>
        </div>
    )
}