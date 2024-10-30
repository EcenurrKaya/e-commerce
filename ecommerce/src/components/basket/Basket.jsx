import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice'; // Silme ve güncelleme işlemleri için import

function Basket() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity })); // Miktarı güncelle
    }
  };

  return (
    <div className=''>
      <h2 className='ml-4'>Sepetiniz</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Resmi</th>
            <th>Ürün Adı</th>
            <th>Ürün Miktarı</th>
            <th>Ürün Fiyatı</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
                <td>{item.name}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button 
                      className='border rounded-md px-2'
                      onClick={() => handleQuantityChange(item, item.quantity - 1)} // Miktarı azalt
                    >
                      -
                    </button>
                    <span className='mx-2'>{item.quantity}</span>
                    <button 
                      className='border rounded-md px-2'
                      onClick={() => handleQuantityChange(item, item.quantity + 1)} // Miktarı artır
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{item.price} $</td>
                <td>
                  <button 
                    className='border bg-black text-white rounded-md lg:w-[100px] w-[60px] py-2'
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Sepetiniz boş</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className='flex justify-end mr-6'>
        <strong>
          Toplam Tutar: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} $
        </strong>
      </div>
    </div>
  );
}

export default Basket;
