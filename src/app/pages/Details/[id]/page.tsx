
import { Hero, Productdescription, SignSection } from "@/app/components";


type ParamsType = {
  params: {
    id: string;
  }
}

export default function page({params}: ParamsType) {
 
  return (
    <div>
      <SignSection />
      <Hero />
      <div className='w-full px-[5%] lg:px-[7%]'>
        <Productdescription params={params.id} />
      </div>
      
    </div>
  );
}
