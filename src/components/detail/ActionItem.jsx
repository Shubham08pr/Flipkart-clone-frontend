import { useState } from "react";
import { Box, Button, styled } from "@mui/material";

import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "30px 0 0 80px",
  marginRight: "20px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "90%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  fontSize: "13px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
    fontSize: "11px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
    fontSize: "13px",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    // setquantity(quantity + 1);
    dispatch(addToCart(id, quantity));
    navigate("/Cart");
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="detail-image" />
      </Box>
      <StyledButton
        variant="contained"
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to cart
      </StyledButton>
      <StyledButton
        variant="contained"
        // onClick={() => buyNow()}
        style={{ background: "#fb541b" }}
      >
        <Flash />
        Buy now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
