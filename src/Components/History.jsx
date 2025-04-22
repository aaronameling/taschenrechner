import './History.css'

function History({history}) {

    return (
        <div className={"listContainer"}>
            <ul className={"listBox"}>
                {history.map((eintrag, index) => (
                    <li key={index}>{eintrag}</li>
                ))}
            </ul>
        </div>
    );
}

export default History;