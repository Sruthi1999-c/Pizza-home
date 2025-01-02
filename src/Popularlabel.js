
const Popularlabel = (Wrappedcomp)=>{
    return (props)=>(

        <div className="popular">
           
        <span className="label">🔥 Popular</span>
        <Wrappedcomp {...props}/>
      </div>
    )
}

export default Popularlabel;


