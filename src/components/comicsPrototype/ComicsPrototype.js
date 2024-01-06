

const ComicsPrototype = ({img,title,cost,id}) => {

    if (cost == 0) {
        cost = 'NOT AVAILABLE'
    }

    return (
        <li className="comicses__wrapper" key={id}>
            <img className="comicses__img" src={img} alt="comicsImg" />
            <div className="comicses__title">{title}</div>
            <div className="comicses__cost">{cost}</div>
        </li>
    )
}

export default ComicsPrototype;