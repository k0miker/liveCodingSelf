
const BuggyComponent = () => {
    const user = null;
    return (
        <>
        {/* Error: cannot use "name" of null */}
        <h1>{user.name}</h1>
        </>
    )
}

export default BuggyComponent