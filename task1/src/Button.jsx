
function Button() {
    return(
        <button onClick={Click_Me}>Click Me</button>
    );
}

let count = 0
function Click_Me() {
    count++;
    console.log(count);
}

export default Button;