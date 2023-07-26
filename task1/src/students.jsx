import "./App.css"
const students = [
    {
        names: "Zahraa",
        attendice: true
    },
    {
        names: "Ula",
        attendice: true
    },
    {
        names: "Mais",
        attendice: false
    },
    
];
 function Students() {
    {st_name.map((std)=>{
        if(std.attendice===true){
            return
            <ul>
                <h1>They're here</h1>
                <li className="True">{names.std}</li>
            </ul>
        }
            else{
                return <ul>
                    <h1>They're Not here</h1>
                    <li className="Flase">{names.std}</li>
                </ul>
    
            }
        })
    }

}

  
export default Students;
