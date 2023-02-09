import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import "../stylesheets/Cartitems.css";

const Cartitems = ({ items, additem, removeitem }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid
        container
        spacing={3}
      >
        {items?.map((item: { image: string | undefined, price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key) => {
          return (
            <div className="cart-container" key={idx}>
              <Grid item xs={4} >
                <Item>
                  <div className="cart-items">
                    <img alt="" src={item.image} className="item-images" />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div className="cart-items">
                    <li>{item.item}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <div className="cart-items">
                    <li>&#36;{item.price}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={1}>
                <Item
                  onClick={() => removeitem(idx)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "red",
                    fontSize: "1.5em",
                    padding: "5px",
                    '&:hover': {
                      cursor: "pointer",
                      backgroundColor: "whitesmoke",
                    }
                  }}
                >
                  {item.quantity === 1 ? <DeleteForeverIcon /> : <RemoveIcon />}
                </Item>
              </Grid>
              <Grid item xs={1}>
                <Item
                  sx={{
                    color: "black",
                    fontSize: "1.1em",
                    padding: "5px 5px",
                  }}
                >
                  <span>{item.quantity}</span>
                </Item>
              </Grid>
              <Grid item xs={1}>
                <Item
                  onClick={() => additem(idx)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "dodgerblue",
                    fontSize: "1.5em",
                    padding: "5px",
                    '&:hover': {
                      cursor: "pointer",
                      backgroundColor: "whitesmoke",
                    }
                  }}
                >
                  <AddIcon />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <div className="cart-items-desc">
                    <li>{item.desc}</li>
                  </div>
                </Item>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Cartitems;
