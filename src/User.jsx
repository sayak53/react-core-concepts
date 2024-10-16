export default function User({user}){
    const {name,email,id} = user
    return(
        <div>
            <h4>Id:{id}</h4>
            <h4>Name:{name}</h4>
            <h4>Email:{email}</h4>
        </div>
    )
}