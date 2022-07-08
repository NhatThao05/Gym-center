import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { BannerImage, BannerUnderline } from "../../styles/banner";


export default function Baaner() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('md'));

 return (
  <>
    <BannerImage src="https://citigym.com.vn/storage/uploads/1440x630-1905x834.jpg"/>
    <BannerUnderline />
  </>
 )
}