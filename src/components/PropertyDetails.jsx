import {  useLoaderData, useParams} from "react-router-dom";
const PropertyDetails = () => {
    const SingleProperty = useLoaderData()
    console.log(SingleProperty)
    const {id} =useParams()
    const property= SingleProperty.find(property =>property.id === id)
    console.log(property)
  
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-2xl mx-auto my-10">
  <figure><img className="h-[600px] w-[800px]" src={property.image} alt="Album"/></figure>
  <div className="card-body w-[400px]">
    <h2 className="card-title "></h2>
    <div>
    <p className="text-3xl font-bold text-center text-slate-500">{property.estate_title}</p> 
    <p className="mt-5 text-lg font-semibold">Description : {property.description} </p>
    </div>
    
  </div>
</div>
    );
};

export default PropertyDetails;