import "./Tag.css"

function Tag({tags}) {
    if (tags === undefined || tags === null || tags === ""){
        return (
            <span>Aucun tag</span>
        );
    }
    else {
        tags = tags.map((tag, i) => {
            return (
                <span key={i} className="Tag">{tag}</span>
            );
        });
    }
    return (
        <>
            {tags}
        </>
        );
}

export default Tag;