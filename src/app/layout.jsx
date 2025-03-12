import "./globals.css"


export default function Layout({ children }) {



    return (
        <html className="scroll-smooth">
            <body>

                {children}

            </body>
        </html>
    );
}