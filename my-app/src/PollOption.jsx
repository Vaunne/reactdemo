function PollOption({label,count, onVote}){
    return(
        <div classname="poll-option">
            <h1>{label}</h1>
            <p>VOTES: {count}</p>
            <button onClick={onVote}>Vote</button>
        </div>
    );
}

export default PollOption;