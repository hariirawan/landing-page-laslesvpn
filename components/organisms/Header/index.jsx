function Header() {
  return (
    <div>
      <section className="bg-white pb-28">
        <div className="container mx-auto max-w-screen-lg space-y-28 ">
          <div className="grid md:grid-cols-12 items-center py-5">
            <div className="col-span-3   flex space-x-2">
              <div>Landify</div>
            </div>
            <div className="col-span-6  border-blue-500 text-gray-800">
              <ul className="flex flex-col md:space-x-4 md:flex-row">
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div className="col-span-3 space-x-2 flex justify-end flex-col md:flex-row ">
              <button className="px-5 py-1 rounded-md">Login</button>
              <button className="border border-red-600 text-red-600 px-5 py-1 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 space-y-4">
              <div className="text-4xl font-bold">
                Want anything to be
                <br />
                easy with LaslesVPN.
              </div>
              <div>
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </div>
              <button className="bg-red-500 py-2 px-10 shadow-2xl text-white rounded-lg">
                Get Started
              </button>
            </div>
            <div className="col-span-6">
              <img src="images/Illustration.png" />
            </div>
          </div>

          <div className="grid grid-cols-3 py-6 shadow-2xl rounded-lg">
            <MainSkill
              icon="images/icons/users.png"
              label="Users"
              count="90+"
            />
            <MainSkill
              icon="images/icons/location.png"
              label="Locaticon"
              count="30+"
            />
            <MainSkill
              icon="images/icons/server.png"
              label="Servers"
              count="30+"
            />
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <img
                src="images/illustration2.png"
                alt="ilustration 2"
                className="h-80"
              />
            </div>
            <div className="col-span-6 col-start-8 space-y-5">
              <h3 className="text-3xl font-bold">
                We Provide Many Features You Can Use
              </h3>
              <br />
              <span className="text-sm">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </span>
              <div>
                <ul className="space-y-4">
                  <ListItem
                    icon="images/icons/done-check.png"
                    label="Powerfull online protection."
                  />
                  <ListItem
                    icon="images/icons/done-check.png"
                    label="Internet without borders."
                  />
                  <ListItem
                    icon="images/icons/done-check.png"
                    label="Supercharged VPN"
                  />
                  <ListItem
                    icon="images/icons/done-check.png"
                    label="No specific time limits."
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 space-y-20 py-20 ">
        <div className="container mx-auto max-w-screen-lg space-y-20 ">
          <div className="flex items-center flex-col space-y-4 ">
            <h3 className="text-2xl font-bold">Choose Your Plan</h3>
            <h5 className="w-2/6 text-center">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </h5>
          </div>
          <div className="grid grid-cols-3 gap-5 ">
            <CardPlan />
            <CardPlan />
            <CardPlan />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 space-y-20 py-20">
        <div className="container mx-auto max-w-screen-lg space-y-20 ">
          <div className="grid-cols-12">
            <div className="col-span-4">
              <h1 className="text-2xl font-bold">Hari Irawan</h1>
              <span>
                LaslesVPN is a private virtual network that
                <br /> has unique features and has high security.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MainSkill({ icon, label, count }) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="bg-red-50 p-2 rounded-full">
        <img src={icon} alt="user icon" className="w-8 h-8 " />
      </div>
      <div>
        <h5 className="text-2xl m-0 p-0">{count}</h5>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

function ListItem({ icon, label }) {
  return (
    <li className="flex space-x-2 items-center">
      <img src={icon} alt="done-check" className="w-6" />
      <span className="text-sm ">{label}</span>
    </li>
  );
}

function CardPlan() {
  return (
    <div className="bg-white w-full border border-gray-300 py-6 px-14 rounded-md">
      <div className="flex flex-col items-center mt-14 space-y-3 mb-4">
        <img src="images/Free.png" alt="free" className="w-28" />
        <h6 className="text-lg ">Free Plane</h6>
      </div>
      <ul className="space-y-3 mb-20">
        <ListItem icon="images/icons/check.png" label="Unlimited Bandwitch" />
        <ListItem icon="images/icons/check.png" label="Encrypted Connection" />
        <ListItem icon="images/icons/check.png" label="No Traffic Logs" />
        <ListItem icon="images/icons/check.png" label="Works on All Devices" />
      </ul>
      <div className="flex flex-col text-center space-y-4">
        <h1>Free</h1>
        <button className="border border-red-500 mx-10 rounded-full py-1 text-red-500 focus:outline-none">
          Select
        </button>
      </div>
    </div>
  );
}

export default Header;
