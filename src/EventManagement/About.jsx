import { Paper } from "@mui/material";

export default function About() {
  return (
    <div
      style={{ marginLeft: "300px", marginRight: "300px", lineHeight: "1.8" }}
    >
      <h3
        style={{
          fontWeight: "bold",
          fontSize: "90px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        EVENTSHUB!!
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D')",
          }}
          elevation={4}
        >
          Just a Click To Book It!
        </Paper>
      </div>
      <div className="aText">
        It can be tough to stand out from the crowd as an event planner. There
        are plenty of individuals and companies in your area that know the lay
        of the land and can plan a great event. So how can you show potential
        clients that your events are a cut above the rest? One powerful way is
        with top-tier event planner website design.
        <br></br>Think of your website as your digital storefront, business
        card, and sales presentation rolled into one. A great website shows off
        your best work, targets your perfect audience, and tells a story about
        you and your business.
        <br></br>With that being the case, we gathered some of the industry’s
        top examples of event planner website design. Take inspiration from each
        planner and company listed below and find out what makes their websites
        stand out above the competition.
      </div>
      <ol type="none">
        <li style={{ fontWeight: "bold", fontSize: "50px" }}>
          {" "}
          Brilliant Event Planning
        </li>
        <div className="aText">
          Brilliant Event Planning specializes in planning weddings and events
          in tents, private homes, and raw spaces. Their website does a great
          job of telling the team’s story and making their vision clear. By
          providing a short description of the effortless elegance of their
          weddings, Brilliant Event Planning gives their potential clients a
          clear vision of what to expect. This section also has a prominent call
          to action button directing visitors to their wedding portfolio so that
          they can see more examples of effortless elegance in action.
        </div>{" "}
        <br></br>
        <br></br>
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://socialtables.wpenginepowered.com/wp-content/uploads/2021/02/Brilliant_team-min-1024x567.png')",
          }}
          elevation={4}
        ></Paper>
        <li style={{ fontWeight: "bold", fontSize: "50px" }}>
          Awful Creativity
        </li>
        <div className="aText">
          Sometimes, an event can be creatively awful in a good way by choosing
          a theme that is unexpected or unconventional. Creativity can manifest
          in event decor that goes against the traditional norms. This might
          include unusual color combinations, unconventional materials, or decor
          that intentionally clashes to create a memorable and thought-provoking
          atmosphere.
        </div>
        <br></br>
        <br></br>
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://socialtables.wpenginepowered.com/wp-content/uploads/2021/02/MandyMarie_home-min-1024x545.png')",
          }}
          elevation={4}
        ></Paper>
        <li style={{ fontWeight: "bold", fontSize: "50px" }}>Easy Booking</li>
        <div className="aText">
          Experience the simplicity of event booking with our user-friendly
          platform! Discover a seamless and easy way to secure your spot at
          exciting events. From concerts to conferences, our intuitive booking
          process ensures that you can effortlessly reserve your tickets or
          slots in just a few clicks. Say goodbye to complexity and hello to
          hassle-free event booking, designed for your convenience.
        </div>{" "}
        <br></br>
        <br></br>
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506485338023-6ce5f36692df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D')",
          }}
          elevation={4}
        ></Paper>
        <li style={{ fontWeight: "bold", fontSize: "50px" }}>
          Client-Satisfaction
        </li>
        <div className="aText">
          client satisfaction is not just a goal; it's our unwavering
          commitment. Our dedicated team strives to exceed expectations,
          ensuring that every event is a seamless and unforgettable experience.
          From meticulous planning to flawless execution, we prioritize your
          vision and needs, making client satisfaction the heartbeat of our
          service. Your joy is our success, and we take pride in crafting events
          that leave lasting impressions. Choose EventsHub for an unparalleled
          commitment to excellence and a celebration of your unique moments.
        </div>{" "}
        <br></br>
        <br></br>
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://imageio.forbes.com/specials-images/imageserve/61410e1e51f94faa2a7979ce/A-woman-and-a-man-sit-side-by-side-smiling-at-another-woman-holding-a-tablet-/960x0.jpg?format=jpg&width=960')",
          }}
          elevation={4}
        ></Paper>
        <li style={{ fontWeight: "bold", fontSize: "50px" }}>Special-Offers</li>
        <div className="aText">
          Step into a world of charm with our exclusive Village Theme Events!
          Embrace the rustic allure of a countryside setting with our special
          offers designed to transform your event into a memorable
          village-inspired experience. Enjoy discounted packages that include
          authentic décor, traditional entertainment, and personalized touches
          that capture the spirit of rural living. From quaint market stalls to
          lively folk performances, our special offers bring the warmth and
          authenticity of a village celebration to your event. Book now to
          unlock these enchanting deals and turn your occasion into a rustic
          retreat like no other.
        </div>{" "}
        <br></br>
        <br></br>
        <Paper
          className="aPaper"
          style={{
            backgroundImage:
              "url('https://3.bp.blogspot.com/-gVNcaWbA9YU/UtzuN8y0p0I/AAAAAAAAAHM/nFJ5rfPy82A/s1600/1382203845_558061936_8-3d-Birthday-decorations-in-hyd-.jpg')",
          }}
          elevation={4}
        ></Paper>
      </ol>
    </div>
  );
}