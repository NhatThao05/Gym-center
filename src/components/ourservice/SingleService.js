import { ServiceImage, Ourservice } from "../../styles/ourservice";
import ServiceMeta from "./ServiceMeta";


export default function SingleService({Service, matches}){
 return (
  <Ourservice sx={{}}>
   <ServiceImage src={Service.image} />
   <ServiceMeta Service={Service} matches={matches} />

  </Ourservice>
 )
}