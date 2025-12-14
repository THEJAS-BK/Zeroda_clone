export default function People({person,name,designation}){
   
    return(
            <div className="d-flex flex-column">
                <img className={name==="Nithin Kamath"?"FounderPhoto":"TeamPhotos"} src={person}  alt="Nithin" />
                <p style={{textAlign:"center", margin:"0",marginTop:"1rem"}}>{name}</p>
                <p style={{textAlign:"center"}}> {designation}</p>
            </div>
    )
}