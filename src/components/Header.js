import { useState } from "react";

function Header() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex">
                    <a className="navbar-brand" href="#">Users</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input value={name} onChange={(e) => setName(e.target.value)} className="form-control me-2" type="text" placeholder="Name" aria-label="Name" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control me-2" type="text" placeholder="Email" aria-label="Email" />
                            <button className="btn btn-outline-success" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;