import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBFooter className="bg-dark text-center text-white text-xl">
            <MDBContainer className="p-4">
                <section className="mx-2">
                    <a
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="https://www.facebook.com/kaustubhkumar2002"
                        target="_blank"
                        role="button"
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="https://www.instagram.com/_kinghkaustubh/"
                        target="_blank"
                        role="button"
                    >
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="https://www.linkedin.com/in/kaustubh-singh-19573a1a6/"
                        target="_blank"
                        role="button"
                    >
                        <MDBIcon fab icon="linkedin-in" />
                    </a>
                    <a
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="https://github.com/singh-kaustubh"
                        target="_blank"
                        role="button"
                    >
                        <MDBIcon fab icon="github" />
                    </a>
                    - Kaustubh Kumar Singh
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}
