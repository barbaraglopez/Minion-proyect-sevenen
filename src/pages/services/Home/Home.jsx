import { useState, useEffect, useContext } from "react";
import { AppContext, useAuth } from "../../../context/useContext";
/* import { getAllProducts } from '../products' */
import Navbar from "../../../components/Navbar/Navbar";
import Messages from "../../../components/Menssages/Messages";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClipLoader";
import Chats from "../../../components/Chats/Chats";
import "./home.css";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";

export const Home = () => {
  const { setCard } = useContext(AppContext);

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seetError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataProducts = await getAllProducts();
        setProducts(dataProducts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        seetError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const seeDetail = (product) => {
    let cardDetail = { ...product };
    cardDetail.cantidad = 1;
    setCard(cardDetail);
    setLoading(true);
    setTimeout(() => {
      navigate("/cards");
    }, 3000);
  };

  //spinner
  if (loading)
    return (
      <ClockLoader
        color={"#2E86C1"}
        loading={loading}
        size={100}
        className="mt-24"
      />
    );

  return (
    <>
      <BurguerNav />
      <div className="homeContainer flex items-stretch max-xl:justify-center">
        <Sidebar />
        <div className="container">
          <Navbar
            imagen={"../../../../img/Chats.svg"}
            displayButtonAtras={"hidden"}
            displayButton={"hidden"}
            displayInput={"hidden"}
          />
          <div className="flex items-stretch max-xl:flex-col p-5">
            <Chats />
            <div className="max-xl:hidden w-full h-full">
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
