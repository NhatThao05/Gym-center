import { Typography } from "@mui/material";
import { ServiceMetaWrapper } from "../../styles/ourservice";


export default function ServiceMeta({Service, matches}){
 return (
  <ServiceMetaWrapper>
   <Typography variant={matches ? "h6" : 'h4'} lineHeight={2}>{Service.name}</Typography>
  </ServiceMetaWrapper>
 )
}