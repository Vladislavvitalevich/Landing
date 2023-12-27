const Card = ({ title, text }) => {
    return (
        <div className="col-12 col-lg-6">

            <div className="card_ w-100 ">
                <p className="card_title">
                    {title}
                </p>
                <p className="card_text">
                    {text}
                </p>
            </div>
        </div>
    )
}
export default Card