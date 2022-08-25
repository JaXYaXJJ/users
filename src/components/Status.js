function Status(props) {
    return (
        <span className="badge bg-success">
            {props.type}
        </span>
    );
}

export default Status;
