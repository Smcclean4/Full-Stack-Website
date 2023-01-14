import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Homeitems from "../components/Homeitems";
import { CartModal } from "../modals/CartModal";
import { useModal } from "../hooks/useModal";
import { LoadingCircle } from "../tools/LoadingCircle"
import { SearchBar } from "../containers/SearchBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../stylesheets/Home.css";

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export type CartType = {
  item: string;
  price: number;
  desc: string;
  image: string;
  quantity: number;
  type: string;
  company: string;
  category: string;
}

export interface CartInfoInterface {
  [x: string]: any;
  title: string;
  menu: CartType[];
}

const Home = () => {
  // storing dummy values of food
  const [fastfood] = useState<CartInfoInterface[]>([
    {
      title: "Bob's Burgers",
      menu: [
        {
          item: "Bacon Burger",
          price: 4.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Chili Cheese Fries",
          price: 2.85,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Jalepenos",
          price: 3.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Coke",
          price: 5.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
        {
          item: "Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Bob's Burgers",
          category: "fastfood"
        },
      ],
    },
  ]);

  const [snacks] = useState<CartInfoInterface[]>([
    {
      title: "8-11",
      menu: [
        {
          item: "Hot Cat",
          price: 9.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Wings and Tings",
          price: 7.55,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Smetzels",
          price: 2.15,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Gatorade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "8-11",
          category: "snacks"
        },
      ],
    },
  ]);

  const [finedine] = useState<CartInfoInterface[]>([
    {
      title: "Puth's Chriss",
      menu: [
        {
          item: "Ramen",
          price: 8.95,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Wonton Sushi",
          price: 3.75,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Steak and Eggs",
          price: 10.45,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Champagne",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
        {
          item: "Strawberry Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Puth's Chriss",
          category: "finedine"
        },
      ],
    },
  ]);

  const [alcohol] = useState<CartInfoInterface[]>([
    {
      title: "Johnny's Liqour",
      menu: [
        {
          item: "Crackers",
          price: 1.15,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Salami",
          price: 1.05,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Wine",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Titos Vodka",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
        {
          item: "Hennessey",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
          company: "Johnny's Liqour",
          category: "alcohol"
        },
      ],
    },
  ]);

  // getting cart from local storage
  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // store items into cart
  const [cart, setCart] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage);
  // loading state
  const [loading, setLoading] = useState(true)

  // cart modal hook
  const { isShowing, toggle } = useModal();

  // MUI
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setValue(index);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  // example username
  let username = "Carolina";

  // all categories
  const categories = [fastfood, finedine, snacks, alcohol]

  const addCart = (food: CartInfoInterface) => {
    // set cart data
    setCart([...cart, food]);
  };

  const getCartTotal = () => {
    return cart.reduce((sum: number) => sum + 1, 0);
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading)
    }
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cartFromHomeLocalStorage)
  }, [cart]);

  return (
    !loading ? (
      <div className="home-background">
        <p className="home-logo">Foodlux</p>
        {/* will be replaced with actual user */}
        <div className="dynamic-cart-username">
          <h1 className="username">Hi, {`${username}`}!</h1>
          <SearchBar data={[fastfood, finedine, snacks, alcohol]} />
          <div>
            <button className="modal-button" onClick={toggle}>
              <ShoppingCartIcon className="cart" />
              <CartModal isShowing={isShowing} hide={toggle} state={cart} origin={categories} />
            </button>
            {/* display cart count */}
            <p className="cart-count">{getCartTotal()}</p>
          </div>
        </div>
        <Box sx={{ backdropFilter: "blur(5px)", width: "90%", margin: "0 auto" }}>
          <AppBar position="static">
            <Tabs
              sx={{
                backgroundColor: "black",
                "& .MuiTabs-indicator": {
                  borderBottom: "2px solid red",
                },
              }}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="Foodlux tabs"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab
                icon={<h1>🍔</h1>}
                aria-label="fflogo"
                label="FAST FOOD"
                {...allyProps(0)}
              />
              <Tab
                icon={<h1>🍜</h1>}
                aria-label="fdlogo"
                label="FINE DINING"
                {...allyProps(1)}
              />
              <Tab
                icon={<h1>🍿</h1>}
                aria-label="snlogo"
                label="SNACKS"
                {...allyProps(2)}
              />
              <Tab
                icon={<h1>🍷</h1>}
                aria-label="alclogo"
                label="ALCOHOL"
                {...allyProps(3)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              {fastfood.map((val, idx) => {
                return (
                  <Homeitems
                    key={idx}
                    title={val.title}
                    menu={val.menu}
                    addtocart={addCart}
                  />
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {finedine.map((val, idx) => {
                return (
                  <Homeitems
                    key={idx}
                    title={val.title}
                    menu={val.menu}
                    addtocart={addCart}
                  />
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {snacks.map((val, idx) => {
                return (
                  <Homeitems
                    key={idx}
                    title={val.title}
                    menu={val.menu}
                    addtocart={addCart}
                  />
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              {alcohol.map((val, idx) => {
                return (
                  <Homeitems
                    key={idx}
                    title={val.title}
                    menu={val.menu}
                    addtocart={addCart}
                  />
                );
              })}
            </TabPanel>
          </SwipeableViews>
        </Box>
        <Outlet />
      </div>
    ) : (
      <LoadingCircle />
    )
  );
};

export default Home;

