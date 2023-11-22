import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartBar, faShoppingBag, faFileSignature, faArrowUp, faChevronDown, faArrowDown, faWaveSquare, faPlusCircle, faCalendar, faCircleUser, faWallet, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PieChart from './PieChart';
import MapChart from './MapChart';
import BarChart from './BarChart';



export default function Main() {
    const [date, setDate] = useState(new Date());
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenReport, setDropdownOpenReport] = useState(false);
    const [dropdownOpenPie, setDropdownOpenPie] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDropdownReport = () => {
        setDropdownOpenReport(!dropdownOpenReport);
    };

    const toggleDropdownPie = () => {
        setDropdownOpenPie(!dropdownOpenPie);
    };

    const itemsData = [
        {
            id: 1,
            name: 'Branded T-Shirts',
            imageUrl: 'https://themes.themesbrand.com/velzon/react/default/static/media/img-1.ae90cb2d4151977bff3f.png',
            date: '24 Apr 2021',
            price: '$29.00',
            orders: 62,
            stock: 510,
            amount: '$1798',
        },
        {
            id: 2,
            name: 'One Seater Sofa',
            imageUrl: 'https://themes.themesbrand.com/velzon/react/default/static/media/img-4.96f3b0d655aa68212997.png',
            date: '24 Apr 2021',
            price: '$29.00',
            orders: 62,
            stock: 0,
            amount: '$1798',
        },
        {
            id: 3,
            name: 'Borosil Paper Cup',
            imageUrl: 'https://themes.themesbrand.com/velzon/react/default/static/media/img-3.50996c6b5349bce6789b.png',
            date: '24 Apr 2021',
            price: '$29.00',
            orders: 62,
            stock: 510,
            amount: '$1798',
        },
        {
            id: 4,
            name: 'Stillbird Helmet',
            imageUrl: 'https://themes.themesbrand.com/velzon/react/default/static/media/img-5.df1e78e39a19702de97c.png',
            date: '24 Apr 2021',
            price: '$29.00',
            orders: 62,
            stock: 510,
            amount: '$1798',
        },
        {
            id: 5,
            name: 'Bentwood Chair',
            imageUrl: 'https://themes.themesbrand.com/velzon/react/default/static/media/img-2.15d985acc4605bbe2203.png',
            date: '24 Apr 2021',
            price: '$29.00',
            orders: 62,
            stock: 0,
            amount: '$1798',
        },

    ];

    const orders = [
        {
            id: '#VZ2112',
            img: {
                src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                alt: 'Customer Avatar',
            },
            customer: 'Alex Smith', product: 'Clothes', amount: '$109.00', vendor: 'Zoetic Fashion', status: 'Paid', rating: '5(61 votes)'
        },
        {
            id: '#VZ2111',
            img: {
                src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                alt: 'Customer Avatar',
            },
            customer: 'Jansh Brown', product: 'Kitchen Storage', amount: '$149.00', vendor: 'Micro Design', status: 'Pending', rating: '4.5(61 votes)'
        },
        {
            id: '#VZ2109',
            img: {
                src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                alt: 'Customer Avatar',
            },
            customer: 'Ayaan Bowen', product: 'Bike Accessories', amount: '$215.00', vendor: 'Nesta Technologies', status: 'Paid', rating: '4.9(89 votes)'
        },
        {
            id: '#VZ2108',
            img: {
                src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                alt: 'Customer Avatar',
            },
            customer: 'Prezy Mark', product: 'Furniture', amount: '$199.00', vendor: 'Syntyce Solutions', status: 'Unpaid', rating: '4.3(47 votes)'
        },
        {
            id: '#VZ2107',
            img: {
                src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                alt: 'Customer Avatar',
            },
            customer: 'Vihan Hudda', product: 'Bags and Wallets', amount: '$330.00', vendor: 'iTest Factory', status: 'Paid', rating: '4.7(161 votes)'
        },
    ];
    const topSellingData = [
        {
            id: 1,
            name: 'iTest Factory',
            imageUrl: 'data:image/png;base64,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',
            brand: 'Oliver Tyler',
            product: 'Bags and Wallets',
            stock: 510,
            amount: '$1798',
            percent: '32%',
        },
        {
            id: 2,
            name: ' Digitech Galaxy',
            imageUrl: 'data:image/png;base64,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',
            brand: ' John Roberts',
            product: 'Watches',
            stock: 510,
            amount: '$1798',
            percent: '32%',
        },
        {
            id: 3,
            name: 'Nesta Technologies',
            imageUrl: 'data:image/png;base64,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',
            brand: 'Harley Fuller',
            product: 'Bike Accessories',
            stock: 510,
            amount: '$1798',
            percent: '32%',
        },
        {
            id: 4,
            name: 'Zoetic Fashion',
            imageUrl: 'data:image/png;base64,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',
            brand: 'James Bowen',
            product: 'Clothes',
            stock: 510,
            amount: '$1798',
            percent: '32%',
        },
        {
            id: 5,
            name: 'Meta4Systems',
            imageUrl: 'data:image/png;base64,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',
            brand: 'Zoe Dennis',
            product: 'Furniture',
            stock: 510,
            amount: '$1798',
            percent: '32%',
        },

    ];



    const onChange = (selectedDate) => {
        setDate(selectedDate);
    };
    const toggleCalendar = () => {
        setCalendarVisible(!isCalendarVisible);
    };

    return (
        <div  >
            <div className='d-flex justify-content-between topdiv'>
                <div>
                    <h5>Good Morning, Anna!</h5>
                    <p>Here's what's happening with your store today.</p>
                </div>

                <div className='d-flex mb-2'>
                    <div>
                        <div className='calendar d-flex shadow' >
                            <div className='p-2' >  01 Jan, 2023 to 31 Jan, 2023</div>
                            <div><button className='calendar-btn py-2 px-3' onClick={toggleCalendar}><FontAwesomeIcon icon={faCalendar} className='icon' /></button></div>
                        </div>
                        {isCalendarVisible && <Calendar onChange={onChange} value={date} />}
                    </div>
                    <div>
                        <button className='btn add-product'>
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <span className='px-2'>Add Product</span>
                        </button></div>
                    <div>
                        <button className='btn pulsewave'>
                            <FontAwesomeIcon icon={faWaveSquare} />
                        </button></div>
                </div>
            </div>
            <div className='row justify-content-around '>
                <div class="col-md-6 col-xl-3">
                    <div class=" card-animate card shadow">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-0">Total Earnings</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class=" text-success">
                                        <FontAwesomeIcon icon={faArrowUp} className='arrowIcon' /> <span>+16.24 %</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-end justify-content-between mt-4"><div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    <span class="counter-value" data-target="559.25"><span>$559.25k</span></span></h4>
                                <a class="text-decoration-underline text-black" href="/">View net earnings</a>
                            </div>
                                <div className='px-3 py-2 text-success dollar'>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                </div>
                            </div></div></div></div>
                <div class="col-md-6 col-xl-3">
                    <div class=" card-animate card shadow">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-0">orders</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class=" text-danger">
                                        <FontAwesomeIcon icon={faArrowDown} className='arrowIcon' /> <span>-3.57%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-end justify-content-between mt-4"><div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    <span class="counter-value" data-target="559.25"><span>36,894</span></span></h4>
                                <a class="text-decoration-underline text-black" href="/">View all orders</a>
                            </div>
                                <div className='px-3 py-2 text-primary bag'>
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                </div>
                            </div></div></div></div>
                <div class="col-md-6 col-xl-3">
                    <div class=" card-animate card shadow">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-0">customers</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class=" text-success">
                                        <FontAwesomeIcon icon={faArrowUp} className='arrowIcon' /> <span>+29.08 %</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-end justify-content-between mt-4"><div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    <span class="counter-value" data-target="559.25"><span>183.35M</span></span></h4>
                                <a class="text-decoration-underline text-black" href="/">See details</a>
                            </div>
                                <div className='px-3 py-2 text-warning user'>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </div>
                            </div></div></div></div>
                <div class="col-md-6 col-xl-3">
                    <div class=" card-animate card shadow">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-0">my balance</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class=" text-gray">
                                        <span>+0.00%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-end justify-content-between mt-4"><div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    <span class="counter-value" data-target="559.25"><span>$165.89K</span></span></h4>
                                <a class="text-decoration-underline text-black" href="/">Withdraw money</a>
                            </div>
                                <div className='px-3 py-2 text-secondary wallet'>
                                    <FontAwesomeIcon icon={faWallet} />
                                </div>
                            </div></div></div></div>

            </div>
            <div className='row mt-4'>
                <div className='col-xl-8'>
                    <div className='card shadow'>
                        <div className='border-0 align-items-center d-flex card-header'>
                            <h5 className='card-title mb-0 flex-grow-1'>Revenue</h5>
                            <div className='d-flex gap-1'>
                                <button type="button" className="btn btn-sm bag text-primary">ALL</button>
                                <button type="button" className="btn btn-sm bag text-primary">1M</button>
                                <button type="button" className="btn btn-sm bag text-primary">1M</button>
                                <button type="button" className="btn btn-sm wallet">1Y</button>
                            </div>
                        </div>
                        <div className='p-0 border-0 bg-light-subtle card-header'>
                            <div className='g-0 text-center row'>
                                <div className='col-6 col-sm-3 border-dashed '>
                                    <div className='p-3 '>
                                        <h5 className='mb-1'><span>7,585</span></h5>
                                        <p class="text-muted mb-0">Orders</p>
                                    </div>
                                </div>
                                <div className='col-6 col-sm-3  border-dashed'>
                                    <div className='p-3  '>
                                        <h5 className='mb-1'><span>$22.89k</span></h5>
                                        <p class="text-muted mb-0">Earnings</p>
                                    </div>
                                </div>
                                <div className='col-6 col-sm-3 border-dashed '>
                                    <div className='p-3   '>
                                        <h5 className='mb-1'><span>367</span></h5>
                                        <p class="text-muted mb-0">Refunds</p>
                                    </div>
                                </div>
                                <div className='col-6 col-sm-3 border-dashed'>
                                    <div className='p-3   '>
                                        <h5 className='mb-1'><span>18.92%</span></h5>
                                        <p class="text-muted mb-0">Conversation Ratio</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='p-0 pb-2 card-body'>
                            <div className='w-100'>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 '>
                    <div className='card-height-100 card shadow'>
                        <div className='align-items-center d-flex card-header'>
                            <h5 class="card-title mb-0 flex-grow-1">Sales by Locations</h5>
                            <div className='flex-shrink-0'>
                                <button type="button" class="btn wallet btn-sm">Export Report</button>
                            </div>
                        </div>
                        <div className='card-body'>
                            <MapChart />
                            <div className="px-2 py-2 my-2">
                                <p className="mb-1">Canada <span className="float-end">75%</span></p>
                                <div className="progress mt-2 " style={{ height: '6px' }}>
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" ></div>
                                </div>
                                <p className="mt-3 mb-1">Greenland <span className="float-end">47%</span></p>
                                <div className="progress mt-2" style={{ height: '6px' }}>
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '47%', height: '6px' }} aria-valuenow="47" aria-valuemin="0" aria-valuemax="47" ></div>
                                </div>
                                <p className="mt-3 mb-1">Russia <span className="float-end">82%</span></p>
                                <div className="progress mt-2" style={{ height: '6px' }}>
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" aria-valuenow="82" style={{ width: '82%', height: '6px' }} aria-valuemin="0" aria-valuemax="82" ></div>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-xl-6 '>
                    <div className='card shadow'>
                        <div className="justify-content-between d-flex card-header">
                            <h5 classname="card-title mb-0 flex-grow-1">Best Selling Products</h5>
                            <div className="card-header-dropdown dropdown ">
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    className="text-reset"
                                    aria-expanded="false"
                                >
                                    <span className="fw-semibold text-uppercase fs-6 ">Sort by: </span>
                                    <span className="text-muted fs-6">
                                        Today
                                        <FontAwesomeIcon icon={faChevronDown} className='px-1' onClick={toggleDropdown} />
                                    </span>
                                </button>
                                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                    <ul className="flex-column ">
                                        <li className="dropdown-item">Subitem 1</li>
                                        <li className="dropdown-item">Subitem 2</li>
                                        <li className="dropdown-item">Subitem 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='card-body '>
                            <div>
                                {itemsData.map((item) => (
                                    <div className='sellingDiv' key={item.id}>
                                        <div>
                                            <span className="d-flex align-items-center justify-content-around mb-2 selling-sub-text">
                                                <img className="sellingImg" src={item.imageUrl} alt="" />
                                                <span className="text-start ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.name}</span>
                                                    <span className=" d-xl-block ms-1 text-muted ">{item.date}</span>
                                                </span>
                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.price}</span>
                                                    <span className=" d-xl-block ms-1  text-muted ">Price</span>
                                                </span>
                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.orders}</span>
                                                    <span className=" d-xl-block ms-1  text-muted ">Orders</span>
                                                </span>
                                                {item.stock <= 0 ? (
                                                    <span className="text-start mx-2 ">
                                                        <span className=" d-xl-inline-block ms-1 fw-medium text-muted">
                                                            <button className='outof-btn'>Out of stock</button>
                                                        </span>
                                                        <span className=" d-xl-block ms-1  text-muted ">Stock</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-start mx-2 ">
                                                        <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.stock}</span>
                                                        <span className=" d-xl-block ms-1  text-muted ">Stock</span>
                                                    </span>
                                                )}
                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.amount}</span>
                                                    <span className=" d-xl-block ms-1  text-muted ">Amount</span>
                                                </span>
                                            </span>
                                        </div>
                                        <hr></hr>
                                    </div>
                                ))}
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 '>
                    <div className='card shadow'>
                        <div className="justify-content-between d-flex card-header">
                            <h5 classname="card-title mb-0 flex-grow-1">Top Sellers</h5>
                            <div className="card-header-dropdown dropdown ">
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    className="text-reset"
                                    aria-expanded="false"
                                >
                                    <span className="text-muted fs-6">
                                        Report
                                        <FontAwesomeIcon icon={faChevronDown} className='px-1' onClick={toggleDropdownReport} />
                                    </span>
                                </button>
                                <div className={`dropdown-menu ${dropdownOpenReport ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                    <ul className="flex-column ">
                                        <li className="dropdown-item">Subitem 1</li>
                                        <li className="dropdown-item">Subitem 2</li>
                                        <li className="dropdown-item">Subitem 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='card-body '>
                            <div>
                                {topSellingData.map((item) => (
                                    <div className='sellingDiv' key={item.id}>
                                        <div>
                                            <span className="d-flex align-items-center justify-content-around mb-2 selling-sub-text">
                                                <img className="sellingImg" src={item.imageUrl} alt="" />
                                                <span className="text-start ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.name}</span>
                                                    <span className=" d-xl-block ms-1 text-muted ">{item.brand}</span>
                                                </span>
                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-block ms-1  text-muted ">{item.product}</span>
                                                </span>

                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-inline-block ms-1 fw-medium text-muted">{item.stock}</span>
                                                    <span className=" d-xl-block ms-1  text-muted ">Stock</span>
                                                </span>
                                                <span className="text-start mx-2 ">
                                                    <span className=" d-xl-block ms-1  text-muted ">{item.amount}</span>
                                                </span>
                                                <span className="text-start mx-2  d-flex">
                                                    <span className=" d-xl-block ms-1 fw-medium text-muted">{item.percent}</span>
                                                    <FontAwesomeIcon icon={faChartBar} className="text-success fs-16 align-middle ms-2 " />
                                                </span>
                                            </span>
                                        </div>
                                        <hr></hr>
                                    </div>
                                ))}
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row mt-4'>
                    <div className='col-xl-4 '>
                        <div className=' card shadow'>
                            <div className='align-items-center d-flex card-header justify-content-between'>
                                <h5 classname="card-title mb-0 flex-grow-1">Store Visits by Source</h5>
                                <div className="card-header-dropdown dropdown ">
                                    <button
                                        type="button"
                                        aria-haspopup="true"
                                        className="text-reset"
                                        aria-expanded="false"
                                    >
                                        <span className="text-muted fs-6">
                                            Report
                                            <FontAwesomeIcon icon={faChevronDown} className='px-1' onClick={toggleDropdownPie} />
                                        </span>
                                        <div className={`dropdown-menu ${dropdownOpenPie ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                            <ul className="flex-column ">
                                                <li className="dropdown-item">Subitem 1</li>
                                                <li className="dropdown-item">Subitem 2</li>
                                                <li className="dropdown-item">Subitem 3</li>
                                            </ul>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='card-body'>
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-8 p-0'>
                        <div className='card '>
                            <div className='border-0 align-items-center d-flex card-header'>
                                <h5 className='card-title mb-0 flex-grow-1'>Recent Orders</h5>
                                <div className='d-flex gap-1'>
                                    <button type="button" className="btn btn-sm bag text-primary">
                                        <FontAwesomeIcon icon={faFileSignature} />
                                        <span>  Generate Reports</span></button>
                                </div>
                            </div>

                            <div className='p-0 border-0 bg-light-subtle card-header'>
                                <div className='g-0  row'>
                                    <table className='table'>
                                        <thead >
                                            <tr >
                                                <th>Order ID</th>
                                                <th>Customer</th>
                                                <th>Product</th>
                                                <th>Amount</th>
                                                <th>Vendor</th>
                                                <th>Status</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order.id} className='p-2' >
                                                    <td>{order.id}</td>
                                                    <td>  <div className="d-flex align-items-center">
                                                        {order.img && (
                                                            <img src={order.img.src} alt={order.img.alt} className="rounded-circle header-profile-user " />
                                                        )}
                                                        <span className="ms-2">{order.customer}</span>
                                                    </div></td>
                                                    <td>{order.product}</td>
                                                    <td>{order.amount}</td>
                                                    <td>{order.vendor}</td>
                                                    <td>{order.status}</td>
                                                    <td>{order.rating}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}
