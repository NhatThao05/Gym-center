// import { useTheme } from "@mui/material/styles"
// import { Grid, useMediaQuery } from "@mui/material";
// import { ProductsContainer } from "../../styles/product"
// import {products} from "../../data"
// import { Container } from "@mui/system";
// import SingleProduct from "./SingleProductDesktop";

// export default function Products() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down('md'));
//   const renderProduct = products.map(product => (
//     <Grid 
//       item 
//       key={product.id} 
//       display="flex" 
//       flexDirection={"column"} 
//       alignItems="center"
//     >
//       <SingleProduct product={product} matches={matches}/>
//     </Grid>
//   ))
//   return (
//     <ProductsContainer>
//       <Container>
//         <Grid 
//           container
//           justifyContent={"center"}
//           sx={{margin: '20px 4px 10px 4px'}}>
//           {renderProduct}
//         </Grid>
//       </Container>
//     </ProductsContainer>
//   )
// }

import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}