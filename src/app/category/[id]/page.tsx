import CategoryList from "@/components/category/Category";

async function GetAllListsByCategory(getId : string) {
    const res = await fetch(`${process.env.URL}/api/category?categoryID=${getId}`, {
        method: "GET",
        cache: "no-store"
    })
    const data = await res.json();

    if(data.success) return data.data
    
}



export default async function Category({params} : {params: any}) {
    const {id} = params;
    const getAllList = await GetAllListsByCategory(id);
    
    return (
        <div>
            <CategoryList list={getAllList}/>
        </div>
    )
}