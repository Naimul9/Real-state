import SingleProperties from "./SingleProperties";
import Slider from "./Slider";
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const catagories = useLoaderData()
    console.log(catagories)

    return (
     <div>
        <Slider></Slider>

<section>
  <h1 className="text-center mt-10 text-3xl font-bold"> Our Properties</h1>

 <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 '>
            {
                catagories.map(item=>  <SingleProperties item={item} key={item.id}> </SingleProperties> )
            }
        </div>

</section>

     </div>
    );
};

export default Home;