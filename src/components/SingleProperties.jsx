import { Link } from "react-router-dom";


const SingleProperties = ({item}) => {
    const {estate_title,id, segment_name, description, price, status, area, location, facilities, image } = item
    return (
        <div >
                      <section className="h-[600px] mx-auto lg:w-[374px] border rounded-xl">
	<div className="container p-6 mx-auto ">
	
		<div>
			<article className="flex flex-col ">
				
					<img  alt="" className="object-fill  h-[230px] w-[326px] rounded-2xl" src={image} />
			
				<div className="flex flex-col flex-1 mt-7">
					
				<div className="flex gap-6">
                <p className="w-[130px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{facilities[0]}</p>
					<p className="w-[125px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{facilities[1]}</p>
                </div>

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