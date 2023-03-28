

const Footer = () => {

    return (
        <div className="row sm:h-48 justify-center bg-gray-900 centrar" style={{ marginTop: "100px" }}>
            <div className="col-5 col-sm-3 centrar">
                <h3 className="text-white">Chess</h3>

                <ul className="list-disc">
                    <li className="text-white underline">How to play</li>
                    <li className="text-white underline">strategies</li>
                    <li className="text-white underline">Masters</li>
                    <li className="text-white underline">Ranking</li>
                </ul>

            </div>
            <div className="col-5 col-sm-3">
                <h3 className="text-white">About Us</h3>

                <ul className="list-disc">
                    <li className="text-white underline">Contact</li>
                    <li className="text-white underline">Terms</li>
                    <li className="text-white underline">Conditions</li>
                    <li className="text-white underline">Services</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer;