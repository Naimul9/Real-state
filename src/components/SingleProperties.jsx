import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5"

const SingleProperties = ({item}) => {
    const {estate_title,id, segment_name, description, price, status, area, location, facilities, image } = item
    return (
        <div >
                      <section className="h-[600px] mx-auto lg:w-[374px] border rounded-xl">
	<div className="container p-6 mx-auto ">
	
		<div>
			<article className="flex flex-col ">
				
					<img  alt="" className="object-fill  h-[230px] w-[360px] rounded-2xl" src={image} />
			
				<div className="flex flex-col flex-1 mt-5">
					
				<div className="flex gap-2 items-center">
                    <p className="text-lg font-bold">Features:</p>
                <p className="w-[130px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium ">{facilities[0]}</p>
					<p className="w-[140px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{facilities[1]}</p>
                </div>

                <h1  className="text-lg font-semibold mt-3 px-1 flex items-center gap-1"> <IoLocationOutline /> Location : {location} </h1>

					<h3 className="flex-1 py-2 text-2xl font-bold ">{estate_title}</h3>
                    <p className="font-medium">By :  {description.slice(0, 160)}</p>


					<div className="flex flex-wrap justify-between  text-black mt-10  font-medium">
						<span>{segment_name} </span>
						<p className="flex items-center justify-center gap-2  font-medium"> {price} </p>
					</div>
                    <Link to={`/propertyDetails/${id}`}> <div><button className="btn bg-slate-400 text-white font-semibold text-[16px]">View Property</button> </div></Link>  
				</div>
			</article>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default SingleProperties;