import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5"

const SingleProperties = ({ item }) => {
    const { estate_title, id, segment_name, description, price, status, area, location, facilities, image } = item
    return (
        <div >
            <section className="h-[600px] mx-auto lg:w-[450px] border rounded-xl mt-10 relative">
                <div className="container p-6 mx-auto ">

                    <div>
                        <article className="flex flex-col ">

                            <img alt="" className="object-fill  h-[230px] w-[400px] rounded-2xl" src={image} />

                            <div className="absolute text-white translate-y-14 bg-red-700 h-9 -translate-x-4 w-44 text-center items-center text-2xl -rotate-45 bg-opacity-70 rounded-lg">{status}</div>

                            <div className="flex flex-col flex-1 mt-5">

                                <div className="flex gap-2 items-center">
                                    <p className="text-lg font-bold">Features:</p>
                                    <p className="w-[140px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium ">{facilities[0]}</p>
                                    <p className="w-[140px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{facilities[1]}</p>
                                </div>

                                <h1 className="text-lg font-semibold mt-3 px-1 flex items-center gap-1"> <IoLocationOutline /> Location : {location} </h1>

                                <h3 className="flex-1 py-2 text-[20px] font-bold ">{estate_title}</h3>
                                <p className="font-medium">  {description.slice(0, 70)}</p>


                                <div className="flex flex-wrap justify-between  text-black mt-4  font-medium">
                                    <span className="text-xl">Type : <span className="font-bold"> {segment_name}</span> </span>
                                    <p className="flex items-center justify-center gap-2  font-medium"> {price} </p>
                                </div>

                                <p className="mt-4 font-bold">Area : {area}</p>
                                <Link to={`/propertyDetails/${id}`}> <div className="mt-4"><button className="btn bg-slate-400 text-white font-semibold text-[16px]">View Property</button> </div></Link>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProperties;