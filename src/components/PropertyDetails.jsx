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
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default PropertyDetails;