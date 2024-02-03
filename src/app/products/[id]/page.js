
const DynamicPage = ({params, searchParams}) => {
   console.log(params, searchParams);
    return (
        <div>
            <h1 className="text-3xl">This is dynamic page  id is {params.id} </h1>
            <h2 className="text-2xl"> Search Params category is { searchParams.category}</h2> 
            <h3 className="text-xl">Search params price is {searchParams.price}</h3>
        </div>
    );
};

export default DynamicPage;