import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearUser } from '../../features/users/authSlice';
import useSWR from 'swr';
import OrderDetail from "../../components/orderdetail/Orderdetail";
import { FiUser, FiShoppingBag, FiLogOut, FiEdit, FiX } from 'react-icons/fi';


const fetcher =async (url, token) =>
  await axios
     .get(url, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((res) =>{
       return res.data
       } 
     )
     .catch((error) => {
       console.error('Error fetching data:', error);
       
     });
 const Account = () => {
   const api = 'http://localhost:5000';
   const [orderinfotoggle,setOrderinfotoggle]=useState(false);
   const [yourOrders,setYourOrders]=useState();
   const [edittoggle, setEdittoggle] = useState(false);
   const { isLogin, user } = useSelector((state) => state.auth);
   const [defaultuserdetail, setDefaultUserdetail] = useState({
     name: '',
     email: '',
     phone: '',
   });
   const dispatch = useDispatch();
   const token = localStorage.getItem('token');
  const { data, error } = useSWR(
     token && isLogin ? [`${api}/api/users/user-details`, token] : null,
     ([url, token]) => fetcher(url, token)
   );
   
   useEffect(() => {
     if(data){
     const fetchUserDetails = async () => {
       if (token) {
         try {
           setDefaultUserdetail({
             name: data.name || '',
             email: data.email || '',
             phone: data.phone || '',
           });
           setUserdetail(data);
         } catch (error) {
           console.log('Error:', error);
         }
       }
     };
     fetchUserDetails();
   }
   }, [data]);
 
   const handlelogOut = () => {
     localStorage.removeItem('token');
     dispatch(clearUser(null));
   };
 
   const [userdetail, setUserdetail] = useState(defaultuserdetail);
   const [userdetailerror, setUserdetailerror] = useState({});
   const handeleditpersonalinfo = async (e) => {
     e.preventDefault();
     if (!handelEditError()) {
       return;
     }
 
     axios
       .put(`${api}/api/users/update-user`, userdetail, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((response) => {
         setUserdetail(response.data.user);
         setDefaultUserdetail(response.data.user);
         setEdittoggle(false);
         toast.success('Edited successfully!');
       })
       .catch((error) => {
         console.log('Error:', error);
       });
   };
 
   const handelcancel = () => {
     setUserdetail(defaultuserdetail);
     setEdittoggle(false);
   };
 
   const handelEditError = () => {
     const newErrors = {};
     if (!userdetail.name) newErrors.name = 'Name is required.';
     if (!userdetail.email) {
       newErrors.email = 'Email is required.';
     } else if (!/\S+@\S+\.\S+/.test(userdetail.email)) {
       newErrors.email = 'Invalid email format.';
     }
     if (!userdetail.phone) {
       newErrors.phone = 'Phone number is required.';
     } else if (!/^\d{10}$/.test(userdetail.phone)) {
       newErrors.phone = 'Phone number must be 10 digits.';
     }
     setUserdetailerror(newErrors);
     return Object.keys(newErrors).length === 0;
   };
   useEffect(() => {
     const fetchOrders = async () => {
       try {
         const res = await axios.post(`${api}/api/order/getorders`, { userId: user.id });
         const data = res.data; // Axios automatically parses the JSON response
         setYourOrders(data.data)
       } catch (error) {
         console.error('Error fetching orders:', error);
       }
     };
 
     fetchOrders();
   }, [user.id]); 
  return (
    <div className="account-container">
      <div className="account-header">
        <div className="profile-card">
          <div className="avatar">
            {userdetail.name?.charAt(0).toUpperCase()}
          </div>
          <h2>{userdetail.name}</h2>
          <p>{userdetail.email}</p>
          <button className="logout-btn" onClick={handlelogOut}>
            <FiLogOut /> Sign Out
          </button>
        </div>
      </div>

      <div className="account-nav">
        <button 
          className={`nav-btn ${!orderinfotoggle ? 'active' : ''}`}
          onClick={() => setOrderinfotoggle(false)}
        >
          <FiUser /> Profile
        </button>
        <button
          className={`nav-btn ${orderinfotoggle ? 'active' : ''}`}
          onClick={() => setOrderinfotoggle(true)}
        >
          <FiShoppingBag /> Orders
        </button>
      </div>

      <div className="account-content">
        {!orderinfotoggle ? (
          <div className="profile-section">
            <div className="section-header">
              <h3>Personal Information</h3>
              {!edittoggle ? (
                <button className="icon-btn" onClick={() => setEdittoggle(true)}>
                  <FiEdit /> Edit
                </button>
              ) : (
                <button className="icon-btn" onClick={handelcancel}>
                  <FiX /> Cancel
                </button>
              )}
            </div>

            {!edittoggle ? (
              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name</label>
                  <p>{defaultuserdetail.name}</p>
                </div>
                <div className="info-item">
                  <label>Email Address</label>
                  <p>{defaultuserdetail.email}</p>
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  <p>{defaultuserdetail.phone || 'Not provided'}</p>
                </div>
              </div>
            ) : (
              <form className="edit-form" onSubmit={handeleditpersonalinfo}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={userdetail.name}
                    onChange={(e) => setUserdetail({...userdetail, name: e.target.value})}
                  />
                  {userdetailerror.name && <span className="error">{userdetailerror.name}</span>}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={userdetail.email}
                    onChange={(e) => setUserdetail({...userdetail, email: e.target.value})}
                  />
                  {userdetailerror.email && <span className="error">{userdetailerror.email}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={userdetail.phone}
                    onChange={(e) => setUserdetail({...userdetail, phone: e.target.value})}
                  />
                  {userdetailerror.phone && <span className="error">{userdetailerror.phone}</span>}
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">Save Changes</button>
                  <button type="button" className="cancel-btn" onClick={handelcancel}>
                    Discard Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="orders-section">
            <h3>Order History</h3>
            <OrderDetail yourOrders={yourOrders} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;