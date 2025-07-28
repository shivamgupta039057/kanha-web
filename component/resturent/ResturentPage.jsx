import React from 'react'
import Testimonials from '../home/Testimonials/Testimonials'
import SubHeader from '@/utils/SubHeader'

const ResturentPage = () => {
  return (
    <>
       <SubHeader title="The Restaurant" subtitle="AN EXPERIENCE FOR THE SENSE" rating="5" />
      <section className="hotel-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="stars">
                <div className="hotel-p">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident.
                  </p>
                </div>
                <div className="hotel-topic">
                  <h6>Hours</h6>
                  <ul className="list" style={{ margin: '30px' }}>
                    <li>
                      <div className="list-icon">
                        <i className="fa-thin fa-clock"></i>
                      </div>
                      <div className="list-text">
                        <p>Breakfast: 6.30 am – 11.00 am (daily)</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        <i className="fa-thin fa-clock"></i>
                      </div>
                      <div className="list-text">
                        <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        <i className="fa-thin fa-clock"></i>
                      </div>
                      <div className="list-text">
                        <p>Dinner: open from 7.30 pm, last order at 12.00 pm (daily)</p>
                      </div>
                    </li>
                  </ul>
                  <h6>Dress Code</h6>
                  <p> casual ( shorts Allowed , Bigini Allowed or Aesthetic Shoes  permitted )</p>
                  <h6>Terrace</h6>
                  <p>Open for Smooking only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="work-area bg-lght"
        id="work-area"
        style={{ backgroundColor: '#222' }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="section-heading mb-3">
              <h3
                className="text-custom-black mb-0"
                style={{ color: '#fff', textAlign: 'center' }}
              >
                LUXURY HOTEL
              </h3>
              <span style={{ color: '#fff' }}>Restaurant Menu</span>
            </div>
          </div>
          <div className="tabs mt-5">
            <ul className="tabs-list">
              <li className="active">
                <a href="#tab1">Starters</a>
              </li>
              <li>
                <a href="#tab2">Mains</a>
              </li>
              <li>
                <a href="#tab3">Salads</a>
              </li>
              <li>
                <a href="#tab4">Wine</a>
              </li>
            </ul>
            <div id="tab1" className="tab active">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Greek Salad <span>$50</span>
                      </h5>
                    </div>
                    <p>
                      Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
                    </p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Lasagne <span>$199</span>
                      </h5>
                    </div>
                    <p>
                      Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                    </p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Butternut Pumpkin<span>$89</span>
                      </h5>
                    </div>
                    <p>
                      Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Tokusen Wagyu <span>$27</span>
                      </h5>
                    </div>
                    <p>
                      Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                    </p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Olivas Rellenas<span>$40</span>
                      </h5>
                    </div>
                    <p>
                      Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
                    </p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Opu Fish<span>$28</span>
                      </h5>
                    </div>
                    <p>
                      Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab2" className="tab">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Rusty's Burgur <span>$33</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Cajun Fish Steak <span>$380</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Southern Fried Chicken <span>$98</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Crab Cake<span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Baby Back Ribs <span>$34</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Smokehouse Combo <span>$54</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab3" className="tab">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Ceaser Salad <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Waldorf Salad <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Quinoa & Avocado Salad<span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Grilled Salmon Salad <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Chicken Cobb Salad <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Salad Chicken <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab4" className="tab">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Château d'Yquem 2011 <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Alvear Cream NV <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Chateau D'yquem 1990<span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        La Grande Année 2007 <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Sine Qua Non 2012 <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        W.S. Keyes Winery 2006 <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab5" className="tab">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Egg Benedict <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Texas Benedict <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Rusty’s Omlette <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Salmon Bagel <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Breakfast Bagel <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Rusty’s Pancake <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab6" className="tab">
              <div className="row">
                <div className="col-lg-5">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Bourbon Pecan Pie <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        New York Cheesecake <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Mozzarella Dippers <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
                <div className="col-lg-5 offeerr">
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Mozzarella Dippers <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Mozzarella Dippers <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                  <div className="main-class mt-5">
                    <div className="main-h5">
                      <h5>
                        Mozzarella Dippers <span>$27</span>
                      </h5>
                    </div>
                    <p>Fried mozzarella sticks, marinara sauce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default ResturentPage