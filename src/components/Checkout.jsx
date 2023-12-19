import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "store/CartContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext)

  return <Modal>
    <form>
      <h2>Checkout</h2>
      <p>Total amount: </p>
    </form>
  </Modal>
}